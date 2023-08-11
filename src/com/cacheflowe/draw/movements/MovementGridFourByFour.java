package com.cacheflowe.draw.movements;

import com.cacheflowe.draw.VoronoiCell;
import com.haxademic.core.app.P;
import com.haxademic.core.math.MathUtil;

import processing.core.PGraphics;

public class MovementGridFourByFour
implements IMovement {

  public String toString() {
    return "Grid Four By Four";
  }

  public void initSpeed(VoronoiCell cell, PGraphics pg) {
    cell.rads = MathUtil.randRange(0, P.TWO_PI);
    float speed = MathUtil.randRangeDecimal(0.1f, 0.2f);
    cell.speedX = P.cos(cell.rads) * speed;
    cell.speedY = P.sin(cell.rads) * speed;
    cell.accelX = 1f;
    cell.accelY = 1f;
  }

  public void checkRecycle(VoronoiCell cell, PGraphics pg) {
    if((cell.age + cell.i) % 800 == 0) { // stagger recycling, but also age could be older, so we'll catch it on a modulo
      cell.hide();
    }
  }
  
  public boolean recycle(VoronoiCell cell, PGraphics pg) {
    // make a 4x4 grid inside windows
    int cellCount = 4;
    float cellSize = pg.width / cellCount;
    float xIndex = MathUtil.randIndex(cellCount);
    float yIndex = MathUtil.randIndex(cellCount);
    float x = cellSize / 2 + xIndex * pg.width / cellCount;
    float y = cellSize / 2 + yIndex * pg.height / cellCount;

    // randomize slightly off gird
    float offset = pg.width * 0.06f;
    x += MathUtil.randRangeDecimal(-offset, offset);
    y += MathUtil.randRangeDecimal(-offset, offset);
    cell.setPosition(x, y);

    return true;
  }
}
