'use strict';

angular.module('fec3App')
    .service('userService', function($http, $filter, $localstorage, $timeout, dalService) {
        this.getShops = function(fnCallback) {

            if (!dalService.demo) {
                //http://sff-dev.true.th:18087/security/auth/application/shop
                var target = '/security/auth/application/shop';

                dalService.callServiceGetByPass(target, null, function(result) {
                    fnCallback(result);
                });
            } else {
                var result = {
                    "status": "SUCCESSFUL",
                    "trx-id": "6416JEOKL3M1O",
                    "process-instance": "psaapdv1 (instance: SFF_node1)",
                    "response-data": [{
                        "shopCode": "80000001",
                        "shopNameTh": "บริษัท ทรู ดิสทริบิวชั่น แอนด์ เซลส์ จำกัด (สาขา ซีคอนสแควร์ )",
                        "shopNameEn": "True Distribution & Sales Co., Ltd. (Seacon Square Branch)",
                        "shopIntName": null,
                        "shopStatus": "A"
                    }, {
                        "shopCode": "80000002",
                        "shopNameTh": "บริษัท ทรู ดิสทริบิวชั่น แอนด์ เซลส์ จำกัด (สาขายูไนเต็ด เซ็นเตอร์)",
                        "shopNameEn": "True Distribution & Sales Co., Ltd. (United Center Branch)",
                        "shopIntName": null,
                        "shopStatus": "A"
                    }, {
                        "shopCode": "80000010",
                        "shopNameTh": "บริษัท ทรู ดิสทริบิวชั่น แอนด์ เซลส์ จำกัด (สาขาเดอะมอลล์ ท่าพระ)",
                        "shopNameEn": "True Distribution & Sales Co., Ltd. (The Mall Thapra Branch)",
                        "shopIntName": null,
                        "shopStatus": "A"
                    }, {
                        "shopCode": "80000011",
                        "shopNameTh": "บริษัท ทรู ดิสทริบิวชั่น แอนด์ เซลส์ จำกัด (สาขาอื้อจือเหลียง)",
                        "shopNameEn": "True Distribution & Sales Co., Ltd. (U Chu Liang Building Branch)",
                        "shopIntName": null,
                        "shopStatus": "A"
                    }]
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
        this.initailData = function(fnCallback) {
            var result = {

                "shopType": "1",
                "isSecondAuthen": false,
                "isCorporate": false,
                "channel": "XX",
                "partnerCodes": ["12345678", "11111111"],
                "partnerName": "xxxx",
                "partnerType": "XX",
                "saleCode": "00",
                "thaiName": "THAINAME",
                "engName": "ENGNAME",
                "shopcodes": ["12345678", "11111111"],
                "logInName": "DEMO"
            };

            if (dalService.demo) {
                $localstorage.setObject("userProfile", result);
                fnCallback({
                    status: true,
                    data: result,
                    error: "",
                    msgErr: ""
                });

            } else {
                var httpRequest = {
                    method: "POST",
                    url: 'services/data/getFormData.service',
                    //url: getURL('services/data/getFormData.service'),
                    timeout: 30000
                };
                $http(httpRequest).success(function(result) {
                    $localstorage.setObject("userProfile", result);
                    fnCallback({
                        status: true,
                        data: result,
                        error: "",
                        msgErr: ""
                    });
                }).error(function(data, status) {
                    fnCallback({
                        status: false,
                        data: data,
                        error: status,
                        msgErr: status == 0 ? "Can not connect!" : ""
                    });
                });
            }
        };

        this.setShopSelectd = function(shopcode, fnCallback) {
            var shopInfo = shopcode.split(":");
            var userProfile = $localstorage.getObject("userProfile");
            if (shopInfo && shopInfo.length == 2) {
                userProfile.shopSelected = shopInfo[0];
                userProfile.shopNameSelected = shopInfo[1];
                $localstorage.setObject("userProfile", userProfile);

                fnCallback({
                    status: true,
                    data: userProfile,
                    error: "",
                    msgErr: ""
                });
            }
            else{
            	fnCallback({
                    status: false,
                    data: shopInfo,
                    error: "",
                    msgErr: ""
                });
            }

        }
    });