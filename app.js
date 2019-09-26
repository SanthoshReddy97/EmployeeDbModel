require('./models/db');

const express = require('express');

const bodyparser = require('body-parser');

const path = require('path')

const exphbs = require('express-handlebars');

const employeeController = require('./controllers/employeecontroller')

var app = express()

app.use(bodyparser.urlencoded({extended: true}));

app.use(bodyparser.json());

app.set('views', path.join(__dirname + '/views/'));
app.engine('hbs', exphbs({extname: 'hbs', defaultLayout: 'mainlayout', layoutsDir:__dirname + '/views/' }));
app.set('view engine', 'hbs');

app.get("/", (req, res) => {
res.status(200).send({"msg": "Employees Database"})
});
employeeController(app);


app.get("/hi", (req, res) => {
    res.status(200).send({"msg": "hellow world"})
});

app.get("/hello", (req, res) => {
res.status(200).send({"msg":"hi everyone"})
});
app.listen(3000, () => {
    console.log('you are listening to the port 3000')
}) ;


