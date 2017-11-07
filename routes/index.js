const express = require('express');
const router = express.Router();
const Mock = require('mockjs');// 使用 Mock

/**
 * GET home page
 * 首页路由，不能删掉，否则启动项目的时候会报错
 */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/**
 * 第二个示例：在实际项目中 模拟post请求
 * 如何配置跨域 通过cors模块
 * 如何查看请求参数params
 */
router.post('/login', function(req, res, next) {
  // req.body：获取ajax请求参数
  const sendParams = req.body;
  // 可以在控制台看到我们传给后端的参数
  console.log('sendParams', sendParams);
  // 返回结果给ajax
	res.send({
		"resultCode": '0',
		"resultData": {},
		"resultDesc": "恭喜小姐姐，登录成功咯~~"
	});
	// 关闭请求
	res.end();
});

/* 商家名称模糊搜索 */
router.post('/sender/fuzzyQuery', function(req, res, next) {
  var _data = req.body,
    mock = null;
  console.log(_data) //可以在控制台看到我们传给后端的参数
  if (_data.error) {
    notifierMsg.errorMsg(res);
    return false;
  }

  mock = Mock.mock({
    "list": [
    {
          "shopName": "发货商家2",
          "userName": "发货人2",
          "phone": "18810278138",
          "province": "北京市",
          "city": "市辖区",
          "area": "东城区",
          "addressDetail": "天安门"
      },
      {
          "shopName": "发货商家1",
          "userName": "发货人1",
          "phone": "18810278138",
          "province": "北京市",
          "city": "市辖区",
          "area": "东城区",
          "addressDetail": "天安门"
      }
    ]
  });

  //返回结果给ajax
  res.send({
    'resultCode': '0',
    resultData: mock,
    "resultDesc": "请模糊搜索求失败啦啦啦"
  });
  //关闭请求
  res.end();
});

