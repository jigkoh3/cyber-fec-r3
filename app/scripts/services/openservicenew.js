'use strict';

angular.module('fec3App')
    .service('openServiceNewService', function($http, $filter, $timeout, $localstorage, $linq, dalService, $log) {
        var logger = $log.getInstance('productService');
        var saleinfo = $localstorage.getObject("userProfile");
        var customerInfo = $localstorage.getObject("customerProfile");
       // console.log(saleinfo.shops[0]['shopCode']);
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

          this.getPromotion = function (companyCode,custType, propoType, mobileServicetype, partnerCode, privilege, proposition, fnCallback) {
            request.param.company_code = companyCode;
            request.param.customer_type = custType;
            request.param.propo_type = propoType;
            request.param.mobile_servicetype = mobileServicetype;
            request.param.partner_code = partnerCode;
            request.param.privilege = privilege;
            request.param.proposition = proposition;
           
            request.target = 'sales/catalog/product/tmv/proposition/search?';
            if (!dalService.demo) {
                dalService.callServicePost(request, null, function (result) {
                    fnCallback(result);
                });
            } else {
                var result = {
                        "status" : "SUCCESSFUL",
                        "trx-id" : "0439PKB10EDP",
                        "process-instance" : "tpx61.true.th (instance: sale)",
                        "response-data" : [ {
                            "name" : "P00000000000211",
                            "description" : "SIM Koo Kan",
                            "soc" : null,
                            "rc" : 0.0,
                            "service-level" : null,
                            "proposition-code" : "0019087"
                        }, {
                            "name" : "RMV000000000001",
                            "description" : "New Sim Only",
                            "soc" : null,
                            "rc" : 0.0,
                            "service-level" : null,
                            "proposition-code" : "0019123"
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

         this.getNasProposition = function (companyCode, mobileServicetype, partnerCode,fnCallback) {
            request.param.id_number = customerInfo.certificateId;
            request.param.company_code = companyCode;
            request.param.mobile_servicetype = mobileServicetype;
            request.param.partner_code = partnerCode;
            request.target = 'sales/order/tmv/get-nas-subscriber-reserve?';
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
                            "nas-subscriber-reserve" : [ {
                            "subscriber" : "0890000001",
                            "proposition-code" : "0019123"
                        }, {
                            "subscriber" : "0890000002",
                            "proposition-code" : "0019124"
                        } ]
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

         this.validatesubscriber = function (subscriber,companyCode, project, pairSim, proposition,fnCallback) {
            request.param.subscriber = subscriber;
            request.param.company_code = companyCode;
            request.param.partner_code = saleinfo.shops[0]['shopCode'];
            request.param.project = project;
            request.param.pair_sim = pairSim;
            request.param.proposition = proposition;
            request.param.id_number = customerInfo.certificateId;
            request.target = 'sales/order/tmv/get-nas-subscriber-reserve?';
            if (!dalService.demo) {
                dalService.callServicePost(request, null, function (result) {
                    fnCallback(result);
                });
            } else {
                var result = {
                    "status": "SUCCESSFUL",
                    "display-messages": [],
                    "trx-id": "3Y1EQSFIZ0QK7",
                    "process-instance": "tmsapnpr1 (instance: SFF_node4)",
                    "response-data": {
                        "sim-detail": {
                            "pin1": "",
                            "pin2": "",
                            "puk1": "",
                            "puk2": "",
                            "hlr": "",
                            "manuf": "",
                            "model": "",
                            "nl": "",
                            "ngp": "",
                            "imsi": "",
                            "ctn": "",
                            "item-id": "",
                            "item-desc": "",
                            "imei-status": "",
                            "active-ind": "",
                            "missing-ind": "",
                            "repair-ind": "",
                            "ta-ind": "",
                            "primary-ctn": "",
                            "sim-type": "",
                            "serial-type": "",
                            "serial-no": "",
                            "sys-creation-date": "",
                            "sys-update-date": "",
                            "resource-status": "",
                            "activity-code": "",
                            "activity-date": "",
                            "activity-reason": "",
                            "product-type": "",
                            "imei-desc": "",
                            "dealer-code": "",
                            "manf-code": "",
                            "item-cat": "",
                            "item-subcat": "",
                            "cpo-ind": "",
                            "init-pin1": "",
                              "init-pin2": "",
                            "sim-type-desc": "",
                              "logical-hlr": "",
                              "police-station": "",
                              "report-date": "",
                              "sim-physical-hlr": "",
                              "ctn-status": "",
                              "ctn-company-code": "",
                              "sim-company-code": "",
                              "ctn-pool-code": "",
                              "ctn-pool-type": "",
                              "transaction-id": "",
                              "error-message": "",
                              "product-code": ""
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
});         