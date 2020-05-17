module.exports = {
    entry: './main.js',
    output: {
        path: __dirname,
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