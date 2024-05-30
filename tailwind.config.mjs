/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
		"./node_modules/flowbite/**/*.js",
	],
	theme: {
		extend: {
			colors: {
				primary: "#007bff",
				secondary: "#673ab7",
				success: "#28a745",
				danger: "#dc3545",
				warning: "#ffc107",
				info: "#17a2b8",
				light: "#f8f9fa",
				dark: "#212529",
			},
		},
	},
	plugins: [require("flowbite/plugin")],
};
