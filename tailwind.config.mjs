/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'media',
	theme: {
		colors: {
			primary: colors.indigo,
			secondary: colors.rose,
			neutral: colors.slate,
			transparent: 'transparent',
			white: '#FFF',
			black: '#000'
		  },
	},
	plugins: [
		require('flowbite/plugin')
	],
}
