const path = require('path')

const htmlWebpackPlugin = require('html-webpack-plugin')

const {VueLoaderPlugin} =require('vue-loader')

module.exports={
    entry:path.join(__dirname,'./src/main.js'),

    output:{
        path:path.join(__dirname,'./dist'),
        filename:'bundle.js'
    },
    plugins:[
        new htmlWebpackPlugin({
            template:path.join(__dirname,'./src/index.html'),
            filename:'index.html'
        }),
        new VueLoaderPlugin()
    ],
    module:{
        rules:[
            {test:/\.css$/,use:['style-loader','css-loader']},
            {test:/\.scss$/,use:['style-loader','css-loader','sass-loader']},
            {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
            {test:/\.(jpg|png)$/,use:'url-loader?limit=7500&name=[hash:5]-[name].[ext]'},
            {test:/\.(ttf|eot|svg|woff)$/,use:'url-loader'},
            {test:/\.js$/,use:'babel-loader',exclude:/node_modules/},
            {test:/\.vue$/,use:'vue-loader'}
            
        ]
    }
}