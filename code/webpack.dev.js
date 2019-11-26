const path = require('path');
/**\textcolor{allcomment}{// Módulo para unir la confuguración común de webpack } -*/
const merge = require('webpack-merge');
/**\textcolor{allcomment}{// Confuguración común } -*/
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development', /**\textcolor{allcomment}{// Modo de desarrollo } -*/
  devtool: 'inline-source-map',

  devServer: {
    /**\textcolor{allcomment}{// Directorio de entrada } -*/
    contentBase: path.join(__dirname, 'www'), 
    compress: true,
    port: 8002, /**\textcolor{allcomment}{// Puerto de desarrollo } -*/

    historyApiFallback: true,
    hot: true,
    host: '0.0.0.0',
    /**\textcolor{allcomment}{// Proxy para conexión con el backend } -*/
    proxy: [{
      context: ['/socket.io', '/api'],
      target: 'http://localhost:3000',
    }],
  },
});
