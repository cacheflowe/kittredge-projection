package com.cacheflowe;

import com.haxademic.core.app.P;
import com.haxademic.core.app.PAppletHax;
import com.haxademic.core.app.config.Config;
import com.haxademic.core.data.store.AppState;
import com.haxademic.core.data.store.IAppStoreListener;
import com.haxademic.core.debug.DebugView;
import com.haxademic.core.draw.context.PG;
import com.haxademic.core.draw.image.ImageUtil;
import com.haxademic.core.hardware.mouse.Mouse;
import com.haxademic.core.net.DashboardCheckinPoller;
import com.haxademic.core.render.FrameLoop;
import com.haxademic.core.system.CrashMonitor;
import com.haxademic.core.system.DateUtil;
import com.haxademic.core.ui.UI;

import processing.core.PGraphics;
import processing.core.PImage;

public class Uptime 
implements IAppStoreListener {

  protected PAppletHax p;
  protected PGraphics debugBuffer;
  protected DashboardCheckinPoller dashboardCheckinPoller;
  protected CrashMonitor crashMonitor;
  public static String CAMERA_FROZEN = "CAMERA_FROZEN";

  public Uptime() {
    p = (PAppletHax) P.p;
    P.store.addListener(this);
    init();
  }

  ////////////////////////////////////
  // Init uptime components
  ////////////////////////////////////

  protected void init() {
    DashboardCheckinPoller.DEBUG = false;
    debugBuffer = PG.newPG(p.pg.width/2, p.pg.height/2);
    int screenshotInterval = DateUtil.hoursToSeconds(0.5f);
    int checkinInterval = DateUtil.minutesToSeconds(10);
    dashboardCheckinPoller = new DashboardCheckinPoller("kittredge-projection", "Kittredge Projection", Config.getString("dashboard_url", "http://localhost/haxademic/www/dashboard-new/"), checkinInterval, screenshotInterval, 0.3f);
    dashboardCheckinPoller.setCustomImage(debugBuffer, screenshotInterval);	// Upload debugBuffer every hour
    crashMonitor = new CrashMonitor(true, 30000, false);				// quit (restart via cmd run script) after 30 seconds if crashed
    DebugView.setTexture("debugBuffer", debugBuffer);
  }	

  ////////////////////////////////////
  // Update uptime components
  ////////////////////////////////////

  protected void drawPost(int frameCount) {
    hidePanels();
    restartNightly();
    clickScreenOnInterval();
    logUptime();
    drawDebug();
  }

  protected void hidePanels() {
    // hide UI & DebugView every 5 minutes in case they're accidentally left enabled
    if(FrameLoop.frameModMinutes(5)) { 
      if(UI.active()) UI.active(false);
      if(DebugView.active()) DebugView.active(false);
    }
  }

  protected void restartNightly() {
    // every half hour, check if we've been up for over a day, and we're between 12-1pm
    if(FrameLoop.frameModMinutes(20)) {
      P.out("Checking nightly restart", DateUtil.todayHours(), DateUtil.uptimeHours());
      if(DateUtil.uptimeHours() > 1.1f && DateUtil.timeIsBetweenHours(4, 6)) {
        P.out("Attempting to quit for nightly restart");
        p.exit();	// use CrashMonitor & run.cmd to restart from cmd loop
      }
    }
  }

  protected void clickScreenOnInterval() {
    // click screen to focus away from crash monitor or other popups
    // do it once after startup, then every half hour
    if(FrameLoop.count() < 10) return;
    if(FrameLoop.count() == 600 || FrameLoop.count() == 1200 || FrameLoop.frameModMinutes(30)) { 
      Mouse.mouseClickAt(2000, 200);
      Mouse.setPointerLocation(p, 9999, 60);
    }
  }

  protected void drawDebug() {
    if(debugBuffer == null) return;
    // update debug buffer every [x] minutes, or always when debug view is up
    if(FrameLoop.frameModMinutes(15) || DebugView.active()) {
      debugBuffer.beginDraw();
      debugBuffer.noStroke();
      ImageUtil.copyImage(p.pg, debugBuffer); // just draw main output 
      debugBuffer.endDraw();
    }
  }

  protected void logUptime() {
    if(FrameLoop.frameModMinutes(20)) P.out("Still running:", DebugView.uptimeStr());
  }

  /////////////////////////////////////
  // AppStore listeners
  /////////////////////////////////////

  public void updatedNumber(String key, Number val) {
    if(key.equals(AppState.ANIMATION_FRAME_POST)) drawPost(val.intValue());
  }
  public void updatedString(String key, String val) {}
  public void updatedBoolean(String key, Boolean val) {}
  public void updatedImage(String key, PImage val) {}
  public void updatedBuffer(String key, PGraphics val) {}

}
