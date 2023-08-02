package com.cacheflowe;

import com.cacheflowe.arrangements.ArrangementDiag;
import com.cacheflowe.arrangements.ArrangementGrid;
import com.cacheflowe.arrangements.ArrangementRandom;
import com.cacheflowe.arrangements.ArrangementRings;
import com.cacheflowe.arrangements.ArrangementSpiral;
import com.cacheflowe.arrangements.IArrangement;
import com.cacheflowe.movements.IMovement;
import com.cacheflowe.movements.MovementGrid;
import com.cacheflowe.movements.MovementOutFromCenterVertical;
import com.cacheflowe.movements.MovementRadialOut;
import com.cacheflowe.movements.MovementWaterfall;
import com.haxademic.core.app.P;
import com.haxademic.core.app.PAppletHax;
import com.haxademic.core.data.store.AppState;
import com.haxademic.core.data.store.IAppStoreListener;
import com.haxademic.core.file.FileUtil;
import com.haxademic.core.hardware.keyboard.KeyboardState;
import com.haxademic.core.math.MathUtil;
import com.haxademic.core.math.easing.EasingFloat;
import com.haxademic.core.math.easing.LinearFloat;
import com.haxademic.core.media.DemoAssets;
import com.haxademic.core.render.FrameLoop;
import com.haxademic.core.system.Console;
import com.haxademic.core.ui.UI;

import processing.core.PGraphics;
import processing.core.PImage;

