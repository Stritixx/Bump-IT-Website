/** @type {import('tailwindcss').Config} */




module.exports = {
	content: [
		"./index.html",
		"./src/**/*.{vue,js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				background: {
					DEFAULT: "#020202",
				}
			},

			backgroundImage: {
				'gradient-text': 'linear-gradient(90deg, #008cff, #8400ff, #003cff)',
			},

			backgroundSize: {
				'200%': '200% 200%',
			},

			animation: {
				'gradient-animation': 'gradientAnimation 5s linear infinite',
			},

			keyframes: {
				gradientAnimation: {
				  '0%': { backgroundPosition: '0% 50%' },
				  '50%': { backgroundPosition: '100% 50%' },
				  '100%': { backgroundPosition: '0% 50%' },
				},
			},
		},
	},
	plugins: [],
};