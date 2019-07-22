module.exports = {
	plugins: [
		require('autoprefixer')({
			grid: true,
		}),
		require('cssnano')()
	]
}
