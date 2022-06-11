const path = require('path');
module.exports = {
    entry: {
        script: './src/main.ts',
        // nazwa_pliku_wynikowego_2: './src/plik2.ts'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,

            },
            {
                test: /\.wav?$/,
                loader: 'file-loader',
                options: { name: "[path][name].[ext]" },

            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    watch: true
}