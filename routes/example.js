/**
 * @file 自定义接口
 */
const Mock = require('mockjs')

const Random = Mock.Random

module.exports = function (router) {

  // 车配任务列表
  router.post('/order/list', (ctx) => {
    ctx.body = {
      resultCode: '0',
      resultDesc: 'OK',
      resultData: Mock.mock({
        "total": 10,
        "list|10": [
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
      }),
    }
  })

  // 提交新建车配任务
  router.post('/order/create', (ctx) => {
    ctx.body = {
      resultCode: '0',
      resultDesc: 'OK',
      resultData: Mock.mock({
        "total": 10,
        "list|10": [
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
      }),
    }
  })
}
