const express = require('express');
const router = express.Router();
// 使用 Mock
const Mock = require('mockjs');

/**
 * 第一个示例：在本地 感受一下模拟get请求
 * 安装插件jsonView
 * 打开本地接口地址查看
 */
router.get('/mock', function(req, res, next) {
  //req.body：获取ajax请求参数
  const sendParams = req.body;
  let data = null;

  if (!sendParams.id) {
    data = {
      "resultCode": '-1',
      "resultData": {},
      "resultDesc": "请求参数中缺少id"
    };
  } else {
    data = {
      "resultCode": '0',
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

/**
 * 第二个示例：在实际项目中 模拟post请求
 * 如何配置跨域 通过cors
 * 如何查看请求参数params
 */
router.post('/login', function(req, res, next) {
  // req.body：获取ajax请求参数
  const sendParams = req.body;
  // 可以在控制台看到我们传给后端的参数
  console.log(sendParams);
  //返回结果给ajax
	res.send({
		"resultCode": '0',
		"resultData": {},
		"resultDesc": "恭喜小姐姐，登录成功咯~~"
	});
	//关闭请求
	res.end();
});

/**
 * 第三个示例：引入mock.js 在本地 模拟一个get请求
 * 打开本地接口地址查看
 * 更多mock规则请查看 mock.js官网 http://mockjs.com/
 */
router.get('/', function(req, res, next) {
  var template = {
    'key|1-10': '★'
  }
  Mock.toJSONSchema(template)
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
/**
 * 第四个示例：在实际项目中 配合mock.js 模拟post请求
 */
router.post('/order/list', function(req, res, next) {
  const sendParams = req.body;
  const mock = null;
  console.log('sendParams', sendParams); //可以在控制台看到我们传给后端的参数
  const mockData = Mock.mock({
    "total": 20, // 模拟20条数据
    "list|20": [ // 模拟20条数据
		  {
        "orderNo": /\d\w{5,10}/, // 因为用订单号作为table每行的key了，记得不能是一样的值
        "address": "发货地址111",
        "orderStatus|1-6": 1, // 如果约定的格式是字符串的话，使用正则/^[1-6]$/
        "driverName": "司机嘟嘟",
        "driverPhone": "13612541414",
        "phone": "15880274595",
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
		  }
    ],
    "pageNo": 1,
	  "pageSize": 10
  });
  // 第五个示例：模拟网速慢，loading的展示效果 加一个setTimeout
  // 第六个示例：模拟请求失败 修改resultCode状态码
  // setTimeout(() => { 
    //返回结果给ajax
    res.send({
      "resultCode": "0",
      "resultData": mockData,
      "resultDesc": "小姐姐，你又出bug啦"
    });
    //关闭请求
    res.end();
  // }, 3000)
});



module.exports = router;
