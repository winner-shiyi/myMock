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
                        // {
                        //     "specValue": "16只装"
                        // }
                    ]
                },
                // {
                //     "specName": "颜色",
                //     "specId": "450000201301152581",
                //     "valueList": [
                //         {
                //             "specValue": "红色"
                //         },
                //         {
                //             "specValue": "黑色"
                //         }
                //     ]
                // }
            ],
            "goodsDetails": [],
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
                    "quantity": 6,
                    "specList": [
                        {
                            "specId": "450000201301152580",
                            "specValue": "8只装",
                            "specName": "重量"
                        },
                        // {
                        //     "specId": "450000201301152581",
                        //     "specValue": "红色",
                        //     "specName": "重量"
                        // }
                    ],
                    "skuId": "skuId1",
                    "skuDesc": "8只装",
                    "skuImage": "http://res.neosjyx.com/resource/images/photo/7043/20180409/201804090938561.jpg"
                },
                // {
                //     "sellingPrice": 20,
                //     "quantity": 10,
                //     "specList": [
                //         {
                //             "specId": "450000201301152580",
                //             "specValue": "16只装",
                //             "specName": "重量"
                //         },
                //         {
                //             "specId": "450000201301152581",
                //             "specValue": "红色",
                //             "specName": "重量"
                //         }
                //     ],
                //     "skuId": "skuId2",
                //     "skuDesc": "16只装,红色",
                //     "skuImage": "http://res.neosjyx.com/resource/images/photo/7043/20180326/201803261017392.jpg"
                // },
                // {
                //     "sellingPrice": 30,
                //     "quantity": 0,
                //     "specList": [
                //         {
                //             "specId": "450000201301152580",
                //             "specValue": "8只装",
                //             "specName": "重量"
                //         },
                //         {
                //             "specId": "450000201301152581",
                //             "specValue": "黑色",
                //             "specName": "重量"
                //         }
                //     ],
                //     "skuId": "skuId3",
                //     "skuDesc": "8只装,黑色",
                //     "skuImage": "http://res.neosjyx.com/resource/images/photo/7043/20180326/201803261017393.jpg"
                // },
                // {
                //     "sellingPrice": 40,
                //     "quantity": 10,
                //     "specList": [
                //         {
                //             "specId": "450000201301152580",
                //             "specValue": "16只装",
                //             "specName": "重量"
                //         },
                //         {
                //             "specId": "450000201301152581",
                //             "specValue": "黑色",
                //             "specName": "重量"
                //         }
                //     ],
                //     "skuId": "skuId4",
                //     "skuDesc": "16只装,黑色",
                //     "skuImage": "http://res.neosjyx.com/resource/images/photo/7043/20180409/201804090938561.jpg"
                // }

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
        'resultCode': '0',
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
router.post('/cartDetail', function (req, res, next) {
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
                "isLose": false,
                "shopStatus": "0",
                "skuList": [
                    {
                        "spuId": "5301",
                        "skuSpecDesc": [
                            {
                                "specName": "规格",
                                "specValue": "8只装"
                            },
                            {
                                "specName": "重量",
                                "specValue": "100g"
                            }
                        ],
                        "usableNum": 10,
                        "skuId": "530110",
                        "spuName": "不二家棒棒糖水果牛奶味不二家棒棒糖水果牛奶味",
                        "isFreeDelivery": true,
                        "skuNumber": 2,
                        "sellingPrice": 6,
                        "invalidStatus": "3",
                        "spuImage": "http://res.neosjyx.com/resource/images/photo/7043/20180410/201804101411200.jpg"
                    },
                    {
                        "spuId": "5301",
                        "skuSpecDesc": [
                            {
                                "specName": "规格",
                                "specValue": "16只装"
                            }
                        ],
                        "usableNum": 15,
                        "skuId": "530120",
                        "spuName": "不二家棒棒糖水果牛奶味不二家棒棒糖水果牛奶味",
                        "isFreeDelivery": true,
                        "skuNumber": 10,
                        "sellingPrice": 60,
                        "invalidStatus": "0",
                        "spuImage": "http://res.neosjyx.com/resource/images/photo/7043/20180410/201804101411200.jpg"
                    }
                ],
                "shopId": "100"
            },
            {
                "shopName": "近江苏堤店",
                "isLose": false,
                "shopStatus": "0",
                "skuList": [
                    {
                        "spuId": "5302",
                        "skuSpecDesc": [
                            {
                                "specName": "口味",
                                "specValue": "热带水果味"
                            },
                            {
                                "specName": "口味",
                                "specValue": "田园风味"
                            }
                        ],
                        "usableNum": 10,
                        "skuId": "530210",
                        "spuName": "超级无敌好吃的水果味棒棒糖",
                        "isFreeDelivery": true,
                        "skuNumber": 2,
                        "sellingPrice": 100,
                        "invalidStatus": "0",
                        "spuImage": "http://res.neosjyx.com/resource/images/photo/7043/20180313/201803131732060.jpg"
                    },
                    {
                        "spuId": "5302",
                        "skuSpecDesc": [
                            {
                                "specName": "规格",
                                "specValue": "1000g/个"
                            }
                        ],
                        "usableNum": 15,
                        "skuId": "530220",
                        "spuName": "泰国金柚大果约1000g/个",
                        "isFreeDelivery": true,
                        "skuNumber": 10,
                        "sellingPrice": 200,
                        "invalidStatus": "0",
                        "spuImage": "http://res.neosjyx.com/resource/images/photo/7043/20180410/201804101202510.jpg"
                    }
                ],
                "shopId": "1001"
            },
            {
                "shopName": "四季青店",
                "shopStatus": "0",
                "isLose": true,
                "skuList": [
                    {
                        "spuId": "5300001979013458",
                        "skuSpecDesc": [
                            {
                                "specName": "规格",
                                "specValue": "16个/箱"
                            }
                        ],
                        "usableNum": 0,
                        "skuId": "53000019997511",
                        "spuName": "售罄的商品---菠萝",
                        "isFreeDelivery": true,
                        "skuNumber": 10,
                        "sellingPrice": 60,
                        "invalidStatus": "2",
                        "spuImage": "http://res.neosjyx.com/resource/images/photo/7043/20180410/201804101411200.jpg"
                    },
                    {
                        "spuId": "53000019790814761",
                        "skuSpecDesc": [
                            {
                                "specName": "规格",
                                "specValue": "300g/箱"
                            }
                        ],
                        "usableNum": 0,
                        "skuId": "530000199901789",
                        "spuName": "下架的商品--橙子",
                        "isFreeDelivery": true,
                        "skuNumber": 10,
                        "sellingPrice": 60,
                        "invalidStatus": "1",
                        "spuImage": "http://res.neosjyx.com/resource/images/photo/7043/20180410/201804101411200.jpg"
                    }
                ],
                "shopId": "100"
            }
        ]
    });

    //返回结果给ajax
    res.send({
        'resultCode': '0',
        resultData: mock,
        "resultDesc": "购物车列表页"
    });
    //关闭请求
    res.end();
});

