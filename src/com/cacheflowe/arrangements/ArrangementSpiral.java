package com.cacheflowe.arrangements;

import com.cacheflowe.VoronoiCell;
import com.haxademic.core.app.P;

import processing.core.PGraphics;

public class ArrangementSpiral
implements IArrangement {
  
  public String toString() {
    return "Spiral";
  }

  public void layout(VoronoiCell cell, PGraphics pg) {
    float segmentRads = P.TWO_PI / 36;
    cell.rads = cell.i * segmentRads;
    float radius = cell.i * 1.5f;
    if (cell.i % 2 == 0) {
      cell.setPosition(
        pg.width / 2 + P.cos(cell.rads) * radius, 
        pg.height / 2 + P.sin(cell.rads) * radius
      );
    } else {
      cell.setPosition(
        pg.width / 2 + P.cos(-cell.rads) * radius * 1.25f, 
        pg.height / 2 + P.sin(-cell.rads) * radius * 1.25f
      );
    }
  }
}
