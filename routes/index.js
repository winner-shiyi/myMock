const express = require('express');
const router = express.Router();
const Mock = require('mockjs');// 使用 Mock

/**
 * GET home page
 * 首页路由，不能删掉，否则启动项目的时候会报错
 */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
});


/* 商家详情 */
router.post('/spuDetail', function (req, res, next) {
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
                            "specValue": "8只装",
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
                    "sellingPrice": 10,
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
                    "skuDesc": "8只装,红色",
                    "skuImage": "http://res.neosjyx.com/resource/images/photo/7043/20180409/201804090938561.jpg"
                },
                {
                    "sellingPrice": 20,
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
                    "skuDesc": "16只装,红色",
                    "skuImage": "http://res.neosjyx.com/resource/images/photo/7043/20180326/201803261017392.jpg"
                },
                {
                    "sellingPrice": 30,
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
                    "skuDesc": "8只装,黑色",
                    "skuImage": "http://res.neosjyx.com/resource/images/photo/7043/20180326/201803261017393.jpg"
                },
                {
                    "sellingPrice": 40,
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
                    "skuDesc": "16只装,黑色",
                    "skuImage": "http://res.neosjyx.com/resource/images/photo/7043/20180409/201804090938561.jpg"
                }

            ],
            "spuName": "湖北秭归伦晚脐橙1kg/盒湖北秭归伦晚脐橙1kg/盒湖北秭归伦晚脐橙1kg/盒湖北秭归伦晚脐橙1kg/盒湖北秭归伦晚脐橙1kg/盒湖北秭归伦晚脐橙1kg/盒湖北秭归伦晚脐橙1kg/盒湖北秭归伦晚脐橙1kg/盒湖北秭归伦晚脐橙1kg/盒湖北秭归伦晚脐橙1kg/盒",
            "saleStatus": "0"
        }
    );

    //返回结果给ajax
    res.send({
        'resultCode': '0',
        resultData: mock,
        "resultDesc": "四季严选商品详情数据哟"
    });
    //关闭请求
    res.end();
});

/* 加入购物车 */
router.post('/addCart', function (req, res, next) {
    var _data = req.body,
        mock = null;
    if (_data.error) {
        notifierMsg.errorMsg(res);
        return false;
    }

    mock = Mock.mock({});

    //返回结果给ajax
    res.send({
        'resultCode': '11',
        resultData: mock,
        "resultDesc": "商品售罄啦"
    });
    //关闭请求
    res.end();
});

/* 获取购物车数量 */
router.post('/getCartAmont', function (req, res, next) {
    var _data = req.body,
        mock = null;
    if (_data.error) {
        notifierMsg.errorMsg(res);
        return false;
    }

    mock = Mock.mock({
        count: 89
    });

    //返回结果给ajax
    res.send({
        'resultCode': '0',
        resultData: mock,
        "resultDesc": "加入购物车成功啦"
    });
    //关闭请求
    res.end();
});

/* 购物车列表 */
router.post('/getCartAmont', function (req, res, next) {
    var _data = req.body,
        mock = null;
    if (_data.error) {
        notifierMsg.errorMsg(res);
        return false;
    }

    mock = Mock.mock({
        "logisticsFee": 1200,
        "startingPrice": 18,
        "freeDeliveryPrice": 3600,
        "shopList": [
            {
                "shopName": "四季青店",
                "skuList": [
                    {
                        "spuId": "530000197908167202",
                        "skuSpecDesc": [
                            {
                                "specName": "规格",
                                "specValue": "8只装"
                            }
                        ],
                        "usableNum": 10,
                        "skuId": "530000199901253115",
                        "spuName": "不二家棒棒糖水果牛奶味不二家棒棒糖水果牛奶味",
                        "isFreeDelivery": true,
                        "skuNumber": 2,
                        "sellingPrice": 6,
                        "invalidStatus": "0",
                        "spuImage": "http://res.neosjyx.com/resource/images/photo/7043/20180410/201804101411200.jpg"
                    }
                ],
                "shopId": "410000201112029447"
            }
        ]
    });

    //返回结果给ajax
    res.send({
        'resultCode': '0',
        resultData: mock,
        "resultDesc": "加入购物车成功啦"
    });
    //关闭请求
    res.end();
});















module.exports = router;
