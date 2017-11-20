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
      [120.196063368056,30.2310983615451],
      [120.196063368056,30.2310983615451],
      [120.196949598524,30.2304972330729],
      [120.197553710937,30.2295043945313],
      [120.196748318142,30.23033203125],
      [120.206974283854,30.287141655816],
      [120.326235894097,30.309655219184],
      [120.327360568576,30.3102384440104],
      [120.328495279948,30.3102460394965],
      [120.328842773438,30.3110999891493],
      [120.328741048177,30.311998969184],
      [120.328620062934,30.3129144965278],
      [120.328585069444,30.3138359917535],
      [120.328560926649,30.3147485351563],
      [120.328520236545,30.3156589084201],
      [120.328530544705,30.3165763346354],
      [120.329511447483,30.3168869357639],
      [120.329884982639,30.3177400716146],
      [120.330375705295,30.3185403103299],
      [120.330953776042,30.3193012152778],
      [120.330133734809,30.3187288411458],
      [120.329128689236,30.3184350585937],
      [120.328102756076,30.3181740993924],
      [120.327073567708,30.3178884548611],
      [120.326059299045,30.3176011827257],
      [120.324993218316,30.3176649305556],
      [120.324758843316,30.3185495334201],
      [120.324694552951,30.3194580078125],
      [120.324215766059,30.3202658420139],
      [120.323129882812,30.3201996527778],
      [120.322005208333,30.3201478407118],
      [120.320910101997,30.3201220703125],
      [120.319809027778,30.3200998263889],
      [120.318740234375,30.3200783962674],
      [120.317625596788,30.3200545247396],
      [120.316580132378,30.3200431315104],
      [120.315598144531,30.3203816731771],
      [120.314473470052,30.3200911458333],
      [120.313400336372,30.3199731445313],
      [120.312302246094,30.3198171657986],
      [120.311212293837,30.3196408420139],
      [120.310093044705,30.3194127061632],
      [120.308992513021,30.3192385525174],
      [120.307912055122,30.3190543619792],
      [120.306835394965,30.3188699001736],
      [120.305627712674,30.3187033420139],
      [120.304596082899,30.3185606553819],
      [120.303488226997,30.3184391276042],
      [120.302435980903,30.3183393012153],
      [120.301352539063,30.3182533094618],
      [120.30026421441,30.3181176757812],
      [120.299230143229,30.3179446072049],
      [120.298014322917,30.3177864583333],
      [120.296932508681,30.3176266818576],
      [120.295869411892,30.3175100368924],
      [120.294812011719,30.3173668077257],
      [120.293731825087,30.3171888563368],
      [120.292641601562,30.3170353190104],
      [120.29199625651,30.3177823893229],
      [120.293068576389,30.3176535373264],
      [120.293011338976,30.3167306857639],
      [120.292801920573,30.3157929144965],
      [120.292506781684,30.3147146267361],
      [120.292231445312,30.3137326388889],
      [120.292014160156,30.3127766927083],
      [120.291742078993,30.311799858941],
      [120.291448025174,30.3108224826389],
      [120.291159939236,30.3098470052083],
      [120.290890028212,30.3088693576389],
      [120.290607096354,30.3078946940104],
      [120.290362684462,30.3070100911458],
      [120.29021077474,30.3060647243924],
      [120.290081108941,30.305084906684],
      [120.289956325955,30.3040798611111],
      [120.289789496528,30.3029893663194],
      [120.289606391059,30.3018763563368],
      [120.289386393229,30.300920952691],
      [120.289208984375,30.2999207899306],
      [120.289113498264,30.298837890625],
      [120.289102376302,30.2979109700521],
      [120.289141981337,30.2970030381944],
      [120.289170735677,30.2959559461806],
      [120.289216037326,30.2949739583333],
      [120.289189453125,30.2940147569444],
      [120.289251302083,30.2929342990451],
      [120.289269476997,30.2919078233507],
      [120.28925265842,30.2908612738715],
      [120.289297960069,30.2898011610243],
      [120.289342719184,30.2887375217014],
      [120.28937093099,30.2876915147569],
      [120.289347330729,30.2866295030382],
      [120.28935953776,30.2855512152778],
      [120.289395616319,30.2844862196181],
      [120.289430881076,30.2834421115451],
      [120.289439290365,30.2823817274306],
      [120.289469129774,30.281266547309],
      [120.28948187934,30.2802140299479],
      [120.289505208333,30.2792122395833],
      [120.289528537326,30.2782470703125],
      [120.289517415365,30.27728515625],
      [120.289498697917,30.2762038845486],
      [120.289515516493,30.2750990125868],
      [120.28954155816,30.2740443250868],
      [120.289577094184,30.2730569118924],
      [120.289577365451,30.272109375],
      [120.28963812934,30.2711699761285],
      [120.28963406033,30.2701310221354],
      [120.289682074653,30.2690402560764],
      [120.289666341146,30.2680246310764],
      [120.289713541667,30.2669780815972],
      [120.289726291233,30.2660343424479],
      [120.289737413194,30.265055609809],
      [120.289761284722,30.2641408962674],
      [120.289818250868,30.2631876627604],
      [120.289815266927,30.2622092013889],
      [120.289810926649,30.2611800130208],
      [120.289847005208,30.2602693684896],
      [120.289887695313,30.2591574435764],
      [120.289946831597,30.2581038411458],
      [120.289941677517,30.2570855034722],
      [120.290005696615,30.2561366102431],
      [120.290036892361,30.2551698133681],
      [120.290005967882,30.2542599826389],
      [120.290075141059,30.2531944444444],
      [120.290119086372,30.2520987955729],
      [120.290173882378,30.2510850694444],
      [120.290234103733,30.2500170898438],
      [120.290235188802,30.2489765082465],
      [120.290351833767,30.2479673936632],
      [120.290496961806,30.246920844184],
      [120.290646430122,30.2458726671007],
      [120.290797254774,30.2448136393229],
      [120.290935872396,30.2437594943576],
      [120.291082899306,30.2427341037326],
      [120.291223687066,30.241692437066],
      [120.29135172526,30.2406304253472],
      [120.291531032986,30.2394213867187],
      [120.291659342448,30.238395453559],
      [120.291745605469,30.2374905056424],
      [120.291829427083,30.236461859809],
      [120.291870659722,30.2355528428819],
      [120.29176812066,30.2344712999132],
      [120.291569824219,30.2335411241319],
      [120.291525336372,30.2326391601562],
      [120.291442328559,30.2316471354167],
      [120.29137749566,30.2306168619792],
      [120.291365559896,30.2296324327257],
      [120.291439887153,30.2287114800347],
      [120.291472981771,30.2277376302083],
      [120.29148952908,30.2267648654514],
      [120.291426866319,30.2257449001736],
      [120.29127360026,30.2248391384549],
      [120.290979817708,30.2239569769965],
      [120.290383300781,30.2231540256076],
      [120.289593370226,30.2225396050347],
      [120.288585883247,30.222116156684]

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
