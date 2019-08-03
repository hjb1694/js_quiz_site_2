const express = require('express');

const router = new express.Router();

const notSignedIn = require('../middleware/auth/loggedInFalse');

const db = require('../util/database');


router.use(notSignedIn);


/*
GET /quizzes/
Show all quizzes
*/

router.get('/', async (req,res,next)=>{

    let qry = `
    SELECT id, name
    FROM quizzes
    `;

    let [rows, fields] = await db.query(qry);


    res.render('all-quizzes', {
        title : 'All Quizzes', 
        quizzes : rows
    });

});



/*
GET /quizzes/:id
Get quiz based on id
*/

router.get('/:id', async (req,res,next) => {

    let qry = `
    SELECT id, question_no, question
    FROM quiz_questions
    WHERE quiz_id = ?
    `;

    let [questions, fields] = await db.execute(qry, [req.params.id]);

    if(!questions.length){

        return res.redirect('/notFound');

    }

    const content = [];

    for(let question of questions){

        let item = new Object();
        let answers = [];

        item.questionNo = question.question_no;
        item.question = question.question;

        let qry = `
        SELECT answer_no, answer 
        FROM quiz_answers
        WHERE question_id = ?
        `;

        let [quizAnswers,fields] = await db.execute(qry, [question.id]);

        for(answer of quizAnswers){

            answers.push({
                answerNo : answer.answer_no, 
                answer : answer.answer
            });
        }

        item.answers = answers;

        content.push(item);


    }

    res.render('quiz', {
        title : `Quiz: ${req.params.id}`, 
        questions : content, 
        quizNo : req.params.id
    });



});


router.post('/result', async (req,res,next) => {

    let qry = `
    SELECT id, question_no, question, correct_answer
    FROM quiz_questions
    WHERE quiz_id = ?
    `;

    let [rows, fields] = await db.execute(qry, [req.body.quizNo]);


    const results = [];

    for(let item of rows){

        let result = new Object();

        result.question = item.question;

        let qry = `
        SELECT answer_no, answer
        FROM quiz_answers
        WHERE question_id = ?
        `;

        let [answers, fields] = await db.execute(qry, [item.id]);

        const possibleAnswers = [];

        for(let answer of answers){

            possibleAnswers.push(answer.answer);

            if(item.correct_answer == answer.answer_no){

                result.correctAnswer = answer.answer;

            }

            if(req.body[item.question_no] == answer.answer_no){

                result.userAnswer = answer.answer

            }

        }

        result.possibleAnswers = possibleAnswers;

        if(item.correct_answer == +req.body[item.question_no]){
            result.correctOrIncorrect = 'correct';
        } else {
            result.correctOrIncorrect = 'incorrect';
        }

        results.push(result);

    }

    res.render('results', {
        title : 'Results',
        results
    });


});



module.exports = router;