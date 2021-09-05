const webpack = require('webpack');
const dllConfig = require('../config/webpack.config.dll');
const chalk = require('chalk');
const ora = require('ora');

const spinner = ora('build code...').start();


webpack(dllConfig,function(err, stats){
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
});

