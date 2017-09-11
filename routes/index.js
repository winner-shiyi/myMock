const express = require('express');
const router = express.Router();
// 使用 Mock
const Mock = require('mockjs');

/* GET home page. */
router.get('/', function(req, res, next) {
  const data = Mock.mock({
      // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
      'list|1-10': [{
          // 属性 id 是一个自增数，起始值为 1，每次增 1
          'id|+1': 1
      }]
  })
  res.render('index', { 
    title: 'Express',
    // 在输出结果
    data: JSON.stringify(data, null, 4)
  });
});


/* 第一个示例：模拟get请求接口返回数据 */
router.get('/mock', function(req, res, next) {
  //req.body：获取ajax请求参数
  const sendParams = req.body;
  let data = null;

  if (!sendParams.id) {
    data = {
      'resultCode': '-1',
      "resultData": {},
      "resultDesc": "请求参数中缺少id"
    };
  } else {
    data = {
      'resultCode': '0',
      "resultData": {"id": "这是第一个示例返回"},
      "resultDesc": "get请求成功"
    };
  };

  //如果需要，也可以设置响应头
  res.set({
      'Cache-Control' : 'public, max-age=60' 
  });

  //返回结果给ajax
  res.send(data);
  //关闭请求
  res.end();
});

/* 第二个示例：模拟post请求接口返回数据 */
router.post('/login', function(req, res, next) {
  const sendParams = req.body;
  console.log(sendParams) //可以在控制台看到我们传给后端的参数
  //返回结果给ajax
	res.send({
		'resultCode': '0',
		resultData: {},
		"resultDesc": "小姐姐，你登录失败啦"
	});
	//关闭请求
	res.end();
});
/* 第三个示例：配合mockjs模拟post请求接口返回数据 */
router.post('/order/list', function(req, res, next) {
  const sendParams = req.body;
  const mock = null;
  console.log('sendParams', sendParams); //可以在控制台看到我们传给后端的参数
  const mockData = Mock.mock({
    "total": 1,
    "list": [
		  {
        "orderNo": "123456",
        "address": "发货地址111",
        "orderStatus": 1,
        "driverName": "司机嘟嘟",
        "driverPhone": "13612541414",
        "phone": "发货15880274595",
        "orderTime":"1503540843000",
        "receiversInfoList": [
          {
            "address": "三新家园",
            "userName": "收货商家111",
            "shopName": "牛焱火锅"
          },
          {
            "address": "近江时代大厦",
            "userName": "收货商家222",
            "shopName": "大食堂"
          }
        ]
		  },
    ],
    "pageNo": 1,
	  "pageSize": 10
  });
  // setTimeout(() => {
    //返回结果给ajax
    res.send({
      'resultCode': '0',
      resultData: mockData,
      "resultDesc": "小姐姐，你又出bug啦"
    });
    //关闭请求
    res.end();
  // }, 3000)
});




module.exports = router;
