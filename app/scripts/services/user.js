'use strict';

angular.module('fec3App')
    .service('userService', function($http, $filter, $localstorage, $timeout, dalService) {
        var that = this;
        this.getShops = function(fnCallback) {

            if (!dalService.demo) {
                //http://sff-dev.true.th:18087/security/auth/application/shop
                var target = '/security/auth/application/shop';

                dalService.callServiceGet(target, null, function(result) {
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
        };
        this.getMenus = function(fnCallback) {

            if (!dalService.demo) {
                //http://sff-dev.true.th:18087/security/auth/application/menu
                var target = '/security/auth/application/menu';

                dalService.callServiceGet(target, null, function(result) {
                    fnCallback(result);
                });
            } else {
                var result = {
                    "status": "SUCCESSFUL",
                    "trx-id": "3311IKIIUXB3X",
                    "process-instance": "psaapdv1 (instance: SFF_node1)",
                    "response-data": [{
                        "id": 1,
                        "menuName": "บริการหลังการขาย",
                        "menuParentId": 0,
                        "menuSequence": 1,
                        "menuSystem": null,
                        "menuActionInternet": "existingcustomer",
                        "menuActionIntranet": null,
                        "menuTarget": null,
                        "menuDescription": null,
                        "menuEnabled": "Y",
                        "menuStyle": null,
                        "menuWord": null,
                        "menuCreatedDate": null,
                        "menuUpdatedDate": null,
                        "menuUpdatedBy": null,
                        "menuIconPath": null,
                        "menuPopup": "TRUE",
                        "childMenuList": [{
                            "id": 2,
                            "menuName": "แสดงบริการทั้งหมด",
                            "menuParentId": 1,
                            "menuSequence": 2,
                            "menuSystem": null,
                            "menuActionInternet": "existingcustomer",
                            "menuActionIntranet": null,
                            "menuTarget": null,
                            "menuDescription": null,
                            "menuEnabled": "Y",
                            "menuStyle": null,
                            "menuWord": null,
                            "menuCreatedDate": null,
                            "menuUpdatedDate": null,
                            "menuUpdatedBy": null,
                            "menuIconPath": null,
                            "menuPopup": "TRUE",
                            "childMenuList": []
                        }, {
                            "id": 3,
                            "menuName": "Mobile",
                            "menuParentId": 1,
                            "menuSequence": 3,
                            "menuSystem": null,
                            "menuActionInternet": "existingcustomer",
                            "menuActionIntranet": null,
                            "menuTarget": null,
                            "menuDescription": null,
                            "menuEnabled": "Y",
                            "menuStyle": null,
                            "menuWord": null,
                            "menuCreatedDate": null,
                            "menuUpdatedDate": null,
                            "menuUpdatedBy": null,
                            "menuIconPath": null,
                            "menuPopup": "TRUE",
                            "childMenuList": [{
                                "id": 4,
                                "menuName": "เปลี่ยน Price Plan",
                                "menuParentId": 3,
                                "menuSequence": 4,
                                "menuSystem": null,
                                "menuActionInternet": "existingcustomer",
                                "menuActionIntranet": null,
                                "menuTarget": null,
                                "menuDescription": null,
                                "menuEnabled": "Y",
                                "menuStyle": null,
                                "menuWord": null,
                                "menuCreatedDate": null,
                                "menuUpdatedDate": null,
                                "menuUpdatedBy": null,
                                "menuIconPath": null,
                                "menuPopup": "TRUE",
                                "childMenuList": [{
                                    "id": 5,
                                    "menuName": "Subscriber Level",
                                    "menuParentId": 4,
                                    "menuSequence": 5,
                                    "menuSystem": null,
                                    "menuActionInternet": "existingcustomer",
                                    "menuActionIntranet": null,
                                    "menuTarget": null,
                                    "menuDescription": null,
                                    "menuEnabled": "Y",
                                    "menuStyle": null,
                                    "menuWord": null,
                                    "menuCreatedDate": null,
                                    "menuUpdatedDate": null,
                                    "menuUpdatedBy": null,
                                    "menuIconPath": null,
                                    "menuPopup": "TRUE",
                                    "childMenuList": []
                                }, {
                                    "id": 6,
                                    "menuName": "OU Level",
                                    "menuParentId": 4,
                                    "menuSequence": 6,
                                    "menuSystem": null,
                                    "menuActionInternet": "existingcustomer",
                                    "menuActionIntranet": null,
                                    "menuTarget": null,
                                    "menuDescription": null,
                                    "menuEnabled": "Y",
                                    "menuStyle": null,
                                    "menuWord": null,
                                    "menuCreatedDate": null,
                                    "menuUpdatedDate": null,
                                    "menuUpdatedBy": null,
                                    "menuIconPath": null,
                                    "menuPopup": "TRUE",
                                    "childMenuList": []
                                }]
                            }, {
                                "id": 7,
                                "menuName": "โอนเปลี่ยนเจ้าของ",
                                "menuParentId": 3,
                                "menuSequence": 7,
                                "menuSystem": null,
                                "menuActionInternet": "existingcustomer",
                                "menuActionIntranet": null,
                                "menuTarget": null,
                                "menuDescription": null,
                                "menuEnabled": "Y",
                                "menuStyle": null,
                                "menuWord": null,
                                "menuCreatedDate": null,
                                "menuUpdatedDate": null,
                                "menuUpdatedBy": null,
                                "menuIconPath": null,
                                "menuPopup": "TRUE",
                                "childMenuList": []
                            }, {
                                "id": 8,
                                "menuName": "สมัครและยกเลิกบริการ IR/IDD",
                                "menuParentId": 3,
                                "menuSequence": 8,
                                "menuSystem": null,
                                "menuActionInternet": "existingcustomer",
                                "menuActionIntranet": null,
                                "menuTarget": null,
                                "menuDescription": null,
                                "menuEnabled": "Y",
                                "menuStyle": null,
                                "menuWord": null,
                                "menuCreatedDate": null,
                                "menuUpdatedDate": null,
                                "menuUpdatedBy": null,
                                "menuIconPath": null,
                                "menuPopup": "TRUE",
                                "childMenuList": []
                            }, {
                                "id": 9,
                                "menuName": "ระงับสัญญาณชั่วคราว",
                                "menuParentId": 3,
                                "menuSequence": 9,
                                "menuSystem": null,
                                "menuActionInternet": "existingcustomer",
                                "menuActionIntranet": null,
                                "menuTarget": null,
                                "menuDescription": null,
                                "menuEnabled": "Y",
                                "menuStyle": null,
                                "menuWord": null,
                                "menuCreatedDate": null,
                                "menuUpdatedDate": null,
                                "menuUpdatedBy": null,
                                "menuIconPath": null,
                                "menuPopup": "TRUE",
                                "childMenuList": []
                            }, {
                                "id": 10,
                                "menuName": "เปิดสัญญาณจากการระงับใช้ชั่วคราว",
                                "menuParentId": 3,
                                "menuSequence": 10,
                                "menuSystem": null,
                                "menuActionInternet": "existingcustomer",
                                "menuActionIntranet": null,
                                "menuTarget": null,
                                "menuDescription": null,
                                "menuEnabled": "Y",
                                "menuStyle": null,
                                "menuWord": null,
                                "menuCreatedDate": null,
                                "menuUpdatedDate": null,
                                "menuUpdatedBy": null,
                                "menuIconPath": null,
                                "menuPopup": "TRUE",
                                "childMenuList": []
                            }, {
                                "id": 11,
                                "menuName": "เปลี่ยนเบอร์จากรายเดือนเป็นเติมเงิน",
                                "menuParentId": 3,
                                "menuSequence": 11,
                                "menuSystem": null,
                                "menuActionInternet": "existingcustomer",
                                "menuActionIntranet": null,
                                "menuTarget": null,
                                "menuDescription": null,
                                "menuEnabled": "Y",
                                "menuStyle": null,
                                "menuWord": null,
                                "menuCreatedDate": null,
                                "menuUpdatedDate": null,
                                "menuUpdatedBy": null,
                                "menuIconPath": null,
                                "menuPopup": "TRUE",
                                "childMenuList": []
                            }, {
                                "id": 12,
                                "menuName": "เปลี่ยนจากเติมเงินเป็นรายเดือน",
                                "menuParentId": 3,
                                "menuSequence": 12,
                                "menuSystem": null,
                                "menuActionInternet": "existingcustomer",
                                "menuActionIntranet": null,
                                "menuTarget": null,
                                "menuDescription": null,
                                "menuEnabled": "Y",
                                "menuStyle": null,
                                "menuWord": null,
                                "menuCreatedDate": null,
                                "menuUpdatedDate": null,
                                "menuUpdatedBy": null,
                                "menuIconPath": null,
                                "menuPopup": "TRUE",
                                "childMenuList": []
                            }, {
                                "id": 13,
                                "menuName": "เปลี่ยน SIM",
                                "menuParentId": 3,
                                "menuSequence": 13,
                                "menuSystem": null,
                                "menuActionInternet": "existingcustomer",
                                "menuActionIntranet": null,
                                "menuTarget": null,
                                "menuDescription": null,
                                "menuEnabled": "Y",
                                "menuStyle": null,
                                "menuWord": null,
                                "menuCreatedDate": null,
                                "menuUpdatedDate": null,
                                "menuUpdatedBy": null,
                                "menuIconPath": null,
                                "menuPopup": "TRUE",
                                "childMenuList": []
                            }, {
                                "id": 14,
                                "menuName": "ยกเลิกเลขหมาย",
                                "menuParentId": 3,
                                "menuSequence": 14,
                                "menuSystem": null,
                                "menuActionInternet": "existingcustomer",
                                "menuActionIntranet": null,
                                "menuTarget": null,
                                "menuDescription": null,
                                "menuEnabled": "Y",
                                "menuStyle": null,
                                "menuWord": null,
                                "menuCreatedDate": null,
                                "menuUpdatedDate": null,
                                "menuUpdatedBy": null,
                                "menuIconPath": null,
                                "menuPopup": "TRUE",
                                "childMenuList": []
                            }, {
                                "id": 15,
                                "menuName": "เปิดสัญญาณจากการถูกยกเลิกเลขหมาย",
                                "menuParentId": 3,
                                "menuSequence": 15,
                                "menuSystem": null,
                                "menuActionInternet": "existingcustomer",
                                "menuActionIntranet": null,
                                "menuTarget": null,
                                "menuDescription": null,
                                "menuEnabled": "Y",
                                "menuStyle": null,
                                "menuWord": null,
                                "menuCreatedDate": null,
                                "menuUpdatedDate": null,
                                "menuUpdatedBy": null,
                                "menuIconPath": null,
                                "menuPopup": "TRUE",
                                "childMenuList": []
                            }]
                        }, {
                            "id": 16,
                            "menuName": "FTTx",
                            "menuParentId": 1,
                            "menuSequence": 16,
                            "menuSystem": null,
                            "menuActionInternet": "existingcustomer",
                            "menuActionIntranet": null,
                            "menuTarget": null,
                            "menuDescription": null,
                            "menuEnabled": "Y",
                            "menuStyle": null,
                            "menuWord": null,
                            "menuCreatedDate": null,
                            "menuUpdatedDate": null,
                            "menuUpdatedBy": null,
                            "menuIconPath": null,
                            "menuPopup": "TRUE",
                            "childMenuList": [{
                                "id": 17,
                                "menuName": "ยกเลิก Order ก่อนติดตั้ง",
                                "menuParentId": 16,
                                "menuSequence": 17,
                                "menuSystem": null,
                                "menuActionInternet": "existingcustomer",
                                "menuActionIntranet": null,
                                "menuTarget": null,
                                "menuDescription": null,
                                "menuEnabled": "Y",
                                "menuStyle": null,
                                "menuWord": null,
                                "menuCreatedDate": null,
                                "menuUpdatedDate": null,
                                "menuUpdatedBy": null,
                                "menuIconPath": null,
                                "menuPopup": "TRUE",
                                "childMenuList": []
                            }, {
                                "id": 18,
                                "menuName": "เปลี่ยนวันที่ติดตั้ง",
                                "menuParentId": 16,
                                "menuSequence": 18,
                                "menuSystem": null,
                                "menuActionInternet": "existingcustomer",
                                "menuActionIntranet": null,
                                "menuTarget": null,
                                "menuDescription": null,
                                "menuEnabled": "Y",
                                "menuStyle": null,
                                "menuWord": null,
                                "menuCreatedDate": null,
                                "menuUpdatedDate": null,
                                "menuUpdatedBy": null,
                                "menuIconPath": null,
                                "menuPopup": "TRUE",
                                "childMenuList": []
                            }, {
                                "id": 19,
                                "menuName": "เปลี่ยน Promotion และ Package",
                                "menuParentId": 16,
                                "menuSequence": 19,
                                "menuSystem": null,
                                "menuActionInternet": "existingcustomer",
                                "menuActionIntranet": null,
                                "menuTarget": null,
                                "menuDescription": null,
                                "menuEnabled": "Y",
                                "menuStyle": null,
                                "menuWord": null,
                                "menuCreatedDate": null,
                                "menuUpdatedDate": null,
                                "menuUpdatedBy": null,
                                "menuIconPath": null,
                                "menuPopup": "TRUE",
                                "childMenuList": [{
                                    "id": 20,
                                    "menuName": "High Speed Internet",
                                    "menuParentId": 19,
                                    "menuSequence": 20,
                                    "menuSystem": null,
                                    "menuActionInternet": "existingcustomer",
                                    "menuActionIntranet": null,
                                    "menuTarget": null,
                                    "menuDescription": null,
                                    "menuEnabled": "Y",
                                    "menuStyle": null,
                                    "menuWord": null,
                                    "menuCreatedDate": null,
                                    "menuUpdatedDate": null,
                                    "menuUpdatedBy": null,
                                    "menuIconPath": null,
                                    "menuPopup": "TRUE",
                                    "childMenuList": []
                                }, {
                                    "id": 21,
                                    "menuName": "Fiber TV",
                                    "menuParentId": 19,
                                    "menuSequence": 21,
                                    "menuSystem": null,
                                    "menuActionInternet": "existingcustomer",
                                    "menuActionIntranet": null,
                                    "menuTarget": null,
                                    "menuDescription": null,
                                    "menuEnabled": "Y",
                                    "menuStyle": null,
                                    "menuWord": null,
                                    "menuCreatedDate": null,
                                    "menuUpdatedDate": null,
                                    "menuUpdatedBy": null,
                                    "menuIconPath": null,
                                    "menuPopup": "TRUE",
                                    "childMenuList": []
                                }, {
                                    "id": 22,
                                    "menuName": "Convergence",
                                    "menuParentId": 19,
                                    "menuSequence": 22,
                                    "menuSystem": null,
                                    "menuActionInternet": "existingcustomer",
                                    "menuActionIntranet": null,
                                    "menuTarget": null,
                                    "menuDescription": null,
                                    "menuEnabled": "Y",
                                    "menuStyle": null,
                                    "menuWord": null,
                                    "menuCreatedDate": null,
                                    "menuUpdatedDate": null,
                                    "menuUpdatedBy": null,
                                    "menuIconPath": null,
                                    "menuPopup": "TRUE",
                                    "childMenuList": []
                                }]
                            }, {
                                "id": 23,
                                "menuName": "เปลี่ยนแปลงบริการ Fix Line Plus",
                                "menuParentId": 16,
                                "menuSequence": 23,
                                "menuSystem": null,
                                "menuActionInternet": "existingcustomer",
                                "menuActionIntranet": null,
                                "menuTarget": null,
                                "menuDescription": null,
                                "menuEnabled": "Y",
                                "menuStyle": null,
                                "menuWord": null,
                                "menuCreatedDate": null,
                                "menuUpdatedDate": null,
                                "menuUpdatedBy": null,
                                "menuIconPath": null,
                                "menuPopup": "TRUE",
                                "childMenuList": []
                            }, {
                                "id": 24,
                                "menuName": "บริการ Fiver TV",
                                "menuParentId": 16,
                                "menuSequence": 24,
                                "menuSystem": null,
                                "menuActionInternet": "existingcustomer",
                                "menuActionIntranet": null,
                                "menuTarget": null,
                                "menuDescription": null,
                                "menuEnabled": "Y",
                                "menuStyle": null,
                                "menuWord": null,
                                "menuCreatedDate": null,
                                "menuUpdatedDate": null,
                                "menuUpdatedBy": null,
                                "menuIconPath": null,
                                "menuPopup": "TRUE",
                                "childMenuList": [{
                                    "id": 25,
                                    "menuName": "เพิ่มจุดติดตั้ง",
                                    "menuParentId": 24,
                                    "menuSequence": 25,
                                    "menuSystem": null,
                                    "menuActionInternet": "existingcustomer",
                                    "menuActionIntranet": null,
                                    "menuTarget": null,
                                    "menuDescription": null,
                                    "menuEnabled": "Y",
                                    "menuStyle": null,
                                    "menuWord": null,
                                    "menuCreatedDate": null,
                                    "menuUpdatedDate": null,
                                    "menuUpdatedBy": null,
                                    "menuIconPath": null,
                                    "menuPopup": "TRUE",
                                    "childMenuList": []
                                }, {
                                    "id": 26,
                                    "menuName": "ลดจุดติดตั้ง",
                                    "menuParentId": 24,
                                    "menuSequence": 26,
                                    "menuSystem": null,
                                    "menuActionInternet": "existingcustomer",
                                    "menuActionIntranet": null,
                                    "menuTarget": null,
                                    "menuDescription": null,
                                    "menuEnabled": "Y",
                                    "menuStyle": null,
                                    "menuWord": null,
                                    "menuCreatedDate": null,
                                    "menuUpdatedDate": null,
                                    "menuUpdatedBy": null,
                                    "menuIconPath": null,
                                    "menuPopup": "TRUE",
                                    "childMenuList": []
                                }]
                            }, {
                                "id": 27,
                                "menuName": "ยกเลิกบริการ (Disconnect)",
                                "menuParentId": 16,
                                "menuSequence": 27,
                                "menuSystem": null,
                                "menuActionInternet": "existingcustomer",
                                "menuActionIntranet": null,
                                "menuTarget": null,
                                "menuDescription": null,
                                "menuEnabled": "Y",
                                "menuStyle": null,
                                "menuWord": null,
                                "menuCreatedDate": null,
                                "menuUpdatedDate": null,
                                "menuUpdatedBy": null,
                                "menuIconPath": null,
                                "menuPopup": "TRUE",
                                "childMenuList": []
                            }, {
                                "id": 28,
                                "menuName": "ยกเลิกบริการ Convergence (Debundle)",
                                "menuParentId": 16,
                                "menuSequence": 28,
                                "menuSystem": null,
                                "menuActionInternet": "existingcustomer",
                                "menuActionIntranet": null,
                                "menuTarget": null,
                                "menuDescription": null,
                                "menuEnabled": "Y",
                                "menuStyle": null,
                                "menuWord": null,
                                "menuCreatedDate": null,
                                "menuUpdatedDate": null,
                                "menuUpdatedBy": null,
                                "menuIconPath": null,
                                "menuPopup": "TRUE",
                                "childMenuList": []
                            }]
                        }]
                    }, {
                        "id": 30,
                        "menuName": "สินค้าและบริการ",
                        "menuParentId": 0,
                        "menuSequence": 30,
                        "menuSystem": null,
                        "menuActionInternet": "landingpage",
                        "menuActionIntranet": "landingpage",
                        "menuTarget": "landingpage",
                        "menuDescription": "landingpage",
                        "menuEnabled": "Y",
                        "menuStyle": null,
                        "menuWord": null,
                        "menuCreatedDate": null,
                        "menuUpdatedDate": null,
                        "menuUpdatedBy": null,
                        "menuIconPath": null,
                        "menuPopup": "TRUE",
                        "childMenuList": null
                    }, {
                        "id": 33,
                        "menuName": "ชำระสินค้าและบริการ",
                        "menuParentId": 0,
                        "menuSequence": 33,
                        "menuSystem": null,
                        "menuActionInternet": "payment",
                        "menuActionIntranet": "payment",
                        "menuTarget": "payment",
                        "menuDescription": "payment",
                        "menuEnabled": "Y",
                        "menuStyle": null,
                        "menuWord": null,
                        "menuCreatedDate": null,
                        "menuUpdatedDate": null,
                        "menuUpdatedBy": null,
                        "menuIconPath": null,
                        "menuPopup": "TRUE",
                        "childMenuList": null
                    }, {
                        "id": 34,
                        "menuName": "Order Status Report",
                        "menuParentId": 0,
                        "menuSequence": 34,
                        "menuSystem": null,
                        "menuActionInternet": "order",
                        "menuActionIntranet": "order",
                        "menuTarget": "order",
                        "menuDescription": "order",
                        "menuEnabled": "Y",
                        "menuStyle": null,
                        "menuWord": null,
                        "menuCreatedDate": null,
                        "menuUpdatedDate": null,
                        "menuUpdatedBy": null,
                        "menuIconPath": null,
                        "menuPopup": "TRUE",
                        "childMenuList": null
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
        };
        this.initailData = function(fnCallback) {
            var result = {
                "shopType": "1",
                "isSecondAuthen": true,
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

            var onSuccess = function(result) {

                that.getShops(function(resp) {
                    if (resp.status) {
                        if (resp.data && resp.data["response-data"]) {
                            result.shops = resp.data["response-data"];
                            if (resp.data["response-data"].length == 0) {
                                console.log(resp.data);
                            } else if (resp.data["response-data"].length == 1) {

                                result.shopSelected = resp.data["response-data"][0].shopCode;
                                result.shopNameSelected = resp.data["response-data"][0].shopNameTh;

                            }
                        } else {
                            console.log(resp.data);
                        }
                    } else {
                        console.log(resp.data);
                    }
                    that.getMenus(function(respo) {
                        if (respo.status) {
                            if (respo.data && respo.data["response-data"]) {
                                result.menus = respo.data["response-data"];

                            } else {
                                console.log(respo.data);
                            }
                        } else {
                            console.log(respo.data);
                        }
                        $localstorage.setObject("userProfile", result);
                        fnCallback({
                            status: true,
                            data: result,
                            error: "",
                            msgErr: ""
                        });
                    });

                });
                //console.log(result);

            };

            var onError = function(data, status) {
                fnCallback({
                    status: false,
                    data: data,
                    error: status,
                    msgErr: status == 0 ? "Can not connect!" : ""
                });
            };

            if (dalService.demo || dalService.bypass) {
                onSuccess(result);

            } else {
                var httpRequest = {
                    method: "POST",
                    //url: 'services/data/getFormData.service',
                    url: getURL('services/data/getFormData.service'),
                    timeout: 30000
                };
                $http(httpRequest).success(onSuccess).error(onError);
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
            } else {
                fnCallback({
                    status: false,
                    data: shopInfo,
                    error: "",
                    msgErr: ""
                });
            }

        };
    });
