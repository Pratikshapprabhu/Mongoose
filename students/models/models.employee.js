var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    firstName: String,
    gender: String,
    age: Number,
    salary: Number
});

var employee = mongoose.model('employee', UserSchema);

module.exports = employee;