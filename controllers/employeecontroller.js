const mongoose = require('mongoose');

const Employee = mongoose.model('employees');

module.exports = function(app){
    app.get('/employee', (req, res) => {
        res.render('addOrEdit', {viewTitle: "Insert Employee"});
    });

    app.post('/employee', (req, res) => {
        if (req.body._id == '')
        InsertRecord(req, res);
        else
        UpdateRecord(req, res);
        
    });

    app.delete('/employee', (req, res) => {
        
    });

    function InsertRecord(req, res){
        var employee = new Employee();
        employee.FullName = req.body.FullName;
        employee.email = req.body.email;
        employee.PhoneNo = req.body.PhoneNo;
        employee.city = req.body.city;
        employee.save((err, doc)=>{
            if (!err)
            res.redirect('/list');
            else {
                console.log('Error during record insertion: ' + err);
            };
        });
    };

    function UpdateRecord(req, res){
        Employee.findOneAndUpdate({_id: req.body._id}, req.body, {new: true}, (err, doc) => {
            if(!err){
                res.redirect('/list')
            };
            

        });
    };

    app.get('/list', (req, res) => {
        Employee.find((err, docs) => {
            if(!err) {
                res.render('list', {list: docs});
            }
            else {
                console.log("error in retreiving employee list" + err);
            }

        });
           
    });
    app.get('/:id', (req, res) => {
        Employee.findById(req.params.id, (err, doc) => {
            if(!err){
                res.render('addOrEdit', {viewTitle: "Update Employee", employee: doc});
            }
            else {
                console.log('something wrong')
            }
        });
    });
    app.get('/delete/:id', (req, res) => {
        Employee.findByIdAndDelete(req.params.id, (err, doc) => {
            if(!err){
                res.redirect('/list')
            }
            else {
                console.log('something wrong')
            }
        });
    });
    
};

