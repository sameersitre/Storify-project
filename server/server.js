var express = require('express');
var app = express();
var path = require('path');
const bodyParser = require('body-parser');
var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const pug = require('pug');
const session= require('express-session');


//import routes
const homeRouter = require('./routes/home');
const ongoingRouter = require('./routes/ongoing');
const newStoryRouter = require('./routes/newStory');
const loginRouter = require('./routes/signup');
const profileRouter = require('./routes/profile');

//db connection
mongoose.connect(("mongodb://localhost:27017/storify"), (err, db) => {
    console.log("Connection Status :",mongoose.connection.readyState);
    console.log("connected :", db.name);
});
mongoose.Promise = global.Promise;


app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json()) 
app.use(session({secret:"a", resave: false, saveUninitialized: true}));


// use routes
app.use('/', homeRouter);
app.use(ongoingRouter);
app.use(newStoryRouter);
app.use(loginRouter);
app.use(profileRouter);



var server = app.listen(5000, ()=>{
    console.log("on PORT 5000");
});
