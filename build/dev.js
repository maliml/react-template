const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const devConfig = require('../config/webpack.config.dev');
const baseConfig = require('../config/webpack.config.base');
const config = require('../config/devServer');
const chalk = require('chalk');
const ora = require('ora');
const { merge } = require('webpack-merge');

let builConfig = merge(baseConfig,devConfig);
const spinner = ora('build code...').start();

let compiler = webpack(builConfig);

const server = new WebpackDevServer(compiler,config);
server.listen(config.port,config.host,err=>{
  spinner.stop();
	if(err) {
		return console.log(chalk.yellow(`服务启动失败${err}`));
	}
	console.log(chalk.blue(`启动成功,监听${config.host}:${config.port}`));
});

