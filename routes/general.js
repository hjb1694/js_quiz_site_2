const express = require('express');

const router = new express.Router();

/*
GET /
Home (index) Page
*/


router.get('/', (req,res,next) => {


    res.render('index', {
        title : 'Welcome'
    });


});



/*
GET
Default not found page
*/


router.get(['*','/notFound'], (req,res,next)=>{


    res.send('Page not found');


});



module.exports = router;