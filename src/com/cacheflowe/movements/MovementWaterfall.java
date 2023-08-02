package com.cacheflowe.movements;

import com.cacheflowe.VoronoiCell;
import com.haxademic.core.app.P;
import com.haxademic.core.math.MathUtil;

import processing.core.PGraphics;

public class MovementWaterfall
implements IMovement {

  public String toString() {
    return "Waterfall";
  }

  public void initSpeed(VoronoiCell cell, PGraphics pg) {
    cell.speedX = 0f;
    cell.speedY = P.p.random(0.25f, 1f);
    cell.accelX = 1f;
    cell.accelY = 1 + MathUtil.randRangeDecimal(0.001f, 0.003f);
  }

  public void checkRecycle(VoronoiCell cell, PGraphics pg) {
    if (cell.y > pg.height * 1.25f) {
      cell.hide();
    }
  }
  
  public boolean recycle(VoronoiCell cell, PGraphics pg) {
    cell.x = MathUtil.randRange(0, pg.width);
    cell.y = -pg.height * 0.2f;
    initSpeed(cell, pg);
    return true;
  }
}
