/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {},

		fontFamily: {
			bomber: "'Bomber-Escort-Italic', 'sans-serif'",
			actay: "'Actay', 'sans-serif'",
			"actay-wide": "'Actay Wide', 'sans-serif', 'Actay'",
			"actay-wide-italic": "'Actay Wide Italic', 'sans-serif', 'Actay'",
		},

		colors: {
			white: "#FFFFFF",
			black: "#101828",
		},
	},
	plugins: [require("tailwind-scrollbar")],
};
