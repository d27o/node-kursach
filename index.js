var express = require("express");
const path = require('path');
var app = express();
var passport = require("passport");
var session = require("express-session");
var bodyParser = require("body-parser");
// var env = require("dotenv").load();
var exphbs = require("express-handlebars");

app.use(express.static(path.join(__dirname, 'public')));

//For BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// For Passport
app.use(
  session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

//For Handlebars
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    extname: '.hbs',
    layoutsDir: path.join(__dirname, 'views/layouts')
}))

app.set('view engine', '.hbs')
app.set('views', path.join(__dirname, 'views'))

//Models
var user = require("./database/models").User;

//Routes
var authRoute = require("./app/routes/auth.js")(app, passport);



//load passport strategies
require("./app/config/passport")(passport, user);
// console.log(user.findAll())

app.listen(5000, function(err) {
  if (!err) console.log("Project started");
  else console.log(err);
});