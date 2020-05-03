const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//create Register Schema & Models
const RegisterSchema = new Schema({
    name: {
        type: String,
        required: [true,'name fiels is required']
    },
    password: {
        type: String,
        required: [true, 'password is required']
    },
    mailId: {
        type: String,
        required: [true, 'mailID is required']
    },
    contact: {
        type: Number,
        required: [true, 'Mobile number is required']
    }
})


const Register = mongoose.model('register',RegisterSchema);

module.exports = Register; 