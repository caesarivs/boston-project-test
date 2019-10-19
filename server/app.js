var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var registerRouter = require('./routes/register');
var loginRouter = require('./routes/login');
var recoverRouter = require('./routes/recover');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/register', registerRouter);
app.use('/login', loginRouter);
app.use('/forgot-password', recoverRouter);

module.exports = app;
