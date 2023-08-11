package com.cacheflowe.draw.movements;

import com.cacheflowe.draw.VoronoiCell;
import com.haxademic.core.app.P;
import com.haxademic.core.math.MathUtil;

import processing.core.PGraphics;

public class MovementInToCenterVertical
implements IMovement {

  public String toString() {
    return "InToCenterVertical";
  }

  public void initSpeed(VoronoiCell cell, PGraphics pg) {
    cell.speedX = MathUtil.randRangeDecimal(1, 2);
    if(cell.x > pg.width / 2) cell.speedX *= -1;
    cell.speedY = P.map(P.p.noise(cell.i), 0, 1, -0.1f, 0.1f); // slight up/down
    cell.accelX = 1f;
    cell.accelY = 1f;
  }

  public void checkRecycle(VoronoiCell cell, PGraphics pg) {
    if(MathUtil.getDistance(cell.x, 0, pg.width / 2, 0) < pg.width * 0.09f) {
      cell.hide();
    }
  }
  
  public boolean recycle(VoronoiCell cell, PGraphics pg) {
    boolean isLeft = MathUtil.randBoolean();
    float randX = isLeft ? pg.width * -0.1f : pg.width * 1.1f;
    cell.setPosition(randX, P.map(P.p.noise(cell.i), 0.2f, 0.8f, 0, pg.height));
    initSpeed(cell, pg);
    return true;
  }
  
}
