package com.cacheflowe.draw.movements;

import com.cacheflowe.draw.VoronoiCell;
import com.haxademic.core.app.P;
import com.haxademic.core.math.MathUtil;

import processing.core.PGraphics;

public class MovementWaterfallUp
implements IMovement {

  public String toString() {
    return "WaterfallUp";
  }

  public void initSpeed(VoronoiCell cell, PGraphics pg) {
    cell.speedX = MathUtil.randRangeDecimal(-0.1f, 0.1f);
    cell.speedY = P.p.random(-0.25f, -1f);
    cell.accelX = 1f;
    cell.accelY = 1 + MathUtil.randRangeDecimal(0.001f, 0.003f);
  }

  public void checkRecycle(VoronoiCell cell, PGraphics pg) {
    if (cell.y < pg.height * -0.1f) {
      cell.hide();
    }
  }
  
  public boolean recycle(VoronoiCell cell, PGraphics pg) {
    cell.x = MathUtil.randRange(0, pg.width);
    cell.y = pg.height * 1.2f;
    initSpeed(cell, pg);
    return true;
  }
}
