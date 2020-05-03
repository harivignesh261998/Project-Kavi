const express = require('express');
const routerQuestions = express.Router();
const Question = require('../modules/questions');

//get questions from the DB
routerQuestions.get('/questions', function(req,res,next){
    Question.find().then(documents =>{
        res.status(201).json({
            message: 'Questions fetched successfully',
            question: documents
        })
        console.log(documents);
    })
});

//post questions from the DB
routerQuestions.post('/questions', function(req,res,next){
    Question.create(req.body).then(function(questions){
        res.send(questions);
        console.log(questions);
    });
});



module.exports = routerQuestions;