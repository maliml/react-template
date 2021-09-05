const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {
	entry,
	template,
	access,
	len
} = require('./out');
const fs = require('fs');

let configs = fs.readdirSync(__dirname)
configs = configs.map((p) => (path.resolve(__dirname, p)));
const devMode = process.env.NODE_ENV !== 'production';
module.exports = {
	entry,
	target: 'web',
	resolve: {
		alias: {
			'react-dom': '@hot-loader/react-dom',
			'@components': path.resolve(__dirname, '../src/components'),
			'@util': path.resolve(__dirname, '../src/util'),
			'@': path.resolve(__dirname, '../src'),
			'@api': path.resolve(__dirname, '../src/api'),

		},
		extensions: ['.jsx', '.js', '.scss', '.css', '.json']
	},
	module: {
		rules: [{
				test: /\.jsx?$/,
				exclude: [
					path.resolve('node_modules')
				],
				use: ['babel-loader']
			},
			{
				test: /\.s?css$/,
				exclude: [
					path.resolve('node_modules')
				],
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							modules: true,
							importLoaders: 1
						}
					},
					// 'css-loader',
					'postcss-loader',
					'sass-loader'
				]
			},
			{
				test: /\.css$/,
				include: [
					path.resolve('node_modules')
				],
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'postcss-loader'
				]
			},
			// 通用配置
			{
				test: /\.(png|jpg|gif|mp4|ttf|eot|woff|svg)$/i,
				type: 'asset',
				parser: {
					dataUrlCondition: {
						maxSize: 4 * 1024 // 4kb  4kb以上的会生成文件否则会被打包成base64
					},
				},

			}
		]
	},
	plugins: [
		new webpack.ProgressPlugin(),
		new HtmlWebpackPlugin({
			// filename: htmlFile,
			// inject: false,
			template
		}),
		new MiniCssExtractPlugin({
			filename: (devMode ? '[name].css' : `css/[name].[contenthash:${len}].css`),
			chunkFilename: (devMode ? '[id].css' : `css/[id].[contenthash:${len}].css`),
		}),
		new webpack.DefinePlugin({
			"process.env.route": JSON.stringify(access)
		}),
		new webpack.DllReferencePlugin({
			context: __dirname,
			manifest: path.join(process.cwd(), 'dist/vender', 'manifest.json') //描述生成的manifest文件
		})
	],
	cache: {
		type: 'filesystem',
		buildDependencies: {
			config: configs,
		},
	},
};