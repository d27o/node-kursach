const path = require('path')
const express = require('express')
const exphbs = require('express-handlebars')
const app = express()

import {pgp, db} from './config/config.js';


// var pgp = require("pg-promise")(/*options*/);
// var db = pgp("postgres://d27o:secret@127.0.0.1:5432/kursach");


db.any('SELECT * FROM flat ')
    .then(function(data) {
        console.log(data)
    })
    .catch(function(error) {
        // error;
    });




app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    extname: '.hbs',
    layoutsDir: path.join(__dirname, 'views/layouts')
}))

app.set('view engine', '.hbs')
app.set('views', path.join(__dirname, 'views'))

app.get('/', (request, response) => {
    response.render('home', {
        name: 'John'
    })
})

app.listen(3000)