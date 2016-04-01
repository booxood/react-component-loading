var path = require('path')

module.exports = {
  devtool: 'source-map',
  entry: {
    // Why use array? Fix 'Error: a dependency to an entry point is not allowed'
    // Refer https://github.com/webpack/webpack/issues/300
    'SquareRotate': ['./src/animates/SquareRotate'],
    'SquareArrange': ['./src/animates/SquareArrange'],
    'Loading': './src/Loading'
  },
  output: {
    path: path.join(__dirname, 'lib'),
    filename: '[name].js',
    libraryTarget: 'umd'
  },
  externals: [{
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react'
    }
  }],
  module: {
    loaders: [
      {test: /\.jsx$/, loader: 'babel-loader'},
      {test: /\.css$/, loader: 'style-loader!css-loader?modules'}
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
