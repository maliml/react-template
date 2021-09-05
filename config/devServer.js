const path = require('path');
const { access } = require('./out');
const p = access.substr(1)
module.exports = {
	host: '127.0.0.1',
	port: 9000,
	publicPath: access,
	contentBase: path.resolve(process.cwd(),'dist'),
	hot: true,
	disableHostCheck: true,
  open: true,
  compress: true,
	openPage: p,
  inline: true,
  proxy: {
    // '/search': {
    //   target: 'http://10.2.39.24:7009',
    //   changeOrigin: true
    // },
    '/user-security':{
      target: 'http://npo.test.tianyancha.com',
      changeOrigin: true
    },
    '/verify':{
      target: 'http://npo.test.tianyancha.com',
      changeOrigin: true
    },
    '/std':{
      target:'http://npo.test.tianyancha.com',
      changeOrigin: true
    }
  },
  historyApiFallback:{
    index: p
  },
}
