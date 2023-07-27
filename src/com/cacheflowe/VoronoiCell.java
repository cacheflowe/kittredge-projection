package com.cacheflowe;

import com.cacheflowe.Patterns.MODE_PATTERN;
import com.haxademic.core.app.P;
import com.haxademic.core.app.PAppletHax;
import com.haxademic.core.math.MathUtil;
import com.haxademic.core.math.easing.LinearFloat;
import com.haxademic.core.math.easing.Penner;
import com.haxademic.core.render.FrameLoop;

import processing.core.PGraphics;
import processing.core.PShape;

public class VoronoiCell {
  
  protected PAppletHax p;
  protected PGraphics pg;

  protected int i;
  protected int age;
  protected LinearFloat scale = new LinearFloat(1, 0.25f);
  protected float x, y;
  protected float speedX, speedY;
  protected float accelX, accelY;
  protected PShape shape;
  protected MODE_PATTERN curMode;
  protected MODE_PATTERN queuedMode;

  VoronoiCell(int i, float hoffOrthoFactor) {
    p = (PAppletHax) P.p;
    pg = p.pg;

    this.i = i;
    this.x = MathUtil.randRange(0, pg.width);
    this.y = MathUtil.randRange(0, pg.height);
    this.speedX = 0; 
    this.speedY = 0;
    this.accelX = 1; 
    this.accelY = 1;
    buildShape(hoffOrthoFactor);
    setStartPosition();
  }

  protected void buildShape(float hoffOrthoFactor) {
    float rads = 0;
    float segmentRads = P.TWO_PI / Patterns.CELL_DETAIL;
    float rFix = hoffOrthoFactor * 0.5f;

    // PShape group = p.createShape(P.GROUP);
    shape = p.createShape();
    shape.beginShape();
    shape.noStroke();
    shape.fill( p.random(0, 255));
    for (int i = 0; i < Patterns.CELL_DETAIL; i++) {
      rads = segmentRads * i;
      shape.vertex(0, 0, -rFix);
      shape.vertex(hoffOrthoFactor * P.cos(rads), hoffOrthoFactor * P.sin(rads), -hoffOrthoFactor);
      shape.vertex(hoffOrthoFactor * P.cos(rads + segmentRads), hoffOrthoFactor * P.sin(rads + segmentRads), -hoffOrthoFactor);
    }
    shape.endShape();
  }

  
  public VoronoiCell setPosition(float x, float y) {
    this.x = x;
    this.y = y; 
    return this;
  }
  public float x() { return x; }
  public float y() { return y; }

  public void draw() {
    // draw shape
    pg.push();
    shape.disableStyle();
    pg.fill(Patterns.rWithIndex(i), Patterns.gWithIndex(i), Patterns.bWithIndex(i));
    pg.translate(this.x, this.y, 0);
    float curScale = (scale.value() != 1) ? 
      Penner.easeInOutExpo(scale.value()) : 
      1;
    pg.scale(curScale, curScale, 1);
    pg.shape(shape);
    pg.pop();
  }

  public void advance(float globalSpeedMult) {
    checkRecycle();
    updateScale();
    updateMovement(globalSpeedMult);
  }

  public void nextPatternMode(MODE_PATTERN mode) {
    queuedMode = mode;
    scale.setDelay((int) p.random(0, 180)).setTarget(0);
  }
  
  protected void updateScale() {
    scale.setInc(0.01f);
    scale.update();
    checkSwitchModeWhenHidden();
  }

  protected void checkSwitchModeWhenHidden() {
    if(scale.value() == 0 && scale.target() == 0) {
      boolean modeChanged = curMode != queuedMode; 
      curMode = queuedMode;
      scale.setTarget(1);
      if(modeChanged) {
        setStartPosition(); // 
      } else {
        recycle(); // if we're running the same mode, just recycle the cell to a new starting position
      }
    }
  }

  protected void updateMovement(float globalSpeedMult) {
//			if(curSystemMode != SYSTEM_MODE.BE_FREE) return;
    // general speed/position update
    this.speedX *= this.accelX;
    this.speedY *= this.accelY;
    this.x += this.speedX * globalSpeedMult;
    this.y += this.speedY * globalSpeedMult;

    if (curMode == MODE_PATTERN.WATERFALL) {
      float heightProgress = this.y / pg.height;
      this.x += P.sin(i + heightProgress) * heightProgress;
    }
  }

