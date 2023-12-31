package com.cacheflowe.draw.arrangements;

import com.cacheflowe.draw.Patterns;
import com.cacheflowe.draw.VoronoiCell;
import com.haxademic.core.app.P;
import com.haxademic.core.math.MathUtil;

import processing.core.PGraphics;

public class ArrangementGrid
implements IArrangement {
  
  public String toString() {
    return "Grid";
  }

  public void layout(VoronoiCell cell, PGraphics pg) {
    int gridRes = P.floor(P.sqrt(Patterns.NUM_CELLS));
    float spacingH = pg.width / gridRes * 1.1f;
    float spacingV = pg.height / gridRes * 1.1f;
    float xIndex = MathUtil.gridXFromIndex(cell.i, gridRes);
    float yIndex = MathUtil.gridYFromIndex(cell.i, gridRes);
    if (xIndex % 2 == 0) {
      xIndex -= 0.25f;
      yIndex += 0.25f;
    }
    if (xIndex % 3 == 0) {
      xIndex += 0.25f;
      yIndex += 0.25f;
    }
    cell.setPosition(xIndex * spacingH, yIndex * spacingV);
  }
}
