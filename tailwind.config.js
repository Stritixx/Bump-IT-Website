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
				'stepper': 'stepper .5s both',
				'stepper-scale': 'stepperScale .5s both'
			},


			boxShadow: {
				'video': '0px 11px 32px -19px rgba(0, 255, 193, 0.2)'
			},

			keyframes: {
				gradientAnimation: {
				  '0%': { backgroundPosition: '0% 50%' },
				  '50%': { backgroundPosition: '100% 50%' },
				  '100%': { backgroundPosition: '0% 50%' },
				},

				stepper: {
					'0%': { height: '0%' },
					'100%': { height: '100%' },
				},


				stepperScale: {
					'0%': { transform: 'scale(1)' },
					'50%': { transform: 'scale(1.05)' },
					'100%': { transform: 'scale(1)' },
				}
			},
		},
	},
	plugins: [],
};