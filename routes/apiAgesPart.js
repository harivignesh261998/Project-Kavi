const express = require('express');
const routerAgesPart = express.Router();
const AgesPart = require('../modules/questionsAgesPart');

//get questions from the DB
routerAgesPart.get('/questionsAgesPart', function(req,res,next){
    AgesPart.find().then(documents => {
        res.status(200).json({
            message: 'Questions fetched successfully',
            question: documents
        })
        console.log(documents);
    })
});

//post questions from the DB
routerAgesPart.post('/questionsAgesPart', function(req,res,next){
    AgesPart.create(req.body).then(function(questionsAgesPart){
        res.send(questionsAgesPart);
        console.log(questionsAgesPart);
    });
});



module.exports = routerAgesPart;