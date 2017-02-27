let webpack = require('webpack');

module.exports = {
    entry: [
        'react-hot-loader/patch',
        'webpack/hot/dev-server',
        'webpack-hot-middleware/client',
        './src/react/index.js'],
    devtool: '#source-map',
    output: {
        path: '/',
        filename: 'bundle.js',
        publicPath: '/javascripts/'
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react', 'stage-2'],
                    retainLines: 'true',
                }
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
    ]
};

