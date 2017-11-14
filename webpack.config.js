const path = require('path');
const SRC = path.join(__dirname, '/client');
const PUBLIC = path.join(__dirname, '/server/public');

module.exports = {
  entry:"./client/Main.jsx",
  output: {
    path: PUBLIC,
    filename: 'bundle.js'
  }, 
  module: {
    rules: [
      {
        test:/\.(js|jsx)$/,
        include: SRC,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    modules: [
      path.join(__dirname, 'node_modules')
    ]
  }
}