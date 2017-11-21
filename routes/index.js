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
      'address': '浙江省杭州市江干区三叉新村11栋',
      'phone': '14567890789',
      'shopName': '发货商家1111',
      'userName': '发货人郭德纲'
    },
    'receiversInfoList': [
      {
        'address': '浙江省杭州市上城区近江时代大厦A座',
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
      },
      {
        'address': '浙江省杭州市萧山区新白鹿',
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
    "list|22": [
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
        "pageNo": 2,
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

/* 配载单详情页车辆轨迹 */
router.post('/carOrder/path', function(req, res, next) {
  var _data = req.body,
    mock = null;
  if (_data.error) {
    notifierMsg.errorMsg(res);
    return false;
  }

  mock = Mock.mock({
    "addressList":['浙江省杭州市萧山区新白鹿', '浙江省杭州市江干区三叉新村11栋2单元', '浙江省杭州市近江时代大厦'],
    "list": [
      [120.196063368056,30.2310983615451,1511235395203],
      [120.196063368056,30.2310983615451,1511235395203],
      [120.196949598524,30.2304972330729,1511235395203],
      [120.197553710937,30.2295043945313,1511235395203],
      [120.196748318142,30.23033203125,1511235395203],
      [120.206974283854,30.287141655816,1511235395203],
      [120.326235894097,30.309655219184,1511235395203],
      [120.327360568576,30.3102384440104,1511235395203],
      [120.328495279948,30.3102460394965,1511235395203],
      [120.328842773438,30.3110999891493,1511235395203],
      [120.328741048177,30.311998969184,1511235395203],
      [120.328620062934,30.3129144965278,1511235395203],
      [120.328585069444,30.3138359917535,1511235395203],
      [120.328560926649,30.3147485351563,1511235395203],
      [120.328520236545,30.3156589084201,1511235395203],
      [120.328530544705,30.3165763346354,1511235395203],
      [120.329511447483,30.3168869357639,1511235395203],
      [120.329884982639,30.3177400716146,1511235395203],
      [120.330375705295,30.3185403103299,1511235395203],
      [120.330953776042,30.3193012152778,1511235395203],
      [120.330133734809,30.3187288411458,1511235395203],
      [120.329128689236,30.3184350585937,1511235395203],
      [120.328102756076,30.3181740993924,1511235395203],
      [120.327073567708,30.3178884548611,1511235395203],
      [120.326059299045,30.3176011827257,1511235395203],
      [120.324993218316,30.3176649305556,1511235395203],
      [120.324758843316,30.3185495334201,1511235395203],
      [120.324694552951,30.3194580078125,1511235395203],
      [120.324215766059,30.3202658420139,1511235395203],
      [120.323129882812,30.3201996527778,1511235395203],
      [120.322005208333,30.3201478407118,1511235395203],
      [120.320910101997,30.3201220703125,1511235395203],
      [120.319809027778,30.3200998263889,1511235395203],
      [120.318740234375,30.3200783962674,1511235395203],
      [120.317625596788,30.3200545247396,1511235395203],
      [120.316580132378,30.3200431315104,1511235395203],
      [120.315598144531,30.3203816731771,1511235395203],
      [120.314473470052,30.3200911458333,1511235395203],
      [120.313400336372,30.3199731445313,1511235395203],
      [120.312302246094,30.3198171657986,1511235395203],
      [120.311212293837,30.3196408420139,1511235395203],
      [120.310093044705,30.3194127061632,1511235395203],
      [120.308992513021,30.3192385525174,1511235395203],
      [120.307912055122,30.3190543619792,1511235395203],
      [120.306835394965,30.3188699001736,1511235395203],
      [120.303488226997,30.3184391276042,1511235395203],
      [120.302435980903,30.3183393012153,1511235395203],
      [120.301352539063,30.3182533094618,1511235395203],
      [120.30026421441,30.3181176757812,1511235395203],
      [120.299230143229,30.3179446072049,1511235395203],
      [120.298014322917,30.3177864583333,1511235395203],
      [120.296932508681,30.3176266818576,1511235395203],
      [120.295869411892,30.3175100368924,1511235395203],
      [120.294812011719,30.3173668077257,1511235395203],
      [120.293731825087,30.3171888563368,1511235395203],
      [120.292641601562,30.3170353190104,1511235395203],
      [120.29199625651,30.3177823893229,1511235395203],
      [120.293068576389,30.3176535373264,1511235395203],
      [120.293011338976,30.3167306857639,1511235395203],
      [120.292801920573,30.3157929144965,1511235395203],
      [120.292506781684,30.3147146267361,1511235395203],
      [120.292231445312,30.3137326388889,1511235395203],
      [120.292014160156,30.3127766927083,1511235395203],
      [120.291742078993,30.311799858941,1511235395203],
      [120.291448025174,30.3108224826389,1511235395203],
      [120.291159939236,30.3098470052083,1511235395203],
      [120.290890028212,30.3088693576389,1511235395203],
      [120.290607096354,30.3078946940104,1511235395203],
      [120.290362684462,30.3070100911458,1511235395203],
      [120.29021077474,30.3060647243924,1511235395203],
      [120.290081108941,30.305084906684,1511235395203],
      [120.289956325955,30.3040798611111,1511235395203],
      [120.289789496528,30.3029893663194,1511235395203],
      [120.289606391059,30.3018763563368,1511235395203],
      [120.289386393229,30.300920952691,1511235395203],
      [120.289208984375,30.2999207899306,1511235395203],
      [120.289113498264,30.298837890625,1511235395203],
      [120.289102376302,30.2979109700521,1511235395203],
      [120.289141981337,30.2970030381944,1511235395203],
      [120.289170735677,30.2959559461806,1511235395203],
      [120.289216037326,30.2949739583333,1511235395203],
      [120.289189453125,30.2940147569444,1511235395203],
      [120.289251302083,30.2929342990451,1511235395203],
      [120.289269476997,30.2919078233507,1511235395203],
      [120.28925265842,30.2908612738715,1511235395203],
      [120.289297960069,30.2898011610243,1511235395203],
      [120.289342719184,30.2887375217014,1511235395203],
      [120.28937093099,30.2876915147569,1511235395203],
      [120.289347330729,30.2866295030382,1511235395203],
      [120.28935953776,30.2855512152778,1511235395203],
      [120.289395616319,30.2844862196181,1511235395203],
      [120.289430881076,30.2834421115451,1511235395203],
      [120.289439290365,30.2823817274306,1511235395203],
      [120.289469129774,30.281266547309,1511235395203],
      [120.28948187934,30.2802140299479,1511235395203],
      [120.289505208333,30.2792122395833,1511235395203],
      [120.289528537326,30.2782470703125,1511235395203],
      [120.289517415365,30.27728515625,1511235395203],
      [120.289498697917,30.2762038845486,1511235395203],
      [120.289515516493,30.2750990125868,1511235395203],
      [120.28954155816,30.2740443250868,1511235395203],
      [120.289577094184,30.2730569118924,1511235395203],
      [120.289577365451,30.272109375,1511235395203],
      [120.28963812934,30.2711699761285,1511235395203],
      [120.28963406033,30.2701310221354,1511235395203]
    ],
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
