
// Express initialising

const express = require('express');
const path = require('path');
const port = 8080;

const app = express();

//Middlewares
app.use(express.static('assets'));
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

// EJS initialising
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Database
const db = require('./config/mongoose');



// tranferring to routes index.js
app.use('/', require('./routes'));



//Listeneing
app.listen(port, function (err) {
    if (err) {
        console.log('Error in running server');
    }
    console.log('To-do list app server running');
});