/* 提交新建车配任务*/
router.post('/order/create', function(req, res, next) {
  var _data = req.body,
    mock = null;
  // console.log(_data) //可以在控制台看到我们传给后端的参数
  if (_data.error) {
    // notifierMsg.errorMsg(res);
    return false;
  }

  mock = Mock.mock({

  });

  //返回结果给ajax
  res.send({
    'resultCode': '0',
    resultData: [],
    "resultDesc": "新建任务请求失败咯"
  });
  //关闭请求
  res.end();
});
/* 车配任务列表 */
router.post('/order/list', function(req, res, next) {
  var _data = req.body,
    mock = null;
  if (_data.error) {
    notifierMsg.errorMsg(res);
    return false;
  }

  mock = Mock.mock({
    "total": 10,
    "list|20": [
      {
            "orderNo": /\d\w{5,10}/, // 因为用订单号作为table每行的key了，记得不能是一样的值
            "address": "发货地址111",
            "orderStatus|1-5": 1, // 如果约定的格式是字符串的话，使用正则/^[1-6]$/
            "driverName": "司机嘟嘟",
            "driverPhone": "13612541414",
            "phone": "15880274595",
            "orderTime":"1503540843000",
            "receiversInfoList": [
              {
                "address": "三新家园",
                "userName": "收货商家111",
                "shopName": "牛焱火锅发货发过鸡飞狗叫更何况更何况就回来就回来了就回来会老回来回家冷静"
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

  //返回结果给ajax
  res.send({
    'resultCode': '0',
    resultData: mock,
    "resultDesc": "任务列表页失败咯"
  });
  //关闭请求
  res.end();
});
/* 编辑车配任务 */
router.post('/order/infoDetail', function(req, res, next) {
  var _data = req.body,
    mock = null;
  if (_data.error) {
    notifierMsg.errorMsg(res);
    return false;
  }

  mock = Mock.mock({
    "shopName":"发货商家111",
    "userName":"发货人11",
    "province":"浙江省",
    "city":"温州市",
    "area":"鹿城区",
    "address":"好吃的",
    "drivingTime":"1503540843000",
    "phone":"15880274595",
    "receiversInfoList":[
      {
        "shopName":"收货商家111",
        "userName":"收货人11",
        "province":"福建省",
        "city":"厦门市",
        "area":"思明区",
        "addressDetail":"软件园",
        "phone":"15880274595",
      },
      {
        "shopName":"收货商家2222",
        "userName":"收货人2222",
        "province":"福建省",
        "city":"厦门市",
        "area":"思明区",
        "addressDetail":"软件园",
        "phone":"15880274595",
      }
    ]
  });

  //返回结果给ajax
  res.send({
    'resultCode':'0',
    resultData: mock,
    "resultDesc": "编辑车配任务要怎么请求嘞"
  });
  //关闭请求
  res.end();
});

/* 取消订单 */
router.post('/order/cancel', function(req, res, next) {
  var _data = req.body,
    mock = null;
  if (_data.error) {
    notifierMsg.errorMsg(res);
    return false;
  }

  mock = Mock.mock({
    "list": {
          "orderNo": "123456",
          "address": "发货地址111",
          "orderStatus": 1,
          "driverName": "司机嘟嘟",
          "driverPhone": "13612541414",
          "phone": "发货15880274595",
          "receiversInfoList": [
            {
              "address": "近江时代大厦",
              "userName": "收货商家1"
            },
            {
              "address": "近江时代大厦222",
              "userName": "收货商家222"
            }
          ]
    }
  });

  //返回结果给ajax
  res.send({
    'resultCode': '000',
    resultData: mock,
    "resultDesc": "取消订单请求失败"
  });
  //关闭请求
  res.end();
});

/* 批量导入订单 */
router.post('/order/import', function(req, res, next) {
  var _data = req.body,
    mock = null;
  console.log(_data) //可以在控制台看到我们传给后端的参数
  if (_data.error) {
    notifierMsg.errorMsg(res);
    return false;
  }

  mock = Mock.mock({
    "errorOrderNo": [
            "1",
            "2",
            "3",
            "4"
        ],
        "successCount": 2
  });

  //返回结果给ajax
  res.send({
    'resultCode': '0',
    resultData: mock,
    "resultDesc": "导入失败，不要气馁"
  });
  //关闭请求
  res.end();
});

/* 下载excel模板 */
router.post('/order/downExcel', function(req, res, next) {
  var _data = req.body,
    mock = null;

  if (_data.error) {
    notifierMsg.errorMsg(res);
    return false;
  }

  mock = Mock.mock({
    "errorOrderNo": [
            "1",
            "2",
            "3",
            "4"
        ],
        "successCount": 1
  });

  //返回结果给ajax
  res.send({
    'size': 8397,
    'type': 'application/octet-stream'
  });
  //关闭请求
  res.end();
});

/* 分配司机-分配司机列表 */
router.post('/order/driver/list', function(req, res, next) {
  var _data = req.body,
    mock = null;
  if (_data.error) {
    notifierMsg.errorMsg(res);
    return false;
  }

  mock = Mock.mock({
    "total": 50,
    "list": [
      {
            "carLength": "11",
            "carNumber": "2657567",
            "driverOrderCount": 5,
            "driverName": "司机嘟嘟",
            "driverId": "136",
            "driverWorkStatus": 1,
            "carType": "0"
          },
          {
            "carLength": "11",
            "carNumber": "2657567",
            "driverOrderCount": 5,
            "driverName": "司机哒哒",
            "driverId": "150",
            "driverWorkStatus": 0,
            "carType": "1"
          },
          {
            "carLength": "11",
            "carNumber": "2657567",
            "driverOrderCount": 5,
            "driverName": "司机ccc",
            "driverId": "120",
            "driverWorkStatus": 0,
            "carType": "1"
          },
    ],
    "pageNo": 1,
      "pageSize": 10
  });

  //返回结果给ajax
  res.send({
    'resultCode': '0',
    resultData: mock,
    "resultDesc": "任务列表页失败咯"
  });
  //关闭请求
  res.end();
});
/* 分配司机-派单按钮 */
router.post('/order/dispatch', function(req, res, next) {
  var _data = req.body,
    mock = null;
  if (_data.error) {
    notifierMsg.errorMsg(res);
    return false;
  }

  mock = Mock.mock({
  });

  //返回结果给ajax
  res.send({
    'resultCode': '0',
    resultData: mock,
    "resultDesc": "派单失败咯"
  });
  //关闭请求
  res.end();
});
/* 车配任务详情-获取订单信息 */
router.post('/order/detail', function(req, res, next) {
  var _data = req.body,
    mock = null;
  if (_data.error) {
    notifierMsg.errorMsg(res);
    return false;
  }

  mock = Mock.mock({
    'dispatchOrderTime': '',
    'orderNo': '123456',
    'orderStatus': 4,
    'orderTime': '',
    'senderInfo': {
      'address': '浙江省杭州市三新家园',
      'phone': '14567890789',
      'shopName': '发货商家1111',
      'userName': '发货人郭德纲'
    },
    'receiversInfoList': [
      {
        'address': '浙江省杭州市三新家园',
        'phone': '14567890789',
        'shopName': '收货商家1111',
        'userName': '收货人郭德纲',
        'imageTip': [
                    "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
                    "http://tubobo-qa.oss-cn-shanghai.aliyuncs.com/file_2017082416510016",
                    "http://tubobo-qa.oss-cn-shanghai.aliyuncs.com/file_2017082416510016"
                ],
        'textTip': '人不在家',
        'reason': null,
        'receiverStatus': 3
      }
      
    ]
  });

  //返回结果给ajax
  res.send({
    'resultCode': '0',
    resultData: mock,
    "resultDesc": "获取车配任务详情-获取订单信息失败咯"
  });
  //关闭请求
  res.end();
});
/* 车配任务详情-获取打卡信息 */
router.post('/order/cardInfo', function(req, res, next) {
  var _data = req.body,
    mock = null;
  if (_data.error) {
    notifierMsg.errorMsg(res);
    return false;
  }

  mock = Mock.mock({
    'carNumber': '5678',
    'carType': '1',
    'driverId': '7FFGG',
    'driverName': '司机嘟嘟',
    'driverPhone': '15880356789',
    "punchInfo": [
        {
            "actualArriveAddress": "浙江省杭州市上城区望江街道雷霆路近江商务大厦",
            "actualLeaveAddress": null,
            "arriveTime": 1508897901000,
            "hasArrived": true,
            "hasLeft": false,
            "leaveTime": null,
            "receiverFlag": false,
            "serialNumber": 0,
            "shopName": "杨幂",
            "userName": "杨幂"
        },
        {
            "actualArriveAddress": null,
            "actualLeaveAddress": "浙江省杭州市上城区望江街道雷霆路近江商务大厦",
            "arriveTime": null,
            "hasArrived": false,
            "hasLeft": true,
            "leaveTime": 1508897902000,
            "receiverFlag": false,
            "serialNumber": 0,
            "shopName": "杨幂",
            "userName": "杨幂"
        },
        {
            "actualArriveAddress": "浙江省杭州市上城区望江街道雷霆路近江商务大厦",
            "actualLeaveAddress": null,
            "arriveTime": 1508897907000,
            "hasArrived": true,
            "hasLeft": false,
            "leaveTime": null,
            "receiverFlag": true,
            "serialNumber": 0,
            "shopName": "赵又廷",
            "userName": "赵又廷"
        },
        {
            "actualArriveAddress": null,
            "actualLeaveAddress": "浙江省杭州市上城区望江街道雷霆路近江商务大厦",
            "arriveTime": null,
            "hasArrived": false,
            "hasLeft": true,
            "leaveTime": 1508897910000,
            "receiverFlag": true,
            "serialNumber": 0,
            "shopName": "赵又廷",
            "userName": "赵又廷"
        },
        {
            "actualArriveAddress": "浙江省杭州市上城区望江街道雷霆路近江商务大厦",
            "actualLeaveAddress": null,
            "arriveTime": 1508897921000,
            "hasArrived": true,
            "hasLeft": false,
            "leaveTime": null,
            "receiverFlag": true,
            "serialNumber": 0,
            "shopName": "高圆圆",
            "userName": "高圆圆"
        },
        {
            "actualArriveAddress": null,
            "actualLeaveAddress": "浙江省杭州市上城区望江街道雷霆路近江商务大厦",
            "arriveTime": null,
            "hasArrived": false,
            "hasLeft": true,
            "leaveTime": 1508897925000,
            "receiverFlag": true,
            "serialNumber": 0,
            "shopName": "高圆圆",
            "userName": "高圆圆"
        }
    ]
  });

  //返回结果给ajax
  res.send({
    'resultCode': '0',
    resultData: mock,
    "resultDesc": "获取打卡信息失败咯"
  });
  //关闭请求
  res.end();
});

// v1.2---------------------------------------

/* 提交收货商家信息*/
router.post('/receiver/create', function(req, res, next) {
  var _data = req.body,
    mock = null;
  // console.log(_data) //可以在控制台看到我们传给后端的参数
  if (_data.error) {
    // notifierMsg.errorMsg(res);
    return false;
  }

  mock = Mock.mock({

  });

  //返回结果给ajax
  res.send({
    'resultCode': '0',
    resultData: [],
    "resultDesc": "新建任务请求失败咯"
  });
  //关闭请求
  res.end();
});

/* 收货商家列表 */
router.post('/receiver/list', function(req, res, next) {
  var _data = req.body,
    mock = null;
  if (_data.error) {
    notifierMsg.errorMsg(res);
    return false;
  }

  mock = Mock.mock({
    "total": 10,
    "list": [
            {
                "addressDetail": "浙江省杭州市江干区近江时代大厦",
                "createDate": "1509511418929",
                "id": /\d\w{5,10}/,
                "phone": "15880274595",
                "receiverCode": /\d\w{5,10}/,
                "shopName": "新白鹿庆春店",
                "tagName": "吃货1号",
                "userName": "魏娜"
            }
        ],
        "pageNo": 1,
        "pageSize": 10,
        "total": 20
  });

  //返回结果给ajax
  res.send({
    'resultCode': '0',
    resultData: mock,
    "resultDesc": "任务列表页失败咯"
  });
  //关闭请求
  res.end();
});

/* 收货商家详情 */
router.post('/receiver/info', function(req, res, next) {
  var _data = req.body,
    mock = null;
  if (_data.error) {
    notifierMsg.errorMsg(res);
    return false;
  }

  mock = Mock.mock({
    "address": "近江时代大厦",
        "area": "江干区",
        "city": "杭州市",
        "phone": '15880274591',
        "phoneList": [
            "1111",
            "2222",
            "3333",
            "4444"
        ],
        "province": "浙江省",
        "shopName": "新白鹿庆春店",
        "tagId": "3",
        "userName": "魏娜"
  });

  //返回结果给ajax
  res.send({
    'resultCode':'0',
    resultData: mock,
    "resultDesc": "编辑车配任务要怎么请求嘞"
  });
  //关闭请求
  res.end();
});

/* 新建分组名称*/
router.post('/tag/create', function(req, res, next) {
  var _data = req.body,
    mock = null;
  // console.log(_data) //可以在控制台看到我们传给后端的参数
  if (_data.error) {
    // notifierMsg.errorMsg(res);
    return false;
  }

  mock = Mock.mock({

  });

  //返回结果给ajax
  res.send({
    'resultCode': '000',
    resultData: [],
    "resultDesc": "分组名称已经存在"
  });
  //关闭请求
  res.end();
});

/* 获取收货商家分组名称 */
router.post('/dictionary/query', function(req, res, next) {
  var _data = req.body,
    mock = null;
  // console.log(_data) //可以在控制台看到我们传给后端的参数
  if (_data.error) {
    // notifierMsg.errorMsg(res);
    return false;
  }

  mock = Mock.mock({
    "list": [
      {
        "label": "吃货1号",
        "value": "1"
      },
      {
        "label": "油爆虾",
        "value": "2"
      },
      {
        "label": "红烧排骨",
        "value": "3"
      }
    ]
  });

  //返回结果给ajax
  res.send({
    'resultCode': '0',
    resultData: mock,
    "resultDesc": "新建任务请求失败咯"
  });
  //关闭请求
  res.end();
});

/* 取消订单 */
router.post('/carOrder/cancel', function(req, res, next) {
  var _data = req.body,
    mock = null;
  if (_data.error) {
    notifierMsg.errorMsg(res);
    return false;
  }

  mock = Mock.mock({

  });

  //返回结果给ajax
  res.send({
    'resultCode': '0',
    resultData: mock,
    "resultDesc": "取消订单请求失败"
  });
  //关闭请求
  res.end();
});

/* 生成配载单 */
router.post('/order/generate', function(req, res, next) {
  var _data = req.body,
    mock = null;
  if (_data.error) {
    notifierMsg.errorMsg(res);
    return false;
  }

  mock = Mock.mock({

  });

  //返回结果给ajax
  res.send({
    'resultCode': '0',
    resultData: mock,
    "resultDesc": "生成配载单失败咯"
  });
  //关闭请求
  res.end();
});

/* 订单管理列表 */
router.post('/carOrder/list', function(req, res, next) {
  var _data = req.body,
    mock = null;
  if (_data.error) {
    notifierMsg.errorMsg(res);
    return false;
  }

  mock = Mock.mock({
    "total": 10,
    "list|20": [
            {
                "addressDetail": "浙江省杭州市江干区近江时代大厦",
                "createDate": 1509511418929,
                "deliveryTime": '2017-11-03 01:43~2017-11-03 03:43',
                "id|+1": 1,
                "orderStatus|": 1,
                "phone": "15880274595",
                "receiver": "新白鹿庆春店",
                "sender": "发货1",
                "tagName": "吃货1号"
            }
        ],
        "pageNo": 1,
        "pageSize": 10,
        "total":20,
  });
  //返回结果给ajax
    res.send({
      'resultCode': '0',
      resultData: mock,
      "resultDesc": "取消订单请求失败"
    });
    //关闭请求
    res.end();
});

 







module.exports = router;
