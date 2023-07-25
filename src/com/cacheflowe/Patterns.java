package com.cacheflowe;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.Random;

import com.haxademic.core.app.P;
import com.haxademic.core.app.PAppletHax;
import com.haxademic.core.data.store.AppState;
import com.haxademic.core.data.store.IAppStoreListener;
import com.haxademic.core.hardware.keyboard.KeyboardState;
import com.haxademic.core.math.MathUtil;
import com.haxademic.core.math.easing.EasingFloat;
import com.haxademic.core.math.easing.LinearFloat;
import com.haxademic.core.render.FrameLoop;
import com.haxademic.core.system.Console;
import com.haxademic.core.ui.UI;

import processing.core.PGraphics;
import processing.core.PImage;
import processing.opengl.PShader;

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

  // current particle arrangement & behavior
  public enum MODE_PATTERN {
    WATERFALL,
    GRID,
    SPIRAL,
    RINGS
  }
  protected MODE_PATTERN curPatternMode = MODE_PATTERN.WATERFALL;
  private static final List<MODE_PATTERN> MODE_PATTERN_VALS = Collections.unmodifiableList(Arrays.asList(MODE_PATTERN.values()));
  private static final int PATTERNS_NUM = MODE_PATTERN_VALS.size();
  private static final Random RANDOM_PATTERN = new Random();

  // current cycling mode
  public enum SYSTEM_MODE {
    COLLECT,
    BE_FREE
  }
  protected SYSTEM_MODE curSystemMode = SYSTEM_MODE.COLLECT;

  protected PShader moveShader;

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

  protected void resetParticles(MODE_PATTERN mode) {
    curPatternMode = mode;
    for (int i = 0; i < NUM_CELLS; i++) {
      cells[i].setStartPosition();
      cells[i].nextPatternMode(curPatternMode);
    }
  }

  protected void draw(int frameCount) {
    checkKeyCommands();    
    updateColorOffsets();
    updateBehavior();
    drawParticles();
  }

  protected void checkKeyCommands() {
    if(KeyboardState.keyOn('1')) resetParticles(MODE_PATTERN.WATERFALL);
    if(KeyboardState.keyOn('2')) resetParticles(MODE_PATTERN.SPIRAL);
    if(KeyboardState.keyOn('3')) resetParticles(MODE_PATTERN.RINGS);
    if(KeyboardState.keyOn('4')) resetParticles(MODE_PATTERN.GRID);
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

  protected void updateBehavior() {
    globalSpeedMult.update();
    
//		if(FrameLoop.frameModMinutes(0.3f)) {
    if(FrameLoop.loopCurFrame() == 5) {
      transitionToNewMode();
    }
//		if(p.frameCount == collectFrame + 240) {
    if(FrameLoop.loopCurFrame() == 280) {
      releaseInNewMode();
    }
  }

  protected void transitionToNewMode() {
    curSystemMode = SYSTEM_MODE.COLLECT;
    
    // make sure we get a new random pattern mode that's different
    MODE_PATTERN lastMode = curPatternMode;
    curPatternMode = randomMode();
    while(lastMode == curPatternMode) curPatternMode = randomMode(); 
    
    // tell particles to outro
    for (int i = 0; i < NUM_CELLS; i++) {
      cells[i].nextPatternMode(curPatternMode); 
    }

    
    // slow down for outro
    setColorIndex(MathUtil.randIndex(colorOffsets.length));
    globalSpeedMult.setTarget(0);
  }
  
  protected void releaseInNewMode() {
    curSystemMode = SYSTEM_MODE.BE_FREE;
    globalSpeedMult.setTarget(1);
  }

  protected MODE_PATTERN randomMode() {
    return MODE_PATTERN_VALS.get(RANDOM_PATTERN.nextInt(PATTERNS_NUM));
  }

  protected void drawParticles() {
    // PG.setDrawFlat2d(pg, true);
    pg.ortho();
    for (int i = 0; i < NUM_CELLS; i++) {
      cells[i].draw();
      cells[i].advance(globalSpeedMult.value());
    }			
  }

  ////////////////////////////////////////////////////
  // AppStore listeners
  ////////////////////////////////////////////////////

  public void updatedNumber(String key, Number val) {
    // draw
    // if(key.equals(AppState.ANIMATION_FRAME_PRE)) drawPre(val.intValue());
    if(key.equals(AppState.ANIMATION_FRAME)) draw(val.intValue());
    // if(key.equals(AppState.ANIMATION_FRAME_POST)) drawPost(val.intValue());

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
