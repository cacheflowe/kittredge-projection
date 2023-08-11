package com.cacheflowe.draw.movements;

import com.cacheflowe.draw.VoronoiCell;
import com.haxademic.core.app.P;
import com.haxademic.core.math.MathUtil;

import processing.core.PGraphics;

public class MovementGrid
implements IMovement {

  public String toString() {
    return "Grid";
  }

  public void initSpeed(VoronoiCell cell, PGraphics pg) {
    int rand = MathUtil.randRange(0, 3);
    cell.rads = rand * P.HALF_PI;
    cell.rads += MathUtil.randRangeDecimal(-0.05f, 0.05f);
    float speed = MathUtil.randRangeDecimal(1, 2);
    cell.speedX = P.cos(cell.rads) * speed;
    cell.speedY = P.sin(cell.rads) * speed;
    cell.accelX = 1f;
    cell.accelY = 1f;
  }

  public void checkRecycle(VoronoiCell cell, PGraphics pg) {
    if (cell.speedX > 0 && cell.x > pg.width * 1.1f) {
      cell.hide();
    } else if (cell.speedX < 0 && cell.x < pg.width * -0.1f) {
      cell.hide();
    } else if (cell.speedY > 0 && cell.y > pg.height * 1.1f) {
      cell.hide();
    } else if (cell.speedY < 0 && cell.y < pg.height * -0.1f) {
      cell.hide();
    }
  }
  
  public boolean recycle(VoronoiCell cell, PGraphics pg) {
    if (cell.speedX > 0 && cell.x > pg.width * 1.1f) {
      cell.x = -pg.width * 0.1f;
    } else if (cell.speedX < 0 && cell.x < pg.width * -0.1f) {
      cell.x = pg.width * 1.1f;
    } else if (cell.speedY > 0 && cell.y > pg.height * 1.1f) {
      cell.y = -pg.height * 0.1f;
    } else if (cell.speedY < 0 && cell.y < pg.height * -0.1f) {
      cell.y = pg.height * 1.1f;
    }
    return true;
  }
}
