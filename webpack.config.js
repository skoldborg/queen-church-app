const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const config = {
	entry: path.join(__dirname + '/src/index.js'),
	output: {
		path: path.join(__dirname + '/dist'),
		filename: 'assets/bundle.js'
	},
	// Configure loaders
	module: {
		rules: [
			{ 
				test: /\.(js|jsx)$/, 
				exclude: /node_modules/,
				use: ['babel-loader']
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.(png|gif|svg|jpg|woff|woff2|eot|ttf|)$/,
				use: {
					loader: 'url-loader',
					options: {
						limit: '8192' // inline base64 URLs for <=8k files, direct URLs for the rest
					}
				}
			}
		]
	},
	// Tell Webpack to use html plugin
	plugins: [
		new HTMLWebpackPlugin({
			template: path.join(__dirname + '/src/index.html')
		})
	],
	// Enable importing files without specifying their extensions
	resolve: {
		extensions: ['.js', '.jsx']
	},

	devServer: {
		port: 3000,
		historyApiFallback: true,
		stats: 'errors-only'
	}
}

module.exports = config;