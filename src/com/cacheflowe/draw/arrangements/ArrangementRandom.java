package com.cacheflowe.draw.arrangements;

import com.cacheflowe.draw.VoronoiCell;
import com.haxademic.core.app.P;
import com.haxademic.core.math.MathUtil;

import processing.core.PGraphics;

public class ArrangementRandom
implements IArrangement {

  public String toString() {
    return "Random";
  }

  public void layout(VoronoiCell cell, PGraphics pg) {
    cell.setPosition(
      P.map(P.p.noise(cell.i), 0.3f, 0.7f, 0, pg.width),
      P.map(P.p.noise(cell.i + 1000), 0.3f, 0.7f, 0, pg.height)
    );
    cell.rads = MathUtil.getRadiansToTarget(pg.width/2, pg.height/2, cell.x, cell.y);
  }
}
