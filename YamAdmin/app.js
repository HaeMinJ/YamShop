var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var loginRouter = require('./routes/login');
var usersRouter = require('./routes/users');
var bannerRouter = require('./routes/banner');
var bomspickRouter = require('./routes/bomspick');
var yamspickRouter = require('./routes/yamspick');
var dogbestRouter = require('./routes/dogbest');
var catbestRouter = require('./routes/catbest');
var knowhowRouter = require('./routes/knowhow');


var app = express();

// view engine setup
global.fetch = require("node-fetch");
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/login', loginRouter);
app.use('/banner', bannerRouter);
app.use('/bomspick', bomspickRouter);
app.use('/yamspick', yamspickRouter);
app.use('/dogbest', dogbestRouter);
app.use('/catbest', catbestRouter);
app.use('/knowhow', knowhowRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
