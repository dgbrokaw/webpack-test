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

    module: {
        rules: [
            {
                test: /\.(scss)$/,
                use: [
                    {
                        // Adds CSS to the DOM by injecting a `<style>` tag
                        loader: 'style-loader'
                    },
                    {
                        // Interprets `@import` and `url()` like `import/require()` and will resolve them
                         loader: 'css-loader'
                    },
                    {
                        // Loader for webpack to process CSS with PostCSS
                        loader: 'postcss-loader',
                        options: {
                        plugins: function () {
                                return [require('autoprefixer')];
                            }
                        }
                    },
                    {
                        // Loads a SASS/SCSS file and compiles it to CSS
                        loader: 'sass-loader'
                    }
                ]
            }
        ]
    },

    resolve: {
        modules: [
            "node_modules",
            path.resolve(__dirname, "src")
        ],

        extensions: [".js"]
    }
}
