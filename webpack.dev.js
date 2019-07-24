const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const PWAManifestPlugin = require("webpack-pwa-manifest");

module.exports = {
	entry: "./client/src/index.tsx",
	mode: "development",
	output: {
		path: path.join(__dirname, "client", "build"),
		filename: "bundle.js",
		publicPath: "/"
	},
	resolve: {
		alias: {
			"react-dom": "@hot-loader/react-dom"
		},
		extensions: [".js", ".jsx", ".ts", ".tsx"]
	},
	module: {
		rules: [
			{
				loader: "babel-loader",
				test: /\.(js|jsx|tsx|ts)$/,
				exclude: /node_modules/
			},
			{
				test: /\.(sc|sa|c)ss$/,
				use: [
					"style-loader",
					"css-loader",
					{
						loader: "sass-loader",
						options: {
							implementation: require("sass")
						}
					}
				]
			},
			{
				test: /\.(png|jpe?g|gif|svg)$/,
				use: ["url-loader", "file-loader"]
			}
		]
	},
	devServer: {
		contentBase: path.join(__dirname, "client", "public"),
		hot: true,
		port: 3000,
		historyApiFallback: true,
		publicPath: "/"
	},
	target: "web",
	devtool: "source-map",
	plugins: [
		new HtmlWebpackPlugin({
			template: "./client/public/index.html",
			filename: "index.html",
			excludeChunks: ["server"]
		}),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoEmitOnErrorsPlugin(),
		new PWAManifestPlugin({
			name: "MERN Starter",
			short_name: "MERNS",
			publicPath: "/",
			description: "Production Ready Starter for MERN Apps",
			display: "standalone",
			start_url: ".",
			background_color: "#ffffff",
			theme_color: "#172b4d",
			fingerprints: false
		})
	]
};
