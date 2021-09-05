const fs = require('fs');
const chalk = require('chalk');
const path = require('path');

// webpack 入口定义
let entry = {};
let template = path.resolve(__dirname,'../public/index.html')
,output = path.resolve(__dirname,'..','dist');
let pathDir = path.resolve(__dirname,'..','src');

// 导出文件hash戳的长度
const len = 4;

if(fs.existsSync(pathDir)){
	if(fs.statSync(pathDir).isDirectory()){
		let files = fs.readdirSync(pathDir);
		let entryReg = /(main|app|index|entry)\.(j|t)s(|x)$/
		if(!files.length){
			console.log(chalk.red(`${pathDir}不能为空目录`))
			process.exit(1);
		}
		files.forEach((file)=>{
			let entryFile = path.resolve(pathDir,file);
			if(entryReg.test(file)){
				entry['main'] = {
					import: entryFile
				}
			}
			if(/\.html$/.test(file)){
				template = path.resolve(pathDir, file);
			}

		});
	}else{
		console.log(chalk.red(`${pathDir}不是文件目录`))
		process.exit(1)
	}
}else{
	console.log(chalk.red(`工程路径不存在${pathDir}`))
	process.exit(1)
}
module.exports = {
	//webpack 入口
	entry,
	//模板路径
	template,
	//工程名字
	output,
	access: '/',  //默认打开的路由
	len
};
