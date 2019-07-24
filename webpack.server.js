const path = require("path");
const webpack = require("webpack");
const nodeExternals = require("webpack-node-externals");

module.exports = (env, argv) => {
	const SERVER_PATH = "./server/index.ts";

	return {
		entry: ["@babel/polyfill", SERVER_PATH],
		output: {
			path: path.join(__dirname, "dist"),
			publicPath: "/",
			filename: "index.js"
		},
		mode: argv.mode,
		target: "node",
		node: {
			// Need this when working with express, otherwise the build fails
			__dirname: false, // if you don't put this is, __dirname
			__filename: false // and __filename return blank or /
		},
		resolve: {
			extensions: [".js", ".jsx", ".ts", ".tsx"]
		},
		externals: [nodeExternals()], // Need this to avoid error when working with Express
		module: {
			rules: [
				{
					// Transpiles ES6-8 into ES5
					test: /\.(js|jsx|tsx|ts)$/,
					exclude: /node_modules/,
					use: {
						loader: "babel-loader"
					}
				}
			]
		}
	};
};
