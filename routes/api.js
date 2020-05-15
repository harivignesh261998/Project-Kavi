const express = require('express');
const router = express.Router();
const Register = require('../models/register');
const bcrypt = require('bcrypt');



//get register data from the db
router.get('/register', function(req,res,next){
    Register.find().then((documents) => {
        res.status(200).json({documents});
        console.log('Registrations fetched successfully');
    });
});

//add a new register to the db

/*
router.post("/register",function(req,res,next){
    const register = new Register({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        mailId: req.body.mailId,
        password: req.body.password
    });
    register.save();
    res.status(201).json({
        message: "User added successfully"
    });
});
*/

/*
router.post('/register', function(req,res,next){
    Register.create(req.body).then(function(register){
        res.send(register);
        console.log(register);
    });
});
*/


router.post('/register', async(req,res,next) => {
    try{
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
            const register = new Register({
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                mailId: req.body.mailId,
                password: hashedPassword
            });
       register.save(function(err,result){
           if(err){
               console.log(err);
               res.status(409).json({
                   message: "E-Mail ID already exists. Try again with a different E-Mail ID"
               })
           }
           else {
            res.status(201).json({
                message: "Registration successful"
                 });
            console.log(register);
           }
       });
    } catch{
        res.status(500).json({
            message: "Registration Failed"
        });
    }
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