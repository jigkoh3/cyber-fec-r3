'use strict';

angular.module('fec3App')
    .service('orderSummary', function($http, $filter, $timeout, $localstorage, $linq, dalService) {
        var saleinfo = $localstorage.getObject("order_product_item");
        //var customerInfo = $localstorage.getObject("customerProfile");
        var request = {
            "shopCode": saleinfo.shopSelected,
            "userId": saleinfo.saleCode,
            "transactionId": saleinfo.saleCode,
            "param": {}
        };
      

        this.getDiscount = function(fnCallback) {
            var onSuccess = function(result) {
                if (result.status) {
                    if (result.data["response-data"]) {
                        var master = {};
                        master.discount = result.data["response-data"].categories;
                        $localstorage.setObject("order_product_item", master);
                    } else {
                        console.log(resp.data)
                    }
                }
                //fnCallback(result);

            };

            if (!dalService.demo) {

                request.target = '/sales-services/rest/sale/get_discount_by_serial';

                dalService.callServicePost(request, null, function(result) {
                    onSuccess(result);
					
                });
            } else {
                var result = {
						"response-data": {
						"coupon": {
							"code": "string",
							"type": "string",
							"amount": 1.5,
							"changeAmount": true,
							"isUsed": true,
							"bundleWithProductCode": [
								"string"
							]
						}
					}
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

       

        //for view all devices
        this.getDevices = function(fnCallback) {
            var result = {};
            var master = $localstorage.getObject("order_product_item");
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

	});
