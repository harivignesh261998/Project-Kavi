const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


// set up express app
const app = express();

//connect to db
mongoose.connect("mongodb+srv://Mithun:HEdlAqrrRk61mN5G@cluster0-8iwmb.mongodb.net/test?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(function(){
        console.log("Connected to database");
    })
    .catch(function(){
        console.log('Connection failed');
    });

mongoose.Promise = global.Promise;

// use body-parser
app.use(bodyParser.json());

//initialize routes
app.use('/api',require('./routes/api'));
app.use('/apiQuestions',require('./routes/apiQuestions'));

//listen for request
app.listen(process.env.port||4000,function(){
    console.log('Now listening for requests');
});