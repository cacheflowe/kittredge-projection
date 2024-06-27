// by cacheflowe

#ifdef GL_ES
precision mediump float;
precision mediump int;
#endif

#define PROCESSING_TEXTURE_SHADER

varying vec4 vertColor;
varying vec4 vertTexCoord;

uniform sampler2D texture;
uniform float time = 0.;


float rgbToGray(vec4 rgba) {
	const vec3 W = vec3(0.2125, 0.7154, 0.0721);
  return dot(rgba.xyz, W);
}

void main() {
  vec4 color = texture2D(texture, vertTexCoord.xy);
  float luma = rgbToGray(color);
  float colorized = 0.5 + 0.5 * sin(time * 10. + luma * 300.f);
  gl_FragColor = vec4(colorized, colorized, colorized, color.a);
	// gl_FragColor = vec4(luma, luma, luma, 1.); // debug view
}
