package com.cacheflowe.draw.movements;

import com.cacheflowe.draw.VoronoiCell;

import processing.core.PGraphics;

public interface IMovement {
  public void initSpeed(VoronoiCell cell, PGraphics pg);
  public void checkRecycle(VoronoiCell cell, PGraphics pg);
  public boolean recycle(VoronoiCell cell, PGraphics pg);
}
