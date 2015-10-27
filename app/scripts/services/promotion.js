'use strict';

angular.module('fec3App')
    .service('promotionService', function($http, $filter, $timeout, $localstorage, dalService) {
            var saleinfo = $localstorage.getObject("userProfile");
            var customerInfo = $localstorage.getObject("customerProfile");
            var request = {
                "shopCode": saleinfo.shopSelected,
                "userId": saleinfo.saleCode,
                "transactionId": saleinfo.saleCode,
                "param": {
                    "product_code": "",
                    "product_type": "",
                    "customer_type": ""
                }
            };

            this.getProduct = function(fnCallback) {
                if (!dalService.demo) {

                    request.target = '/sales-services/rest/master/get_product';

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
                                    "code": "PP228",
                                    "name": "C15 With PP ",
                                    "desc": null
                                }, {
                                    "code": "RS080",
                                    "name": "RS080 : iPhone5_Free You",
                                    "desc": null
                                }, {
                                    "code": "RS081",
                                    "name": "iPhone 5_MNP (Contract 10 mths)",
                                    "desc": null
                                }, {
                                    "code": "RS084",
                                    "name": "Biz & Ent iPhone 5_H/S+SIM (Contract 10 mths)",
                                    "desc": null
                                }, {
                                    "code": "RS085",
                                    "name": "Biz & Ent iPhone 5_H/S+SIM (No contract)",
                                    "desc": null
                                }, {
                                    "code": "RS091",
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
                                    "code": "RS112",
                                    "name": "GOV_Free You_Premium Tier",
                                    "desc": null
                                }, {
                                    "code": "RS114",
                                    "name": "Apple Employee for True Group",
                                    "desc": null
                                }, {
                                    "code": "RS115",
                                    "name": "Apple Employee for CP Group",
                                    "desc": null
                                }, {
                                    "code": "RS128",
                                    "name": "RS128 : Handset+New Sim for Apple",
                                    "desc": null
                                }, {
                                    "code": "RS238",
                                    "name": "RS238 : TC discount 1,000 Baht",
                                    "desc": null
                                }, {
                                    "code": "RS396",
                                    "name": "RS396 : Pre2Post_True Super One 299 Baht",
                                    "desc": null
                                }, {
                                    "code": "Test001",
                                    "name": "Test001_Test Reserve",
                                    "desc": null
                                }, {
                                    "code": "TRN001",
                                    "name": "TRN001 : Training Campaign No Advance",
                                    "desc": null
                                }, {
                                    "code": "TSM084",
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



});