/* 删除购物车 */
router.post('/deleteCartSku', function (req, res, next) {
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
        "resultDesc": "删除购物车成功啦"
    });
    //关闭请求
    res.end();
});

 
/* 更新购物车sku数量 */
router.post('/updateCartSkuAmount', function (req, res, next) {
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
        "resultDesc": "更新购物车sku数量成功啦"
    });
    //关闭请求
    res.end();
});

/* 购物车结算 */
router.post('/cartConfirm', function (req, res, next) {
    var _data = req.body,
        mock = null;
    if (_data.error) {
        notifierMsg.errorMsg(res);
        return false;
    }

    mock = Mock.mock(
        {
            "productTotalCount": 900,
            "shopList": [
                {
                    "skuList":[
                    {
                        "skuNumber": 10,
                        "usableNum": 100,
                        "spuId": "810000197904288311",
                        "skuSpecDesc":[
                        {
                            "specName": "口味",
                            "specValue": "红烧排骨味"
                        }
                        ],
                        "spuName": "超级无敌好吃的水果糖",
                        "invalidStatus": "0",
                        "sellingPrice": 600,
                        "spuImage": "测试内容9vj7",
                        "skuId": "420000197608016095"
                    }
                    ],
                    "shopId": "360000198505148579",
                    "shopName": "四季严选近江店"
                }
            ],
            "payPrice": 2100,
            "logisticsFee": 100,
            "address": {
            "province": "福建",
            "adcode": 30142,
            "city": "武夷山",
            "addressId": "500000197903073017",
            "district": "建阳",
            "phone": "15880274595",
            "detailAddress": "童游小学",
            "name": "魏娜"
            },
            "productAmountTotal": 2000
        }
    );

    //返回结果给ajax
    res.send({
        'resultCode': '0',
        resultData: mock,
        "resultDesc": "购物车结算成功啦"
    });
    //关闭请求
    res.end();
});












module.exports = router;
