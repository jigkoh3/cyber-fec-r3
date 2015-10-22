'use strict';

angular.module('fec3App')
    .service('customerService', function($http, $filter, $localstorage, $timeout, dalService) {

        this.getCustomer = function(certificateid, certificatetype, fnCallback) {
            if (!dalService.demo) {
                //http://sff-dev.true.th:18087/profiles/customer/get?
                // certificateid
                // certificatetype
                // product-id-name 
                // product-id-number
                var target = '/profiles/customer/get?certificateid=' + certificateid + '&certificatetype=' + certificatetype;

                dalService.callServiceGetByPass(target, null, function(result) {
                    fnCallback(result);
                });
            } else {
                var result = {
                    "status": "SUCCESSFUL",
                    "trx-id": "2R1TMA1C40B1F",
                    "process-instance": "psaapdv1 (instance: SFF_node1)",
                    "response-data": {
                        "gender": "MALE",
                        "title": "นาย",
                        "title-code": "T0",
                        "firstname": "มินิท",
                        "lastname": "เงินติดล้อ",
                        "birthdate": "1980-08-20T00:00:00+0700",
                        "customer-type": "I",
                        "contact-number": "027883838",
                        "contact-mobile-number": "0870009987",
                        "contact-email": "ss@gmail.com",
                        "id-number": "83838838",
                        "tax-id": "888832883898709",
                        "id-expire-date": "2018-06-30T00:00:00+0700",
                        "branch-code": "branch1",
                        "customer-level": "NON_TOP",
                        "customer-sublevel": "NONE",
                        "customer-sublevel-id": "1",
                        "installed-products": [{
                            "product-category": "TMV",
                            "product-type": "PRICEPLAN",
                            "product-status": "ACTIVE",
                            "account-category": "I",
                            "account-sub-type": "SRS",
                            "product-name": "RMIPHP50",
                            "product-description": "(FYL)Free size 599, voice400mins net2GB 50%,3mths",
                            "company-code": "RM",
                            "product-properties": {
                                "MOBILE-SERVICE-TYPE": "POSTPAID",
                                "CUSTOMER-ID": "",
                                "BILL-CYCLE": ""
                            },
                            "address-list": {
                                "BILLING_ADDRESS": {
                                    "number": "61/238",
                                    "moo": "8",
                                    "village": "moo ban",
                                    "street": "ratchada",
                                    "soi": "81",
                                    "district": "dindaeng",
                                    "province": "Bangkok",
                                    "building-name": "Pakin",
                                    "building-room": "22",
                                    "building-floor": "13",
                                    "sub-district": "Dindaeng",
                                    "zip": "10400",
                                    "household": "18"
                                },
                                "TAX_ADDRESS": {
                                    "number": "61/238",
                                    "moo": "8",
                                    "village": "moo ban",
                                    "street": "ratchada",
                                    "soi": "81",
                                    "district": "dindaeng",
                                    "province": "Bangkok",
                                    "building-name": "Pakin",
                                    "building-room": "22",
                                    "building-floor": "13",
                                    "sub-district": "Dindaeng",
                                    "zip": "10400",
                                    "household": "18"
                                }
                            },
                            "product-id-name": "MSISDN",
                            "product-id-number": "0868838826",
                            "installed-date": "2015-06-14T00:00:00+0700"
                        }, {
                            "product-category": "TMV",
                            "product-type": "PRICEPLAN",
                            "product-status": "ACTIVE",
                            "account-category": "I",
                            "account-sub-type": "SRS",
                            "product-name": "NETSVP64",
                            "product-description": "(FYP) iNet 899, net5GB UNLTD WiFi UNLTD (50%,5mth)",
                            "company-code": "RM",
                            "product-properties": {
                                "MOBILE-SERVICE-TYPE": "PREPAID"
                            },
                            "product-id-name": "MSISDN",
                            "product-id-number": "0878886455",
                            "installed-date": "2015-01-17T00:00:00+0700"
                        }, {
                            "product-category": "TOL",
                            "product-type": "PROMOTION",
                            "product-status": "ACTIVE",
                            "account-category": "BUS",
                            "account-sub-type": "SRS",
                            "product-name": "3476",
                            "product-description": "FT-27 Fiber to the home for consumer",
                            "product-properties": {},
                            "address-list": {
                                "BILLING_ADDRESS": {
                                    "number": "61/238",
                                    "moo": "8",
                                    "village": "moo ban",
                                    "street": "ratchada",
                                    "soi": "81",
                                    "district": "dindaeng",
                                    "province": "Bangkok",
                                    "building-name": "Pakin",
                                    "building-room": "22",
                                    "building-floor": "13",
                                    "sub-district": "Dindaeng",
                                    "zip": "10400",
                                    "household": "18"
                                },
                                "INSTALLATION_ADDRESS": {
                                    "number": "61/238",
                                    "moo": "8",
                                    "village": "moo ban",
                                    "street": "ratchada",
                                    "soi": "81",
                                    "district": "dindaeng",
                                    "province": "Bangkok",
                                    "building-name": "Pakin",
                                    "building-room": "22",
                                    "building-floor": "13",
                                    "sub-district": "Dindaeng",
                                    "zip": "10400",
                                    "household": "18"
                                }
                            },
                            "product-id-name": "ASSET_NUMBER",
                            "product-id-number": "88008089886",
                            "installed-date": "2015-06-14T00:00:00+0700"
                        }, {
                            "product-category": "TVS",
                            "product-type": "PROMOTION",
                            "product-status": "ACTIVE",
                            "account-category": "I",
                            "account-sub-type": "SRS",
                            "product-name": "2984",
                            "product-description": "Platinum HD",
                            "product-properties": {},
                            "address-list": {
                                "BILLING_ADDRESS": {
                                    "number": "61/238",
                                    "moo": "8",
                                    "village": "moo ban",
                                    "street": "ratchada",
                                    "soi": "81",
                                    "district": "dindaeng",
                                    "province": "Bangkok",
                                    "building-name": "Pakin",
                                    "building-room": "22",
                                    "building-floor": "13",
                                    "sub-district": "Dindaeng",
                                    "zip": "10400",
                                    "household": "18"
                                }
                            },
                            "product-id-name": "TVS_NUMBER",
                            "product-id-number": "588377",
                            "installed-date": "2015-06-14T00:00:00+0700"
                        }],
                        "address-list": {
                            "CUSTOMER_ADDRESS": {
                                "number": "61/238",
                                "moo": "8",
                                "village": "moo ban",
                                "street": "ratchada",
                                "soi": "81",
                                "district": "dindaeng",
                                "province": "Bangkok",
                                "building-name": "Pakin",
                                "building-room": "22",
                                "building-floor": "13",
                                "sub-district": "Dindaeng",
                                "zip": "10400",
                                "household": "18"
                            }
                        }
                    }
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