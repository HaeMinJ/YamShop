let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');

let indexRouter = require('./routes/index');
let bestRouter = require('./routes/best');
let productRouter = require('./routes/product');
let signatureRouter = require('./routes/signaturepick');
let policyRouter = require('./routes/policy');
let petInfoRouter = require('./routes/petinfo');
let authRouter = require('./routes/auth');

let app = express();

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
app.use('/best', bestRouter);
app.use('/auth', authRouter);
app.use('/product',productRouter);
app.use('/signaturepick',signatureRouter);
app.use('/policy',policyRouter);
app.use('/pet-info',petInfoRouter);



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
