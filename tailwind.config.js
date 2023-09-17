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
			// Hiding menus
			screens: {
				'first': '1270px',
				'second': '1160px',
				'third': '1040px',
				'fourth': '900px',
			}
		},
	},
	plugins: [],
}
