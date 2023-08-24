/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				"primary-dark-background": "#080E29",
				"primary-dark-intense": "#02012C",
				"secondary-light": "#8893F3"
			},
			spacing: {
				"25":"100px",
			},
			fontFamily: {
                'montserrat': ['Montserrat'],
                'lato': ['Lato'],
                'garamond': ['Garamond']
            },
			boxShadow: {
				'custom': '0 0 1.6rem #8893F3',
			},
			animation: {
				widther: 'expandWidth 1.5s',
				appear: 'appear 1.5s',
				appearTitle: 'appearTitle 1.5s',
			},
			keyframes: {
				'appear': {
					'0%': {
						opacity: '0',
						transform: 'translateY(30%)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					},
				},
				'appearTitle': {
					'0%': {
						opacity: '0'
					},
					'100%': {
						opacity: '1'
					},
				},
				'expandWidth': {
					'0%': { width: '0' },
					'100%': { width: '50%' },
				},
			}
		}
	}
};
