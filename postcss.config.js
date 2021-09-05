const autoprefixer = require('autoprefixer');
const pxToRem = require('postcss-pxtorem');

module.exports = {
  plugins: [
    autoprefixer(),
    pxToRem({
      rootValue: 100, // 可以直接是用二倍设计稿
      propList: ['*'],
      unitPrecision: 5, //保留rem小数点多少位
    })

  ]
};
