package com.cacheflowe.draw.newviz;

import java.util.HashMap;

import com.haxademic.core.app.P;
import com.haxademic.core.app.PAppletHax;
import com.haxademic.core.data.store.AppState;
import com.haxademic.core.data.store.IAppStoreListener;
import com.haxademic.core.debug.DebugView;
import com.haxademic.core.draw.context.PG;
import com.haxademic.core.draw.context.PShaderHotSwap;
import com.haxademic.core.draw.cv.BufferThresholdMonitor;
import com.haxademic.core.draw.filters.pshader.BlendTowardsTexture;
import com.haxademic.core.draw.filters.pshader.BlurProcessingFilter;
import com.haxademic.core.draw.filters.pshader.BrightnessStepFilter;
import com.haxademic.core.draw.filters.pshader.FXAAFilter;
import com.haxademic.core.draw.filters.pshader.FakeLightingFilter;
import com.haxademic.core.draw.filters.pshader.InvertFilter;
import com.haxademic.core.draw.filters.pshader.LeaveWhiteFilter;
import com.haxademic.core.draw.filters.pshader.RotateFilter;
import com.haxademic.core.draw.filters.pshader.ThresholdFilter;
import com.haxademic.core.draw.filters.pshader.compound.ReactionDiffusionStepFilter;
import com.haxademic.core.draw.image.ImageUtil;
import com.haxademic.core.file.FileUtil;
import com.haxademic.core.hardware.keyboard.KeyboardState;
import com.haxademic.core.math.MathUtil;
import com.haxademic.core.math.easing.LinearFloat;
import com.haxademic.core.ui.UI;

import processing.core.PGraphics;
import processing.core.PImage;
import processing.data.JSONObject;

