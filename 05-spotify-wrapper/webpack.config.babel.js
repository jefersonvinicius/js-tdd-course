import { join } from 'path';

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: join(__dirname, 'dist'),
    library: {
      name: 'spotifyWrapper',
      type: 'umd',
    },
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
};
