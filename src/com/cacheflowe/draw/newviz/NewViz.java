package com.cacheflowe.draw.newviz;

import com.haxademic.core.app.P;
import com.haxademic.core.app.PAppletHax;
import com.haxademic.core.data.store.AppState;
import com.haxademic.core.data.store.IAppStoreListener;
import com.haxademic.core.debug.DebugView;
import com.haxademic.core.draw.context.PG;
import com.haxademic.core.draw.cv.BufferThresholdMonitor;
import com.haxademic.core.draw.filters.pshader.BrightnessStepFilter;
import com.haxademic.core.draw.filters.pshader.FXAAFilter;
import com.haxademic.core.draw.filters.pshader.FakeLightingFilter;
import com.haxademic.core.draw.filters.pshader.RotateFilter;
import com.haxademic.core.draw.filters.pshader.compound.ReactionDiffusionStepFilter;
import com.haxademic.core.hardware.keyboard.KeyboardState;
import com.haxademic.core.ui.UI;

import processing.core.PGraphics;
import processing.core.PImage;
import processing.data.JSONObject;

public class NewViz 
implements IAppStoreListener {

  protected PAppletHax p;
  protected PGraphics pgSim;
  protected PGraphics pg;

  protected PImage windowMask;

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

  // TODO:
  // - Add UI for all params and record randomness
  // - Occasional clearing & re-seeding
  // - Improve fake light/post fx values
  // - Add JFA to build patterns away from windows
  // - Add other pattern seeds and mix in slightly?
  // - Add noise map displacement

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
    bufferThresholdMonitor = new BufferThresholdMonitor(16, 16, 20);
    windowMask = P.getImage("images/window-map.png");
    buildUI();
  }

  protected void buildUI() {
    UI.addTitle("NewViz");
    UI.addSlider(SIM_ITERS, 2, 1, 5, 1, false);
    UI.addSlider(SIM_BLUR_STEPS, 3, 2, 5, 1, false);
    UI.addSlider(SIM_BLUR_AMP, 2f, 0.4f, 5f, 0.01f, false);
    UI.addSlider(SIM_BLUR_ASPECT, 1, 0.6f, 1.4f, 0.01f, false);
    UI.addSlider(SIM_SHARP_MULT, 2.5f, 1.5f, 4f, 0.01f, false);
    UI.addSlider(SIM_ZOOM, 1, 0.999f, 1.001f, 0.0001f, false);
    UI.addSlider(SIM_ROT, 0, -0.001f, 0.001f, 0.0001f, false);
    UI.addSlider(SIM_OFFSET_X, 0, -0.001f, 0.001f, 0.0001f, false);
    UI.addSlider(SIM_OFFSET_Y, 0, -0.001f, 0.001f, 0.0001f, false);
    UI.addSlider(SIM_DARK_STEP, 0, -0.94f, 0, 0.001f, false);
  }

  protected boolean tooDark() {
    DebugView.setValue("thresholdCalc()", bufferThresholdMonitor.thresholdCalc());
    return bufferThresholdMonitor.thresholdCalc() < 0.15f;
  }

  protected void drawPre(int frameCount) {
    // check blackness of image
    bufferThresholdMonitor.update(pgSim);

    // start context
    pgSim.beginDraw();
    if(p.frameCount < 5) pgSim.background(0);

    // draw seed pixels. TODO: only use when needed (check for too much black)
    if(p.frameCount < 10 || tooDark()) {
      pgSim.fill(255);
      pgSim.rect(p.random(pgSim.width), p.random(pgSim.height), 10, 10);
    }

    // check for reset in case simulation is stuck
    if (KeyboardState.instance().isKeyTriggered(' ')) {
      pgSim.background(0);
      pgSim.fill(0);
      pgSim.rect(0, 0, pgSim.width, pgSim.height);
    }

    // overlay window mask
    pgSim.image(windowMask, 0, 0);

    // post / darkness
    BrightnessStepFilter.instance().setBrightnessStep(UI.valueEased(SIM_DARK_STEP));
    BrightnessStepFilter.instance().applyTo(pgSim);

    // do R/D
    float sharp = UI.value(SIM_BLUR_AMP) * UI.valueInt(SIM_BLUR_STEPS) * UI.value(SIM_SHARP_MULT);
    ReactionDiffusionStepFilter.applyTo(pgSim, UI.valueInt(SIM_ITERS), UI.valueInt(SIM_BLUR_STEPS), UI.value(SIM_BLUR_AMP) * UI.value(SIM_BLUR_ASPECT), UI.value(SIM_BLUR_AMP), sharp, false, 0.8f, 0.5f);

    // do warping
    // RotateFilter.instance().setZoom(1.001f);
    RotateFilter.instance().setZoom(UI.value(SIM_ZOOM));
    RotateFilter.instance().setRotation(UI.value(SIM_ROT));
    RotateFilter.instance().setOffset(UI.value(SIM_OFFSET_X), UI.value(SIM_OFFSET_Y));
    RotateFilter.instance().applyTo(pgSim);

    // end context
    pgSim.endDraw();
  }


  protected void drawPost(int frameCount) {
    if(KeyboardState.keyTriggered('1')) P.out(UI.valuesToJSON(new String[] {}, true));
		if(KeyboardState.keyTriggered('2')) UI.loadValuesFromJSON(JSONObject.parse("{ \"SIM_ITERS\": 2.0, \"SIM_BLUR_STEPS\": 2.0, \"SIM_BLUR_AMP\": 0.6900007, \"SIM_BLUR_ASPECT\": 1.0, \"SIM_SHARP_MULT\": 2.4, \"SIM_ZOOM\": 1.0007001, \"SIM_ROT\": -2.1827873E-11, \"SIM_OFFSET_X\": 0.0, \"SIM_OFFSET_Y\": 0.0, \"SIM_DARK_STEP\": 0.0 }"));
		if(KeyboardState.keyTriggered('3')) UI.loadValuesFromJSON(JSONObject.parse("{ \"SIM_ITERS\": 2.0, \"SIM_BLUR_STEPS\": 3.0, \"SIM_BLUR_AMP\": 1.0200005, \"SIM_BLUR_ASPECT\": 0.98, \"SIM_SHARP_MULT\": 2.6299999, \"SIM_ZOOM\": 0.99959993, \"SIM_ROT\": -2.1827873E-11, \"SIM_OFFSET_X\": 9.999998E-5, \"SIM_OFFSET_Y\": 0.0, \"SIM_DARK_STEP\": 0.0 } "));
		if(KeyboardState.keyTriggered('4')) UI.loadValuesFromJSON(JSONObject.parse("{ \"SIM_ITERS\": 2.0, \"SIM_BLUR_STEPS\": 4.0, \"SIM_BLUR_AMP\": 1.4200001, \"SIM_BLUR_ASPECT\": 1.06, \"SIM_SHARP_MULT\": 2.6299999, \"SIM_ZOOM\": 0.9996999, \"SIM_ROT\": -1.4551915E-11, \"SIM_OFFSET_X\": -1.4551915E-11, \"SIM_OFFSET_Y\": 2.9999996E-4, \"SIM_DARK_STEP\": -0.77699995 } "));
		if(KeyboardState.keyTriggered('5')) UI.loadValuesFromJSON(JSONObject.parse("{ \"SIM_ITERS\": 2.0, \"SIM_BLUR_STEPS\": 5.0, \"SIM_BLUR_AMP\": 0.73000073, \"SIM_BLUR_ASPECT\": 1.0, \"SIM_SHARP_MULT\": 2.61, \"SIM_ZOOM\": 1.0, \"SIM_ROT\": -2.1827873E-11, \"SIM_OFFSET_X\": -2.0000001E-4, \"SIM_OFFSET_Y\": 0.0, \"SIM_DARK_STEP\": -0.5999991 }"));
		if(KeyboardState.keyTriggered('6')) UI.loadValuesFromJSON(JSONObject.parse("{ \"SIM_ITERS\": 4.0, \"SIM_BLUR_STEPS\": 2.0, \"SIM_BLUR_AMP\": 1.1100004, \"SIM_BLUR_ASPECT\": 1.0, \"SIM_SHARP_MULT\": 2.61, \"SIM_ZOOM\": 1.0, \"SIM_ROT\": -2.1827873E-11, \"SIM_OFFSET_X\": -1.4551915E-11, \"SIM_OFFSET_Y\": -1.0E-4, \"SIM_DARK_STEP\": -0.8619967 }"));
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
    }
  }

  protected void draw(int frameCount) {
    pg.beginDraw();
    pg.background(0);
    pg.image(pgSim, 0, 0);
    pg.endDraw();
    // ImageUtil.copyImage(pgSim, pg);

    FakeLightingFilter.instance().setAmbient(3f);
    FakeLightingFilter.instance().setGradAmp(1.0f);
    FakeLightingFilter.instance().setGradBlur(3f);
    FakeLightingFilter.instance().setSpecAmp(1.9f);
    FakeLightingFilter.instance().setDiffDark(0.2f);
    FakeLightingFilter.instance().setMap(pg);
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
