const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'app.js'), /**\textcolor{allcomment}{// Entrada principal } -*/

  output: {
    path: path.resolve(__dirname, 'www'), /**\textcolor{allcomment}{// Directorio de salida } -*/
    filename: 'bundle.js',  /**\textcolor{allcomment}{// Nombre de archivo de salida } -*/
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader', /**\textcolor{allcomment}{// Comunicación entre Webpack y Babel } -*/
        ...
      },
      {
        test: /\.(gif|png|jpg|jpeg)$/,
        loader: 'file-loader',  /**\textcolor{allcomment}{// Loader de archivos } -*/
        ...
      },
      {
        test: /\.scss$/, /**\textcolor{allcomment}{// Loaders de hojas de estilo } -*/
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      },
    ],
  },
  /**\textcolor{allcomment}{// Plugin que extrae texto a un archivo separado } -*/
  plugins: [new ExtractTextPlugin(path.join('bundle.css'))],
};
