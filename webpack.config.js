var path = require('path'),
    webpack = require('webpack'),
    CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        app: path.resolve(__dirname, './src/app.js'),
        vendor: ['angular','angular-ui-router']
    },
    devtool: false,
    output: {
        filename: '[name].bundle.min.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        alias: {
            'Services/Ubigeos': path.resolve(__dirname, './src/services/ubigeos/ubigeos.js'),
            'Routes/Home': path.resolve(__dirname, './src/routes/home/home.js')
        }
    },
 
    plugins: [
        new webpack.optimize.UglifyJsPlugin({sourceMap: false, compress: {warnings:false}, minify: true}),
        new webpack.ProvidePlugin({  jQuery: 'jquery',  $: 'jquery', jquery: 'jquery' }),
        new CopyWebpackPlugin([{ context: './src/', from: '**/*' }], {ignore: ['*.js','*.scss']})
    ]
};