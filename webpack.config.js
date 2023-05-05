let path = require('path');
module.exports = {
    mode:'development',//开发模式
    entry:'./src/index.js', //入口文件
    output: {  //出口文件
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.js',
    },
    devServer:{
        host: 'localhost',
        compress: true,
        port: 1717
    }
}
