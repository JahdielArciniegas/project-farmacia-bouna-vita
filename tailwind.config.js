/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			keyframes:{
				'opacity' : {
				'from': { opacity : '0'},
				'to':{ opacity: '1'}
			}
			},
			animation:{
				opacity: 'opacity 1s'
			}
		},
	},
	plugins: [],
};
