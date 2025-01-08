/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
	theme: {
		extend: {
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			colors: {
				'raisin-black': '#262626',
				'quick-silver': '#ACA296',
				'platinum': '#e8e5e0',
				'outer-space': '#414d43',
			},
			fontFamily: {
				'manrope': ['Manrope', 'sans-serif'],
			},

		}
	},
	plugins: [require("tailwindcss-animate")],
}

