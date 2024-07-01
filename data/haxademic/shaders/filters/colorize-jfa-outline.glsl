// by cacheflowe

#ifdef GL_ES
precision mediump float;
precision mediump int;
#endif

#define PROCESSING_TEXTURE_SHADER

varying vec4 vertColor;
varying vec4 vertTexCoord;

uniform sampler2D texture;

uniform float targetLuma = 0.002;
uniform float targetWidth = 0.003;

#define TWO_PI 6.28318530718

float rgbToGray(vec4 rgba) {
	const vec3 W = vec3(0.2125, 0.7154, 0.0721);
  return dot(rgba.xyz, W);
}

float remap(float value, float low1, float high1, float low2, float high2) {
  return low2 + (value - low1) * (high2 - low2) / (high1 - low1);
}

void main() {
  vec4 color = texture2D(texture, vertTexCoord.xy);
  float luma = rgbToGray(color);
  float distToTarget = distance(luma, targetLuma) * (1.0 / targetWidth);
  distToTarget = 1. - distToTarget;
  distToTarget = smoothstep(0.2, 0.8, distToTarget);
  float colorized = distToTarget;
  gl_FragColor = vec4(colorized, colorized, colorized, color.a);
}
