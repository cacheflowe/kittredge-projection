package com.cacheflowe.draw.arrangements;

import com.cacheflowe.draw.VoronoiCell;

import processing.core.PGraphics;

public interface IArrangement {
  public void layout(VoronoiCell cell, PGraphics pg);
}
