const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//create Register Schema & Models
const RegisterSchema = new Schema({
    first_name: {
        type: String,
        required: [true,'First Name is required']
    },
    last_name: {
        type: String,
        required: [true, 'Last Name is required']
    },
    mailId: {
        type: String,
        required: [true, 'mailID is required'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    }
})


const Register = mongoose.model('register',RegisterSchema);

module.exports = Register; 