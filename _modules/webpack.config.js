const nodeEnv = process.env.NODE_ENV || 'production';
const isProductionBuild = nodeEnv === 'production';

module.exports = {
  mode: nodeEnv,
  devtool: isProductionBuild ? undefined : 'source-map',
  entry: './src/app.js',
  output: {
    filename: './build.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  optimization: {
    minimize: nodeEnv === 'production' ? true : false,
  },
};
