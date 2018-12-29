module.exports = {

  context: __dirname + "/src",
  entry: "./app.jsx",
  output: {
		path: __dirname + "/dist",
		filename: "bundle.js"
  },
  devServer: {
    contentBase: __dirname + "/dist",
    compress: true,
    port: 9000
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader", // translates CSS into CommonJS
          "sass-loader" // compiles Sass to CSS, using Node Sass by default
        ]
      }
    ]
  }
};