const path = require("path");
function srcPath(subdir) {
	return path.join(__dirname, "src", subdir);
}
module.exports = {
	entry: "./src/index.ts",
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: "ts-loader",
				exclude: /node_modules/
			}
		]
	},
	target: "node",
	resolve: {
		extensions: [".tsx", ".ts", ".js"],
		alias: {
			routes: srcPath("routes")
		}
	},
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "dist")
	}
};
