'use strict';

/**
 * @ngdoc function
 * @name fec3App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the fec3App
 */
angular.module('fec3App')
    .controller('promotionCtrl', function($scope, $loading, $modal, $message, $routeParams, $localstorage, $location, productService) {

        var productCode = $routeParams.productCode;
        var productType = $routeParams.productType;
        $scope.id = $routeParams.id;
        $scope.name = $routeParams.name;


        productService.getProduct(productCode, productType, function(result) {
            // console.log(result);
            $scope.campaigns = result.data['response-data'].product.campaigns;
            $scope.promotions = result.data['response-data'].product.promotions;

        });





        $scope.tabname = "1";
        $scope.selectTab = function(tab) {
            $scope.tabname = tab;
        };
        $scope.choose = function(itm) {

            $loading.show();
            productService.getCampaign(itm.code, productCode, function(res) {
                console.log(res);
                if (res.status) {
                    productService.getPromotionSet(res.data['response-data'].promotionSet, function(result) {
                        console.log(result);
                        if (result.status) {
                            $loading.hide();
                            var promotionset = result.data['response-data'].promotion.promotions;
                            $modal.campaignSelector(promotionset, function(result) {
                                //alert(result.data.code);
                                if (res.data['response-data'].campaign.verifyKeys && res.data['response-data'].campaign.verifyKeys.length == 1 && res.data['response-data'].campaign.verifyKeys[0] == "ThaiId") {
                                    //verlify thai-id

                                    var param = {
                                        "campaign_code": itm.code,
                                        "product_code": productCode,
                                        "qty": 1,
                                        "verifyKeys": [{
                                            "key": "ThaiId",
                                            "value": $localstorage.getObject("customerProfile").certificateId
                                        }]
                                    };
                                    $loading.show();
                                    productService.verify(param, function(result) {
                                        //location.href='#priceplanexisting
                                        $scope.isClick = false;
                                        if (result.data['response-data']['result'] == 'Pass') {
                                            $loading.hide();
                                            location.href = '#pricePlan';
                                            $('#bindDataAgain').click();
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

                                    });
                                    
                                    
                                } else {

                                    $location.path('/privilege').search({
                                        id: $scope.id,
                                        name: $scope.name,
                                        campaignCode: itm.code,
                                        productCode: productCode,
                                        qty: 1
                                    });
                                    $('#bindDataAgain').click();
                                }

                            });
                            //$location.path('/privilege').search({id: $scope.id,name: $scope.name,campaignCode: itm.code,productCode: productCode,qty: 1});
                        }

                    });
                }

            });
        };

        $scope.choosePro = function(itm) {
            $loading.show();
            productService.getPromotionSet(itm.code, function(result) {
                console.log(result);
                $loading.hide();
                if (result.status) {
                    var promotionset = result.data['response-data'].promotion.promotions;
                    $modal.campaignSelector(promotionset, function(result) {
                        $location.path('/pricePlan'); //.search({id: $scope.id,name: $scope.name,campaignCode: itm.code,productCode: productCode,qty: 1});
                        $('#bindDataAgain').click();
                    });
                }

            });
        };

        $scope.gotoprivilege = function() {
            window.location = "#/promotion";
            setTimeout(function() {
                window.location = "#/privilege";
            }, 1000);

        };

        $scope.gotopricePlan = function() {
            window.location = "#/promotion";
            setTimeout(function() {
                window.location = "#/pricePlan";
            }, 1000);

        };

        $scope.selectCampaignCode = "All";

        $scope.onChangeCampaignCode = function() {
            console.log($scope.selectCampaignCode);
            //var $filter("filter")(selectCampaignCode);
        };

        $scope.startsWithLetter = function(item) {
            if ($scope.selectCampaignCode != "All") {
                if (item.code.substring(0, 2) == $scope.selectCampaignCode) {
                    return true;
                } else {
                    return false;
                }
            } else {
                return true;
            }

        };

        $scope.onSearchCampaign = function(item) {

            if ($scope.query) {
                //var name = item['name'].toUpperCase();
                // var desc = item['desc'].toUpperCase();
                var code = item['code'].toUpperCase();
                var searchValue = $scope.query.toUpperCase();
                var scCode = $scope.selectCampaignCode.toUpperCase();

                if ( //(name.indexOf(searchValue) >= 0) ||
                    // (desc.indexOf(searchValue) >= 0) &&
                    (code.indexOf(searchValue) >= 0) &&
                    (code.indexOf(scCode) >= 0)) {
                    return true;
                } else {
                    return false;
                }
            } else {
                return true;
            }
            return false;
        };


        $scope.campaignTypes = [{
            name: "All",
            value: "All"
        }, {
            name: "TX",
            value: "TX"
        }, {
            name: "TR",
            value: "TR"
        }, {
            name: "TP",
            value: "TP"
        }, {
            name: "TN",
            value: "TN"
        }, {
            name: "TM",
            value: "TM"
        }, {
            name: "TD",
            value: "TD"
        }, {
            name: "RS",
            value: "RS"
        }];



    });