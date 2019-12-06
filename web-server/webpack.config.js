var path = require('path');

module.exports = {
	mode: "development",
  	entry: "./src/scripts/centralLogin.js",
  	output: {
  		path: path.join(__dirname, "./dist/"),
  		publicPath: '/dist/',
      // filename: "./centralLogin.bundle.js"//path relative to this file
      filename: "centralLogin.bundle.js"//path relative to this file
    },

  devServer: {
  	//host: "jssostg.indiatimes.com/",
  	host: '127.0.0.1',
    //contentBase: path.join(__dirname, 'dist'),
    //compress: true,
    port: 9008,
  }


}