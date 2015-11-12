'use strict';

angular.module('fec3App')
    .service('pricePlanService', function($http, $filter, $timeout, $localstorage, $linq, dalService, $log) {
        var logger = $log.getInstance('productService');
        var saleinfo = $localstorage.getObject("userProfile");
        var customerInfo = $localstorage.getObject("customerProfile");
        var request = {
            "shopCode": saleinfo.shopSelected,
            "userId": saleinfo.saleCode,
            "transactionId": saleinfo.saleCode,
            "param": {}
        };

        this.getPrivilegeSaleType  = function (fnCallback) {
            //var customerProfile = $localstorage.getObject("customerProfile");
            //var certificateId = customerProfile.certificateId;
            //request.param.company_id = certificateId;
            //request.target = 'profiles/customer/company/grade';
            if (!dalService.demo) {
                dalService.callServicePost(request, null, function (result) {
                    fnCallback(result);
                });
            } else {
                var result = {
                            "status": "SUCCESSFUL",
                            "display-messages": [],
                            "trx-id": "461HQMYTGV3HF",
                            "process-instance": "psaapdv1 (instance: SFF_node1)",
                            "response-data": {
                              "sale-type" : [ 
                                "NEW"
                              ],
                              "is-change-priceplan" : "true"
                            }

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

         this.getAccountType = function (fnCallback) {
            var customerProfile = $localstorage.getObject("customerProfile");
            var certificateId = customerProfile.certificateId;
            request.param.company_id = certificateId;
            request.target = 'profiles/customer/company/grade';
            if (!dalService.demo) {
                dalService.callServicePost(request, null, function (result) {
                    fnCallback(result);
                });
            } else {
                var result = {
                        "status": "SUCCESSFUL",
                        "display-messages": [],
                        "trx-id": "461HQMYTGV3HF",
                        "process-instance": "psaapdv1 (instance: SFF_node1)",
                        "response-data": {
                            "company-grade": {
                                "company-id": "0105524019341",
                                "company-name": "บริษัท อเมริกัน เอ็กซ์เพรส (ไทย) จำกัด",
                                "grade-id": "3",
                                "grade-name": "TOP",
                                "grade-sub-name": "ENT_TOPREV"
                            }
                        }
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

         this.getAccountSubType = function (custType,company, serviceType, roles, grade,fnCallback) {
            request.param.cust_type = custType;
            request.param.company = company;
            request.param.service_type = serviceType;
            request.param.roles = roles;
            request.param.grade = grade;
            request.target = 'profiles/tmv/master/account-subtype?';
            if (!dalService.demo) {
                dalService.callServicePost(request, null, function (result) {
                    fnCallback(result);
                });
            } else {
                var result = {
                        "status" : "SUCCESSFUL",
                        "trx-id" : "03V94EUARX80",
                        "process-instance" : "tpx61.true.th (instance: sale)",
                        "response-data" : [ {
                            "name" : "PRI",
                            "description" : "บุคคลธรรมดา"
                        }, {
                            "name" : "SOL",
                            "description" : "เจ้าของกิจการคนเดียว"
                        } ]
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