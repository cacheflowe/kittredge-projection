package com.cacheflowe.movements;

import com.cacheflowe.VoronoiCell;
import com.haxademic.core.app.P;
import com.haxademic.core.math.MathUtil;

import processing.core.PGraphics;

public class MovementOutFromCenterVertical
implements IMovement {

  public String toString() {
    return "OutFromCenterVertical";
  }

  public void initSpeed(VoronoiCell cell, PGraphics pg) {
    cell.speedX = MathUtil.randRangeDecimal(1, 4);
    if(cell.x < pg.width / 2) cell.speedX *= -1;
    cell.speedY = P.map(P.p.noise(cell.i), 0, 1, -0.1f, 0.1f); // slight up/down
    cell.accelX = 1f;
    cell.accelY = 1f;
  }

  public void checkRecycle(VoronoiCell cell, PGraphics pg) {
    if(MathUtil.getDistance(cell.x, 0, pg.width / 2, 0) > pg.width * 0.8f) {
      cell.hide();
    }
  }
  
  public boolean recycle(VoronoiCell cell, PGraphics pg) {
    cell.setPosition(pg.width / 2, P.map(P.p.noise(cell.i), 0.2f, 0.8f, 0, pg.height));
    initSpeed(cell, pg);
    cell.speedX = (MathUtil.randBoolean()) ? cell.speedX : -cell.speedX;
    return true;
  }
  
}
