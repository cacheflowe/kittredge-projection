package com.cacheflowe;

import com.cacheflowe.arrangements.IArrangement;
import com.cacheflowe.movements.IMovement;
import com.haxademic.core.app.P;
import com.haxademic.core.app.PAppletHax;
import com.haxademic.core.math.MathUtil;
import com.haxademic.core.math.easing.LinearFloat;
import com.haxademic.core.math.easing.Penner;

import processing.core.PGraphics;
import processing.core.PShape;

public class VoronoiCell {
  
  protected PAppletHax p;
  protected PGraphics pg;

  public int i;
  public int age;
  protected LinearFloat scale = new LinearFloat(1, 0.25f);
  public float rads;
  public float x, y;
  public float speedX, speedY;
  public float accelX, accelY;
  
  protected PShape shape;

  protected IArrangement arrangement;
  protected IArrangement queuedArrangement;
  protected IMovement movement;
  protected IMovement queuedMovement;

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
    arrangement = queuedArrangement = Patterns.arrangements[0];
    movement = queuedMovement = Patterns.movements[0];
    updateStartArrangement();
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
    updateScale();
    updateMovement(globalSpeedMult);
    movement.checkRecycle(this, pg);
  }

  public void nextPatternMode(IArrangement newArrangement, IMovement newMovement) {
    queuedArrangement = newArrangement;
    queuedMovement = newMovement;
    scale.setDelay((int) p.random(0, 180)).setTarget(0);
  }
  
  protected void updateScale() {
    scale.setInc(0.0085f);
    scale.update();
    checkSwitchModeWhenHidden();
  }

  public void hide() {
    scale.setTarget(0);
  }

  public boolean isFullyHidden() {
    return scale.value() == 0 && scale.target() == 0;
  }

  public boolean isShowing() {
    return scale.value() == 1;
  }

  protected void checkSwitchModeWhenHidden() {
    if(isFullyHidden()) {
      boolean modeChanged = arrangement != queuedArrangement; 
      arrangement = queuedArrangement;
      movement = queuedMovement;
      if(modeChanged) {
        updateStartArrangement();
        movement.initSpeed(this, pg);
        scale.setTarget(1);
      } else {
        boolean recycled = movement.recycle(this, pg); // if we're running the same mode, just recycle the cell to a new starting position
        if(recycled) scale.setTarget(1);
      }
    }
  }

  protected void updateMovement(float globalSpeedMult) {
    // boolean isHiding = scale.target() == 0 && Patterns.curSystemMode == Patterns.SYSTEM_MODE.COLLECT;
    boolean isWaiting = scale.target() == 1 && Patterns.curSystemMode == Patterns.SYSTEM_MODE.COLLECT; // prevent cells from moving before they're done collecting
    if(globalSpeedMult > 0 && !isWaiting) {
      this.speedX *= this.accelX;
      this.speedY *= this.accelY;
      this.x += this.speedX * globalSpeedMult;
      this.y += this.speedY * globalSpeedMult;
    }
  }

  protected void updateStartArrangement() {
    age = 0;
    rads = p.random(0, P.TWO_PI); // randomize in case it's not used by one of the IMovement objects
    arrangement.layout(this, pg);
  }
  
}
