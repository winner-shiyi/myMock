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

// 小程序---------------------------------------
/* 我要寄件-预约时间段*/
router.post('/wxcx/express/send/appoint', function(req, res, next) {
  var _data = req.body,
    mock = null;
  // console.log(_data) //可以在控制台看到我们传给后端的参数
  if (_data.error) {
    // notifierMsg.errorMsg(res);
    return false;
  }

  mock = Mock.mock({
    "1": {
      'label':'今天',
      'value':
        [
          "14:00-16:00",
          "16:00-18:00"
        ],
      'date':'01月16日'
    },
    "2": {
      'label':'明天',
      'value':
        [
          "10:00-12:00",
          "12:00-14:00",
          "14:00-16:00",
          "16:00-18:00"
        ],
      'date':'01月17日'
    },
    "3": {
      'label':'后天',
      'value':
        [
          "10:00-12:00",
          "12:00-14:00",
          "14:00-16:00",
          "16:00-18:00"
        ],
      'date':'01月18日'
    },
    "4": {
      'label':'大后天',
      'value':
        [
          "10:00-12:00",
          "12:00-14:00",
          "14:00-16:00",
          "16:00-18:00"
        ],
      'date':'01月19日'
    }
    
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


/* 快递订单列表 */
router.post('/wxcx/express/receive/list', function(req, res, next) {
  var _data = req.body,
    mock = null;
  if (_data.error) {
    notifierMsg.errorMsg(res);
    return false;
  }

  mock = Mock.mock({
    "total": 10,
    "list|5": [
            {
              "areaNum": "ABC",
              "expressId": "440000199101155881",
              "pickupCode": "EFG",
              "expressCompanyName": "顺丰",
              "riderPhone": "15880274596",
              "distributionStatus": "PICKUP",
              "dispatchFlag": false,
              "waybillNo": "410000197907264185",
              "waybillStatus": 2,
              "distributionType": "SELF",
              "payFlag": false,
              "storeName": "近江店",
              "riderName": "魏娜",

              // "addressDetail": "浙江省杭州市江干区近江时代大厦",
              // "createDate": "1509511418929",
              // "id": /\d\w{5,10}/,
              // "phone": "15880274595",
              // "receiverCode": /\d\w{5,10}/,
              // "shopName": "新白鹿庆春店",
              // "tagName": "吃货1号",
              // "userName": "魏娜"
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




 







module.exports = router;
