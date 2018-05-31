const path = require("path");
const webpack = require("webpack");

module.exports = {
    mode: "development",
    
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        //publicPath,
        library: "GeneralKenobi",
        libraryTarget: "umd"
    },

    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            d3: "d3"
        })
    ],

    resolve: {
        modules: [
            "node_modules",
            path.resolve(__dirname, "src")
        ],

        extensions: [".js"]
    }
}
