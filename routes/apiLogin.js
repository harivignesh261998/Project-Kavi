const express = require('express');
const routerLogin = express.Router();
const Register = require('../models/register');
const bcrypt = require('bcrypt');



//login post request
routerLogin.post('/login', async (req,res,next) => {
    Register.findOne({mailId: req.body.mailId}, function(err, userData){
        try{
            if(userData === null)
            {
                console.log("Invalid E-mail ID");
                return res.status(201).json({
                    message: "Invalid E-mail ID" 
                });
            }
            else{ 
                console.log(userData);
                try {
                    if ( bcrypt.compareSync(req.body.password, userData.password)) {
                        return res.status(200).json({ message: "LOGIN SUCCESSFUL"})
                    }
                    else {
                        return res.status(201).json({ message: 'Invalid Password'})
                    }
                }
                catch{
                    console.log(err)
                }
            }
        }   catch{
                console.log(err);
                return res.status(201).send(err)
            }
    });
});



module.exports = routerLogin;