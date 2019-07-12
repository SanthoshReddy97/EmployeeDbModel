const mongoose = require('mongoose')

var employeeSchema = new mongoose.Schema({
    FullName :{type:String},
    email : {type:String},
    PhoneNo : {type:String},
    city : {type:String}
});

mongoose.model('employees', employeeSchema);