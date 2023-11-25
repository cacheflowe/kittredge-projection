package com.cacheflowe.draw.holiday;

import java.util.ArrayList;
import java.util.Collections;

import com.haxademic.core.app.P;
import com.haxademic.core.app.PAppletHax;
import com.haxademic.core.data.constants.PBlendModes;
import com.haxademic.core.data.store.AppState;
import com.haxademic.core.data.store.IAppStoreListener;
import com.haxademic.core.debug.DebugView;
import com.haxademic.core.draw.color.Gradients;
import com.haxademic.core.draw.context.PG;
import com.haxademic.core.draw.context.PShaderHotSwap;
import com.haxademic.core.draw.filters.pshader.BlendTowardsTexture;
import com.haxademic.core.draw.filters.pshader.ContrastFilter;
import com.haxademic.core.draw.image.ImageUtil;
import com.haxademic.core.draw.shapes.PShapeUtil;
import com.haxademic.core.draw.textures.SimplexNoiseTexture;
import com.haxademic.core.file.FileUtil;
import com.haxademic.core.hardware.keyboard.KeyboardState;
import com.haxademic.core.math.MathUtil;
import com.haxademic.core.render.FrameLoop;
import com.haxademic.core.ui.UI;

import processing.core.PGraphics;
import processing.core.PImage;
import processing.core.PShape;
import processing.opengl.PShader;

