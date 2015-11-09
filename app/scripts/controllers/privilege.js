'use strict';
angular.module('fec3App')
    .controller('privilegeCtrl', function($scope, $routeParams, productService, $localstorage, $loading, $message) {
        $scope.userProfile = $localstorage.getObject("customerProfile");

        var campaign_code = $routeParams.campaignCode;
        var product_code = $routeParams.productCode;
        var qty = $routeParams.qty;
        var verifyKeys = $routeParams.verifyKeys;
        $scope.id = $routeParams.id;
        $scope.name = $routeParams.name;
        $scope.param = {
            "campaign_code": campaign_code,
            "product_code": product_code,
            "qty": qty,
            "verifyKeys": [{
                "key": "msisdn",
                "value": ""
            }]
        };
        $scope.isClick = false;

        $scope.onVerify = function() {
            $loading.show();
            if ($routeParams.campaignCode) {
                productService.verify($scope.param, function(result) {
                    //location.href='#priceplanexisting
                    $scope.isClick = false;
                    if (result.data['response-data']['result'] == 'Pass') {
                        $loading.hide();
                        location.href = '#pricePlan';
                    } else {
                        if (result.data['response-data']['result'] == "UnknowError") {
                            $message.alert({
                                "message": "",
                                "message-code": "",
                                "message-type": "Warning",
                                "en-message": "Cannot check privilege, Please contact IT Helpdesk.",
                                "th-message": "ไม่สามารถตรวจสอบสิทธิ์ได้ กรุณาติดต่อ IT Helpdesk",
                                "technical-message": ""
                            });
                        }

                    }

                    console.log(result);
                });
            }
        };

    });
