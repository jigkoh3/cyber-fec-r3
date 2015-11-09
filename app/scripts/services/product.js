'use strict';

angular.module('fec3App')
    .service('productService', function($http, $filter, $timeout, $localstorage, $linq, dalService, $log) {

        var logger = $log.getInstance('productService');
        var saleinfo = $localstorage.getObject("userProfile");
        //var customerInfo = $localstorage.getObject("customerProfile");
        var request = {
            "shopCode": saleinfo.shopSelected,
            "userId": saleinfo.saleCode,
            "transactionId": saleinfo.saleCode,
            "param": {}
        };

        this.getCategories = function(fnCallback) {
            var onSuccess = function(result) {
                if (result.status) {
                    if (result.data["response-data"]) {
                        var master = {};
                        master.categories = result.data["response-data"].categories;
                        $localstorage.setObject("master", master);
                    } else {
                        console.log(resp.data)
                    }

                }
                fnCallback(result);

            };

            if (!dalService.demo) {

                request.target = 'sales-services/rest/master/get_categories';

                dalService.callServicePost(request, null, function(result) {
                    onSuccess(result);
                });
            } else {
                var result = {
                    "status": "SUCCESSFUL",
                    "fault": null,
                    "trx-id": "S00000000000001",
                    "process-instance": "SFF_node1",
                    "response-data": {
                        "categories": [{
                            "id": 182,
                            "name": "Accessories",
                            "child": [{
                                "id": 263,
                                "name": "Battery",
                                "child": [{
                                    "id": 810,
                                    "name": "POP2",
                                    "child": []
                                }]
                            }, {
                                "id": 170,
                                "name": "Charger, Adapter, Cable",
                                "child": [{
                                    "id": 172,
                                    "name": "Cable",
                                    "child": []
                                }, {
                                    "id": 283,
                                    "name": "Charger",
                                    "child": []
                                }, {
                                    "id": 209,
                                    "name": "USB Cable",
                                    "child": []
                                }, {
                                    "id": 171,
                                    "name": "Universal Charger,Plug",
                                    "child": []
                                }]
                            }, {
                                "id": 167,
                                "name": "House Brand Case",
                                "child": [{
                                    "id": 204,
                                    "name": "Go Live Case",
                                    "child": []
                                }, {
                                    "id": 203,
                                    "name": "True Beyond Case",
                                    "child": []
                                }]
                            }, {
                                "id": 175,
                                "name": "Other Acc",
                                "child": []
                            }, {
                                "id": 262,
                                "name": "Power Bank, Battery",
                                "child": [{
                                    "id": 282,
                                    "name": "External Battery",
                                    "child": []
                                }]
                            }, {
                                "id": 168,
                                "name": "Protection Film",
                                "child": [{
                                    "id": 208,
                                    "name": "Golive Film",
                                    "child": []
                                }, {
                                    "id": 205,
                                    "name": "Samsung Film",
                                    "child": []
                                }, {
                                    "id": 180,
                                    "name": "True Beyond Film",
                                    "child": []
                                }, {
                                    "id": 207,
                                    "name": "iPad Film",
                                    "child": []
                                }, {
                                    "id": 206,
                                    "name": "iPhone Film",
                                    "child": [{
                                        "id": 181,
                                        "name": "iPhone 4, 4S Film",
                                        "child": []
                                    }, {
                                        "id": 218,
                                        "name": "iPhone 5, 5S, 5C Film",
                                        "child": []
                                    }]
                                }]
                            }, {
                                "id": 184,
                                "name": "Samsung Case",
                                "child": [{
                                    "id": 247,
                                    "name": "Other SS Case",
                                    "child": []
                                }, {
                                    "id": 243,
                                    "name": "SS Note 2",
                                    "child": []
                                }, {
                                    "id": 244,
                                    "name": "SS Note 3",
                                    "child": []
                                }, {
                                    "id": 246,
                                    "name": "SS Note 8",
                                    "child": []
                                }, {
                                    "id": 242,
                                    "name": "SS S3",
                                    "child": []
                                }, {
                                    "id": 221,
                                    "name": "SS S4",
                                    "child": []
                                }]
                            }, {
                                "id": 211,
                                "name": "Speaker,Headphone,Bluetooth",
                                "child": [{
                                    "id": 216,
                                    "name": "Bluetooth",
                                    "child": []
                                }, {
                                    "id": 217,
                                    "name": "Headphone",
                                    "child": []
                                }, {
                                    "id": 213,
                                    "name": "Headset",
                                    "child": [{
                                        "id": 177,
                                        "name": "Headset",
                                        "child": []
                                    }, {
                                        "id": 178,
                                        "name": "In Ear",
                                        "child": []
                                    }, {
                                        "id": 179,
                                        "name": "On Ear ",
                                        "child": []
                                    }, {
                                        "id": 214,
                                        "name": "Over Ear",
                                        "child": []
                                    }, {
                                        "id": 215,
                                        "name": "Wireless Speaker",
                                        "child": []
                                    }]
                                }, {
                                    "id": 212,
                                    "name": "Small Talk",
                                    "child": []
                                }, {
                                    "id": 176,
                                    "name": "Speaker",
                                    "child": []
                                }]
                            }, {
                                "id": 348,
                                "name": "iPad mini2, mini3",
                                "child": []
                            }, {
                                "id": 465,
                                "name": "iPhone 6 Plus",
                                "child": []
                            }]
                        }, {
                            "id": 523,
                            "name": "Bundle",
                            "child": [{
                                "id": 642,
                                "name": "ATB6",
                                "child": []
                            }, {
                                "id": 503,
                                "name": "สุข X3 S",
                                "child": []
                            }]
                        }, {
                            "id": 73,
                            "name": "Campaign",
                            "child": [{
                                "id": 93,
                                "name": "ATB",
                                "child": []
                            }, {
                                "id": 92,
                                "name": "True Move H",
                                "child": []
                            }]
                        }, {
                            "id": 1,
                            "name": "Device",
                            "child": [{
                                "id": 26,
                                "name": "AirCard, WiFi",
                                "child": []
                            }, {
                                "id": 112,
                                "name": "Modem Router",
                                "child": []
                            }, {
                                "id": 23,
                                "name": "Smart Phone",
                                "child": [{
                                    "id": 362,
                                    "name": "ASUS",
                                    "child": []
                                }, {
                                    "id": 30,
                                    "name": "BlackBerry",
                                    "child": []
                                }, {
                                    "id": 47,
                                    "name": "HTC",
                                    "child": []
                                }, {
                                    "id": 144,
                                    "name": "Lenovo",
                                    "child": []
                                }, {
                                    "id": 46,
                                    "name": "Motorola",
                                    "child": []
                                }, {
                                    "id": 48,
                                    "name": "Nokia",
                                    "child": [{
                                        "id": 142,
                                        "name": "Nokia",
                                        "child": []
                                    }, {
                                        "id": 143,
                                        "name": "Nokia Mlink",
                                        "child": []
                                    }]
                                }, {
                                    "id": 79,
                                    "name": "OPPO",
                                    "child": []
                                }, {
                                    "id": 45,
                                    "name": "SONY",
                                    "child": []
                                }, {
                                    "id": 49,
                                    "name": "Samsung",
                                    "child": [{
                                        "id": 69,
                                        "name": "ERICA 3G HERO",
                                        "child": []
                                    }, {
                                        "id": 65,
                                        "name": "GALAXY ACE",
                                        "child": []
                                    }, {
                                        "id": 89,
                                        "name": "GALAXY GRAND",
                                        "child": []
                                    }, {
                                        "id": 70,
                                        "name": "GALAXY NOTE",
                                        "child": []
                                    }, {
                                        "id": 66,
                                        "name": "GALAXY S",
                                        "child": []
                                    }, {
                                        "id": 302,
                                        "name": "Galaxy A",
                                        "child": []
                                    }, {
                                        "id": 71,
                                        "name": "Other",
                                        "child": []
                                    }]
                                }, {
                                    "id": 163,
                                    "name": "i-mobile",
                                    "child": []
                                }]
                            }, {
                                "id": 25,
                                "name": "Tablet",
                                "child": [{
                                    "id": 123,
                                    "name": "Asus Tablet",
                                    "child": []
                                }, {
                                    "id": 117,
                                    "name": "Lenovo Tablet",
                                    "child": []
                                }, {
                                    "id": 31,
                                    "name": "Samsung Tablet",
                                    "child": []
                                }, {
                                    "id": 54,
                                    "name": "Sony Tablet",
                                    "child": []
                                }, {
                                    "id": 116,
                                    "name": "Surface ",
                                    "child": []
                                }]
                            }, {
                                "id": 24,
                                "name": "iPad",
                                "child": [{
                                    "id": 72,
                                    "name": "Other",
                                    "child": []
                                }, {
                                    "id": 53,
                                    "name": "iPad 3G",
                                    "child": []
                                }, {
                                    "id": 103,
                                    "name": "iPad Air",
                                    "child": []
                                }, {
                                    "id": 502,
                                    "name": "iPad Air2",
                                    "child": []
                                }, {
                                    "id": 51,
                                    "name": "iPad RTN",
                                    "child": []
                                }, {
                                    "id": 50,
                                    "name": "iPad mini",
                                    "child": []
                                }, {
                                    "id": 104,
                                    "name": "iPad mini2",
                                    "child": []
                                }, {
                                    "id": 52,
                                    "name": "iPad4G",
                                    "child": []
                                }]
                            }, {
                                "id": 22,
                                "name": "iPhone",
                                "child": [{
                                    "id": 44,
                                    "name": "iPhone 3GS",
                                    "child": []
                                }, {
                                    "id": 42,
                                    "name": "iPhone 4",
                                    "child": []
                                }, {
                                    "id": 29,
                                    "name": "iPhone 4S",
                                    "child": []
                                }, {
                                    "id": 43,
                                    "name": "iPhone 5",
                                    "child": []
                                }, {
                                    "id": 102,
                                    "name": "iPhone 5C",
                                    "child": []
                                }, {
                                    "id": 101,
                                    "name": "iPhone 5S",
                                    "child": []
                                }]
                            }]
                        }, {
                            "id": 803,
                            "name": "Recommend",
                            "child": [{
                                "id": 804,
                                "name": "Devices",
                                "child": [{
                                    "id": 809,
                                    "name": "Other",
                                    "child": []
                                }, {
                                    "id": 807,
                                    "name": "Samsung",
                                    "child": []
                                }, {
                                    "id": 808,
                                    "name": "iPhone 6",
                                    "child": []
                                }]
                            }, {
                                "id": 805,
                                "name": "Promotions",
                                "child": [{
                                    "id": 819,
                                    "name": "Other",
                                    "child": []
                                }, {
                                    "id": 817,
                                    "name": "Samsung",
                                    "child": []
                                }, {
                                    "id": 818,
                                    "name": "iPhone 6",
                                    "child": []
                                }, {
                                    "id": 819,
                                    "name": "Other",
                                    "child": []
                                }, {
                                    "id": 817,
                                    "name": "Samsung",
                                    "child": []
                                }, {
                                    "id": 818,
                                    "name": "iPhone 6",
                                    "child": []
                                }]
                            }, {
                                "id": 806,
                                "name": "Services",
                                "child": [{
                                    "id": 829,
                                    "name": "Other",
                                    "child": []
                                }, {
                                    "id": 827,
                                    "name": "Samsung",
                                    "child": []
                                }, {
                                    "id": 828,
                                    "name": "iPhone 6",
                                    "child": []
                                }]
                            }]
                        }, {
                            "id": 97,
                            "name": "Sim Card",
                            "child": [{
                                "id": 99,
                                "name": "Post Pay",
                                "child": [{
                                    "id": 77,
                                    "name": "SIM 3G",
                                    "child": []
                                }, {
                                    "id": 100,
                                    "name": "SIM 4G",
                                    "child": []
                                }]
                            }, {
                                "id": 98,
                                "name": "Pre Pay",
                                "child": []
                            }]
                        }, {
                            "id": 74,
                            "name": "เปิดบริการ",
                            "child": [{
                                "id": 75,
                                "name": "True Internet",
                                "child": []
                            }, {
                                "id": 76,
                                "name": "True Vision",
                                "child": []
                            }, {
                                "id": 96,
                                "name": "TrueMoveH",
                                "child": []
                            }]
                        }]
                    },
                    "display-message": null
                };

                var data2 = {
                    "status": "UNSUCCESSFUL",
                    "display-messages": [{
                        "message": "request sim prefix  is wrong format for company(RM)",
                        "message-code": "",
                        "message-type": "ERROR",
                        "en-message": "request sim prefix  is wrong format for company(RM)",
                        "th-message": "request sim prefix  is wrong format for company(RM)",
                        "technical-message": "request sim prefix  is wrong format for company(RM)"
                    }],
                    "trx-id": "4Q15KDZCTBQYP",
                    "process-instance": "tmsapnpr1 (instance: SFF_node4)",
                    "response-data": {}

                };

                $timeout(function() {
                    onSuccess({
                        status: true,
                        data: result,
                        error: "",
                        msgErr: ""
                    });
                }, 1000);
            }
        };

        //for landing page
        this.getProductRecommend = function(fnCallback) {
            var result = {};
            var master = $localstorage.getObject("master");
            var recommend = $filter('filter')(master.categories, {
                "name": "Recommend"
            });

            if (recommend && recommend.length >= 1) {
                fnCallback({
                    status: true,
                    data: recommend[0],
                    error: "",
                    msgErr: ""
                });
            } else {

            }

        };

        //for view all devices
        this.getDevices = function(fnCallback) {
            var result = {};
            var master = $localstorage.getObject("master");
            var Devices = $filter('filter')(master.categories, {
                "name": "Device"
            });
            //console.log(Devices);
            if (Devices && Devices.length >= 1) {
                result = Devices[0].child;
                fnCallback({
                    status: true,
                    data: result,
                    error: "",
                    msgErr: ""
                });
            } else {

            }

        };

        this.getProductByCategory = function(category_id, fnCallback) {
            var onSuccess = function(result) {
                if (result.status) {
                    if (result.data["response-data"]) {

                        var dataGrpByColor = $linq.Enumerable().From(result.data["response-data"].products)
                            .Distinct("$.productInfo.color")
                            .Where("$.productInfo.color != null")
                            .Select("$.productInfo.color")
                            //.OrderBy("")                            
                            .ToArray().sort();

                        logger.log("productInfo.color : ", dataGrpByColor);

                        var dataGrpByMemSize = $linq.Enumerable().From(result.data["response-data"].products)
                            .Distinct("$.productInfo.capacity")
                            .Where("$.productInfo.capacity != null")
                            .Select("$.productInfo.capacity")
                            //.OrderBy("")
                            .ToArray().sort();

                        var retData = {
                            productName: "P",
                            productColor: []
                        };
                        for (var cIdx = 0; cIdx < dataGrpByColor.length; cIdx++) {

                            var productColorDetail = {
                                colorName: dataGrpByColor[cIdx],
                                memSize: []
                            };

                            for (var mIdx = 0; mIdx < dataGrpByMemSize.length; mIdx++) {

                                var productItemDetail = {
                                    sizeName: dataGrpByMemSize[mIdx],
                                    childs: []
                                };

                                var prodItemResultList = $linq.Enumerable()
                                    .From(result.data["response-data"].products)
                                    .Where("$.productInfo.capacity == '" + dataGrpByMemSize[mIdx] + "' && $.productInfo.color == '" + dataGrpByColor[cIdx] + "'")
                                    .ToArray();

                                if (prodItemResultList != null && prodItemResultList.length > 0) {

                                    productItemDetail.code = prodItemResultList[0].code;
                                    productItemDetail.name = prodItemResultList[0].name;
                                    productItemDetail.piece = prodItemResultList[0].qty;
                                    productItemDetail.price = prodItemResultList[0].price;
                                    productItemDetail.type = prodItemResultList[0].type;
                                    productItemDetail.stock = (prodItemResultList[0].qty <= 0 ? "red" : (prodItemResultList[0].qty >= 5 ? "green" : "yellow"));
                                    productItemDetail.itemCount = prodItemResultList.length;

                                    var priceMin = prodItemResultList[0].price;
                                    var priceMax = prodItemResultList[0].price;

                                    for (var prodIdx = 0; prodIdx < prodItemResultList.length; prodIdx++) {

                                        var childItems = prodItemResultList[prodIdx];
                                        childItems.stock = (childItems.qty <= 0 ? "red" : (childItems.qty >= 5 ? "green" : "yellow"));
                                        productItemDetail.childs.push(childItems);

                                        if (prodItemResultList[prodIdx].price < priceMin) { priceMin = prodItemResultList[prodIdx].price; }
                                        if (prodItemResultList[prodIdx].price > priceMax) { priceMax = prodItemResultList[prodIdx].price; }
                                    }

                                    var priceDisp = $filter('number')(priceMin, 2);
                                    if (priceMin != priceMax) {

                                        priceDisp = $filter('number')(priceMin, 2) + ' - ' + $filter('number')(priceMax, 2);
                                    }

                                    productItemDetail.price_display = priceDisp;

                                } else {

                                    productItemDetail.code = "";
                                    productItemDetail.name = "";
                                    productItemDetail.piece = "";
                                    productItemDetail.price = "";
                                    productItemDetail.price_display = "";
                                    productItemDetail.stock = "";
                                    productItemDetail.type = "";
                                    productItemDetail.itemCount = 0;
                                }

                                productColorDetail.memSize.push(productItemDetail);
                            }

                            retData.productColor.push(productColorDetail);
                        }
                        var queryResult = [retData];

                        logger.log("===========================================");
                        logger.log("getProductByCategory Rukyee: ", queryResult);
                        logger.log("===========================================");

                        fnCallback({
                            status: true,
                            data: queryResult[0],
                            error: "",
                            msgErr: ""
                        });
                    } else {
                        fnCallback(result);
                    }

                }


            };
            if (!dalService.demo) {

                request.param.category_id = category_id;
                request.param.customer_type = "*";
                request.target = 'sales-services/rest/master/get_products_by_category';

                dalService.callServicePost(request, null, function(result) {
                    onSuccess(result);
                });
            } else {
                var result = {
                    "status": "SUCCESSFUL",
                    "fault": null,
                    "trx-id": "S00000000000001",
                    "process-instance": "SFF_node1",
                    "response-data": {
                        "products": [{
                            "code": "3000005918",
                            "name": "3000005918-H/S,IPHONE 4,16GB,BLACK",
                            "desc": "H/S,IPHONE 4,16GB,BLACK",
                            "type": "P",
                            "qty": 3,
                            "price": 20263,
                            "productInfo": {
                                "capacity": "16GB",
                                "color": "Black"
                            }
                        }, {
                            "code": "3000005921",
                            "name": "3000005921-H/S,IPHONE 4,16GB,WHITE THA(SELL)",
                            "desc": "H/S,IPHONE 4,16GB,WHITE THA(SELL)",
                            "type": "P",
                            "qty": 0,
                            "price": 20263,
                            "productInfo": {
                                "capacity": null,
                                "color": null
                            }
                        }, {
                            "code": "3000005922",
                            "name": "3000005922-H/S,IPHONE 4,32GB,BLACK",
                            "desc": "H/S,IPHONE 4,32GB,BLACK",
                            "type": "P",
                            "qty": 8,
                            "price": 23775,
                            "productInfo": {
                                "capacity": "32GB",
                                "color": "Black"
                            }
                        }, {
                            "code": "9300005922",
                            "name": "9300005922-H/S,IPHONE 4,32GB,RED",
                            "desc": "H/S,IPHONE 4,32GB,BLACK",
                            "type": "P",
                            "qty": 8,
                            "price": 23775,
                            "productInfo": {
                                "capacity": "32GB",
                                "color": "Red"
                            }
                        }, {
                            "code": "3000005923",
                            "name": "3000005922-H/S,IPHONE 4,32GB,BLACK",
                            "desc": "H/S,IPHONE 4,32GB,BLACK",
                            "type": "P",
                            "qty": 2,
                            "price": 23775,
                            "productInfo": {
                                "capacity": "32GB",
                                "color": "Black"
                            }
                        }, {
                            "code": "3000005925",
                            "name": "3000005925-H/S,IPHONE 4,32GB,WHITE THA(SELL)",
                            "desc": "H/S,IPHONE 4,32GB,WHITE THA(SELL)",
                            "type": "P",
                            "qty": 0,
                            "price": 23775,
                            "productInfo": {
                                "capacity": "32GB",
                                "color": "White"
                            }
                        }, {
                            "code": "3000011348",
                            "name": "3000011348-H/S,IPHONE 4,8GB,GSM-THA,BK,MD128TH/A",
                            "desc": "H/S,IPHONE 4,8GB,GSM-THA,BK,MD128TH/A",
                            "type": "P",
                            "qty": 7,
                            "price": 11200,
                            "productInfo": {
                                "capacity": "16GB",
                                "color": "Black"
                            }
                        }, {
                            "code": "3000011402",
                            "name": "3000011402-H/S,IPHONE 4,8GB,GSM-THA,WH,MD198TH/A",
                            "desc": "H/S,IPHONE 4,8GB,GSM-THA,WH,MD198TH/A",
                            "type": "P",
                            "qty": 15,
                            "price": 11200,
                            "productInfo": {
                                "capacity": "16GB",
                                "color": "Space Gray"
                            }
                        }, {
                            "code": "3000012634",
                            "name": "3000012634-H/S, IP4-16BK-6M.WARRANTEE",
                            "desc": "H/S, IP4-16BK-6M.WARRANTEE",
                            "type": "P",
                            "qty": 0,
                            "price": 20263,
                            "productInfo": {
                                "capacity": null,
                                "color": null
                            }
                        }, {
                            "code": "3000012636",
                            "name": "3000012636-H/S, IP4-32BK-6M.WARRANTEE",
                            "desc": "H/S, IP4-32BK-6M.WARRANTEE",
                            "type": "P",
                            "qty": 0,
                            "price": 23775,
                            "productInfo": {
                                "capacity": null,
                                "color": null
                            }
                        }, {
                            "code": "3000012637",
                            "name": "3000012637-H/S, IP4-32WH-6M.WARRANTEE",
                            "desc": "H/S, IP4-32WH-6M.WARRANTEE",
                            "type": "P",
                            "qty": 0,
                            "price": 23775,
                            "productInfo": {
                                "capacity": null,
                                "color": null
                            }
                        }]
                    },
                    "display-message": null
                };

                var data2 = {
                    "status": "UNSUCCESSFUL",
                    "display-messages": [{
                        "message": "request sim prefix  is wrong format for company(RM)",
                        "message-code": "",
                        "message-type": "ERROR",
                        "en-message": "request sim prefix  is wrong format for company(RM)",
                        "th-message": "request sim prefix  is wrong format for company(RM)",
                        "technical-message": "request sim prefix  is wrong format for company(RM)"
                    }],
                    "trx-id": "4Q15KDZCTBQYP",
                    "process-instance": "tmsapnpr1 (instance: SFF_node4)",
                    "response-data": {}

                };
                var result3 = {
                    "status": "SUCCESSFUL",
                    "fault": null,
                    "trx-id": "S00000000000001",
                    "process-instance": "SFF_node1",
                    "response-data": {
                        "products": [{
                            "code": "3000014090",
                            "name": "3000014090 H/S,GOLIVE,3031,WHITE",
                            "desc": "H/S,GO LIVE,3031,WHITE",
                            "type": "P",
                            "qty": 0,
                            "price": 990,
                            "productInfo": {
                                "capacity": "3031",
                                "color": "White"
                            }
                        }, {
                            "code": "3000014241",
                            "name": "3000014241 H/S,GOLIVE,3031,WHITE WITH CABLE+SIM",
                            "desc": "H/S,GOLIVE,3031,WHITE WITH CABLE+SIM",
                            "type": "P",
                            "qty": 0,
                            "price": 990,
                            "productInfo": {
                                "capacity": "3031",
                                "color": "White"
                            }
                        }, {
                            "code": "3000014360",
                            "name": "3000014360 H/S,GOLIVE,3031,WH WITH CABLE+Single SIM",
                            "desc": "H/S,GOLIVE,3031,WH WITH CABLE+Single SIM",
                            "type": "P",
                            "qty": 0,
                            "price": 990,
                            "productInfo": {
                                "capacity": "3031",
                                "color": "White"
                            }
                        }, {
                            "code": "3000014635",
                            "name": "3000014635 H/S,GOLIVE,3031,WHITE WITH CABLE for MNP",
                            "desc": "H/S,GOLIVE,3031,WHITE WITH CABLE for MNP",
                            "type": "P",
                            "qty": 0,
                            "price": 990,
                            "productInfo": {
                                "capacity": "3031",
                                "color": "White"
                            }
                        }]
                    },
                    "display-message": null
                }

                if (category_id == "809") {
                    $timeout(function() {
                        onSuccess({
                            status: true,
                            data: result3,
                            error: "",
                            msgErr: ""
                        });
                    }, 1000);
                } else {
                    $timeout(function() {
                        onSuccess({
                            status: true,
                            data: result,
                            error: "",
                            msgErr: ""
                        });
                    }, 1000);
                }
            }

        };

        this.getCampaign = function(campaignCode,productCode,fnCallback) {
            ///sales-services/rest/privilege/get_campaign
            if (!dalService.demo) {

                request.target = 'sales-services/rest/privilege/get_campaign';
                request.param.campaign_code = campaignCode;
                request.param.product_code = productCode;


                dalService.callServicePost(request, null, function(result) {
                    fnCallback(result);
                });
            } else {
                var result = {
                    "status": "SUCCESSFUL",
                    "fault": null,
                    "trx-id": "S00000000000001",
                    "process-instance": "SFF_node1",
                    "response-data": {
                        "campaign": {
                            "proposition": "854",
                            "nasProposition": "0019969",
                            "promotionSet": "PR860",
                            "otherPayments": [{
                                "code": "B25",
                                "name": "Other Payment B25",
                                "amount": 5000
                            }],
                            "discounts": [{
                                "code": "TC017",
                                "name": "Discount",
                                "type": "B",
                                "amount": 2000
                            }],
                            "services": [{
                                "code": "DEVDIS",
                                "name": "Device Discount"
                            }],
                            "verifyKeys": [
                                "ThaiId",
                                "MSISDN"
                            ]
                        }
                    },
                    "display-message": null
                };
                $timeout(function() {
                    fnCallback({
                        status: true,
                        data: result,
                        error: "",
                        msgErr: ""
                    });
                }, 1000);
            }
        };

        this.getPromotionSet = function(promotionCode, fnCallback) {
            if (!dalService.demo) {


                // request.param.userId = userId;
                // request.param.shopCode = shopCode;
                // request.param.transactionId = transactionId;
                // request.param.shopCode = shopCode;
                request.target = 'sales-services/rest/master/get_promotionset';
                request.param.promotion_code = promotionCode;


                dalService.callServicePost(request, null, function(result) {
                    fnCallback(result);
                });
            } else {
                var result = {
                    "status": "SUCCESSFUL",
                    "fault": null,
                    "trx-id": "S00000000000001",
                    "process-instance": "SFF_node1",
                    "response-data": {
                        "promotion": {
                            "name": "True Smart 4.0\"_Shutdown campaign",
                            "desc": "desc",
                            "proposition": "931",
                            "minBuy": 1,
                            "maxGet": 1,
                            "promotions": [{
                                "group": "Promotion_1",
                                "type": "1",
                                "amount": 0,
                                "maxGet": 1,
                                "force": true,
                                "otherPayments": [],
                                "products": [{
                                    "code": "3000010338",
                                    "name": "3000010338-ซิม,POS,MICRO REAL MOVE",
                                    "price": 49,
                                    "type": "P",
                                    "productInfo": {
                                        "appleCareCode": null,
                                        "isSim": true,
                                        "requireForm": false
                                    },
                                    "serviceInfo": null
                                }, {
                                    "code": "3000014923",
                                    "name": "3000014923-ซิม,POS,TMH USIM COMBI",
                                    "price": 49,
                                    "type": "P",
                                    "productInfo": {
                                        "appleCareCode": null,
                                        "isSim": true,
                                        "requireForm": false
                                    },
                                    "serviceInfo": null
                                }]
                            }, {
                                "group": "Promotion_2",
                                "type": "2",
                                "amount": 0,
                                "maxGet": 1,
                                "force": false,
                                "otherPayments": [],
                                "products": [{
                                    "code": "3000020172",
                                    "name": "3000020172-H/S,SS,ERICA 3G HERO,TMV H SIM LOCK MNP",
                                    "price": 1299,
                                    "type": "P",
                                    "productInfo": {
                                        "appleCareCode": null,
                                        "isSim": false,
                                        "requireForm": false
                                    },
                                    "serviceInfo": null
                                }]
                            }, {
                                "group": "Promotion_3",
                                "type": "3",
                                "amount": 1000,
                                "maxGet": 1,
                                "force": false,
                                "otherPayments": [],
                                "products": [{
                                    "code": "3000013828",
                                    "name": "3000013828 H/S,GOLIVE,DUAL CORE,BLACK",
                                    "price": 3990,
                                    "type": "P",
                                    "productInfo": {
                                        "appleCareCode": null,
                                        "isSim": false,
                                        "requireForm": false
                                    },
                                    "serviceInfo": null
                                }]
                            }, {
                                "group": "Promotion_4",
                                "type": "4",
                                "amount": 50,
                                "maxGet": 1,
                                "force": false,
                                "otherPayments": [],
                                "products": [{
                                    "code": "3000013483",
                                    "name": "3000013483-ซิม,DEP,SWAP NANO TMV H",
                                    "price": 0,
                                    "type": "P",
                                    "productInfo": {
                                        "appleCareCode": null,
                                        "isSim": true,
                                        "requireForm": false
                                    },
                                    "serviceInfo": null
                                }]
                            }, {
                                "group": "Promotion_5",
                                "type": "5",
                                "amount": 0,
                                "maxGet": 1,
                                "force": false,
                                "otherPayments": [{
                                    "code": "C17",
                                    "name": "Free SIM Postpay  Partner Privilege for S2&&L2",
                                    "amount": 21
                                }],
                                "products": [{
                                    "code": "3000020354",
                                    "name": "3000020354-ซิม,BAC,TMH1 MNP COMBI",
                                    "price": 29,
                                    "type": "P",
                                    "productInfo": {
                                        "appleCareCode": null,
                                        "isSim": true,
                                        "requireForm": false
                                    },
                                    "serviceInfo": null
                                }]
                            }],
                            "products": [{
                                "code": "TSM007",
                                "name": "True Smart 4.0\"_Shutdown",
                                "price": 0,
                                "type": "S",
                                "productInfo": null,
                                "serviceInfo": {
                                    "type": "4",
                                    "isMobile": false,
                                    "details": [{
                                        "code": "SVRMV053",
                                        "name": "RMV_PRE_Product",
                                        "price": 1190
                                    }, {
                                        "code": "SVRMV047",
                                        "name": "RMV_POST_Product",
                                        "price": 1190
                                    }, {
                                        "code": "SVRFT003",
                                        "name": "RFT_POST_Product",
                                        "price": 1190
                                    }, {
                                        "code": "SVRFT004",
                                        "name": "RFT_PRE_Product",
                                        "price": 1190
                                    }]
                                },
                                "discBaht": 0,
                                "discPercent": 0,
                                "minBuy": 0,
                                "otherPayments": [],
                                "param": [{
                                    "key": "key1",
                                    "value": "value1"
                                }]
                            }],
                            "groupProducts": [{
                                "group": "Device",
                                "code": "3000034161",
                                "name": "3000034161 H/S,SAGA 4121,4.0 INCH",
                                "price": 1990,
                                "type": "P",
                                "productInfo": {
                                    "appleCareCode": null,
                                    "isSim": false,
                                    "requireForm": false
                                },
                                "serviceInfo": null,
                                "discBaht": 500,
                                "discPercent": 0,
                                "minBuy": 0,
                                "otherPayments": [{
                                    "code": "B60",
                                    "name": "ซิม,POS,COMBI TMV H REGULAR-ใต้ล่าง 7 Mat 3000010853",
                                    "amount": 500
                                }]
                            }, {
                                "group": "Device",
                                "code": "3000034378",
                                "name": "3000034378 H/S,TRUE SMART,4121,4.0 INCH+SIM",
                                "price": 1990,
                                "type": "P",
                                "productInfo": {
                                    "appleCareCode": null,
                                    "isSim": false,
                                    "requireForm": false
                                },
                                "serviceInfo": null,
                                "discBaht": 0,
                                "discPercent": 20,
                                "minBuy": 0,
                                "otherPayments": []
                            }]
                        }
                    },
                    "display-message": null
                };
                $timeout(function() {
                    fnCallback({
                        status: true,
                        data: result,
                        error: "",
                        msgErr: ""
                    });
                }, 1000);
            }
        };

        this.getProduct = function(productCode, productType, fnCallback) {
            if (!dalService.demo) {

                request.target = 'sales-services/rest/master/get_product';

                request.param.product_code = productCode;
                request.param.product_type = productType;
                request.param.customer_type = '*';

                dalService.callServicePost(request, null, function(result) {
                    fnCallback(result);
                });
            } else {
                var result = {
                    "status": "SUCCESSFUL",
                    "fault": null,
                    "trx-id": "S00000000000001",
                    "process-instance": "SFF_node1",
                    "response-data": {
                        "product": {
                            "name": "3000013633-H/S,IPHONE 5,32GB,GSM-THA,BK,MD299TH/A",
                            "desc": "H/S,IPHONE 5,32GB,GSM-THA,BK,MD299TH/A",
                            "price": 28250,
                            "productInfo": {
                                "appleCareCode": "APC"
                            },
                            "serviceInfo": null,
                            "campaigns": [{
                                "code": "TX228",
                                "name": "C15 With PP ",
                                "desc": "test1234"
                            }, {
                                "code": "TR080",
                                "name": "RS080 : iPhone5_Free You",
                                "desc": "test4234"
                            }, {
                                "code": "TP       081",
                                "name": "iPhone 5_MNP (Contract 10 mths)",
                                "desc": null
                            }, {
                                "code": "TN084",
                                "name": "Biz & Ent iPhone 5_H/S+SIM (Contract 10 mths)",
                                "desc": null
                            }, {
                                "code": "TM085",
                                "name": "Biz & Ent iPhone 5_H/S+SIM (No contract)",
                                "desc": null
                            }, {
                                "code": "TD091",
                                "name": "Biz & Ent iPhone 5_MNP (Contract 10 mths)",
                                "desc": null
                            }, {
                                "code": "RS095",
                                "name": "MNP Handset Discount 1,000Bt  ",
                                "desc": null
                            }, {
                                "code": "RS098",
                                "name": "MNP Handset Discount 1,000bt (Contract 6 mths)",
                                "desc": null
                            }, {
                                "code": "RS109",
                                "name": "TrueCard discount 1,000 Baht",
                                "desc": null
                            }, {
                                "code": "TX112",
                                "name": "GOV_Free You_Premium Tier",
                                "desc": null
                            }, {
                                "code": "TD114",
                                "name": "Apple Employee for True Group",
                                "desc": null
                            }, {
                                "code": "TP115",
                                "name": "Apple Employee for CP Group",
                                "desc": null
                            }, {
                                "code": "TN128",
                                "name": "RS128 : Handset+New Sim for Apple",
                                "desc": null
                            }, {
                                "code": "TM238",
                                "name": "RS238 : TC discount 1,000 Baht",
                                "desc": null
                            }, {
                                "code": "TR396",
                                "name": "RS396 : Pre2Post_True Super One 299 Baht",
                                "desc": null
                            }, {
                                "code": "TX001",
                                "name": "Test001_Test Reserve",
                                "desc": null
                            }, {
                                "code": "TR001",
                                "name": "TRN001 : Training Campaign No Advance",
                                "desc": null
                            }, {
                                "code": "TM084",
                                "name": "Biz & Ent iPhone 5_H/S+SIM (Contract 10 mths)",
                                "desc": null
                            }],
                            "promotions": [{
                                "code": "PN462",
                                "name": "iPhone4 8GB  Contact 18 Month.",
                                "desc": "โปรโมชั่นพิเศษสุดๆ"
                            }]
                        }
                    },
                    "display-message": null
                };
                $timeout(function() {
                    fnCallback({
                        status: true,
                        data: result,
                        error: "",
                        msgErr: ""
                    });
                }, 1000);
            }
        };

        this.verify = function(payload, fnCallback) {
            //
            request.param.campaign_code = payload.campaign_code;
            request.param.product_code = payload.product_code;
            request.param.qty = 1;
            request.param.verifyKeys = payload.verifyKeys;
            request.target = 'sales-services/rest/privilege/verify';

            if (!dalService.demo) {
                //
                dalService.callServicePost(request, null, function(result) {
                    fnCallback(result);
                });
            } else {
                //
                var result = {
                    "status": "SUCCESSFUL",
                    "fault": null,
                    "trx-id": "S00000000000001",
                    "process-instance": "SFF_node1",
                    "response-data": {
                        "result": "Pass"
                    },
                    "display-message": null
                };
                $timeout(function() {
                    fnCallback({
                        status: true,
                        data: result,
                        error: "",
                        msgErr: ""
                    });
                }, 1000);
            }

        }

        this.getCategoryById = function(id, fnCallback) {
            console.log(id);
            var result = {};
            var master = $localstorage.getObject("master");
            result.id = 0;
            result.name = "All";
            result.child = master.categories;
            var getAll = function(source) {
                if (source.child && source.child.length > 0) {
                    // var res = $filter('filter')(source.child, {
                    //     "id": id
                    // });
                    var res = $linq.Enumerable().From(source.child)
                        .Where(function(x) {
                            return x.id == id
                        }).ToArray();

                    if (res && res.length >= 1) {
                        return res;

                    } else {

                        for (var i = 0; i < source.child.length; i++) {
                            var ret = getAll(source.child[i]);
                            if (ret && ret.length >= 1) {
                                return ret;
                                break;
                            }
                        }
                        // for (var i = 0; i < source.length; i++) {
                        //     if (source[i].child && source[i].child.length >= 1) {
                        //         var a = getAll(source[i].child);
                        //         if (a && a.length >= 1) {
                        //             return a;
                        //             break;

                        //         }
                        //     } else {
                        //         //return null;
                        //     }

                        // }
                    }
                }

            };
            var category = result.child;
            if (id && id != 0) {
                category = getAll(result)[0].child;
            }


            //console.log(Devices);
            if (category && category.length > 0) {
                result = category;
                console.log(result);
                fnCallback({
                    status: true,
                    data: result,
                    error: "",
                    msgErr: ""
                });
            } else {

            }
        }

        this.getDiscountAndBooking = function (dataType, dataItemSerialNo, fnCallback) {
            logger.debug("getDiscountAndBooking>>Begin");
            /*******************************************
            **
            **  dataType - 'D'=Discount, 'V'=Voucher, 'B'=Booking
            **
            ********************************************/
            var customerInfo = $localstorage.getObject("customerProfile");
            var orderItemList = []
            try{
                if (customerInfo.orderObj.order_product_item_list) { orderItemList = customerInfo.orderObj.order_product_item_list; }
            } catch (err) {
                logger.error("getDiscountAndBooking>>Error::" + err.message);
            }
            

            if (dataType == "D") {
                
                request.param.coupon_serial = dataItemSerialNo;
                request.target = "sales-services/rest/sale/get_discount_by_serial";

            } else if (dataType == "V") {

                request.param.coupon_serial = dataItemSerialNo;
                request.target = 'sales-services/rest/sale/get_other_payment_by_serial';

            } else {                

                request.param.bookingId = dataItemSerialNo;
                request.param.citizenId = customerInfo.certificateId;

                request.target = 'sales-services/rest/event/get_booking_by_bid_and_cid';
            }

            logger.debug("getDiscountAndBooking>>request=", request);
            if (!dalService.demo) {
                
                dalService.callServicePost(request, null, function (result) {

                    var returnData = result;
                    var resData = returnData["response-data"];

                    if (dataType == "D" || dataType == "V") {

                        var prodName = "";
                        var discount4ItemSeq = -1;
                        var discountAmt = 0;

                        var bundleWithProdItem = resData.coupon.bundleWithProductCode;
                        if (bundleWithProdItem != null && bundleWithProdItem.length > 0) {

                            var isFound = false;
                            for (var idx = 0; idx < bundleWithProdItem.length; idx++) {

                                var prodItemResultList = $linq.Enumerable().From(orderItemList).Where("$.PRODUCT_CODE == '" + bundleWithProdItem[idx] + "'").ToArray();

                                if (prodItemResultList != null && prodItemResultList.length > 0) {

                                    isFound = true;
                                    discount4ItemSeq = prodItemResultList[0].SEQUENCE;
                                    discountAmt = resData.coupon.amount;
                                    if (resData.coupon.type == "P") {
                                        discountAmt = (prodItemResultList[0].TOTAL * (resData.coupon.amount / 100)) * - 1;
                                    }

                                    if (dataType == "V" || resData.coupon.type == "B") {

                                        prodName = "ส่วนลดค่าเครื่อง " + prodItemResultList[0].PRODUCT_NAME + " จำนวน " + resData.booking.amount + " บาท";

                                    } else {
                                        prodName = "ส่วนลดค่าเครื่อง " + prodItemResultList[0].PRODUCT_NAME + " จำนวน " + resData.booking.amount + " %";
                                    }


                                    break;
                                }
                            }

                            if (!isFound) {

                                returnData.status = "UNSUCCESSFUL";
                                if (dataType == "D") {
                                    returnData["display-message"] = "ไม่พบรายการส่วนลด / Discount Item is not found.";
                                } else {
                                    returnData["display-message"] = "ไม่พบรายการ Voucher / Voucher Item is not found.";
                                }
                                
                            }

                        } else { // if (bundleWithProdItem != null && bundleWithProdItem.length > 0) {

                            discount4ItemSeq = -1
                            discountAmt = resData.coupon.amount;
                            var totalProdAmt = 0;
                            var buyProdItemList = $linq.Enumerable().From(orderItemList).Where("$.PRODUCT_TYPE == 'P'").ToArray();
                            if (buyProdItemList != null && buyProdItemList.length > 0) {
                                for (var i = 0; i < buyProdItemList.length; i++) {
                                    totalProdAmt = totalProdAmt + buyProdItemList[i].TOTAL;
                                }
                            }

                            if (resData.coupon.type == "P") {
                                discountAmt = (totalProdAmt * (resData.coupon.amount / 100)) * -1;
                            }

                            if (dataType == "V" || resData.coupon.type == "B") {

                                prodName = "ส่วนลดท้ายใบเสร็จ จำนวน " + resData.booking.amount + " บาท";

                            } else {
                                prodName = "ส่วนลดท้ายใบเสร็จ จำนวน " + resData.booking.amount + " %";
                            }
                        }

                        var responseData = {
                            "ORDER_ID": "",
                            "SEQUENCE": -1,
                            "CAMPAIGN": "",
                            "CAMPAIGN_NAME": "",
                            "PROMOTION_SET": "",
                            "PROMOTION_TYPE": "",
                            "CAMPAIGN_PROMO_ITEM_QTY": "",
                            "GROUP_ID": "",
                            "PRODUCT_TYPE": dataType,
                            "PRODUCT_CODE": resData.coupon.code,
                            "PRODUCT_NAME": prodName,
                            "PRICEPLAN_CODE": "",
                            "PRICEPLAN_NAME": "",
                            "SERVICE_REGISTER_TYPE": "",
                            "MOBILE_NUMBER": "",
                            "DISCOUNT_TYPE": (dataType == "V" ? "B" : resData.coupon.type),
                            "DISCOUNT_4_PROD_ITEMS_LIST": resData.coupon.bundleWithProductCode,
                            "DISCOUNT_4_PROD_ITEM": discount4ItemSeq,
                            "PRICE": 0,
                            "QTY": 1,
                            "TOTAL": 0,
                            "DISCOUNT_AMOUNT": discountAmt,
                            "DEPOSIT_AMOUNT": 0,
                            "NET_AMOUNT": 0,
                            "OTHER_PAYMENT_AMOUNT": 0
                        };

                        returnData["response-data"] = responseData;

                        if (resData.coupon.isUsed) {

                            returnData.status = "UNSUCCESSFUL";
                            returnData["display-message"] = "คูปองส่วนลดถูกใช้ไปแล้ว / Discount was used.";
                        }

                    } else { // Booking

                        var prodItemResultList = $linq.Enumerable().From(orderItemList).Where("$.PRODUCT_CODE == '" + resData.booking.productCode + "'").ToArray();
                        var prodName = "";
                        var discount4ItemSeq = -1;

                        if (prodItemResultList == null && prodItemResultList.length == 0) {

                            returnData.status = "UNSUCCESSFUL";
                            returnData["display-message"] = "ไม่พบข้อมูลรายการจอง / Booking is not found.";

                        } else {

                            prodName = "ส่วนลดค่าเครื่อง " + prodItemResultList[0].PRODUCT_NAME + " จำนวน " + resData.booking.amount + " บาท";
                            discount4ItemSeq = prodItemResultList[0].SEQUENCE;
                        }

                        var responseData = {
                            "ORDER_ID": "",
                            "SEQUENCE": -1,
                            "CAMPAIGN": "",
                            "CAMPAIGN_NAME": "",
                            "PROMOTION_SET": "",
                            "PROMOTION_TYPE": "",
                            "CAMPAIGN_PROMO_ITEM_QTY": "",
                            "GROUP_ID": "",
                            "PRODUCT_TYPE": dataType,
                            "PRODUCT_CODE": resData.booking.productCode,
                            "PRODUCT_NAME": prodName,
                            "PRICEPLAN_CODE": "",
                            "PRICEPLAN_NAME": "",
                            "SERVICE_REGISTER_TYPE": "",
                            "MOBILE_NUMBER": "",
                            "DISCOUNT_TYPE": "B",
                            "DISCOUNT_4_PROD_ITEMS_LIST": [resData.booking.productCode],
                            "DISCOUNT_4_PROD_ITEM": discount4ItemSeq,
                            "PRICE": 0,
                            "QTY": 1,
                            "TOTAL": 0,
                            "DISCOUNT_AMOUNT": resData.booking.amount,
                            "DEPOSIT_AMOUNT": 0,
                            "NET_AMOUNT": 0,
                            "OTHER_PAYMENT_AMOUNT": 0
                        };

                        returnData["response-data"] = responseData;

                        if (returnData.status == "SUCCESSFUL") {

                            if (resData.booking.isUse) {
                                returnData.status = "UNSUCCESSFUL";
                                returnData["display-message"] = "รายการจองถูกใช้ไปแล้ว / Booking was used.";
                            }
                            else if (resData.booking.isCancel) {

                                returnData.status = "UNSUCCESSFUL";
                                returnData["display-message"] = "รายการจองถูกยกเลิก / Discount was cancelled.";
                            }

                        }

                    }

                    logger.debug("getDiscountAndBooking>>returnData=", returnData);

                    fnCallback(returnData);
                });

            } else {
                //

                var disCountItemIdx = -1;
                if (dataItemSerialNo = '11111') {
                    disCountItemIdx = 2;
                }

                var result = {
                    "status": "SUCCESSFUL",
                    "fault": null,
                    "trx-id": "S00000000000001",
                    "process-instance": "SFF_node1",
                    "response-data": {                        
                        "ORDER_ID": "",
                        "SEQUENCE": -1,
                        "CAMPAIGN": "",
                        "CAMPAIGN_NAME": "",
                        "PROMOTION_SET": "",
                        "PROMOTION_TYPE": "",
                        "CAMPAIGN_PROMO_ITEM_QTY": "",
                        "GROUP_ID": "",
                        "PRODUCT_TYPE": dataType,
                        "PRODUCT_CODE": "001",
                        "PRODUCT_NAME": "ส่วนลด Test 550 บาท",
                        "PRICEPLAN_CODE": "",
                        "PRICEPLAN_NAME": "",
                        "SERVICE_REGISTER_TYPE": "",
                        "MOBILE_NUMBER": "",
                        "DISCOUNT_TYPE": "B",
                        "DISCOUNT_4_PROD_ITEMS_LIST": [],
                        "DISCOUNT_4_PROD_ITEM": disCountItemIdx,
                        "PRICE": -550,
                        "QTY": 1,
                        "TOTAL": -550,
                        "DISCOUNT_AMOUNT": 0,
                        "DEPOSIT_AMOUNT": 0,
                        "NET_AMOUNT": -550,
                        "OTHER_PAYMENT_AMOUNT": 0
                    },
                    "display-message": null
                };

                logger.debug("getDiscountAndBooking>>result=", result);

                $timeout(function () {
                    fnCallback({
                        status: true,
                        data: result,
                        error: "",
                        msgErr: ""
                    });
                }, 1000);
            }
        }

        this.getMobileServiceCustomerType = function (fnCallback) {

            request.param.campaign_code = payload.campaign_code;
            request.param.product_code = payload.product_code;
            request.param.qty = 1;
            request.param.verifyKeys = payload.verifyKeys;
            request.target = 'sales-services/rest/privilege/verify';
            if (!dalService.demo) {
                //
                dalService.callServicePost(request, null, function (result) {
                    fnCallback(result);
                });
            } else {
                //
                var result = {
                    "status": "SUCCESSFUL",
                    "fault": null,
                    "trx-id": "S00000000000001",
                    "process-instance": "SFF_node1",
                    "response-data": {
                        "result": "Pass"
                    },
                    "display-message": null
                };

                $timeout(function () {
                    fnCallback({
                        status: true,
                        data: result,
                        error: "",
                        msgErr: ""
                    });
                }, 1000);
            }
        }

    });
