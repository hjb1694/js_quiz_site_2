//Required Modules
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const SessionStorage = require('express-mysql-session')(session);
const db = require('./util/database');
require('dotenv').config();


const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '127.0.0.1';

const app = express();
app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());
app.set('view engine','ejs');
app.set('views','views');


//Sessions
const store = new SessionStorage({
    host : process.env.DB_HOST,
    user : process.env.DB_USER, 
    password : process.env.DB_PASS, 
    database : process.env.DB_NAME
});

app.use(session({
    secret : process.env.SESSION_SECRET,
    saveUninitialized : false,
    resave : false, 
    store
}));


//Routes 
const userRoutes = require('./routes/user');
const quizzesRoutes = require('./routes/quizzes');
const generalRoutes = require('./routes/general');

app.use('/user',userRoutes);
app.use('/quizzes',quizzesRoutes);
app.use(generalRoutes);


app.listen(PORT, HOST, ()=>{
    console.log(`Listening on port ${PORT} on ${HOST}!`);
});




