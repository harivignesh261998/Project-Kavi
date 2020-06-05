const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/*//create Atest Schema & Models
const ATestSchema = new Schema({
    testId: {type: mongoose.Schema.Types.ObjectId, ref: 'ATest'},
    testName: String,
    score: Number,
    attempt: Boolean,
    timeTaken: Number
});

//create CTest Schema & Models
const CTestSchema = new Schema({
    testId: {type: mongoose.Schema.Types.ObjectId, ref: 'CTest'},
    testName: String,
    score: Number,
    attempt: Boolean,
    timeTaken: Number
});*/

//create Student Schema & Models
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
    collegeId: { type: mongoose.Schema.Types.ObjectId, ref: 'College' },
    collegeName:{ type: String},
    practicedQuestions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Practice' }],
    aTest: [{  testId: {type: mongoose.Schema.Types.ObjectId, ref: 'ATest'},
    testName: String,
    score: Number,
    attempt: Boolean,
    timeTaken: Number }],
    cTest: [{ testId: {type: mongoose.Schema.Types.ObjectId, ref: 'CTest'},
    testName: String,
    score: Number,
    attempt: Boolean,
    timeTaken: Number }]
})


const Student = mongoose.model('Student',StudentSchema);
module.exports = Student; 