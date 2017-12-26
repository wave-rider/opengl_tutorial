#version 330

out vec4 outputColor;

void main()
{
	float lerpValue = gl_FragCoord.y / 400.0f;
		
	outputColor = mix(vec4(0.0f, 0.5f, 0.0f, 0.2f), vec4(0.7f, 0.0f, 0.0f, 1.0f), lerpValue);
}
