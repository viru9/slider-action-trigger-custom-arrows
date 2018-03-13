 const merge = require('webpack-merge');
 const common = require('./webpack.common.js');

 module.exports = merge(common, {

   devServer: {
     historyApiFallback: true,
     contentBase: './',
     inline: true,
     port: 9001,
     host: '127.0.0.1',
     disableHostCheck: true
   }

 });
