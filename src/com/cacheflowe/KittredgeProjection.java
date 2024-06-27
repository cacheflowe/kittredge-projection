package com.cacheflowe;

import com.cacheflowe.draw.Patterns;
import com.cacheflowe.draw.PostFX;
import com.cacheflowe.draw.holiday.Holiday;
import com.cacheflowe.draw.newviz.NewViz;
import com.haxademic.core.app.P;
import com.haxademic.core.app.PAppletHax;
import com.haxademic.core.app.config.AppSettings;
import com.haxademic.core.app.config.Config;
import com.haxademic.core.data.store.AppState;
import com.haxademic.core.data.store.IAppStoreListener;
import com.haxademic.core.draw.image.ImageUtil;
import com.haxademic.core.system.DateUtil;

import processing.core.PGraphics;
import processing.core.PImage;

public class KittredgeProjection
extends PAppletHax
implements IAppStoreListener {
  public static void main(String args[]) { arguments = args; PAppletHax.main(Thread.currentThread().getStackTrace()[1].getClassName()); }
  
  protected Patterns patterns;
  protected PostFX postFX;
  protected Uptime uptime;
  
  protected Holiday holiday;
  protected boolean holidayMode = false;

  protected NewViz newViz;
  protected boolean newVizMode = true;

  public static boolean PRODUCTION_MODE = true;
  public static boolean localDev = true;

  protected void config() {
    int appW = 2160;
    int appH = 1920;
    Config.setAppSize(appW, appH);
    Config.setPgSize(appW, appH);
    if(PRODUCTION_MODE) {
      Config.setProperty(AppSettings.FULLSCREEN, true);
      Config.setProperty(AppSettings.SCREEN_X, 1920);
      Config.setProperty(AppSettings.SCREEN_Y, 0);
    } else {
      Config.setAppSize(appW/2, appH/2);
    }
    Config.setProperty(AppSettings.SHOW_DEBUG, false);
    Config.setProperty(AppSettings.SHOW_UI, false);
    Config.setProperty(AppSettings.SHOW_FPS_IN_TITLE, false);
    Config.setProperty(AppSettings.LOOP_FRAMES, 2400); // ~40s
    Config.printProperties();
  }
  
  protected void firstFrame() {
    P.store.addListener(this);

    if(newVizMode) {
      newViz = new NewViz();
    } else if(holidayMode) {
      holiday = new Holiday();
    } else {
      patterns = new Patterns();
      postFX = new PostFX();
    }
    if (PRODUCTION_MODE) {
      uptime = new Uptime();
    }
  }

  public static boolean shouldDraw() {
    if(localDev == true) return true;
    return DateUtil.timeIsBetweenHours(6, 16) == false;
  }
  
  public static boolean isRestartWindow() {
    return DateUtil.timeIsBetweenHours(5, 6);
  }

  public void drawApp() {
    // main app canvas context setup
    p.background(0);
    p.noStroke();
    
    // MAIN DRAW STEPS:
    if(shouldDraw()) {
      P.store.setNumber(AppState.ANIMATION_FRAME_PRE, p.frameCount);
      pg.beginDraw();
      if(newViz == null) pg.background(0);
      P.store.setNumber(AppState.ANIMATION_FRAME, p.frameCount);
      pg.endDraw();
    }
    P.store.setNumber(AppState.ANIMATION_FRAME_POST, p.frameCount);
    
    // draw to screen
    ImageUtil.cropFillCopyImage(pg, p.g, false);
    
    // debug
    // P.store.showStoreValuesInDebugView();
  }
  
  /////////////////////////////////
  // APPSTORE LISTENERS
  /////////////////////////////////

  public void updatedNumber(String key, Number val) {}
  public void updatedString(String key, String val) {}
  public void updatedBoolean(String key, Boolean val) {}
  public void updatedImage(String key, PImage val) {}
  public void updatedBuffer(String key, PGraphics val) {}

}
