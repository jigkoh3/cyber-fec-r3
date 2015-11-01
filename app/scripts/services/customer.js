'use strict';

angular.module('fec3App')
    .service('customerService', function($http, $filter, $localstorage, $timeout, dalService) {
        var that = this;
        var customerProfile = {};
        var saleinfo = $localstorage.getObject("userProfile");
        var request = {
            "shopCode": saleinfo.shopSelected,
            "userId": saleinfo.saleCode,
            "transactionId": saleinfo.saleCode,
            "param": {
                "citizenId": ""
            }
        };
        this.getBookingByCiti = function(fnCallback) {
            if (!dalService.demo) {

                request.param.citizenId = customerProfile.certificateId;
                request.target = '/sales-services/rest/event/get_bookings_by_citizenid';

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
                        "bookings": [{
                            "bookingId": "201483743178",
                            "campaignCode": null,
                            "productCode": "3000013631",
                            "productName": "3000013631-H/S,IPHONE 5,16GB,GSM-THA,BK,MD297TH/A",
                            "receiveShop": "80000001",
                            "receiveShopName": "บริษัท ทรู ดิสทริบิวชั่น แอนด์ เซลส์ จำกัด (สาขา ซีคอนสแควร์ )",
                            "expectReceiveDate": "2014-11-02T16:01:00",
                            "receiveDate": "2015-09-07T04:04:13"
                        }, {
                            "bookingId": "201483743176",
                            "campaignCode": null,
                            "productCode": "3000013630",
                            "productName": "3000013631-H/S,IPHONE 5,16GB,GSM-THA,BK,MD297TH/A",
                            "receiveShop": "80000001",
                            "receiveShopName": "บริษัท ทรู ดิสทริบิวชั่น แอนด์ เซลส์ จำกัด (สาขา ซีคอนสแควร์ )",
                            "expectReceiveDate": "2016-11-02T16:01:00",
                            "receiveDate": ""
                        }, {
                            "bookingId": "201483743176",
                            "campaignCode": null,
                            "productCode": "3000013630",
                            "productName": "3000013631-H/S,IPHONE 5,16GB,GSM-THA,BK,MD297TH/A",
                            "receiveShop": "80000001",
                            "receiveShopName": "บริษัท ทรู ดิสทริบิวชั่น แอนด์ เซลส์ จำกัด (สาขา ซีคอนสแควร์ )",
                            "expectReceiveDate": "2015-11-02T16:01:00",
                            "receiveDate": "2016-09-07T04:04:13"
                        }, {
                            "bookingId": "201483743176",
                            "campaignCode": null,
                            "productCode": "3000013630",
                            "productName": "3000013631-H/S,IPHONE 5,16GB,GSM-THA,BK,MD297TH/A",
                            "receiveShop": "80000001",
                            "receiveShopName": "บริษัท ทรู ดิสทริบิวชั่น แอนด์ เซลส์ จำกัด (สาขา ซีคอนสแควร์ )",
                            "expectReceiveDate": "2015-11-02T16:01:00",
                            "receiveDate": "2015-09-07T04:04:13"
                        }]
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

        this.getBookingByBid = function(bookingId, fnCallback) {
            if (!dalService.demo) {
                request.param.citizenId = customerProfile.certificateId;
                request.param.bookingId = bookingId;
                request.target = '/sales-services/rest/event/get_booking_by_bid_and_cid';

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
                        "booking": {
                            "amount": 5350,
                            "receiptNumber": "DOC001",
                            "productCode": "3000013631",
                            "receiptDate": "2015-09-10T00:00:00",
                            "isUse": true,
                            "isCancel": false
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

        this.getTrueMove = function(certificateid, certificatetype, fnCallback) {
            var onSuccess = function(result) {
                fnCallback(result);
            };
            if (!dalService.demo) {
                //http://sff-dev.true.th:18087/profiles/tmv/customer/get?
                var target = '/profiles/tmv/customer/get?certificateid=' + certificateid + '&certificatetype=' + certificatetype;

                dalService.callServiceGet(target, null, function(result) {
                    onSuccess(result);
                });
            } else {
                var result = {
                    "status": "SUCCESSFUL",
                    "trx-id": "2S1TMACULK3QR",
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
                                "MOBILE-SERVICE-TYPE": "POSTPAID"
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
                    onSuccess({
                        status: true,
                        data: result,
                        error: "",
                        msgErr: ""
                    });
                }, 1000);
            }
        };

        this.getTrueVision = function(certificateid, certificatetype, fnCallback) {
            var onSuccess = function(result) {
                fnCallback(result);
            };
            if (!dalService.demo) {
                //http://sff-dev.true.th:18087/profiles/tvs/customer/get?
                var target = '/profiles/tvs/customer/get?certificateid=' + certificateid + '&certificatetype=' + certificatetype;

                dalService.callServiceGet(target, null, function(result) {
                    onSuccess(result);
                });
            } else {
                var result = {
                    "status": "SUCCESSFUL",
                    "trx-id": "2S1TMAP2PU45N",
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

        this.getTrueOnline = function(certificateid, certificatetype, fnCallback) {
            var onSuccess = function(result) {
                fnCallback(result);
            };
            if (!dalService.demo) {
                //http://sff-dev.true.th:18087/profiles/tmv/customer/get?
                var target = '/profiles/tol/customer/get?certificateid=' + certificateid + '&certificatetype=' + certificatetype;

                dalService.callServiceGet(target, null, function(result) {
                    onSuccess(result);
                });
            } else {
                var result = {
                    "status": "SUCCESSFUL",
                    "trx-id": "2S1TMAJNRHPGR",
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
                    onSuccess({
                        status: true,
                        data: result,
                        error: "",
                        msgErr: ""
                    });
                }, 1000);
            }
        };

        this.getCustomerManual = function(certificateid, certificatetype, fnCallback) {
            $localstorage.destroy("customerProfile");
            customerProfile.certificateId = certificateid;
            
            that.getBookingByCiti(function(result) {
                if (result.status && result.data["response-data"]) {
                    customerProfile.bookings = result.data["response-data"].bookings;
                    $localstorage.setObject("customerProfile", customerProfile);
                }

            });
            $localstorage.setObject("customerProfile", customerProfile);
            var onSuccess = function(result) {
                if (result.data["display-messages"] && result.data["display-messages"].length >= 1) {
                    //fnCallback(result);
                    fnCallback({
                        status: false,
                        data: result.data,
                        error: "error",
                        msgErr: ""
                    });
                } else {

                    if (result.data["response-data"]) {

                        customerProfile.existData = result.data["response-data"];
                        delete customerProfile.existData['installed-products'];

                        customerProfile.title = customerProfile.existData.title;
                        customerProfile.firstName = customerProfile.existData.firstname;
                        customerProfile.lastName = customerProfile.existData.lastname;
                        customerProfile.customerType = customerProfile.existData["customer-type"];
                        customerProfile.customerTypeSelected = true;
                        that.getTrueMove(certificateid, certificatetype, function(result) {
                            if (result.status && result.data["response-data"]) {
                                customerProfile.TMV = result.data["response-data"]["installed-products"];
                            }
                            that.getTrueOnline(certificateid, certificatetype, function(result) {
                                if (result.status && result.data["response-data"]) {
                                    customerProfile.TOL = result.data["response-data"]["installed-products"];
                                }
                                that.getTrueVision(certificateid, certificatetype, function(result) {
                                    if (result.status && result.data["response-data"]) {
                                        customerProfile.TVS = result.data["response-data"]["installed-products"];
                                    }
                                    $localstorage.setObject("customerProfile", customerProfile);
                                    fnCallback({
                                        status: true,
                                        data: customerProfile,
                                        error: "",
                                        msgErr: ""
                                    });
                                });
                            });
                        });

                    }
                }


            };
            if (!dalService.demo) {

                var target = '/profiles/customer/get?certificateid=' + certificateid + '&certificatetype=' + certificatetype;

                dalService.callServiceGet(target, null, function(result) {
                    onSuccess(result);
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

        this.getCustomerReadCard = function(fnCallback) {
            $localstorage.destroy("customerProfile");
            var cardInfo = $localstorage.getObject("cardInfo");
            customerProfile.certificateId = cardInfo.CitizenID;
            customerProfile.title = cardInfo.PrefixTH;
            customerProfile.firstName = cardInfo.FirstNameTH;
            customerProfile.lastName = cardInfo.LastNameTH;
            that.getBookingByCiti(function(result) {
                if (result.status && result.data["response-data"]) {
                    customerProfile.bookings = result.data["response-data"].bookings;
                    $localstorage.setObject("customerProfile", customerProfile);
                }

            });
            $localstorage.setObject("customerProfile", customerProfile);
            var certificateid = cardInfo.CitizenID;
            var certificatetype = "I";
            var onSuccess = function(result) {
                if (result.data["display-messages"] && result.data["display-messages"].length >= 1) {
                    //fnCallback(result);
                    fnCallback({
                        status: false,
                        data: result.data,
                        error: "error",
                        msgErr: ""
                    });
                } else {

                    if (result.data["response-data"]) {

                        customerProfile.existData = result.data["response-data"];
                        delete customerProfile.existData['installed-products'];

                        customerProfile.title = customerProfile.existData.title;
                        customerProfile.firstName = customerProfile.existData.firstname;
                        customerProfile.lastName = customerProfile.existData.lastname;
                        customerProfile.customerType = customerProfile.existData["customer-type"];
                        customerProfile.customerTypeSelected = true;
                        that.getTrueMove(certificateid, certificatetype, function(result) {
                            if (result.status && result.data["response-data"]) {
                                customerProfile.TMV = result.data["response-data"]["installed-products"];
                            }
                            that.getTrueOnline(certificateid, certificatetype, function(result) {
                                if (result.status && result.data["response-data"]) {
                                    customerProfile.TOL = result.data["response-data"]["installed-products"];
                                }
                                that.getTrueVision(certificateid, certificatetype, function(result) {
                                    if (result.status && result.data["response-data"]) {
                                        customerProfile.TVS = result.data["response-data"]["installed-products"];
                                    }
                                    $localstorage.setObject("customerProfile", customerProfile);
                                    fnCallback({
                                        status: true,
                                        data: customerProfile,
                                        error: "",
                                        msgErr: ""
                                    });
                                });
                            });
                        });

                    }
                }

            };
            if (!dalService.demo) {

                var target = '/profiles/customer/get?certificateid=' + certificateid + '&certificatetype=' + certificatetype;

                dalService.callServiceGet(target, null, function(result) {
                    onSuccess(result);
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


        this.getCustomerByTMV = function(productIdNumber, productIdName, fnCallback) {

            var onSuccess = function(result) {
                if (result.data["display-messages"] && result.data["display-messages"].length >= 1) {
                    fnCallback({
                        status: false,
                        data: result.data,
                        error: "error",
                        msgErr: ""
                    });
                } else {

                    if (result.data["response-data"]) {

                        customerProfile.existData = result.data["response-data"];
                        delete customerProfile.existData['installed-products'];
                        var certificateid = customerProfile.existData["id-number"];
                        var certificatetype = "I";
                        customerProfile.certificateId = certificateid;
                        customerProfile.title = customerProfile.existData.title;
                        customerProfile.firstName = customerProfile.existData.firstname;
                        customerProfile.lastName = customerProfile.existData.lastname;
                        customerProfile.customerType = customerProfile.existData["customer-type"];
                        customerProfile.customerTypeSelected = true;
                        that.getBookingByCiti(function(result) {
                            if (result.status && result.data["response-data"]) {
                                customerProfile.bookings = result.data["response-data"].bookings;
                            }
                            that.getTrueMove(certificateid, certificatetype, function(result) {
                                if (result.status && result.data["response-data"]) {
                                    customerProfile.TMV = result.data["response-data"]["installed-products"];
                                }
                                that.getTrueOnline(certificateid, certificatetype, function(result) {
                                    if (result.status && result.data["response-data"]) {
                                        customerProfile.TOL = result.data["response-data"]["installed-products"];
                                    }
                                    that.getTrueVision(certificateid, certificatetype, function(result) {
                                        if (result.status && result.data["response-data"]) {
                                            customerProfile.TVS = result.data["response-data"]["installed-products"];
                                        }
                                        $localstorage.setObject("customerProfile", customerProfile);
                                        fnCallback({
                                            status: true,
                                            data: customerProfile,
                                            error: "",
                                            msgErr: ""
                                        });
                                    });
                                });
                            });
                        });

                    }
                }
            }


            if (!dalService.demo) {

                var target = '/profiles/customer/get?product-id-name=' + productIdName + '&product-id-number=' + productIdNumber;

                dalService.callServiceGet(target, null, function(result) {
                    onSuccess(result);
                });
            } else {
                var result = {
                    "status": "SUCCESSFUL",
                    "trx-id": "49142WTF4IWE5",
                    "process-instance": "psaapdv1 (instance: SFF_node1)",
                    "response-data": {
                        "contact-mobile-number": "",
                        "contact-email": "",
                        "id-number": "2012044608878",
                        "tax-id": "",
                        "branch-code": "",
                        "customer-level": "",
                        "customer-sublevel": "",
                        "customer-sublevel-id": "",
                        "company-code": "RM",
                        "installed-products": [{
                            "ouId": "15187",
                            "ban": "10049516",
                            "product-category": "TMV",
                            "product-type": "PRICEPLAN",
                            "account-category": "I",
                            "product-id": "EDATAP88",
                            "product-name": "EDATAP88",
                            "product-description": "Biz&amp;Ent RC 299_Data UNLTD 1GB",
                            "bill-cycle": "2",
                            "company-code": "RM",
                            "product-id-name": "MSISDN",
                            "product-id-number": "0870100023"
                        }],
                        "address-list": {}
                    }

                }
            };
            $timeout(function() {
                onSuccess({
                    status: true,
                    data: result,
                    error: "",
                    msgErr: ""
                });
            }, 1000);
        };

    });