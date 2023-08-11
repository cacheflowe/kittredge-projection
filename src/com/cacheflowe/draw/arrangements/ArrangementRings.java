package com.cacheflowe.draw.arrangements;

import com.cacheflowe.draw.VoronoiCell;
import com.haxademic.core.app.P;
import com.haxademic.core.render.FrameLoop;

import processing.core.PGraphics;

public class ArrangementRings
implements IArrangement {
  
  public String toString() {
    return "Rings";
  }

  public void layout(VoronoiCell cell, PGraphics pg) {
      float numVertices = 28;
      float segmentRads = P.TWO_PI / numVertices;
      cell.rads = cell.i * segmentRads;
      float radius = P.floor(cell.i / numVertices) * segmentRads * 250f;
      float offsetX = 0;//FrameLoop.noiseLoop(0.9f, i) * 0.1f;
      float offsetY = 0;//FrameLoop.noiseLoop(0.9f, i) * 0.1f;
      float offsetScale = FrameLoop.noiseLoop(0.9f, cell.i * 2) * 0.4f;
      radius *= 1;//1f + offsetScale;
      cell.setPosition(
        pg.width / 2 + P.cos(cell.rads + offsetX) * radius, 
        pg.height / 2 + P.sin(cell.rads + offsetY) * radius
      );
  }
}
