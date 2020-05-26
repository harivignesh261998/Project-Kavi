const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create Student Schema & Models
const ATestSchema = new Schema({
    testId: {type: String, default: ""},
    testName: {type: String, default: ""},
    score: {type: Number, default: 0},
    attempt: {type: Boolean, default: false},
    timeTaken: {type: Number, default: 0}
})
const StudentSchema = new Schema({
    firstName: {
        type: String,
        required: [true,'First Name is required']
    },
    lastName: {
        type: String,
        required: [true, 'Last Name is required']
    },
    mailId: {
        type: String,
        required: [true, 'E Mail-ID is required'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    },
    collegeId: {
        type: Number
    },
    practicedQuestions: [String],
    aTest:{ 
        type: [ATestSchema]
    },
    cTest: [{
        testId: {type: String, default: ""},
        testName: {type: String, default: ""},
        score: {type: Number, default: 0},
        attempt: {type: Boolean, default: false},
        timeTaken: {type: Number, default: 0}
    }]
})


const Student = mongoose.model('Student',StudentSchema);
module.exports = Student; 