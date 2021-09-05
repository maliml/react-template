const path = require('path');
const webpack = require('webpack');

module.exports = {
	mode: 'production',
	entry: {
		react: ['react','react-dom','react-router-dom']
	},
	output:{
		path: path.resolve(process.cwd(),'dist/vender'),
		filename: '[name].dll.js',
		library: '_dll_[name]'
	},
	resolve: {
		alias: {
			'react-dom': '@hot-loader/react-dom'
    }
	},
	plugins:[
		new webpack.ProgressPlugin(),
		new webpack.DllPlugin({
			context: __dirname,
			name: '_dll_[name]',
			path: path.join(process.cwd(),'dist/vender','manifest.json')//描述生成的manifest文件
		})
	]

};
