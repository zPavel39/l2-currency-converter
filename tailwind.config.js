/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			spacing: {
				'20px': '20px',
				'120px': '120px',
				'45px': '45px',
				'300px': '300px',
			},
			fontFamily: {
				sans: ['Roboto', 'sans-serif'],
				serif: ['Montserrat', 'serif'],
				// Другие шрифты, которые вы хотите использовать
			},
			backgroundImage: {
				'main-map': "url('/src/assets/images/AdenAndElmore.jpg')",
			},
		},
	},
	plugins: [],
}
