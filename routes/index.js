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
router.post('/common/queryTimespan', function(req, res, next) {
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
      'currentTime':1516072459233
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
      'currentTime':1516118400000
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
      'currentTime':1516204800000
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

/* 商家详情 */
router.post('/spuDetail', function(req, res, next) {
  var _data = req.body,
    mock = null;
  if (_data.error) {
    notifierMsg.errorMsg(res);
    return false;
  }

  mock = Mock.mock(
    {
      "subTitle": "肉脆多汁 香甜水润肉脆多汁 香甜水润肉脆多汁 香甜水润肉脆多汁 香甜水润肉脆多汁 香甜水润肉脆多汁 香甜水润肉脆多汁 香甜水润肉脆多汁 香甜水润肉脆多汁 香甜水润肉脆多汁 香甜水润肉脆多汁 香甜水润肉脆多汁 香甜水润肉脆多汁 香甜水润肉脆多汁 香甜水润肉脆多汁 香甜水润肉脆多汁 香甜水润肉脆多汁 香甜水润肉脆多汁 香甜水润肉脆多汁 香甜水润肉脆多汁 香甜水润",
      "detailImageList": [
          "http://res.neosjyx.com/resource/images/wechat/7043/editor/20180326102326281144.jpg",
          "http://res.neosjyx.com/resource/images/wechat/7043/editor/20180326102327031389.jpg",
          "http://res.neosjyx.com/resource/images/wechat/7043/editor/20180326102507628522.jpg"
      ],
      "specList": [
          {
              "specName": "规格",
              "specId": "450000201301152580",
              "valueList": [
                  {
                      "specValue": "8只装"
                  },
                  {
                    "specValue": "16只装"
                  }
              ]
          },
          {
            "specName": "颜色",
            "specId": "450000201301152581",
            "valueList": [
                {
                    "specValue": "红色"
                },
                {
                    "specValue": "黑色"
                }
            ]
        }

      ],
      "goodsDetails": [
          {
              "key": "产地",
              "value": "杭州"
          },
          {
              "key": "产地",
              "value": "杭州"
          },
          {
              "key": "产地",
              "value": "杭州"
          },
          {
              "key": "产地",
              "value": "杭州"
          },
          {
              "key": "产地",
              "value": "杭州"
          }
      ],
      "spuId": "320000200309088655",
      "shop": {
          "shopId": "540000197208288742",
          "shopName": "四季严选勾庄店"
      },
      "headImageList": [
          "http://res.neosjyx.com/resource/images/photo/7043/20180326/201803261017392.jpg",
          "http://res.neosjyx.com/resource/images/photo/7043/20180326/201803261017393.jpg"
      ],
      "sellingPrices": [
          28.9
      ],
      "skuList": [
          {
              "sellingPrice": 28.9,
              "quantity": 0,
              "specList": [
                  {
                      "specId": "450000201301152580",
                      "specValue": "8只装",
                      "specName": "重量"
                  },
                  {
                      "specId": "450000201301152581",
                      "specValue": "红色",
                      "specName": "重量"
                  }
              ],
              "skuId": "skuId1",
              "specImage": "http://res.neosjyx.com/resource/images/photo/7043/20180409/201804090938561.jpg"
          },
          {
            "sellingPrice": 28.9,
            "quantity": 10,
            "specList": [
                {
                    "specId": "450000201301152580",
                    "specValue": "16只装",
                    "specName": "重量"
                },
                {
                    "specId": "450000201301152581",
                    "specValue": "红色",
                    "specName": "重量"
                }
            ],
            "skuId": "skuId2",
            "specImage": "http://res.neosjyx.com/resource/images/photo/7043/20180409/201804090938561.jpg"
          },
          {
            "sellingPrice": 28.9,
            "quantity": 0,
            "specList": [
                {
                    "specId": "450000201301152580",
                    "specValue": "8只装",
                    "specName": "重量"
                },
                {
                    "specId": "450000201301152581",
                    "specValue": "黑色",
                    "specName": "重量"
                }
            ],
            "skuId": "skuId3",
            "specImage": "http://res.neosjyx.com/resource/images/photo/7043/20180409/201804090938561.jpg"
          },
          {
            "sellingPrice": 28.9,
            "quantity": 10,
            "specList": [
                {
                    "specId": "450000201301152580",
                    "specValue": "16只装",
                    "specName": "重量"
                },
                {
                    "specId": "450000201301152581",
                    "specValue": "黑色",
                    "specName": "重量"
                }
            ],
            "skuId": "skuId4",
            "specImage": "http://res.neosjyx.com/resource/images/photo/7043/20180409/201804090938561.jpg"
          }

      ],
      "spuName": "湖北秭归伦晚脐橙1kg/盒湖北秭归伦晚脐橙1kg/盒湖北秭归伦晚脐橙1kg/盒湖北秭归伦晚脐橙1kg/盒湖北秭归伦晚脐橙1kg/盒湖北秭归伦晚脐橙1kg/盒湖北秭归伦晚脐橙1kg/盒湖北秭归伦晚脐橙1kg/盒湖北秭归伦晚脐橙1kg/盒湖北秭归伦晚脐橙1kg/盒",
      "saleStatus": "0"
  }
);

  //返回结果给ajax
  res.send({
    'resultCode':'0',
    resultData: mock,
    "resultDesc": "四季严选商品详情数据哟"
  });
  //关闭请求
  res.end();
});




 







module.exports = router;
