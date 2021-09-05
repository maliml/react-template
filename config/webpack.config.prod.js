const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const { output, len, access  } = require('./out');

let prod = {
	output:{
		path: output,
		publicPath: '//static.tianyancha.com/npo-h5/',
		filename: `js/[name].[contenthash:${len}].js`,
		chunkFilename: `js/[id].[contenthash:${len}].js`,
		assetModuleFilename: `assets/[name].[contenthash:${len}][ext]`
	},
	mode: 'production',
	devtool:'nosources-source-map',
	optimization: {
		minimize: true,
		moduleIds: 'deterministic',
		chunkIds: 'deterministic',
		minimizer: [new TerserPlugin({
			extractComments: false,
			terserOptions: {
				sourceMap: true,
				format: {
					comments: false,
				},
			}
		}), new CssMinimizerPlugin()],
		runtimeChunk: 'single',
		splitChunks: {
			chunks: 'all',
			cacheGroups: {
				vendors: {
					test: /\/node_modules\//,
					name: 'vendors',
					priority: -2
				}
			}
    },
	},
	plugins:[
		new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['**/*','!vender/**']
    }),
		new BundleAnalyzerPlugin()
	]

}

module.exports = prod;
