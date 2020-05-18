module.exports = {
    entry: './src/main.js',
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
               test: /\.js$/,
               exclude: /nodu_modules/,
               use: {
                   loader: 'babel-loader',
               }
            }
        ],
    },
};