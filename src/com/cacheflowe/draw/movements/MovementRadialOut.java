package com.cacheflowe.draw.movements;

import com.cacheflowe.draw.VoronoiCell;
import com.haxademic.core.app.P;
import com.haxademic.core.math.MathUtil;

import processing.core.PGraphics;

public class MovementRadialOut
implements IMovement {

  public String toString() {
    return "Radial Out";
  }

  public void initSpeed(VoronoiCell cell, PGraphics pg) {
    float speed = P.p.random(1f, 2.5f);
    float curRads = cell.rads + MathUtil.randRangeDecimal(-0.05f, 0.05f);
    cell.speedX = P.cos(curRads) * speed;
    cell.speedY = P.sin(curRads) * speed;
    cell.accelY = 1f;
    cell.accelX = 1f;
  }

  public void checkRecycle(VoronoiCell cell, PGraphics pg) {
    if(MathUtil.getDistance(cell.x, cell.y, pg.width / 2, pg.height / 2) > pg.width * 0.8f) {
      cell.hide();
    }
  }

  public boolean recycle(VoronoiCell cell, PGraphics pg) {
    cell.setPosition(pg.width / 2, pg.height / 2);
    return true;
  }
  
}
