const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const htmlplugin = new HtmlWebpackPlugin({
    template: './src/index.html',
    filename: 'index.html'
})
module.exports = {
    //编译模式
    mode: 'development', //mode用来指定构建模式 production 不压缩 开发
    // mode: 'production' //mode用来指定构建模式 production 压缩 生产

    entry: path.join(__dirname, '/src/index.js'),
    output: {
        path: path.join(__dirname, './dist'), //原地址
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }, {
            test: /\.less$/,
            use: ['style-loader', 'css-loader', 'less-loader']
        }, {
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
        }, {
            test: /\.jpg|png|gif|bmp|ttf|eot|svg|woff|woff2$/,
            use: 'url-loader?limit=16940'
        }, {
            test: /\.js$/,
            use: "babel-loader",
            //exclude为排除项，意思是不要处理node_modules中的js文件
            exclude: /node_modules/
        }]
    },
    plugins: [htmlplugin],

}