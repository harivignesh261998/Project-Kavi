const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


// set up express app
const app = express();

//connect to db
mongoose.connect("mongodb+srv://Mithun:HEdlAqrrRk61mN5G@cluster0-8iwmb.mongodb.net/test?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
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
app.use('/apiRegister',require('./routes/apiRegister'));
app.use('/apiLogin',require('./routes/apiLogin'));
app.use('/apiTestUpdate',require('./routes/apiTestUpdate'));
app.use('/apiPractice', require('./routes/apiPractice'));

//listen for request
app.listen(process.env.port||4000,function(){
    console.log('Now listening for requests');
});