const mongoose  = require('mongoose');



mongoose.connect('mongodb+srv://newtest:newtest@cluster0-u9eoi.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true}, (err) => {
    if(!err) {console.log("mongodb connection successful")}
    else {console.log("mongodb connection failed")}
});

require('./employeemodel');