public class Patterns 
implements IAppStoreListener {

  protected PAppletHax p;
  protected PGraphics pg;

  // particles
  protected float hoffOrthoFactor;
  public static int NUM_CELLS = 888;
  public static int CELL_DETAIL = 36;
  protected VoronoiCell cells[] = new VoronoiCell[NUM_CELLS];
  protected LinearFloat globalSpeedMult = new LinearFloat(1, 0.003f);

  // colors
  protected float colorEaseFactor = 0.01f;
  protected EasingFloat offsetR = new EasingFloat(0, colorEaseFactor);
  protected EasingFloat offsetG = new EasingFloat(1, colorEaseFactor);
  protected EasingFloat offsetB = new EasingFloat(2, colorEaseFactor);
  public static float OFFSET_R = 0;
  public static float OFFSET_G = 0;
  public static float OFFSET_B = 0;
  protected float[][] colorOffsets;
  protected int colorSetIndex = 0;
  protected String UI_R = "UI_R";
  protected String UI_G = "UI_G";
  protected String UI_B = "UI_B";

  // debug
  protected String SHOW_MODES_DEBUG = "SHOW_MODES_DEBUG";

  // current particle arrangement
  public static IArrangement[] arrangements = new IArrangement[] {
    new ArrangementGrid(),
    new ArrangementDiag(),
    new ArrangementRandom(),
    new ArrangementRings(),
    new ArrangementSpiral(),
  };
  protected IArrangement curArrangementMode = arrangements[0];
  
  // current particle movement
  public static IMovement[] movements = new IMovement[] {
    new MovementRadialOut(),
    new MovementWaterfall(),
    new MovementGrid(),
    new MovementOutFromCenterVertical(),
  };
  protected IMovement curMovementMode = movements[0];

  // current cycling mode
  public static enum SYSTEM_MODE {
    COLLECT,  // Particles fade out, pick new mode, then fade back into the new arrangement
    BE_FREE   // Particles travel in whatever direction they've been given
  }
  public static SYSTEM_MODE curSystemMode = SYSTEM_MODE.COLLECT;

  public Patterns() {
    p = (PAppletHax) P.p;
    pg = p.pg;
    P.store.addListener(this);
    init();
  }

  ////////////////////////////////////
  // Init 
  ////////////////////////////////////

  protected void init() {
    buildParticles();
    buildColorOffsets();
    buildUI();
  }

  protected void buildUI() {
    UI.addToggle(SHOW_MODES_DEBUG, false, false);
  }

  protected void buildColorOffsets() {
    // build UI
    if(colorOffsets == null) {
      UI.addTitle("Color Offsets");
      UI.addSlider(UI_R, 0, 0, P.TWO_PI, 0.01f, false);
      UI.addSlider(UI_G, 1, 0, P.TWO_PI, 0.01f, false);
      UI.addSlider(UI_B, 2, 0, P.TWO_PI, 0.01f, false);
    }
    // build array
    colorOffsets = new float[][] {
      new float[] {0, 1, 2},
      new float[] {1, 0, 2},
      new float[] {2.506f, 1.796f, 2.464f},
      new float[] {5.586f, 5.243f, 6.093f},
      new float[] {5.183f, 5.259f, 6.153f},
      new float[] {5.518f, 0.243f, 0.598f},
      new float[] {1.223f, 1.312f, 0.653f},
      new float[] {3.042f, 3.154f, 3.529f},
    };
  }

  protected void buildParticles() {
    hoffOrthoFactor = P.dist(0, 0, pg.width, pg.height);
    for (int i = 0; i < NUM_CELLS; i++) {
      cells[i] = new VoronoiCell(i, hoffOrthoFactor);
    }
  }

  protected void resetParticlesForTesting(IArrangement arrangement, IMovement movemode) {
    for (int i = 0; i < NUM_CELLS; i++) {
      cells[i].updateStartArrangement();
      cells[i].nextPatternMode(arrangement, movemode);
    }
  }

  protected void drawPost(int frameCount) {
    if(UI.valueToggle(SHOW_MODES_DEBUG) == false) return;
    DemoAssets.setDemoFont(p.g);
    p.text(
      "State:" + FileUtil.NEWLINE + 
      "curSystemMode: " + curSystemMode.toString() + FileUtil.NEWLINE + 
      "Arrangement: " + curArrangementMode.toString() + FileUtil.NEWLINE + 
      "Movement: " + curMovementMode.toString() + FileUtil.NEWLINE +
      "globalSpeedMult: " + MathUtil.roundToPrecision(globalSpeedMult.value(), 3) + FileUtil.NEWLINE +
      "", 
      20, 30
    );
  }

  protected void draw(int frameCount) {
    checkKeyCommands();    
    updateColorOffsets();
    updateGlobalSpeed();
    switchModes();
    drawParticles();
  }

  protected void checkKeyCommands() {
    if(KeyboardState.keyOn('1')) resetParticlesForTesting(arrangements[0], movements[0]);
    if(KeyboardState.keyOn('2')) resetParticlesForTesting(arrangements[1], movements[1]);
    if(KeyboardState.keyOn('3')) resetParticlesForTesting(arrangements[2], movements[2]);
    // if(KeyboardState.keyOn('4')) resetParticlesForTesting(MODE_PATTERN.GRID, movements[0]);
    if(KeyboardState.keyTriggered('c')) randomColorOffsets();
    if(KeyboardState.keyTriggered('v')) printColorOffsets();
    if(KeyboardState.keyTriggered('b')) nextColorOffsets(1);
    if(KeyboardState.keyTriggered('n')) nextColorOffsets(-1);
    if(KeyboardState.keyTriggered('m')) buildColorOffsets();
  }

  ////////////////////////////////////
  // Colors
  ////////////////////////////////////

  protected void updateColorOffsets() {
//		offsetR.setEaseFactor(0.1f);
//		offsetG.setEaseFactor(0.1f);
//		offsetB.setEaseFactor(0.1f);
    offsetR.update(true);
    offsetG.update(true);
    offsetB.update(true);
    OFFSET_R = offsetR.value();
    OFFSET_G = offsetG.value();
    OFFSET_B = offsetB.value();
  }

  protected void randomColorOffsets() {
    offsetR.setTarget(p.random(P.TWO_PI));
    offsetG.setTarget(p.random(P.TWO_PI));
    offsetB.setTarget(p.random(P.TWO_PI));
    printColorOffsets();
  }

  protected void nextColorOffsets(int inc) {
    // cycle
    colorSetIndex += inc;
    colorSetIndex %= colorOffsets.length;
    if(colorSetIndex < 0) colorSetIndex = colorOffsets.length - 1;
    // print!
    // set index
    setColorIndex(colorSetIndex);
  }

  protected void setColorIndex(int index) {
    colorSetIndex = index;
    float r = colorOffsets[colorSetIndex][0];
    float g = colorOffsets[colorSetIndex][1];
    float b = colorOffsets[colorSetIndex][2];
    offsetR.setTarget(r);
    offsetG.setTarget(g);
    offsetB.setTarget(b);
    // print!
//		P.outColor(Console.YELLOW_BACKGROUND, "["+colorSetIndex+"]", r, g, b);
//		printColorOffsets();
  }

  protected void printColorOffsets() {
    P.outColor(
      Console.CYAN_BACKGROUND, 
      MathUtil.roundToPrecision(offsetR.target(), 3) + "f,", 
      MathUtil.roundToPrecision(offsetG.target(), 3) + "f,", 
      MathUtil.roundToPrecision(offsetB.target(), 3) + "f"
    );
  }

  // cos palette color offset helpers

  public static float rWithIndex(float index) {
    return P.sin(index + Patterns.OFFSET_R) * 127f + 127f;
  }

  public static float gWithIndex(float index) {
    return P.sin(index + Patterns.OFFSET_G) * 127f + 127f;
  }

  public static float bWithIndex(float index) {
    return P.sin(index + Patterns.OFFSET_B) * 127f + 127f;
  }

  ////////////////////////////////////
  // Behavior
  ////////////////////////////////////

  protected void updateGlobalSpeed() {
    globalSpeedMult.setInc(0.004f);
    globalSpeedMult.update();
  }

  protected void switchModes() {
    if (FrameLoop.loopCurFrame() == 5) {
      transitionToNewMode();
    }
    // if (FrameLoop.loopCurFrame() == 500) {
    //   releaseInNewMode();
    // }
    if(curSystemMode == SYSTEM_MODE.COLLECT && allShowing()) {
      releaseInNewMode();
    }
  }

  protected void transitionToNewMode() {
    curSystemMode = SYSTEM_MODE.COLLECT;
    
    // make sure we get a new random modes that are different
    newPatternMode();
    newMovementMode();
    
    // tell particles to outro
    for (int i = 0; i < NUM_CELLS; i++) {
      cells[i].nextPatternMode(curArrangementMode, curMovementMode); 
    }
    
    // slow down for outro
    setColorIndex(MathUtil.randIndex(colorOffsets.length));
    globalSpeedMult.setTarget(0);
  }
  
  protected void releaseInNewMode() {
    curSystemMode = SYSTEM_MODE.BE_FREE;
    globalSpeedMult.setTarget(1);
  }
  
  protected void newPatternMode() {
    IArrangement lastMode = curArrangementMode;
    curArrangementMode = randomPatternMode();
    while(lastMode == curArrangementMode) curArrangementMode = randomPatternMode();
  }
  
  protected IArrangement randomPatternMode() {
    return arrangements[MathUtil.randIndex(arrangements.length)];
  }
  
  protected void newMovementMode() {
    IMovement lastMovement = curMovementMode;
    curMovementMode = randomMovementMode();
    while(lastMovement == curMovementMode) curMovementMode = randomMovementMode(); 
  }

  protected IMovement randomMovementMode() {
    return movements[MathUtil.randIndex(movements.length)];
  }

  protected boolean allShowing() {
    boolean allShowing = true;
    for (int i = 0; i < NUM_CELLS; i++) {
      if(cells[i].isShowing() == false) allShowing = false;
    }
    return allShowing;
  }

  protected void drawParticles() {
    // PG.setDrawFlat2d(pg, true);
    pg.ortho();
    for (int i = 0; i < NUM_CELLS; i++) {
      cells[i].advance(globalSpeedMult.value());
      cells[i].draw();
    }			
  }

  ////////////////////////////////////////////////////
  // AppStore listeners
  ////////////////////////////////////////////////////

  public void updatedNumber(String key, Number val) {
    // draw
    if(key.equals(AppState.ANIMATION_FRAME)) draw(val.intValue());
    if(key.equals(AppState.ANIMATION_FRAME_POST)) drawPost(val.intValue());

    // UI
    if(key.equals(UI_R)) { offsetR.setTarget(val.floatValue()); }
    if(key.equals(UI_G)) { offsetG.setTarget(val.floatValue()); }
    if(key.equals(UI_B)) { offsetB.setTarget(val.floatValue()); }
  }
  public void updatedString(String key, String val) {}
  public void updatedBoolean(String key, Boolean val) {}
  public void updatedImage(String key, PImage val) {}
  public void updatedBuffer(String key, PGraphics val) {}

}