public class NewViz 
implements IAppStoreListener {

  protected PAppletHax p;
  protected PGraphics pg;

  protected PGraphics pgSim;
  protected PGraphics pgSimLerp;
  protected PGraphics pgSimFinal;
  protected PGraphics pgLightMap;
  
  protected PImage windowMask;
  protected PGraphics windowMaskInv;
  protected PGraphics pgJFA;
  protected PGraphics pgJFAOutline;

  protected PShaderHotSwap shaderJFA;
  protected PShaderHotSwap shaderJfaRadial;
  protected PShaderHotSwap shaderJfaOutline;
  protected float jfaOffset = 0;

  protected HashMap<String, PennerFloat> params = new HashMap<String, PennerFloat>();
  protected String SIM_ITERS = "SIM_ITERS";
  protected String SIM_BLUR_STEPS = "SIM_BLUR_STEPS";
  protected String SIM_BLUR_AMP = "SIM_BLUR_AMP";
  protected String SIM_BLUR_ASPECT = "SIM_BLUR_ASPECT";
  protected String SIM_SHARP_MULT = "SIM_SHARP_MULT";
  protected String SIM_ZOOM = "SIM_ZOOM";
  protected String SIM_ROT = "SIM_ROT";
  protected String SIM_OFFSET_X = "SIM_OFFSET_X";
  protected String SIM_OFFSET_Y = "SIM_OFFSET_Y";
  protected String SIM_DARK_STEP = "SIM_DARK_STEP";
  protected String JFA_BLEND = "JFA_BLEND";
  protected String JFA_OFFSET_SPEED = "JFA_OFFSET_SPEED";
  protected String JFA_FREQ = "JFA_FREQ";

  protected String SLIDERS_OVERRIDE = "SLIDERS_OVERRIDE";

  protected String[] configs = new String[0];
  protected String[] smallConfigs = new String[0];
  protected String[] jfaConfigs = new String[0];

  protected BufferThresholdMonitor bufferThresholdMonitor;
  protected float clearFix = 0;
  protected boolean shouldClear = false;
  protected final int SEED_MODE_RANDOM = 0; 
  protected final int SEED_MODE_OUTLINE = 1; 
  protected int seedMode = SEED_MODE_RANDOM;
  protected LinearFloat clearDarken = new LinearFloat(0, 0.01f);
  
  public NewViz() {
    p = (PAppletHax) P.p;
    pg = p.pg;
    P.store.addListener(this);
    init();
  }
  
  ////////////////////////////////////
  // Init 
  ////////////////////////////////////
  
  protected void init() {
    buildBuffers();
    reloadConfigs();
    buildMasks();
    buildUI();
  }

  protected void buildBuffers() {
    pgSim = PG.newPG(pg.width, pg.height, true, false);
    pgSimLerp = PG.newPG(pg.width, pg.height, true, false);
    pgSimFinal = PG.newPG(pg.width, pg.height, true, false);
    pgJFA = PG.newDataPG(pg.width / 5, pg.height / 5);
    pgJFAOutline = PG.newDataPG(pg.width / 2, pg.height / 2);
    pgLightMap = PG.newPG(pg.width / 4, pg.height / 4, true, false);
    bufferThresholdMonitor = new BufferThresholdMonitor(16, 16, 20);

    DebugView.setTexture("pgSim", pgSim);
    DebugView.setTexture("pgJFA", pgJFA);
    DebugView.setTexture("pgJFAOutline", pgJFAOutline);
    DebugView.setTexture("pgLightMap", pgLightMap);
  }

  protected void buildMasks() {
    windowMask = P.getImage("images/window-map.png");
    // inverted/opaque copy to start JFA
    windowMaskInv = ImageUtil.imageToGraphics(windowMask);
    windowMaskInv.beginDraw();
    windowMaskInv.background(255);
    windowMaskInv.image(windowMask, 0, 0);
    windowMaskInv.endDraw();
    InvertFilter.instance().applyTo(windowMaskInv);
    DebugView.setTexture("windowMaskInv", windowMaskInv);
    // load shader
    shaderJFA = new PShaderHotSwap(FileUtil.getPath("haxademic/shaders/filters/jump-flood.glsl"));
    shaderJfaRadial = new PShaderHotSwap(FileUtil.getPath("haxademic/shaders/filters/colorize-bw-osc.glsl"));
    shaderJfaOutline = new PShaderHotSwap(FileUtil.getPath("haxademic/shaders/filters/colorize-jfa-outline.glsl"));
  }

  protected void buildUI() {
    UI.addTitle("NewViz");
    UI.addToggle(SLIDERS_OVERRIDE, false, false);
    UI.addSlider(SIM_ITERS, 2, 1, 5, 1, false);                             params.put(SIM_ITERS, new PennerFloat(2));
    UI.addSlider(SIM_BLUR_STEPS, 3, 2, 5, 1, false);                        params.put(SIM_BLUR_STEPS, new PennerFloat(3));
    UI.addSlider(SIM_BLUR_AMP, 2f, 0.4f, 5f, 0.01f, false);                 params.put(SIM_BLUR_AMP, new PennerFloat(2));
    UI.addSlider(SIM_BLUR_ASPECT, 1, 0.6f, 1.4f, 0.01f, false);             params.put(SIM_BLUR_ASPECT, new PennerFloat(1));
    UI.addSlider(SIM_SHARP_MULT, 2.5f, 1.5f, 4f, 0.01f, false);             params.put(SIM_SHARP_MULT, new PennerFloat(2.5f));
    UI.addSlider(SIM_ZOOM, 1, 0.999f, 1.001f, 0.0001f, false);              params.put(SIM_ZOOM, new PennerFloat(1));
    UI.addSlider(SIM_ROT, 0, -0.001f, 0.001f, 0.0001f, false);              params.put(SIM_ROT, new PennerFloat());
    UI.addSlider(SIM_OFFSET_X, 0, -0.001f, 0.001f, 0.0001f, false);         params.put(SIM_OFFSET_X, new PennerFloat());
    UI.addSlider(SIM_OFFSET_Y, 0, -0.001f, 0.001f, 0.0001f, false);         params.put(SIM_OFFSET_Y, new PennerFloat());
    UI.addSlider(SIM_DARK_STEP, 0, -0.94f, 0, 0.001f, false);               params.put(SIM_DARK_STEP, new PennerFloat());
    UI.addSlider(JFA_BLEND, 0, 0, 1, 0.001f, false);                        params.put(JFA_BLEND, new PennerFloat());
    UI.addSlider(JFA_OFFSET_SPEED, -0.002f, -0.05f, 0.05f, 0.0001f, false); params.put(JFA_OFFSET_SPEED, new PennerFloat(-0.002f));
    UI.addSlider(JFA_FREQ, 10, 0, 150, 0.1f, false);                        params.put(JFA_FREQ, new PennerFloat(10));

    // UI.addTitle("Fake Lighting");
    // FakeLightingFilter.instance().buildUI("LIGHT", false);
  }

  // JFA steps -------------------------------------------

  protected void runJfaStep(PGraphics pg, float step) {
    shaderJFA.update();
    shaderJFA.shader().set("iter", (float) step);
    pg.filter(shaderJFA.shader());
  }

  protected void updateJFA() {
    shaderJFA.update();
    for (int i = 0; i < 15; i++) { // run through full JFA steps/sequence
      if (i == 0) ImageUtil.copyImage(windowMaskInv, pgJFA);
      runJfaStep(pgJFA, i);
    }

    // apply stripes shader to JFA result
    jfaOffset += valForKey(JFA_OFFSET_SPEED);
    shaderJfaRadial.update();
    shaderJfaRadial.shader().set("offset", jfaOffset);
    shaderJfaRadial.shader().set("freq", valForKey(JFA_FREQ));
    pgJFA.filter(shaderJfaRadial.shader());

    // copy black over windows
    ImageUtil.copyImage(windowMask, pgJFA);
  }

  protected void updateJFAWindowOutline() {
    if(p.frameCount > 10) return;

    // update window outline JFA for blank screen seeding
    shaderJFA.update();
    for (int i = 0; i < 15; i++) { // run through full JFA steps/sequence
      if (i == 0) ImageUtil.copyImage(windowMaskInv, pgJFAOutline);
      runJfaStep(pgJFAOutline, i);
    }

    // apply stripes shader to JFA result
    shaderJfaOutline.update();
    shaderJfaOutline.shader().set("targetLuma", 0.004f);
    shaderJfaOutline.shader().set("targetWidth", 0.005f);
    pgJFAOutline.filter(shaderJfaOutline.shader());

    // copy black over windows
    ImageUtil.copyImage(windowMask, pgJFAOutline);
  }

  // Simlulation steps -------------------------------------------

  protected void checkSimulationEmpty() {
    bufferThresholdMonitor.update(pgSim);
  }

  protected boolean tooDark() {
    DebugView.setValue("thresholdCalc()", bufferThresholdMonitor.thresholdCalc());
    return bufferThresholdMonitor.thresholdCalc() < 0.15f;
  }

  protected void simSeedIfTooDark() { // draw seed pixels, only use when needed (check for too much black)
    if (p.frameCount < 10 || tooDark()) {
      clearFix += 0.001f;
      if(seedMode == SEED_MODE_OUTLINE) {
        PG.setPImageAlpha(pgSim, 0.4f);
        LeaveWhiteFilter.instance().setOnContext(pgSim);
        pgSim.image(pgJFAOutline, 0, 0, pgSim.width, pgSim.height);
        pgSim.resetShader();
        PG.resetPImageAlpha(pgSim);
      } else {
        pgSim.fill(255);
        pgSim.rect(p.random(pgSim.width), p.random(pgSim.height), 10, 10);
      }
    }
  }

  protected void simClearIfNeeded() { // check for reset in case simulation is stuck
    if (shouldClear) {
      // darken lerp
      clearDarken.setInc(0.01f).setTarget(1);

      // set seed mode
      seedMode = SEED_MODE_RANDOM;
      if(MathUtil.randBooleanWeighted(0.5f)) seedMode = SEED_MODE_OUTLINE;

      // reset flags
      shouldClear = false;
    }

    clearDarken.update();
    if(clearDarken.value() == 1) clearDarken.setInc(0.03f).setTarget(0);

    if(clearDarken.value() > 0) {
      BrightnessStepFilter.instance().setBrightnessStep(-1 * clearDarken.value());
      BrightnessStepFilter.instance().applyTo(pgSim);
    }
  }

  protected void simOverlayWindowMask() {
    pgSim.image(windowMask, 0, 0);
  }

  protected void simDarknessStep() {
    DebugView.setValue("clearFix", clearFix);
    float darkenVal = valForKey(SIM_DARK_STEP) + clearFix;
    if(darkenVal > 0) darkenVal = 0;
    DebugView.setValue("darkenVal", darkenVal);
    BrightnessStepFilter.instance().setBrightnessStep(darkenVal);
    BrightnessStepFilter.instance().applyTo(pgSim);
  }

  protected void simBlendJfaBuffer() {
    PG.setPImageAlpha(pgSim, valForKey(JFA_BLEND));
    pgSim.image(pgJFA, 0, 0, pgSim.width, pgSim.height);
    PG.resetPImageAlpha(pgSim);
  }

  protected void simReactionDiffusionSteps() {
    float sharp = valForKey(SIM_BLUR_AMP) * intForKey(SIM_BLUR_STEPS) * valForKey(SIM_SHARP_MULT);
    ReactionDiffusionStepFilter.applyTo(pgSim, intForKey(SIM_ITERS), intForKey(SIM_BLUR_STEPS), valForKey(SIM_BLUR_AMP) * valForKey(SIM_BLUR_ASPECT), valForKey(SIM_BLUR_AMP), sharp, false, 0.8f, 0.5f);
  }

  protected void simRotateFilter() {
    // RotateFilter.instance().setZoom(1.001f);
    RotateFilter.instance().setZoom(valForKey(SIM_ZOOM));
    RotateFilter.instance().setRotation(valForKey(SIM_ROT));
    RotateFilter.instance().setOffset(valForKey(SIM_OFFSET_X), valForKey(SIM_OFFSET_Y));
    RotateFilter.instance().applyTo(pgSim);
  }

  protected void updateSimulation() {
    pgSim.beginDraw();
    if(p.frameCount<  5) pgSim.background(0);
    simSeedIfTooDark();
    simClearIfNeeded();
    simOverlayWindowMask();
    simBlendJfaBuffer();
    simDarknessStep();
    simReactionDiffusionSteps();
    simRotateFilter();
    pgSim.endDraw();
  }

  protected void lerpSimBuffer() {
    BlurProcessingFilter.instance().setBlurSize(4);
    BlurProcessingFilter.instance().setSigma(10);
    BlurProcessingFilter.instance().applyTo(pgSimFinal);

    BlendTowardsTexture.instance().setBlendLerp(0.1f);
    BlendTowardsTexture.instance().setSourceTexture(pgSim);
    BlendTowardsTexture.instance().applyTo(pgSimLerp);

    ImageUtil.copyImage(pgSimLerp, pgSimFinal);

    ThresholdFilter.instance().setCutoff(0.8f);
    ThresholdFilter.instance().setCrossfade(0.85f);
    ThresholdFilter.instance().applyTo(pgSimFinal);
  }

  // Post FX -------------------------------------------

  protected void drawLightMap() {
    pgLightMap.beginDraw();
    pgLightMap.background(0);
    pgLightMap.image(pgSim, 0, 0, pgLightMap.width, pgLightMap.height);
    pgLightMap.endDraw();
    BlurProcessingFilter.instance().setBlurSize(2);
    BlurProcessingFilter.instance().setSigma(4);
    BlurProcessingFilter.instance().applyTo(pgLightMap);
  }

  protected void addFakeLighting() {
    // FakeLightingFilter.instance().setPropsFromUI("LIGHT");
    FXAAFilter.instance().applyTo(pg);
    FakeLightingFilter.instance().setAmbient(2.2f);
    FakeLightingFilter.instance().setGradAmp(0.84f);
    FakeLightingFilter.instance().setGradBlur(5.0f);
    FakeLightingFilter.instance().setSpecAmp(2.0f);
    FakeLightingFilter.instance().setDiffDark(1.02f);
    FakeLightingFilter.instance().setMap(pgLightMap);
    FakeLightingFilter.instance().applyTo(pg);
  }

  protected void drawPre(int frameCount) {
    updateJFA();
    updateJFAWindowOutline();
    checkSimulationEmpty();
    updateSimulation();
    // lerpSimBuffer();
    drawLightMap();
  }

  protected void draw(int frameCount) {
    pg.beginDraw();
    pg.background(0);
    pg.image(pgSim, 0, 0);
    pg.endDraw();
    addFakeLighting();
  }

  // Interpolating values -------------------------------------------

  protected float valForKey(String key) {
    if(UI.valueToggle(SLIDERS_OVERRIDE)) return UI.value(key);
    return params.get(key).value();
  }

  protected int intForKey(String key) {
    if(UI.valueToggle(SLIDERS_OVERRIDE)) return UI.valueInt(key);
    return P.round(params.get(key).value());
  }

  protected void setInterpValues() {
    for (String key : params.keySet()) {
      params.get(key).target(UI.value(key));
    }
  }
  
  protected void updateInterpValues() {
    for (String key : params.keySet()) {
      params.get(key).update();
      DebugView.setValue(key, params.get(key).value());
    }
  }

  protected void reloadConfigs() {
    configs = new String[] {
        "{ \"SIM_ITERS\": 2.0, \"SIM_BLUR_STEPS\": 2.0, \"SIM_BLUR_AMP\": 0.69, \"SIM_BLUR_ASPECT\": 1.00, \"SIM_SHARP_MULT\": 2.40, \"SIM_ZOOM\": 1.0007, \"SIM_ROT\": 0.0, \"SIM_OFFSET_X\": 0.0, \"SIM_OFFSET_Y\": 0.0, \"SIM_DARK_STEP\": 0.0 }",
        "{ \"SIM_ITERS\": 2.0, \"SIM_BLUR_STEPS\": 3.0, \"SIM_BLUR_AMP\": 1.02, \"SIM_BLUR_ASPECT\": 0.98, \"SIM_SHARP_MULT\": 2.63, \"SIM_ZOOM\": 0.9995, \"SIM_ROT\": 0.0, \"SIM_OFFSET_X\": 9.999998E-5, \"SIM_OFFSET_Y\": 0.0, \"SIM_DARK_STEP\": 0.0 } ",
        "{ \"SIM_ITERS\": 2.0, \"SIM_BLUR_STEPS\": 4.0, \"SIM_BLUR_AMP\": 1.42, \"SIM_BLUR_ASPECT\": 1.06, \"SIM_SHARP_MULT\": 2.63, \"SIM_ZOOM\": 0.9996, \"SIM_ROT\": -1.4551915E-11, \"SIM_OFFSET_X\": -1.4551915E-11, \"SIM_OFFSET_Y\": 2.9999996E-4, \"SIM_DARK_STEP\": -0.77699995 } ",
        "{ \"SIM_ITERS\": 2.0, \"SIM_BLUR_STEPS\": 5.0, \"SIM_BLUR_AMP\": 0.73, \"SIM_BLUR_ASPECT\": 1.00, \"SIM_SHARP_MULT\": 2.61, \"SIM_ZOOM\": 1.0000, \"SIM_ROT\": 0.0, \"SIM_OFFSET_X\": -2.01E-4, \"SIM_OFFSET_Y\": 0.0, \"SIM_DARK_STEP\": -0.5999991 }",
        "{ \"SIM_ITERS\": 4.0, \"SIM_BLUR_STEPS\": 2.0, \"SIM_BLUR_AMP\": 1.11, \"SIM_BLUR_ASPECT\": 1.00, \"SIM_SHARP_MULT\": 2.61, \"SIM_ZOOM\": 1.0000, \"SIM_ROT\": 0.0, \"SIM_OFFSET_X\": -1.4551915E-11, \"SIM_OFFSET_Y\": -1.0E-4, \"SIM_DARK_STEP\": -0.8619967 }",
        "{ \"SIM_ITERS\": 4.0, \"SIM_BLUR_STEPS\": 3.0, \"SIM_BLUR_AMP\": 0.62, \"SIM_BLUR_ASPECT\": 1.37, \"SIM_SHARP_MULT\": 3.30, \"SIM_ZOOM\": 1.0004, \"SIM_ROT\": -4.5496505E-4, \"SIM_OFFSET_X\": -4.6539545E-4, \"SIM_OFFSET_Y\": 1.9370683E-4, \"SIM_DARK_STEP\": -0.9077146 } ",
        "{ \"SIM_ITERS\": 3.0, \"SIM_BLUR_STEPS\": 4.0, \"SIM_BLUR_AMP\": 0.56, \"SIM_BLUR_ASPECT\": 0.93, \"SIM_SHARP_MULT\": 1.50, \"SIM_ZOOM\": 0.9999, \"SIM_ROT\": 5.883663E-5, \"SIM_OFFSET_X\": 0, \"SIM_OFFSET_Y\": 0, \"SIM_DARK_STEP\": -0.76399297 }",
        "{ \"SIM_ITERS\": 2.0, \"SIM_BLUR_STEPS\": 3.0, \"SIM_BLUR_AMP\": 1.93, \"SIM_BLUR_ASPECT\": 0.91, \"SIM_SHARP_MULT\": 2.94, \"SIM_ZOOM\": 0.9992, \"SIM_ROT\": 1.0630682E-4, \"SIM_OFFSET_X\": 2.1827873E-11, \"SIM_OFFSET_Y\": 0.001, \"SIM_DARK_STEP\": -0.78 }",
        "{ \"SIM_ITERS\": 2.0, \"SIM_BLUR_STEPS\": 2.0, \"SIM_BLUR_AMP\": 0.68, \"SIM_BLUR_ASPECT\": 1.00, \"SIM_SHARP_MULT\": 2.61, \"SIM_ZOOM\": 0.9999, \"SIM_ROT\": 0.0, \"SIM_OFFSET_X\": -1.4551915E-11, \"SIM_OFFSET_Y\": 0.0, \"SIM_DARK_STEP\": -0.61099905 }",
        "{ \"SIM_ITERS\": 2.0, \"SIM_BLUR_STEPS\": 2.0, \"SIM_BLUR_AMP\": 3.00, \"SIM_BLUR_ASPECT\": 0.82, \"SIM_SHARP_MULT\": 4.00, \"SIM_ZOOM\": 1.0010, \"SIM_ROT\": 3.888734E-4, \"SIM_OFFSET_X\": 4.6562207E-5, \"SIM_OFFSET_Y\": 7.300421E-5, \"SIM_DARK_STEP\": 0.0 }",
        "{ \"SIM_ITERS\": 3.0, \"SIM_BLUR_STEPS\": 2.0, \"SIM_BLUR_AMP\": 2.70, \"SIM_BLUR_ASPECT\": 0.98, \"SIM_SHARP_MULT\": 2.00, \"SIM_ZOOM\": 0.9990, \"SIM_ROT\": -2.1827873E-11, \"SIM_OFFSET_X\": -1.0000001E-4, \"SIM_OFFSET_Y\": 4.471825E-4, \"SIM_DARK_STEP\": -0.5742351 }",
        "{ \"SIM_ITERS\": 4.0, \"SIM_BLUR_STEPS\": 2.0, \"SIM_BLUR_AMP\": 1.39, \"SIM_BLUR_ASPECT\": 0.62, \"SIM_SHARP_MULT\": 3.10, \"SIM_ZOOM\": 1.0001, \"SIM_ROT\": 8.9551706E-4, \"SIM_OFFSET_X\": 3.9397686E-4, \"SIM_OFFSET_Y\": -3.6471424E-4, \"SIM_DARK_STEP\": -0.53961796 }",
        "{ \"SIM_ITERS\": 4.0, \"SIM_BLUR_STEPS\": 3.0, \"SIM_BLUR_AMP\": 0.98, \"SIM_BLUR_ASPECT\": 0.73, \"SIM_SHARP_MULT\": 1.70, \"SIM_ZOOM\": 0.9998, \"SIM_ROT\": 6.922414E-5, \"SIM_OFFSET_X\": 1.15294126E-4, \"SIM_OFFSET_Y\": -8.6278334E-4, \"SIM_DARK_STEP\": -0.90052915 }",
        "{ \"SIM_ITERS\": 2.0, \"SIM_BLUR_STEPS\": 3.0, \"SIM_BLUR_AMP\": 1.02, \"SIM_BLUR_ASPECT\": 0.98, \"SIM_SHARP_MULT\": 2.63, \"SIM_ZOOM\": 0.9995, \"SIM_ROT\": 0.0, \"SIM_OFFSET_X\": 9.999998E-5, \"SIM_OFFSET_Y\": 0.0, \"SIM_DARK_STEP\": 0.0 }",
        "{ \"SIM_ITERS\": 3.0, \"SIM_BLUR_STEPS\": 2.0, \"SIM_BLUR_AMP\": 1.48, \"SIM_BLUR_ASPECT\": 0.98, \"SIM_SHARP_MULT\": 2.00, \"SIM_ZOOM\": 0.9990, \"SIM_ROT\": -2.1827873E-11, \"SIM_OFFSET_X\": -1.0000001E-4, \"SIM_OFFSET_Y\": 4.471825E-4, \"SIM_DARK_STEP\": -0.5742351 }",
        "{ \"SIM_ITERS\": 2.0, \"SIM_BLUR_STEPS\": 2.0, \"SIM_BLUR_AMP\": 1.34, \"SIM_BLUR_ASPECT\": 1.06, \"SIM_SHARP_MULT\": 2.76, \"SIM_ZOOM\": 1.0004, \"SIM_ROT\": 1.3251486E-4, \"SIM_OFFSET_X\": 8.466928E-4, \"SIM_OFFSET_Y\": 2.3734057E-5, \"SIM_DARK_STEP\": -0.02761221 }",
        "{ \"SIM_ITERS\": 3.0, \"SIM_BLUR_STEPS\": 2.0, \"SIM_BLUR_AMP\": 1.25, \"SIM_BLUR_ASPECT\": 1.02, \"SIM_SHARP_MULT\": 3.37, \"SIM_ZOOM\": 1.0002, \"SIM_ROT\": -5.820766E-11, \"SIM_OFFSET_X\": -1.4551915E-11, \"SIM_OFFSET_Y\": -1.4551915E-11, \"SIM_DARK_STEP\": -0.6000013 }",
        "{ \"SIM_ITERS\": 2.0, \"SIM_BLUR_STEPS\": 3.0, \"SIM_BLUR_AMP\": 0.67999977, \"SIM_BLUR_ASPECT\": 0.63919735, \"SIM_SHARP_MULT\": 2.1581335, \"SIM_ZOOM\": 0.9999999, \"SIM_ROT\": 1.0137912E-5, \"SIM_OFFSET_X\": -1.4551915E-11, \"SIM_OFFSET_Y\": -2.910383E-11, \"SIM_DARK_STEP\": -0.3238895 }",
        "{ \"SIM_ITERS\": 3.0, \"SIM_BLUR_STEPS\": 2.0, \"SIM_BLUR_AMP\": 0.60848767, \"SIM_BLUR_ASPECT\": 0.97857517, \"SIM_SHARP_MULT\": 1.8327535, \"SIM_ZOOM\": 0.9993921, \"SIM_ROT\": -0.001, \"SIM_OFFSET_X\": -3.7238095E-4, \"SIM_OFFSET_Y\": 6.9019E-4, \"SIM_DARK_STEP\": -0.39264134 }",
        "{ \"SIM_ITERS\": 3.0, \"SIM_BLUR_STEPS\": 4.0, \"SIM_BLUR_AMP\": 0.56, \"SIM_BLUR_ASPECT\": 0.93, \"SIM_SHARP_MULT\": 1.5, \"SIM_ZOOM\": 0.9999813, \"SIM_ROT\": 5.883663E-5, \"SIM_OFFSET_X\": 0.0, \"SIM_OFFSET_Y\": 0.0, \"SIM_DARK_STEP\": -0.76399297 }",
        "{ \"SIM_ITERS\": 2.3216527, \"SIM_BLUR_STEPS\": 2.059724, \"SIM_BLUR_AMP\": 2.3889976, \"SIM_BLUR_ASPECT\": 0.7292851, \"SIM_SHARP_MULT\": 2.9590335, \"SIM_ZOOM\": 1.0004464, \"SIM_ROT\": -1.6568607E-4, \"SIM_OFFSET_X\": 9.76574E-4, \"SIM_OFFSET_Y\": 1.7194415E-4, \"SIM_DARK_STEP\": -0.7947496 }",
    };
    smallConfigs = new String[] {
        "{ \"SIM_ZOOM\": 1.0, \"SIM_ROT\": 0.0, \"SIM_OFFSET_X\": 0.0, \"SIM_OFFSET_Y\": 0.0 }",
        "{ \"SIM_ZOOM\": 1.00005, \"SIM_ROT\": 0.0, \"SIM_OFFSET_X\": 0.0, \"SIM_OFFSET_Y\": 0.0 }",
        "{ \"SIM_ZOOM\": 0.99995, \"SIM_ROT\": 0.0, \"SIM_OFFSET_X\": 0.0, \"SIM_OFFSET_Y\": 0.0 }",
        "{ \"SIM_ZOOM\": 1.0, \"SIM_ROT\": 0.0, \"SIM_OFFSET_X\": 0.0, \"SIM_OFFSET_Y\": 0.001 }",
        "{ \"SIM_ZOOM\": 1.0, \"SIM_ROT\": 0.0, \"SIM_OFFSET_X\": 0.0, \"SIM_OFFSET_Y\": -0.001 }",
    };
    jfaConfigs = new String[] {
        "{ \"SIM_DARK_STEP\": 0.0, \"JFA_BLEND\": 0.0, \"JFA_OFFSET_SPEED\": 0.0, \"JFA_FREQ\": 10.0 } ",
        "{ \"SIM_DARK_STEP\": -0.53, \"JFA_BLEND\": 0.55, \"JFA_OFFSET_SPEED\": -0.002, \"JFA_FREQ\": 10.0 } ",
        "{ \"SIM_DARK_STEP\": -0.89, \"JFA_BLEND\": 0.71, \"JFA_OFFSET_SPEED\": 0.015, \"JFA_FREQ\": 22.0 }",
        "{ \"SIM_DARK_STEP\": 0.0, \"JFA_BLEND\": 0.7, \"JFA_OFFSET_SPEED\": -0.033, \"JFA_FREQ\": 43.0 }",
        "{ \"SIM_DARK_STEP\": -0.30, \"JFA_BLEND\": 0.43, \"JFA_OFFSET_SPEED\": -0.028, \"JFA_FREQ\": 100.0 }",
        "{ \"SIM_DARK_STEP\": -0.78808206, \"JFA_BLEND\": 0.21500006, \"JFA_OFFSET_SPEED\": -0.03713968, \"JFA_FREQ\": 113.13665 }",
        "{ \"SIM_DARK_STEP\": -0.5742351, \"JFA_BLEND\": 0.21500006, \"JFA_OFFSET_SPEED\": -0.03713968, \"JFA_FREQ\": 113.13665 }",
        "{ \"SIM_DARK_STEP\": -0.02761221, \"JFA_BLEND\": 0.40843058, \"JFA_OFFSET_SPEED\": 0.020799996, \"JFA_FREQ\": 68.31168 }",
        "{ \"SIM_DARK_STEP\": -0.3238895, \"JFA_BLEND\": 0.547394, \"JFA_OFFSET_SPEED\": 0.02234212, \"JFA_FREQ\": 69.72605 }",
        "{ \"SIM_DARK_STEP\": -0.6639995, \"JFA_BLEND\": 0.71, \"JFA_OFFSET_SPEED\": 0.015, \"JFA_FREQ\": 22.0 }",
        "{ \"SIM_DARK_STEP\": -0.77259713, \"JFA_BLEND\": 0.5642529, \"JFA_OFFSET_SPEED\": 0.007552486, \"JFA_FREQ\": 58.196266 }",
        "{ \"SIM_DARK_STEP\": -0.45512536, \"JFA_BLEND\": 0.51575494, \"JFA_OFFSET_SPEED\": 9.4968826E-4, \"JFA_FREQ\": 58.012344 }",
        "{ \"SIM_DARK_STEP\": -0.5981451, \"JFA_BLEND\": 0.45055988, \"JFA_OFFSET_SPEED\": -0.040374443, \"JFA_FREQ\": 38.79103 }",
        "{ \"SIM_DARK_STEP\": -0.43557715, \"JFA_BLEND\": 0.9903603, \"JFA_OFFSET_SPEED\": -0.003426306, \"JFA_FREQ\": 17.16879 }",
    };
  }
  
  protected void loadConfig(String config) {
    UI.loadValuesFromJSON(JSONObject.parse(config));
    setInterpValues();
  }

  protected void loadRandomConfig(String[] configsCollection) {
    loadConfig(configsCollection[MathUtil.randIndex(configsCollection.length)]);
  }

  protected void automaticConfigSwitching() {
    if(UI.valueToggle(SLIDERS_OVERRIDE)) return;
    // switch configs on intervals
    if(p.frameCount % 900 == 0 || p.frameCount == 10) { // 15 seconds
      if(MathUtil.randBooleanWeighted(0.75f) || p.frameCount == 10) {
        loadRandomConfig(configs);
        clearFix = 0;
      } else {
        loadRandomConfig(smallConfigs);
      }
      if(MathUtil.randBooleanWeighted(0.35f)) {
        loadRandomConfig(jfaConfigs);
        clearFix = 0;
      } else {
        loadConfig(jfaConfigs[0]); // remove JFA effect
      }
      if(MathUtil.randBooleanWeighted(0.05f)) {
        shouldClear = true;
      }
    }
  }

  protected void drawPost(int frameCount) {
    automaticConfigSwitching();
    if(KeyboardState.keyTriggered('0')) P.out(UI.valuesToJSON(new String[] {}, true));
    if(KeyboardState.keyTriggered('1')) P.out(UI.valuesToJSON(new String[] {"SIM_ITERS", "SIM_BLUR_STEPS", "SIM_BLUR_AMP", "SIM_BLUR_ASPECT", "SIM_SHARP_MULT", "SIM_ZOOM", "SIM_ROT", "SIM_OFFSET_X", "SIM_OFFSET_Y", "SIM_DARK_STEP"}, true));
    if(KeyboardState.keyTriggered('2')) P.out(UI.valuesToJSON(new String[] {"SIM_DARK_STEP", "JFA_BLEND", "JFA_FREQ", "JFA_OFFSET_SPEED"}, true));
    if(KeyboardState.keyTriggered('3')) loadRandomConfig(configs);
    if(KeyboardState.keyTriggered('4')) loadRandomConfig(smallConfigs);
    if(KeyboardState.keyTriggered('5')) loadRandomConfig(jfaConfigs);
    if(KeyboardState.keyTriggered('-')) loadConfig(smallConfigs[MathUtil.randIndex(smallConfigs.length)]);
    if(KeyboardState.keyTriggered(' ')) shouldClear = true;
    if(KeyboardState.keyTriggered('r')) {
      UI.setRandomValue(SIM_ITERS);
      UI.setRandomValue(SIM_BLUR_STEPS);
      UI.setRandomValue(SIM_BLUR_AMP);
      UI.setRandomValue(SIM_BLUR_ASPECT);
      UI.setRandomValue(SIM_SHARP_MULT);
      UI.setRandomValue(SIM_ZOOM);
      UI.setRandomValue(SIM_ROT);
      UI.setRandomValue(SIM_OFFSET_X);
      UI.setRandomValue(SIM_OFFSET_Y);
      UI.setRandomValue(SIM_DARK_STEP);
      UI.setRandomValue(JFA_BLEND);
      UI.setRandomValue(JFA_FREQ);
      UI.setRandomValue(JFA_OFFSET_SPEED);

      // copy UI params to PennerFloat objects for slow interpolation
      setInterpValues();
      
      reloadConfigs();
    }
    if(KeyboardState.keyTriggered('t')) {
      UI.setRandomValue(SIM_DARK_STEP);
      UI.setRandomValue(JFA_BLEND);
      UI.setRandomValue(JFA_FREQ);
      UI.setRandomValue(JFA_OFFSET_SPEED);
      setInterpValues();
    }


    // always update PennerFloat objects
    updateInterpValues();
  }

  ////////////////////////////////////////////////////
  // AppStore listeners
  ////////////////////////////////////////////////////

  public void updatedNumber(String key, Number val) {
    // draw
    if(key.equals(AppState.ANIMATION_FRAME)) draw(val.intValue());
    if(key.equals(AppState.ANIMATION_FRAME_PRE)) drawPre(val.intValue());
    if(key.equals(AppState.ANIMATION_FRAME_POST)) drawPost(val.intValue());
  }
  public void updatedString(String key, String val) {}
  public void updatedBoolean(String key, Boolean val) {}
  public void updatedImage(String key, PImage val) {}
  public void updatedBuffer(String key, PGraphics val) {}

}
