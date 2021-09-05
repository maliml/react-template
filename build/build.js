const webpack = require('webpack');
const prodConfig = require('../config/webpack.config.prod');
const baseConfig = require('../config/webpack.config.base');
const chalk = require('chalk');
const ora = require('ora');
const { merge } = require('webpack-merge');

const spinner = ora('build code...').start();


let builConfig = merge(baseConfig,prodConfig);


webpack(builConfig,function(err, stats){
	spinner.stop();
	if (err) throw err;
	process.stdout.write(stats.toString({
		chunks: false,
    entrypoints: true,
    publicPath: true,
    performance: true,
    env: true,
    depth: true,
    colors: true
	}) + '\n\n');
	console.log(chalk.cyan('webpack 打包完成...'));
  setTimeout(()=>{
    process.exit();
  },1000)
});

