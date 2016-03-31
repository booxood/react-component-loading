module.exports = {
  devtool: 'source-map',
  entry: ['./src/Loading'],
  output: {
    filename: './dist/Loading.js',
    libraryTarget: 'umd',
    library: 'Loading'
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
