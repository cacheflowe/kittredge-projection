package com.cacheflowe.draw.newviz;

import com.haxademic.core.math.easing.LinearFloat;

public class PennerFloat {

  protected float prevVal;
  protected float nextVal;
  protected LinearFloat val;

  public PennerFloat() {
    this(0, 0.025f);
  }

  public PennerFloat(float initVal) {
    this(initVal, 0.025f);
  }

  public PennerFloat(float initVal, float inc) {
    val = new LinearFloat(initVal, inc);
  }

  public PennerFloat target(float newVal) {
    this.prevVal = this.val.value();
    this.nextVal = newVal;
    float inc = Math.abs(newVal - prevVal) * 0.002f;
    val.setInc(inc);
    val.setTarget(newVal);
    return this;
  }

  public PennerFloat update() {
    val.update();
    return this;
  }

  public float value() {
    return val.value();
  }
}