var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var ejs = require('ejs');
var cors = require('cors');
var axios = require('axios');
var proxyConfig = require('./proxy.config')
var index = require('./routes/index');
var users = require('./routes/users');
var chalk = require('chalk')

var app = express();
app.use(cookieParser());
//配置跨域
app.use(cors({
    //允许这个域的访问
    // origin: ["http://localhost:8081"],
    origin: ["*"],
    //只允许GET和POST请求
    methods: ['GET', 'POST'],
    //只允许带这两种请求头的链接访问,可以不设置这个
    alloweHeaders: ['Content-Type', 'Authorization']
}));


// view engine setup
app.set('views', path.join(__dirname, 'views'));
// 配置使用ejs模板
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


// 如果请求出现错误就把请求转发到其他环境,假如转发环境也报错则抛出错误
app.use(function(req, res, next) {
  // 把请求头、请求参数也一起代理过去
  const { method } = req
  const url = `${proxyConfig.proxy.url}${req.url}`

  // tip、prev没写在一起是因为console.log提示会有错乱问题
  const tip = chalk.red(`${url}`)
  const prev = chalk.red(`[${method}方式转发接口]到:`)
  console.log(prev, tip)

  axios[method.toLowerCase()](url, req.body,{
    headers: {
      Authorization: req.headers.authorization,
    }
  }).then((response) => {
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
