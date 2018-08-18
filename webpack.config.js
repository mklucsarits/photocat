const path = require('path');
const webpack = require('webpack');

const electronMainOptions = {
    mode: 'production',
    target: 'electron-main',
    entry: path.normalize(path.resolve(__dirname, 'src/main/index.js')),
    output: {
        path: path.normalize(path.resolve(__dirname, 'dist')),
        filename: 'main.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['babel-preset-env'],
                    },
                },
            },
        ],
    },
  };

const electronRendererOptions = {
    mode: 'production',
    target: 'electron-renderer',
    entry: path.normalize(path.resolve(__dirname, 'src/renderer/index.js')),
    output: {
        path: path.normalize(path.resolve(__dirname, 'dist')),
        filename: 'renderer.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['babel-preset-env'],
                    },
                },
            },
        ],
    },
};

module.exports = [
    electronMainOptions,
    electronRendererOptions,
];
