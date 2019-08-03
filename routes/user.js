const express = require('express');
const {check, validationResult} = require('express-validator');
const db = require('../util/database');
const bcrypt = require('bcryptjs');

const loggedInTrue = require('../middleware/auth/loggedInTrue');

const router = new express.Router();



router.get('/register', loggedInTrue, (req,res,next) => {

    res.render('register',{
        title : 'Register'
    });

});




router.post('/register', loggedInTrue, [
    check('email').isEmail(), 
    check('password').isLength({min : 8, max : 50}),
    check('name').isLength({min : 2})
], async (req,res,next) => {

    const errors = validationResult(req);

    if(!errors.isEmpty()){

        return res.status(403).send('There was an error processing your request.');

    }

    //check if email already exists

    let qry = `
    SELECT COUNT(*) AS count
    FROM users 
    WHERE email = ?
    `;

    let [rows, fields] = await db.execute(qry, [req.body.email]);

    if(rows[0].count){

        return res.json({error : 'This email address already exists. Try logging in.'});

    }

    const hashedPassword = bcrypt.hashSync(req.body.password,8);

    qry = `
    INSERT INTO users(name,email,password)
    VALUES(?,?,?)
    `;

    [rows, fields] = await db.execute(qry, [req.body.name, req.body.email, hashedPassword]);

    console.log(rows);

    if(!rows.affectedRows){

        res.json({error : 'There was an issue processing your request. Please try again.'});

    } else {

        req.session.isLoggedIn = true;
        req.session.userId = rows.insertId;
        req.session.hasPaid = 0;
        req.session.userName = req.body.name;

        res.json({success : 'Success!'});

    }



});


router.get('/login', loggedInTrue, (req,res,next) => {

    res.render('login',{
        title : 'login'
    });

});

router.post('/login', loggedInTrue, async (req,res,next) => {

    const email = req.body.email;
    const password = req.body.password;

    let qry = `
    SELECT id, name, email, password, has_paid 
    FROM users
    WHERE email = ?
    `;

    let [rows, fields] = await db.execute(qry, [email]);

    if(!rows.length){

        return res.json({error : 'The credentials you provided do not exist or are invalid.'});

    }

    let comparedPassword = bcrypt.compareSync(password, rows[0].password);

    if(!comparedPassword){

        return res.json({error : 'The credentials you provided do not exist or are invalid.'});

    } else {

        req.session.isLoggedIn = true;
        req.session.userId = rows[0].id;
        req.session.hasPaid = rows[0].has_paid;
        req.session.userName = rows[0].name;

        res.status(200).json({success : 'Success!'});

    }




});



router.get('/logout', (req,res,next) => {

    req.session.destroy();

    res.status(200).redirect('/');

});



module.exports = router;