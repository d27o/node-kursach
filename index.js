const path = require('path')
const express = require('express')
const exphbs = require('express-handlebars')
const app = express()

const config = require('./config/config')


config.db.any('SELECT * FROM flat ')
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