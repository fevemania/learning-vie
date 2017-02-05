var webpack = require('webpack');

module.exports = {
	entry: './src/main_copy.js',
	devtool: 'source-map',
	output: {
		filename: './dist/main_copy.js'
	}
};