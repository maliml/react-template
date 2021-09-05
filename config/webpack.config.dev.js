const { output, access } = require('./out');
module.exports = {
  mode: 'development',
  devtool:'inline-cheap-module-source-map',
	output:{
    path: output,
    publicPath: access,
    filename: '[name].js',
    chunkFilename: '[id].js',
    assetModuleFilename: 'images/[name][ext]'
	}
}

