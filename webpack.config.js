const path = require('path');

module.exports = {
    mode : 'development',
    watch : true,
    entry : {
        main : './wp-src/main.js', 
        register : './wp-src/register.js', 
        login : './wp-src/login.js',
        allQuizzes : './wp-src/allQuizzes.js', 
        quiz : './wp-src/quiz.js'
    }, 
    output : {
        path : path.resolve(__dirname, 'public', 'js'), 
        filename : '[name].bundle.js'
    },
    module: {
        rules: [
          { test: /\.js$/, 
            exclude: /node_modules/, 
            loader: "babel-loader" }
        ]
    }
}