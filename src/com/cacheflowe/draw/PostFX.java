package com.cacheflowe.draw;

import com.haxademic.core.app.P;
import com.haxademic.core.app.PAppletHax;
import com.haxademic.core.data.store.AppState;
import com.haxademic.core.data.store.IAppStoreListener;
import com.haxademic.core.debug.DebugView;
import com.haxademic.core.draw.context.PG;
import com.haxademic.core.draw.filters.pshader.BlurHFilter;
import com.haxademic.core.draw.filters.pshader.BlurVFilter;
import com.haxademic.core.draw.filters.pshader.ColorCorrectionFilter;
import com.haxademic.core.draw.filters.pshader.FakeLightingFilter;
import com.haxademic.core.draw.filters.pshader.GodRays;
import com.haxademic.core.draw.filters.pshader.RadialFlareFilter;
import com.haxademic.core.draw.image.ImageUtil;
import com.haxademic.core.hardware.mouse.Mouse;
import com.haxademic.core.ui.UI;

import processing.core.PGraphics;
import processing.core.PImage;

public class PostFX 
implements IAppStoreListener {
  
  protected PAppletHax p;
  protected PGraphics pg;
  
  protected PGraphics pgLightingBlur;
  protected String FILTER_ACTIVE = "FILTER_ACTIVE";
  protected String LIGHTING_ID = "FAKELIGHT_";
  protected String COLOR_CORRECTION_ID = "COLOR_";

  public PostFX() {
    p = (PAppletHax) P.p;
    pg = p.pg;
    P.store.addListener(this);
    
    init();
  }	

  ////////////////////////////////////
  // Init 
  ////////////////////////////////////

  protected void init() {
    buildFakeLighting();
    ColorCorrectionFilter.instance().buildUI(COLOR_CORRECTION_ID, true);
  }		

  protected void buildFakeLighting() {
    FakeLightingFilter.instance().buildUI(LIGHTING_ID, false);
    UI.addToggle(FILTER_ACTIVE, true, false);
    pgLightingBlur = PG.newPG(pg.width / 4, pg.height / 4);
  }

  ////////////////////////////////////
  // Draw 
  ////////////////////////////////////

  protected void drawPre(int frameCount) {
    updateBlurMap();
  }

  protected void updateBlurMap() {
    ImageUtil.copyImage(pg, pgLightingBlur);
    BlurHFilter.instance().setBlurByPercent(1, pgLightingBlur.width);
    BlurVFilter.instance().setBlurByPercent(1, pgLightingBlur.height);
    BlurHFilter.instance().applyTo(pgLightingBlur);
    BlurVFilter.instance().applyTo(pgLightingBlur);
    // BlurHFilter.instance().applyTo(pgLightingBlur);
    // BlurVFilter.instance().applyTo(pgLightingBlur);
    // BlurHFilter.instance().applyTo(pgLightingBlur);
    // BlurVFilter.instance().applyTo(pgLightingBlur);
    DebugView.setTexture("pgLightingBlur", pgLightingBlur);
  }

  protected void drawPost(int frameCount) {
    applyLighting();
    applyColorCorrection();
  }

  protected void applyLighting() {
    if (UI.valueToggle(FILTER_ACTIVE) == false) return;

    // apply lighting effect to main drawing
    // Ambient: 2.8
    // Grad Amp: 0.45
    // Grad Blur: 0.25
    // Spec Amp: 4.5
    // DiffDark: 0.8
    FakeLightingFilter.instance().setMap(pgLightingBlur);
    FakeLightingFilter.instance().setPropsFromUI(LIGHTING_ID);
    FakeLightingFilter.instance().applyTo(pg);

    GodRays.instance().setDecay(0.8f);
    GodRays.instance().setWeight(0.3f);
    GodRays.instance().setRotation(Mouse.xEasedNorm * -6f);
    GodRays.instance().setAmp(0.1f);
    // GodRays.instance().applyTo(pg);

    RadialFlareFilter.instance().setImageBrightness(10f);
    RadialFlareFilter.instance().setFlareBrightness(10f);
    RadialFlareFilter.instance().setRadialLength(.5f);
    RadialFlareFilter.instance().setIters(50);
    RadialFlareFilter.instance().applyTo(pg);
  }

  protected void applyColorCorrection() {
    ColorCorrectionFilter.instance().setPropsFromUI(COLOR_CORRECTION_ID);
    ColorCorrectionFilter.instance().applyTo(pg);
  }

  ////////////////////////////////////////////////////
  // AppStore listeners
  ////////////////////////////////////////////////////

  public void updatedNumber(String key, Number val) {
    if(key.equals(AppState.ANIMATION_FRAME_PRE)) drawPre(val.intValue());
    if(key.equals(AppState.ANIMATION_FRAME_POST)) drawPost(val.intValue());
  }
  public void updatedString(String key, String val) {}
  public void updatedBoolean(String key, Boolean val) {}
  public void updatedImage(String key, PImage val) {}
  public void updatedBuffer(String key, PGraphics val) {}

}