public class Holiday 
implements IAppStoreListener {

  // TODO: 
  // - Add GPU snow layer
  //   - Add large snowflake particles layer
  // - What about a snowflake-packing animation?
  // - Transition between grid mode & snow mode
  // - Add christmas lights mode?


  protected PAppletHax p;
  protected PGraphics pg;

  protected SimplexNoiseTexture noise3d;
  protected SimplexNoiseTexture noiseDisplace;

  protected PGraphics map;
  protected PGraphics mapSmoothed;
  protected PImage[] images;
  protected PImage[] imagesSnow;

  protected int modeChanges = 0;
  protected String ICONS_MODE = "ICONS_MODE";
  protected String MAP_MODE = "MAP_MODE";
  protected String MAP_ROT = "MAP_ROT";
  protected String COLS = "COLS";

  protected int COLOR_GREEN = 0xff55ff55;
  protected int COLOR_RED = 0xffff6666;
  protected int COLOR_GOLD = 0xffFFD733;

  public Holiday() {
    p = (PAppletHax) P.p;
    pg = p.pg;
    P.store.addListener(this);
    init();
  }
  
  ////////////////////////////////////
  // Init 
  ////////////////////////////////////
  
  protected void init() {
    initHolidayIcons();
    initSnowflakePacking();
    initSnowGPU();
  }

  protected void initHolidayIcons() {
    buildSurfaces();
    images = loadImages("images/holiday");
    imagesSnow = loadImages("images/holiday/snowflakes");
    buildNoise();
    buildUI();
  }

  protected PImage[] loadImages(String imgPath) {
    ArrayList<PImage> imagesArr = FileUtil.loadImagesFromDir(FileUtil.getPath(imgPath), "png");
    Collections.shuffle(imagesArr);
    PImage[] imgArr = new PImage[imagesArr.size()];
    for (int i = 0; i < imagesArr.size(); i++) {
      imgArr[i] = imagesArr.get(i);
    }
    return imgArr;
  }

  protected void buildSurfaces() {
    map = PG.newPG(pg.width, pg.height);
    mapSmoothed = PG.newPG(pg.width, pg.height);
  }

  protected void buildNoise() {
    noise3d = new SimplexNoiseTexture(256, 256, true, true);
    noiseDisplace = new SimplexNoiseTexture(256, 256, true, true);
  }

  protected void buildUI() {
    UI.addTitle("Holiday");
    UI.addSlider(ICONS_MODE, 0, 0, 3, 1, false);
    UI.addSlider(MAP_MODE, 0, 0, 2, 1, false);
    UI.addSlider(MAP_ROT, 0, -P.TWO_PI, P.TWO_PI, 0.001f, false);
    UI.addSlider(COLS, 20, 10, 35, 4, false);
  }

  protected void drawPre(int frameCount) {
    if(UI.valueInt(ICONS_MODE) == 0 || UI.valueInt(ICONS_MODE) == 1) {
      updateNoise();
      drawMap();
    }
    
    DebugView.setTexture("noise3d", noise3d.texture());
    DebugView.setTexture("noiseDisplace", noiseDisplace.texture());
    DebugView.setTexture("map", map);
    DebugView.setTexture("mapSmoothed", mapSmoothed);
    
    updateMode();
    drawPreSnowGPU();
  }

  protected void updateMode() {
    // update overall mode
    if(FrameLoop.frameModMinutes(2) || KeyboardState.keyTriggered('m')) {
      modeChanges++;
      if(modeChanges % 8 < 2) {
        UI.setValue(ICONS_MODE, 0);
      } else if(modeChanges % 8 < 4) {
        UI.setValue(ICONS_MODE, 1);
      }  else if(modeChanges % 8 < 6) {
        UI.setValue(ICONS_MODE, 2);
      } else {
        UI.setValue(ICONS_MODE, 3);
      }
    }

    // update props for icon grid mode
    if(FrameLoop.frameModSeconds(30) || KeyboardState.keyTriggered(' ')) {
      UI.setRandomValueInt(MAP_MODE);
      UI.setValue(MAP_ROT, -P.TWO_PI + MathUtil.randRange(0, 7) * P.QUARTER_PI);
      UI.setValue(COLS, 10 + 4 * MathUtil.randRange(0, 4)); // up to 30
    }
  }

  protected void updateNoise() {
    noise3d.update(0.1f, P.sin(p.frameCount * 0.001f) * 0.07f, 0f, p.frameCount * 0.0003f);
    ContrastFilter.instance().setContrast(1.5f);
    ContrastFilter.instance().applyTo(noise3d.texture());
    
    noiseDisplace.update(1.1f, P.sin(p.frameCount * 0.001f) * 0.03f, 0f, p.frameCount * 0.005f);
  }

  protected void drawMap() {
    map.beginDraw();
    map.background(0);
    map.push();
    int col1 = p.color(127 + 127f * MathUtil.saw(p.frameCount * 0.001f));
    int col2 = p.color(127 + 127f * MathUtil.saw(p.frameCount * 0.001f + 0.6f));
    float size = P.max(map.width, map.height) * 2f;
		map.translate(map.width/2, map.height/2);
    map.rotate(UI.value(MAP_ROT));
    if(UI.valueInt(MAP_MODE) == 0) Gradients.linear(map, size, size, col1, col2);
    if(UI.valueInt(MAP_MODE) == 1) Gradients.radial(map, map.width * 2.0f, map.width * 2.0f, col1, col2, 100);
    if(UI.valueInt(MAP_MODE) == 2) ImageUtil.cropFillCopyImage(noise3d.texture(), map, true);
    map.pop();
    map.endDraw();
    
    // draw smoothed
    BlendTowardsTexture.instance().setSourceTexture(map);
    BlendTowardsTexture.instance().setBlendLerp(0.1f);
    BlendTowardsTexture.instance().applyTo(mapSmoothed);

    // prepare pixels for reading
    mapSmoothed.loadPixels();
    noiseDisplace.texture().loadPixels();
  }

  protected void drawPost(int frameCount) {
  }

  protected void draw(int frameCount) {
    drawSnowGPU();
    if(UI.valueInt(ICONS_MODE) == 0) drawIcons();
    if(UI.valueInt(ICONS_MODE) == 1) drawIcons();
    if(UI.valueInt(ICONS_MODE) == 2) drawSnowflakePacking();
    if(UI.valueInt(ICONS_MODE) == 3) drawSnowflakePacking();
  }

  protected void drawIcons() {
    // fade out bg, fade in icons
    // BrightnessStepFilter.instance().setBrightnessStep(-10/255f);
    // BrightnessStepFilter.instance().applyTo(pg);
    // PG.setPImageAlpha(pg, 0.5f);
    PG.setPImageAlpha(pg, 1f);
    PG.setDrawCenter(pg);

    // calc target grid
    float targetSize = pg.width / UI.valueInt(COLS);
    int cols = P.ceil(pg.width / targetSize);
    int rows = P.ceil(pg.height / targetSize);

    // always even number of rows/cols
    if(cols % 2 == 1) cols++;
    if(rows % 2 == 1) rows++;

    // get cell size
    float cellW = pg.width / cols;
    float cellH = pg.height / rows;

    // draw images
    PImage[] curImgs = (UI.valueInt(ICONS_MODE) == 0) ? images : imagesSnow;
    for (int i = 0; i < cols * rows; i++) {
      // grid layout
      int col = i % cols;
      int row = P.floor(i / cols);
      float x = col * cellW + (cellW / 2f);
      float y = row * cellH + (cellH / 2f);

      // use CPU noise (not used now)
      // float noise = p.noise(x * 0.05f, y * 0.05f, frameCount * 0.001f);
      // int idx = P.floor(noise * pImages.length);

      // use map pixel data from center of cell
      float sampleX = x / pg.width;
      float sampleY = y / pg.height;
      int pixelColor = ImageUtil.getPixelColorNorm(mapSmoothed, sampleX, sampleY);
      int mapColor = ImageUtil.getPixelColorNorm(noiseDisplace.texture(), sampleX, sampleY);
      float pixelLuma = p.brightness(pixelColor);
      float rot = p.green(mapColor);
      float scale = p.red(mapColor);
      float displRads = (p.green(mapColor) / 255f) * P.TWO_PI * 2f;
      float displRadius = (p.blue(mapColor) / 255f) * 4f;
      if(UI.valueInt(ICONS_MODE) == 1) displRadius *= 3;
      if(UI.valueInt(ICONS_MODE) == 1) rot *= 3;
      x += P.cos(displRads) * displRadius;
      y += P.sin(displRads) * displRadius;
      int idx = P.floor(P.map(pixelLuma, 0, 255, 0, curImgs.length - 1));

      // draw icon
      pg.push();
      pg.translate(x, y);
      pg.rotate(P.map(rot, 0, 255, -0.2f, 0.2f));
      scale = P.map(scale, 0, 255, 0.5f, 1.1f);
      if(UI.valueInt(ICONS_MODE) == 1) {
        if(pixelLuma % 60 < 20) {
          pg.tint(COLOR_GREEN);
        } else if(pixelLuma % 60 < 40) {
          pg.tint(COLOR_RED);
        }
      }
      pg.image(curImgs[idx], 0, 0, targetSize * scale, targetSize * scale);
      pg.pop();
    }
  }

  ////////////////////////////////////////////////////
  // AppStore listeners
  ////////////////////////////////////////////////////

  public void updatedNumber(String key, Number val) {
    // draw
    if(key.equals(AppState.ANIMATION_FRAME)) draw(val.intValue());
    if(key.equals(AppState.ANIMATION_FRAME_PRE)) drawPre(val.intValue());
    if(key.equals(AppState.ANIMATION_FRAME_POST)) drawPost(val.intValue());
  }
  public void updatedString(String key, String val) {}
  public void updatedBoolean(String key, Boolean val) {}
  public void updatedImage(String key, PImage val) {}
  public void updatedBuffer(String key, PGraphics val) {}


  ////////////////////////////////////////////////////
  // GPU Snow
  ////////////////////////////////////////////////////

  protected String SNOW_RENDER_WIDTH = "SNOW_RENDER_WIDTH"; 
	protected String SNOW_RENDER_HEIGHT = "SNOW_RENDER_HEIGHT"; 
	protected String SNOW_GLOBAL_SCALE = "SNOW_GLOBAL_SCALE"; 
	protected String SNOW_POINT_SCALE = "SNOW_POINT_SCALE"; 
	
	protected PShape particleMesh;
	protected PGraphics bufferPositions;
	protected PGraphics randomNumbers;
	protected SimplexNoiseTexture varianceNoise;
	protected PShader randomColorShader;
	protected PShaderHotSwap simulationShader;
	protected PGraphics bufferRenderedParticles;
	protected PShaderHotSwap particlesSimulationRenderShader;
	float simW = 128;
	float simH = 128;
	protected boolean particlesShouldRespawn = false;
		
	protected void initSnowGPU() {
		buildSimulationBuffers();
		buildSimulation();
		buildParticles();
		buildUISnow();
	}
	
	protected void buildUISnow() {
		UI.addTitle("SNOW Config");
		UI.addSlider(SNOW_RENDER_WIDTH, bufferRenderedParticles.width, 10, bufferRenderedParticles.width * 2, 5f, false);
		UI.addSlider(SNOW_RENDER_HEIGHT, bufferRenderedParticles.height, 10, bufferRenderedParticles.height * 2, 5f, false);
		UI.addSlider(SNOW_GLOBAL_SCALE, 1.1f, 0.1f, 5f, 0.01f, false);
		UI.addSlider(SNOW_POINT_SCALE, 1.25f, 0, 20, 0.01f, false);
	}
		
	protected void buildSimulationBuffers() {
		// build offscreen buffer (thing don't work the same on the main drawing surface)
		bufferRenderedParticles = PG.newPG32(pg.width, pg.height, false, false); // p.createGraphics(p.width, p.height, PRenderers.P3D);
		DebugView.setTexture("bufferRenderedParticles", bufferRenderedParticles);
	}
	
	protected void buildSimulation() {
		// determines rotation & scale in `textured-particles-vert.glsl`
		varianceNoise = new SimplexNoiseTexture(256, 256, true, true);
		
		// determines which texture to use for each particle
		randomNumbers = PG.newDataPG((int) simW, (int) simH);
		randomColorShader = p.loadShader(FileUtil.getPath("haxademic/shaders/textures/random-pixel-color.glsl"));
		randomNumbers.filter(randomColorShader);
		
		// build particle mover shader - uses displacement map to move particles
		bufferPositions = PG.newDataPG((int) simW, (int) simH);
		simulationShader = new PShaderHotSwap(FileUtil.getPath("haxademic/shaders/vertex/textured-particles-mover-snow-basic-frag.glsl"));
		resetParticlePositions();

		DebugView.setTexture("varianceNoise", varianceNoise.texture());
		DebugView.setTexture("bufferPositions", bufferPositions);
		DebugView.setTexture("randomNumbers", randomNumbers);
	}
	
	protected void buildParticles() {
		// Build points vertices
		particleMesh = PShapeUtil.texturedParticlesShapeForGPUData(simW, simH, 10, P.getImage("haxademic/images/particles/star_07.png"));
		
		// load shader
		particlesSimulationRenderShader = new PShaderHotSwap(
			FileUtil.getPath("haxademic/shaders/vertex/textured-particles-vert.glsl"),
			FileUtil.getPath("haxademic/shaders/vertex/textured-particles-frag.glsl")
		);
	}
	
	public void resetParticlePositions() {
		bufferPositions.beginDraw();
		bufferPositions.background(127);
		bufferPositions.endDraw();
		bufferPositions.filter(randomColorShader);
	}
	
	protected void drawPreSnowGPU() {
    if(KeyboardState.keyTriggered('s')) particlesShouldRespawn = true;
		if(particlesShouldRespawn) {
			resetParticlePositions();
			particlesShouldRespawn = false;
		}

		// update noise/randomness
		varianceNoise.update(2f, P.sin(p.frameCount * 0.01f) * 0.07f, 0f, p.frameCount * 0.004f);
		
		// update particle positions
		simulationShader.shader().set("directionMap", varianceNoise.texture());
		simulationShader.shader().set("ampMap", varianceNoise.texture());
		simulationShader.shader().set("amp", 0.004f); // * (0.5f + 0.3f * P.sin(p.frameCount/20f))); // P.map(p.mouseX, 0, p.width, 0.001f, 0.05f));

		simulationShader.update();
		bufferPositions.filter(simulationShader.shader());
		
		// update render shader
		particlesSimulationRenderShader.shader().set("displacementMap", varianceNoise.texture());
		particlesSimulationRenderShader.shader().set("positionMap", bufferPositions);
		particlesSimulationRenderShader.shader().set("randomMap", randomNumbers);
		particlesSimulationRenderShader.shader().set("texture1", imagesSnow[0]);
		particlesSimulationRenderShader.shader().set("texture2", imagesSnow[2]);
		particlesSimulationRenderShader.shader().set("texture3", imagesSnow[4]);
		particlesSimulationRenderShader.shader().set("width", (float) UI.valueEased(SNOW_RENDER_WIDTH));
		particlesSimulationRenderShader.shader().set("height", (float) UI.valueEased(SNOW_RENDER_HEIGHT));
		particlesSimulationRenderShader.shader().set("rotateAmp", 1f);
		particlesSimulationRenderShader.shader().set("globalScale", UI.valueEased(SNOW_GLOBAL_SCALE));
    UI.setValue(SNOW_POINT_SCALE, FrameLoop.osc(0.001f, 0.7f, 1.6f));
		particlesSimulationRenderShader.shader().set("pointSize", UI.valueEased(SNOW_POINT_SCALE));
		particlesSimulationRenderShader.update();

		// render particles
		bufferRenderedParticles.beginDraw();
		PG.setDrawFlat2d(bufferRenderedParticles, true);
		bufferRenderedParticles.clear();
		PG.setCenterScreen(bufferRenderedParticles);
		PG.setDrawCorner(bufferRenderedParticles);
//		PG.basicCameraFromMouse(bufferRenderedParticles);
		
		// draw vertex points. strokeWeight w/disableStyle works here for point size
		bufferRenderedParticles.blendMode(PBlendModes.ADD);
		bufferRenderedParticles.shader(particlesSimulationRenderShader.shader());  	// update positions
		bufferRenderedParticles.shape(particleMesh);					// draw vertices
		bufferRenderedParticles.resetShader();
		bufferRenderedParticles.endDraw();
  }

	protected void drawSnowGPU() {
		// draw buffer to screen
    pg.push();
    PG.setCenterScreen(pg);
		pg.blendMode(PBlendModes.ADD);
		pg.image(bufferRenderedParticles, 0, 0);
		pg.blendMode(PBlendModes.BLEND);
    pg.pop();
	}



  ////////////////////////////////////////////////////
  // Snowflake packing
  ////////////////////////////////////////////////////

	protected ArrayList<GrowParticle> particles;
  protected int maxSnowflakes = 3000;
  protected int maxSnowSize = 500;
  protected int maxSnowAge = 300;
	
	protected void initSnowflakePacking() {
		particles = new ArrayList<GrowParticle>();
	}

	protected void drawSnowflakePacking() {	
		if(particles.size() < maxSnowflakes) { //  && p.frameCount <= 250
			for (int i = 0; i < 3; i++) {
        particles.add(new GrowParticle());
			}
		}
		
		// draw particles
		for (int i = 0; i < particles.size(); i++) {
			particles.get(i).update();
		}
		
		// clean up dead particles
		for (int i = particles.size() - 1; i > 0; i--) {
			if(particles.get(i).canRemove()) {
				particles.remove(i);
			}
		}
	}
	
	public class GrowParticle{
		
		protected float x;
		protected float y;
		protected float size;
		protected boolean growing;
    protected int index = 0;
		protected boolean active;
		protected int age;
		protected int ageDeath = maxSnowAge;
		
		public GrowParticle() {
			size = 0;
			active = true;
			growing = true;
      age = 0;
			x = p.random(0, pg.width);
			y = p.random(0, pg.height);
      index = MathUtil.randIndex(imagesSnow.length);
      ageDeath = MathUtil.randRange(180, maxSnowAge);
			int attempts = 0;

			// find an x/y in the circle, with a non-empty color, and not too close to another circle
			while(isCloseToAnother() == true) {
				x = p.random(0, pg.width);
				y = p.random(0, pg.height);
				attempts++;
				if(attempts > 200) {
					active = false;
					growing = false;
					break;
				}
			}
		}
		
		public float x() { return x; }
		public float y() { return y; }
		public float size() { return size; }
		public float radius() { return size/2f; }
		public boolean active() { return active; }
		public boolean growing() { return growing; }
		public boolean canRemove() { return active == false && size <= 0; }
		
		public void update() {
      updateSizeAndAge();
      drawParticle();
    }

    protected void updateSizeAndAge() {
      // check for collisions to stop growing
			if(growing == true) {
				for (int i = 0; i < particles.size(); i++) {
					if(particles.get(i) != this && particles.get(i).isTouching(this) == true) {
						growing = false;
					}
				}

        // check for out of bounds on screen
        if(x - radius() < 0 || x + radius() > pg.width || y - radius() < 0 || y + radius() > pg.height) {
          growing = false;
        }
        // stop growing at max size
        if(radius() > maxSnowSize) growing = false;
      }
      // cancel out if we wouldn't grow past a certain size
			if(growing == false && radius() < 10) active = false;
      // scale up/down
			if(growing == true) size += 3 + P.sin(index);
			if(growing == false && active == false && size > 0) size -= 2;
    }

    protected void drawParticle() {
      y += 0.5f;
      // draw snowflake
			float snowScale = 1.25f; // because the textures have padding
			PG.setDrawCenter(pg);
			pg.push();
			pg.translate(x, y);
      pg.rotate(P.sin(index + p.frameCount * 0.002f));
      if(UI.valueInt(ICONS_MODE) == 3) {
        if(index < 2) {
          pg.tint(COLOR_GREEN);
        } else if(index < 4) {
          pg.tint(COLOR_RED);
        } else if(index < 5) {
          pg.tint(COLOR_GOLD);
        }
      }
			pg.image(imagesSnow[index], 0, 0, size * snowScale, size * snowScale);
			pg.pop();

      // check age
      age++;
      if(age > ageDeath) active = false;
    }
		
		public boolean isTouching(GrowParticle otherParticle) {
			if(MathUtil.getDistance(x, y, otherParticle.x(), otherParticle.y()) < (radius() + otherParticle.radius())) 
				return true;
			else
				return false;
		}
		
		public boolean isCloseToAnother() {
			for (int i = 0; i < particles.size(); i++) {
				if(particles.get(i) != this && particles.get(i).isClose(this) == true) {
					return true;
				}
			}
			return false;
		}
		
		public boolean isClose(GrowParticle otherParticle) {
			if(MathUtil.getDistance(x, y, otherParticle.x(), otherParticle.y()) - 2 < (radius() + otherParticle.radius())) 
				return true;
			else
				return false;
		}
	}


}
