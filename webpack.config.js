'use strict';

const path = require('path');

module.exports = {
    entry: `${__dirname}/app/js/index.jsx`,
    output: {
        filename: "bundle.js",
        path: `${__dirname}/dist`,
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json']
    },
    module: {
        loaders: [{
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ["babel-loader"]
        }]
    }
};
