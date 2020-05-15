const express = require('express');
const routerLogin = express.Router();
const Register = require('../models/register');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');



//login post request
routerLogin.post('/login', async (req,res,next) => {
    Register.findOne({mailId: req.body.mailId}, function(err, userData){
        try{
            if(userData === null)
            {
                console.log("Invalid E-mail ID");
                return res.status(401).json({
                    message: "Invalid E-mail ID" 
                });
            }
            else{
                try {
                    if ( bcrypt.compareSync(req.body.password, userData.password)) {
                        const token = jwt.sign(
                            {mailId:userData.mailId, userId: userData._id}, 
                            'secrete_this_should_be_longer', 
                            {expiresIn: '1h'})
                        return res.status(200).json({ 
                            message: "LOGIN SUCCESSFUL",
                            token: token,
                            expiresIn: 3600
                        })
                    }
                    else {
                        return res.status(401).json({ message: 'Invalid Password'})
                    }
                }
                catch{
                    console.log(err)
                }
            }
        }   catch{
                console.log(err);
                return res.status(500).send(err)
            }
    });
});



module.exports = routerLogin;
