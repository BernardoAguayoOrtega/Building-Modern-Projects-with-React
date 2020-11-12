const path = require('path');

const webpack = require('webpack');

const babelRule = {
	test: /\.(js|jsx)$/,
	exclude: /(node_modules)/,
	loader: 'babel-loader',
	options: { presets: ['@babel/env'] },
};

const styleRule = {
	test: /\.css$/,
	use: ['style-loader', 'css-loader'],
};

module.exports = {
	entry: './src/index.js',
	mode: 'development',
	module: {
		rules: [babelRule, styleRule],
	},
	resolve: { extensions: ['*', '.js', '.jsx'] },
	output: {
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/dist/',
		filename: 'bundle.js',
	},
	devServer: {
		contentBase: path.join(__dirname, 'public/'),
		port: 3000,
		publicPath: 'http://localhost:3000/dist/',
		hotOnly: true,
	},
	plugins: [new webpack.HotModuleReplacementPlugin()],
};