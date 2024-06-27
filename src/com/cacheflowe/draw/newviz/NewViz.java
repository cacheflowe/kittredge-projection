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
import com.haxademic.core.draw.filters.pshader.BlurProcessingFilter;
import com.haxademic.core.draw.filters.pshader.BrightnessStepFilter;
import com.haxademic.core.draw.filters.pshader.FXAAFilter;
import com.haxademic.core.draw.filters.pshader.FakeLightingFilter;
import com.haxademic.core.draw.filters.pshader.InvertFilter;
import com.haxademic.core.draw.filters.pshader.RotateFilter;
import com.haxademic.core.draw.filters.pshader.compound.ReactionDiffusionStepFilter;
import com.haxademic.core.draw.image.ImageUtil;
import com.haxademic.core.file.FileUtil;
import com.haxademic.core.hardware.keyboard.KeyboardState;
import com.haxademic.core.math.MathUtil;
import com.haxademic.core.render.FrameLoop;
import com.haxademic.core.ui.UI;

import processing.core.PGraphics;
import processing.core.PImage;
import processing.data.JSONObject;

public class NewViz 
implements IAppStoreListener {

  protected PAppletHax p;
  protected PGraphics pgSim;
  protected PGraphics pgJFA;
  protected PGraphics pgLightMap;
  protected PGraphics pg;

  protected PImage windowMask;
  protected PGraphics windowMaskInv;
	protected PShaderHotSwap shader;
	protected PShaderHotSwap shaderFX;

  protected BufferThresholdMonitor bufferThresholdMonitor;

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

  protected String SLIDERS_OVERRIDE = "SLIDERS_OVERRIDE";

  protected String[] configs = new String[] {
    "{ \"SIM_ITERS\": 2.0, \"SIM_BLUR_STEPS\": 2.0, \"SIM_BLUR_AMP\": 0.69, \"SIM_BLUR_ASPECT\": 1.0, \"SIM_SHARP_MULT\": 2.4, \"SIM_ZOOM\": 1.0007001, \"SIM_ROT\": 0.0, \"SIM_OFFSET_X\": 0.0, \"SIM_OFFSET_Y\": 0.0, \"SIM_DARK_STEP\": 0.0 }",
    "{ \"SIM_ITERS\": 2.0, \"SIM_BLUR_STEPS\": 3.0, \"SIM_BLUR_AMP\": 1.02, \"SIM_BLUR_ASPECT\": 0.98, \"SIM_SHARP_MULT\": 2.63, \"SIM_ZOOM\": 0.99959993, \"SIM_ROT\": 0.0, \"SIM_OFFSET_X\": 9.999998E-5, \"SIM_OFFSET_Y\": 0.0, \"SIM_DARK_STEP\": 0.0 } ",
    "{ \"SIM_ITERS\": 2.0, \"SIM_BLUR_STEPS\": 4.0, \"SIM_BLUR_AMP\": 1.42, \"SIM_BLUR_ASPECT\": 1.06, \"SIM_SHARP_MULT\": 2.63, \"SIM_ZOOM\": 0.9996999, \"SIM_ROT\": -1.4551915E-11, \"SIM_OFFSET_X\": -1.4551915E-11, \"SIM_OFFSET_Y\": 2.9999996E-4, \"SIM_DARK_STEP\": -0.77699995 } ",
    "{ \"SIM_ITERS\": 2.0, \"SIM_BLUR_STEPS\": 5.0, \"SIM_BLUR_AMP\": 0.733, \"SIM_BLUR_ASPECT\": 1.0, \"SIM_SHARP_MULT\": 2.61, \"SIM_ZOOM\": 1.0, \"SIM_ROT\": 0.0, \"SIM_OFFSET_X\": -2.01E-4, \"SIM_OFFSET_Y\": 0.0, \"SIM_DARK_STEP\": -0.5999991 }",
    "{ \"SIM_ITERS\": 4.0, \"SIM_BLUR_STEPS\": 2.0, \"SIM_BLUR_AMP\": 1.11, \"SIM_BLUR_ASPECT\": 1.0, \"SIM_SHARP_MULT\": 2.61, \"SIM_ZOOM\": 1.0, \"SIM_ROT\": 0.0, \"SIM_OFFSET_X\": -1.4551915E-11, \"SIM_OFFSET_Y\": -1.0E-4, \"SIM_DARK_STEP\": -0.8619967 }",
    "{ \"SIM_ITERS\": 4.0, \"SIM_BLUR_STEPS\": 3.0, \"SIM_BLUR_AMP\": 0.6204417, \"SIM_BLUR_ASPECT\": 1.3779471, \"SIM_SHARP_MULT\": 3.3088832, \"SIM_ZOOM\": 1.0004886, \"SIM_ROT\": -4.5496505E-4, \"SIM_OFFSET_X\": -4.6539545E-4, \"SIM_OFFSET_Y\": 1.9370683E-4, \"SIM_DARK_STEP\": -0.9077146 } ",
    "{ \"SIM_ITERS\": 3.0, \"SIM_BLUR_STEPS\": 4.0, \"SIM_BLUR_AMP\": 0.5635791, \"SIM_BLUR_ASPECT\": 0.9393282, \"SIM_SHARP_MULT\": 1.5, \"SIM_ZOOM\": 0.9999813, \"SIM_ROT\": 5.883663E-5, \"SIM_OFFSET_X\": 0, \"SIM_OFFSET_Y\": 0, \"SIM_DARK_STEP\": -0.76399297 }",
    "{ \"SIM_ITERS\": 2.0, \"SIM_BLUR_STEPS\": 3.0, \"SIM_BLUR_AMP\": 1.93419, \"SIM_BLUR_ASPECT\": 0.91, \"SIM_SHARP_MULT\": 2.94111, \"SIM_ZOOM\": 0.99924177, \"SIM_ROT\": 1.0630682E-4, \"SIM_OFFSET_X\": 2.1827873E-11, \"SIM_OFFSET_Y\": 0.001, \"SIM_DARK_STEP\": -0.78 }",
    "{ \"SIM_ITERS\": 2.0, \"SIM_BLUR_STEPS\": 2.0, \"SIM_BLUR_AMP\": 0.68, \"SIM_BLUR_ASPECT\": 1.0, \"SIM_SHARP_MULT\": 2.61, \"SIM_ZOOM\": 0.9999, \"SIM_ROT\": 0.0, \"SIM_OFFSET_X\": -1.4551915E-11, \"SIM_OFFSET_Y\": 0.0, \"SIM_DARK_STEP\": -0.61099905 }",
  };
  protected String[] smallConfigs = new String[] {
    "{ \"SIM_ZOOM\": 1.0, \"SIM_ROT\": 0.0, \"SIM_OFFSET_X\": 0.0, \"SIM_OFFSET_Y\": 0.0 }",
    "{ \"SIM_ZOOM\": 1.00005, \"SIM_ROT\": 0.0, \"SIM_OFFSET_X\": 0.0, \"SIM_OFFSET_Y\": 0.0 }",
  };

  protected HashMap<String, PennerFloat> params = new HashMap<String, PennerFloat>();

  protected boolean shouldClear = false;
  
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
    pgSim = PG.newPG(pg.width, pg.height, true, false);
    pgJFA = PG.newDataPG(pg.width/5, pg.height/5);
    DebugView.setTexture("pgJFA", pgJFA);
    pgLightMap = PG.newPG(pg.width/4, pg.height/4, true, false);
    bufferThresholdMonitor = new BufferThresholdMonitor(16, 16, 20);
    buildMasks();
    buildUI();
  }

  protected void buildMasks() {
    windowMask = P.getImage("images/window-map.png");
    // iverted/opaque copy
    windowMaskInv = ImageUtil.imageToGraphics(windowMask);
    windowMaskInv.beginDraw();
    windowMaskInv.background(255);
    windowMaskInv.image(windowMask, 0, 0);
    windowMaskInv.endDraw();
    InvertFilter.instance().applyTo(windowMaskInv);
    DebugView.setTexture("windowMaskInv", windowMaskInv);
    // load shader
    shader = new PShaderHotSwap(FileUtil.getPath("haxademic/shaders/filters/jump-flood.glsl"));
    shaderFX = new PShaderHotSwap(FileUtil.getPath("haxademic/shaders/filters/colorize-bw-osc.glsl"));
  }

  protected void buildUI() {
    UI.addTitle("NewViz");
    UI.addToggle(SLIDERS_OVERRIDE, false, false);
    UI.addSlider(SIM_ITERS, 2, 1, 5, 1, false);                        params.put(SIM_ITERS, new PennerFloat(2));
    UI.addSlider(SIM_BLUR_STEPS, 3, 2, 5, 1, false);                   params.put(SIM_BLUR_STEPS, new PennerFloat(3));
    UI.addSlider(SIM_BLUR_AMP, 2f, 0.4f, 5f, 0.01f, false);            params.put(SIM_BLUR_AMP, new PennerFloat(2));
    UI.addSlider(SIM_BLUR_ASPECT, 1, 0.6f, 1.4f, 0.01f, false);        params.put(SIM_BLUR_ASPECT, new PennerFloat(1));
    UI.addSlider(SIM_SHARP_MULT, 2.5f, 1.5f, 4f, 0.01f, false);        params.put(SIM_SHARP_MULT, new PennerFloat(2.5f));
    UI.addSlider(SIM_ZOOM, 1, 0.999f, 1.001f, 0.0001f, false);         params.put(SIM_ZOOM, new PennerFloat(1));
    UI.addSlider(SIM_ROT, 0, -0.001f, 0.001f, 0.0001f, false);         params.put(SIM_ROT, new PennerFloat());
    UI.addSlider(SIM_OFFSET_X, 0, -0.001f, 0.001f, 0.0001f, false);    params.put(SIM_OFFSET_X, new PennerFloat());
    UI.addSlider(SIM_OFFSET_Y, 0, -0.001f, 0.001f, 0.0001f, false);    params.put(SIM_OFFSET_Y, new PennerFloat());
    UI.addSlider(SIM_DARK_STEP, 0, -0.94f, 0, 0.001f, false);          params.put(SIM_DARK_STEP, new PennerFloat());
    UI.addSlider(JFA_BLEND, 0, 0, 1, 0.001f, false);                    params.put(JFA_BLEND, new PennerFloat());

    // UI.addTitle("Fake Lighting");
    // FakeLightingFilter.instance().buildUI("LIGHT", false);

  }

  protected boolean tooDark() {
    DebugView.setValue("thresholdCalc()", bufferThresholdMonitor.thresholdCalc());
    return bufferThresholdMonitor.thresholdCalc() < 0.15f;
  }

  protected void runJfaStep(float step) {
    shader.update();
		shader.shader().set("iter", (float) step);
		shader.shader().set("time", FrameLoop.progressRads() * -1f);
		// shader.shader().set("time", 0);
		pgJFA.filter(shader.shader());
	}


  protected void drawPre(int frameCount) {
    // check blackness of image
    bufferThresholdMonitor.update(pgSim);

    // update windows JFA
    shader.update();
    for (int i = 0; i < 15; i++) { // run through full JFA steps/sequence
      if (i == 0) ImageUtil.copyImage(windowMaskInv, pgJFA);
      runJfaStep(i);
    }

    // apply stripes shader to JFA result
    shaderFX.update();
    shaderFX.shader().set("time", p.frameCount * -0.002f);
    pgJFA.filter(shaderFX.shader());

    // copy black over windows
    ImageUtil.copyImage(windowMask, pgJFA);

    // start context
    pgSim.beginDraw();
    if(p.frameCount < 5) pgSim.background(0);

    // draw seed pixels. TODO: only use when needed (check for too much black)
    if(p.frameCount < 10 || tooDark()) {
      DebugView.setValue("tooDark", frameCount);
      pgSim.fill(255);
      pgSim.rect(p.random(pgSim.width), p.random(pgSim.height), 10, 10);
    }

    // check for reset in case simulation is stuck
    if (KeyboardState.instance().isKeyTriggered(' ') || shouldClear) {
      pgSim.background(0);
      pgSim.fill(0);
      pgSim.rect(0, 0, pgSim.width, pgSim.height);
      shouldClear = false;
    }

    // overlay window mask
    pgSim.image(windowMask, 0, 0);

    // post / darkness
    BrightnessStepFilter.instance().setBrightnessStep(valForKey(SIM_DARK_STEP));
    BrightnessStepFilter.instance().applyTo(pgSim);

    // mix in JFA result
    PG.setPImageAlpha(pgSim, valForKey(JFA_BLEND));
    pgSim.image(pgJFA, 0, 0, pgSim.width, pgSim.height);
    PG.resetPImageAlpha(pgSim);

    // do R/D
    float sharp = valForKey(SIM_BLUR_AMP) * intForKey(SIM_BLUR_STEPS) * valForKey(SIM_SHARP_MULT);
    ReactionDiffusionStepFilter.applyTo(pgSim, intForKey(SIM_ITERS), intForKey(SIM_BLUR_STEPS), valForKey(SIM_BLUR_AMP) * valForKey(SIM_BLUR_ASPECT), valForKey(SIM_BLUR_AMP), sharp, false, 0.8f, 0.5f);

    // do warping
    // RotateFilter.instance().setZoom(1.001f);
    RotateFilter.instance().setZoom(valForKey(SIM_ZOOM));
    RotateFilter.instance().setRotation(valForKey(SIM_ROT));
    RotateFilter.instance().setOffset(valForKey(SIM_OFFSET_X), valForKey(SIM_OFFSET_Y));
    RotateFilter.instance().applyTo(pgSim);

    // end context
    pgSim.endDraw();

    // copy to light map
    pgLightMap.beginDraw();
    pgLightMap.background(0);
    pgLightMap.image(pgSim, 0, 0, pgLightMap.width, pgLightMap.height);
    pgLightMap.endDraw();
    BlurProcessingFilter.instance().setBlurSize(4);
    BlurProcessingFilter.instance().setSigma(4);
    BlurProcessingFilter.instance().applyTo(pgLightMap);

    DebugView.setTexture("pgSim", pgSim);
  }

  protected float valForKey(String key) {
    if(UI.valueToggle(SLIDERS_OVERRIDE)) return UI.value(key);
    return params.get(key).value();
  }

  protected int intForKey(String key) {
    if(UI.valueToggle(SLIDERS_OVERRIDE)) return UI.valueInt(key);
    return P.round(params.get(key).value());
  }

  protected void loadConfig(String config) {
    UI.loadValuesFromJSON(JSONObject.parse(config));
    setInterpValues();
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

  protected void automaticConfigSwitching() {
    if(UI.valueToggle(SLIDERS_OVERRIDE)) return;
    
    if(p.frameCount % 600 == 0 || p.frameCount == 10) {
      if(MathUtil.randBooleanWeighted(0.75f) || p.frameCount == 10) {
        loadConfig(configs[MathUtil.randIndex(configs.length)]);
      } else {
        loadConfig(smallConfigs[MathUtil.randIndex(smallConfigs.length)]);
      }
      if(MathUtil.randBooleanWeighted(0.05f)) {
        shouldClear = true;
      }
    }
  }

  protected void drawPost(int frameCount) {
    automaticConfigSwitching();
    if(KeyboardState.keyTriggered('1')) P.out(UI.valuesToJSON(new String[] {}, true));
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

      // copy UI params to PennerFloat objects for slow interpolation
      setInterpValues();
    }

    // always update PennerFloat objects
    updateInterpValues();
  }

  protected void draw(int frameCount) {
    pg.beginDraw();
    pg.background(0);
    pg.image(pgSim, 0, 0);
    pg.endDraw();
    // ImageUtil.copyImage(pgSim, pg);
    addFakeLighting();
  }

  protected void addFakeLighting() {
    // FakeLightingFilter.instance().setPropsFromUI("LIGHT");
    FakeLightingFilter.instance().setAmbient(2.3f);
    FakeLightingFilter.instance().setGradAmp(0.84f);
    FakeLightingFilter.instance().setGradBlur(5.18f);
    FakeLightingFilter.instance().setSpecAmp(3.21f);
    FakeLightingFilter.instance().setDiffDark(1.02f);
    FakeLightingFilter.instance().setMap(pgLightMap);
    FakeLightingFilter.instance().applyTo(pg);
    FXAAFilter.instance().applyTo(pg);
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
