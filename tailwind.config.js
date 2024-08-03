/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			"animation": {
				"fade-in-down": "fade-in-down 0.6s ease-in-out both",
			},
			"keyframes":{
				"fade-in-down": {
			"from": {
				"opacity": "0",
				"transform": "translateY(-20px)"
			},
			"to": {
				"opacity": "1",
				"transform": "translateY(0)"
			}
			},
			}
			
		},},
	plugins: [],
};
