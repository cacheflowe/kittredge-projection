package com.cacheflowe.draw.arrangements;

import com.cacheflowe.draw.VoronoiCell;
import com.haxademic.core.app.P;
import com.haxademic.core.math.MathUtil;

import processing.core.PGraphics;

public class ArrangementGridFiveByFive
implements IArrangement {
  
  public String toString() {
    return "Grid Five By Five";
  }

  public void layout(VoronoiCell cell, PGraphics pg) {
    // make a 5x5 grid around windows
    int cellCount = 5;
    int cellDiv = cellCount - 1;
    float xIndex = MathUtil.randIndex(cellCount);
    float yIndex = MathUtil.randIndex(cellCount);
    float x = MathUtil.randRange(0, pg.width);
    float y = MathUtil.randRange(0, pg.height);
    
    // snap to grid on one axis or the other
    boolean vert = MathUtil.randBoolean();
    if(vert) {
      x = xIndex * pg.width / cellDiv;
      cell.rads = MathUtil.randBoolean() ? P.HALF_PI : -P.HALF_PI;
    } else {
      y = yIndex * pg.height / cellDiv;
      cell.rads = MathUtil.randBoolean() ? P.PI : 0;
    }
    
    // randomize slightly off gird
    float offset = pg.width * 0.005f;
    x += MathUtil.randRangeDecimal(-offset, offset);
    y += MathUtil.randRangeDecimal(-offset, offset);


    cell.setPosition(x, y);
  }
}
