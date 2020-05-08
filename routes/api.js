const express = require('express');
const router = express.Router();
const Register = require('../modules/register');

//get register data from the db
router.get('/register', function(req,res,next){
    Register.find().then(documents => {
        res.status(200).json({
            message: 'Posts fetched successfully',
            register: documents
        });
        console.log(documents);
    });
});

//add a new register to the db

/*
app.post("/modules/register",function(req,res){
    const register = new Register({
        name: req.body.name,
        password: req.body.password,
        mailId: req.body.mailId,
        contact: req.body.contact
    });
    register.save();
    res.status(201).json({
        message: "Post added successfully"
    });
});
*/


router.post('/register', function(req,res,next){
    Register.create(req.body).then(function(register){
        res.send(register);
    });
});



//update a register in the db
router.put('/register/:id', function(req,res,next){
    res.send({type:'PUT'});
});

//delete a register from the db
router.delete('/register/:id', function(req,res,next){
    Register.deleteOne({_id: req.params.id}).then(result => {
        console.log(result);
        res.status(200).json({message: 'Registration DELETED'});
    });
});

module.exports = router;