'use strict';

angular.module('fec3App')
    .service('bookingService', function($http, $filter, $timeout, dalService) {

        this.getBookingByCiti = function(payload, fnCallback) {
            if (!dalService.demo) {


                var request = {
                    "shopCode": payload.shopCode,
                    "userId": payload.userId,
                    "transactionId": payload.transactionId,
                    "param": {
                        "citizenId": payload.citizenId
                    },
                    'target': '/sales-services/rest/event/get_bookings_by_citizenid'
                };

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

        this.getBookingByBid = function(payload, fnCallback) {
            if (!dalService.demo) {

                // var request = {
                //     'target': '/sales-services/rest/event/get_booking_by_bid_and_cid'
                // }
                var request = {
                    "shopCode": payload.shopCode,
                    "userId": payload.userId,
                    "transactionId": payload.transactionId,
                    "param": {
                        "bookingId": payload.bookingId,
                        "citizenId": payload.citizenId
                    },
                    'target': '/sales-services/rest/event/get_booking_by_bid_and_cid'
                };
                
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
    });