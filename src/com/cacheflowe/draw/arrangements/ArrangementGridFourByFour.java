package com.cacheflowe.draw.arrangements;

import com.cacheflowe.draw.VoronoiCell;
import com.haxademic.core.math.MathUtil;

import processing.core.PGraphics;

public class ArrangementGridFourByFour
implements IArrangement {
  
  public String toString() {
    return "Grid Four By Four";
  }

  public void layout(VoronoiCell cell, PGraphics pg) {
    // make a 4x4 grid inside windows
    int cellCount = 4;
    float cellSize = pg.width / cellCount;
    float xIndex = MathUtil.randIndex(cellCount);
    float yIndex = MathUtil.randIndex(cellCount);
    float x = cellSize/2 + xIndex * pg.width / cellCount;
    float y = cellSize/2 + yIndex * pg.height / cellCount;
        
    // randomize slightly off gird
    float offset = pg.width * 0.06f;
    x += MathUtil.randRangeDecimal(-offset, offset);
    y += MathUtil.randRangeDecimal(-offset, offset);

    cell.setPosition(x, y);
  }
}
