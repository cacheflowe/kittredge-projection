package com.cacheflowe.draw.movements;

import com.cacheflowe.draw.VoronoiCell;
import com.haxademic.core.app.P;
import com.haxademic.core.math.MathUtil;

import processing.core.PGraphics;

public class MovementGridFiveByFive
implements IMovement {

  public String toString() {
    return "Grid Five By Five";
  }

  public void initSpeed(VoronoiCell cell, PGraphics pg) {
    int rand = MathUtil.randRange(0, 3);
    // cell.rads = rand * P.HALF_PI;
    // cell.rads += MathUtil.randRangeDecimal(-0.05f, 0.05f);
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
    // make a 5x5 grid inside windows
    int cellCount = 5;
    int cellDiv = cellCount - 1;
    float xIndex = MathUtil.randIndex(cellCount);
    float yIndex = MathUtil.randIndex(cellCount);
    float x = MathUtil.randRange(0, pg.width);
    float y = MathUtil.randRange(0, pg.height);
    
    // snap to grid on one axis or the other
    boolean vert = MathUtil.randBoolean();
    if (vert) {
      x = xIndex * pg.width / cellDiv;
      cell.rads = MathUtil.randBoolean() ? P.PI : 0;
    } else {
      y = yIndex * pg.height / cellDiv;
      cell.rads = MathUtil.randBoolean() ? P.HALF_PI : -P.HALF_PI;
    }
    
    // randomize slightly off grid
    float offset = pg.width * 0.005f;
    x += MathUtil.randRangeDecimal(-offset, offset);
    y += MathUtil.randRangeDecimal(-offset, offset);

    cell.setPosition(x, y);
    initSpeed(cell, pg);

    return true;
  }
}
