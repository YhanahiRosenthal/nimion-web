/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				"primary-dark-background": "#080E29",
				"secondary-light": "#8893F3",
				"logo-gray": "#DADFF7",
				"golden": "#CCA56A",
				"black-background": "#3c3c3c",
			},
			spacing: {
				"25": "100px",
				"88": "22rem",
				"112": "28rem",
				"128": "32rem",
				"144": "36rem",
				"160": "40rem",
				"176": "44rem",
				"192": "48rem",
				"208": "52rem",
				"224": "56rem",
				"228": "57rem",
				"232": "58rem",
				"240": "60rem",
				"256": "64rem",
			},
			fontFamily: {
                'montserrat': ['Montserrat'],
                'lato': ['Lato'],
                'garamond': ['Garamond']
            },
			boxShadow: {
				"cards": "4px 5px 10px -7px rgba(0,0,0,0.75)",
			}
		}
	}
}
