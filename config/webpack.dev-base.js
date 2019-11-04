const wepback = require('webpack');

module.exports = {
  mode: 'development',
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom'
    },
    extensions: [
      '.js',
      '.jsx',
      '.css',
      '.scss',
      '.jpg',
      '.jpeg',
      '.png',
      '.gif',
      '.svg',
      '.json'
    ]
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(jpe?g|png|giv|svg)$/,
        use: [
          { loader: 'file-loader', options: { name: '[path][name].[ext]' } },
          'image-webpack-loader'
        ]
      }
    ]
  },
  plugins: [
    new wepback.HotModuleReplacementPlugin(),
    new wepback.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ]
};
