var createError = require('http-errors');
var express = require('express');
// var expressLoyut = require('express-ejs-layouts');
var path = require('path');
const axious = require('axios');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var homeRouter = require('./routes/home');
var catgresRouter = require('./routes/catgres');
// var searchRouter = require('./routes/search');
var productRouter = require('./routes/product'); 
// var deatalsRouter = require('./routes/deatals');
// var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// app.use(expressLoyut);
app.use('/', homeRouter);
// app.use('/search', searchRouter );
app.use('/catgres', catgresRouter );
app.use('/product', productRouter ); 
// app.use('/deatals', deatalsRouter );

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
