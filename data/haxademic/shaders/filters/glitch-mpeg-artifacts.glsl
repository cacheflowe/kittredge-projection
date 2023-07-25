// glitch shader forked from: https://www.shadertoy.com/view/Md2GDw

#ifdef GL_ES
precision mediump float;
precision mediump int;
#endif

#define PROCESSING_TEXTURE_SHADER

uniform sampler2D texture;
uniform vec2 texOffset;
varying vec4 vertColor;
varying vec4 vertTexCoord;

uniform float time = 0;
uniform float amp = 0.2;

// noise from https://gist.github.com/patriciogonzalezvivo/670c22f3966e662d2f83

float rand(float n){return fract(sin(n) * 43758.5453123);}
float rand(vec2 n) {
	return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);
}
float noise(float p){
	float fl = floor(p);
  float fc = fract(p);
	return mix(rand(fl), rand(fl + 1.0), fc);
}

float noise(vec2 n) {
	const vec2 d = vec2(0.0, 1.0);
  	vec2 b = floor(n), f = smoothstep(vec2(0.0), vec2(1.0), fract(n));
	return mix(mix(rand(b), rand(b + d.yx), f.x), mix(rand(b + d.xy), rand(b + d.yy), f.x), f.y);
}

// noise3d by cacheflowe :-/
vec3 noise3d(vec2 uv) {
    uv *= 1.;	// * 300 looks like real RGB noise
    return vec3(
    	noise(uv.xy),
        rand(noise(uv.yx)),
        noise(uv.yx)
    );
}

float luminance(vec4 color) {
    return ( (color.r * 0.3) + (color.g * 0.6) + (color.b * 0.1) ) * color.a;
}


void main() {
    vec2 uv = vertTexCoord.xy;
  	vec2 block = floor(uv.xy / vec2(16));
  	vec2 uv_noise = block / vec2(64);
  	uv_noise += floor(vec2(time) * vec2(1234.0, 3543.0)) / vec2(64);

  	float block_thresh = mod(time * 6.0453, 1.);
  	float line_thresh = mod(time * 1236.0453, 1.);

  	vec2 uv_r = uv, uv_g = uv, uv_b = uv;

  	// glitch some blocks and lines
  	if (noise3d(uv_noise).r * 0.9 > block_thresh) {

  		vec2 dist = (fract(uv_noise) - 0.025) * 0.04;
  		uv_r += dist * 10.1;
  		uv_g += dist * 10.2;
  		uv_b += dist * 10.125;
  	}

    vec4 color = texture2D(texture, uv);
    vec4 glitchColor = texture2D(texture, uv);
  	glitchColor.r = texture2D(texture, uv_r).r;
  	glitchColor.g = texture2D(texture, uv_g).g;
  	glitchColor.b = texture2D(texture, uv_b).b;

  	// lose luma for some blocks
  	if (noise3d(uv_noise).g * 0.2 > block_thresh)
  		glitchColor.rgb = glitchColor.ggg;

  	// desaturate blocks/lines
    if (noise3d(uv_noise).b < 0.15) {
  		glitchColor.rgb = vec3(luminance(color));
    }

  	// interleave lines in some blocks
  	if (noise3d(uv_noise).g * 100. < block_thresh ||
  		noise3d(vec2(uv_noise.y, 0.0)).g * 10. < line_thresh) {
  		float line = fract(uv.y * 100.0);
  		vec3 mask = vec3(3.0, 0.0, 0.0);
  		if (line > 0.333) mask = vec3(0.0, 3.0, 0.0);
  		if (line > 0.666) mask = vec3(0.0, 0.0, 3.0);
  		glitchColor.rgb *= mask;
  	}

    gl_FragColor = glitchColor;
    // gl_FragColor = vec4(noise3d(uv), 1.);
    // gl_FragColor = vec4(vec3(mod(time, 1.)), 1.);
}
