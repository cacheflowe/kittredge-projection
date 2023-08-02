package com.cacheflowe.arrangements;

import com.cacheflowe.VoronoiCell;

import processing.core.PGraphics;

public interface IArrangement {
  public void layout(VoronoiCell cell, PGraphics pg);
}
