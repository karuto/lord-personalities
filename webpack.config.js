const path = require('path');

module.exports = {
    entry: "./src/app.js",
    watch: true,
    output: {
        path: path.resolve('dist'),
        filename: 'app.js'
    },
    module: {
        rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            }
        }
        ]
    }
};
