module.exports = {

  // The starting point for this React applicaton
  entry: "./app/app.js",

  // This file will convert JSX to JavaScript
  output: {
    filename: "public/bundle.js"
  },

  // This section desribes the transformations we will perform
  module: {
    loaders: [
      {
        // Access files with a .js or .jsx extension
        test: /\.jsx?$/,
        // Webpack will process files in the app folder.
        include: /app/,
        loader: "babel-loader",
        query: {
          // Convert react to es2015
          presets: ["react", "es2015"]
        }
      }
    ]
  },
  // Allows us to use chrome dev tools to debug errors.
  devtool: "eval-source-map"
};
