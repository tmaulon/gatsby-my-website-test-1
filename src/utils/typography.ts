import Typography from "typography"

const typography = new Typography({
	baseFontSize: "16px",
	baseLineHeight: 1.666,
	scaleRatio: 2,
	googleFonts: [
		{
			name: "Montserrat",
			styles: ["100", "400", "700", "900"],
		},
	],
	headerFontFamily: ["Avenir Next", "Helvetica Neue", "Segoe UI", "Helvetica", "Arial", "sans-serif"],
	bodyFontFamily: ["Montserrat", "Avenir Next", "Helvetica Neue", "Segoe UI", "Helvetica", "Arial", "sans-serif"],
	// See below for the full list of options.
})

export const { scale, rhythm, options } = typography
export default typography