  protected void setStartPosition() {
    age = 0;

    if(curMode == MODE_PATTERN.WATERFALL) {
      this.x = MathUtil.randRange(0, pg.width);
      this.y = MathUtil.randRange(0, pg.height);
      this.speedY = p.random(0.25f, 1f);
      this.speedX = 0f;
      this.accelY = 1 + MathUtil.randRangeDecimal(0.005f, 0.01f);
      this.accelX = 1f;
    }
    if(curMode == MODE_PATTERN.RINGS) {
      float numVertices = 28;
      float segmentRads = P.TWO_PI / numVertices;
      float rads = i * segmentRads;
      float radius = P.floor(i / numVertices) * segmentRads * 250f;
      float offsetX = FrameLoop.noiseLoop(0.9f, i) * 0.1f;
      float offsetY = FrameLoop.noiseLoop(0.9f, i) * 0.1f;
      float offsetScale = FrameLoop.noiseLoop(0.9f, i * 2) * 0.4f;
      radius *= 1f + offsetScale;
      setPosition(pg.width / 2 + P.cos(rads + offsetX) * radius, pg.height / 2 + P.sin(rads + offsetY) * radius);
      this.speedX = P.cos(rads) * 0.6f;
      this.speedY = P.sin(rads) * 0.6f;
      this.accelY = 1f;
      this.accelX = 1f;
    }
    if(curMode == MODE_PATTERN.SPIRAL) {
      float segmentRads = P.TWO_PI / 36;
      float rads = p.frameCount * 0.004f + i * segmentRads;
      float radius = i * 1.5f;
      if (i % 2 == 0) {
        setPosition(pg.width / 2 + P.cos(rads) * radius, pg.height / 2 + P.sin(rads) * radius);
      } else {
        setPosition(pg.width / 2 + P.cos(-rads) * radius * 1.1f, pg.height / 2 + P.sin(-rads) * radius * 1.1f);
      }
      this.speedX = P.cos(rads) * 0.6f;
      this.speedY = P.sin(rads) * 0.6f;
      this.accelY = 1f;
      this.accelX = 1f;
    }
    if(curMode == MODE_PATTERN.GRID) {
      int gridRes = P.floor(P.sqrt(Patterns.NUM_CELLS));
      float spacingH = pg.width / gridRes * 1.1f;
      float spacingV = pg.height / gridRes * 1.1f;
      float xIndex = MathUtil.gridXFromIndex(i, gridRes);
      float yIndex = MathUtil.gridYFromIndex(i, gridRes);
      if (xIndex % 2 == 0) {
        xIndex -= 0.5f;
        yIndex += 0.5f;
      }
      if (xIndex % 3 == 0) {
        xIndex += 0.5f;
        yIndex += 0.5f;
      }
      this.speedY = 0.2f;
      this.speedX = 0f;
      this.accelY = 1f;
      this.accelX = 1f;
      setPosition(xIndex * spacingH, yIndex * spacingV);
    }
  }

  protected void checkRecycle() {
    if(curMode == MODE_PATTERN.WATERFALL) {
      if (this.y > pg.height * 1.25f) {
        scale.setTarget(0);
      }
    }
    if(curMode == MODE_PATTERN.RINGS || curMode == MODE_PATTERN.SPIRAL) {
      if(MathUtil.getDistance(this.x, this.y, pg.width / 2, pg.height / 2) > pg.width * 0.8f) {
        scale.setTarget(0);
      }
    }
  }
  
  protected void recycle() {
    if(curMode == MODE_PATTERN.WATERFALL) {
      this.x = MathUtil.randRange(0, pg.width);
      this.y = -pg.height * 0.2f;
      this.speedY = p.random(0.25f, 1f);
      this.accelY = 1 + MathUtil.randRangeDecimal(0.01f, 0.015f);
    }
    if(curMode == MODE_PATTERN.RINGS || curMode == MODE_PATTERN.SPIRAL) {
      setPosition(pg.width / 2, pg.height / 2);
    }
  }

}
