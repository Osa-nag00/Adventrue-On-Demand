/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				moduleBg: "#294936bc",
				buttonBg: "#422006",
				bg: "#C19875",
				navbarBg: "#2A2B2ADD",

				userSentMsg: "#D9D9D9",
				AIsentMsg: "#40403F",
			},
		},
	},
};
