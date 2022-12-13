/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{html,ts}",
	],
	theme: {
		extend: {
			spacing: {
				"sidebar": '260px',
				"swimlane": '240px'
			},
		},
	},
	plugins: [],
}
