var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var ejs = require('ejs');
var cors = require('cors');
var axios = require('axios')
var querystring = require('querystring')

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();
app.use(cookieParser());
//配置跨域
app.use(cors({
    //允许这个域的访问
    origin: ["http://localhost:8090"],
    //只允许GET和POST请求
    methods: ['GET', 'POST'],
    //只允许带这两种请求头的链接访问,可以不设置这个
    alloweHeaders: ['Content-Type', 'Authorization']
}));


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('html', ejs.__express);
app.set('view engine', 'html');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public/images', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);


// 如果请求出现错误就把请求代理到其他环境,假如代理环境也报错则抛出错误
app.use(function(req, res, next) {
  // 把请求头、请求参数也一起代理过去
  const {headers, body, url, method} = req

  axios[method.toLowerCase()](
    `http://127.0.0.1:8088${url}`,
    querystring.stringify(body),
    { headers }
  ).then((response) => {
    res.json(response.data)
  }).catch((e) => {
    var err = new Error('Not Found');
    err.status = e.response.status;
    next(err);
  })
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
