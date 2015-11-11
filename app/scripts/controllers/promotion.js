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


        productService.getProduct(0, productCode, productType, function(idx, result) {
            // console.log(result);
            $scope.campaigns = result.data['response-data'].product.campaigns;
            $scope.promotions = result.data['response-data'].product.promotions;

        });





        $scope.tabname = "1";
        $scope.selectTab = function(tab) {
            $scope.tabname = tab;
        };

        /**
         * campaign selected - if (have promotionSet) 
         *                     then {modal promotionSet selector and goto verify page} 
         *                     else {go to verify page}
         *                   - if (verify success) then (check have services data goto open service page)
         */
        $scope.choose = function(itm) {
            //case campaign selecter
            $loading.show();
            productService.getCampaign(itm.code, productCode, function(res) {
                console.log(res);
                $loading.hide();
                if (res.status) {
                    $loading.show();
                    productService.getPromotionSet(res.data['response-data'].campaign.promotionSet, function(result) {
                        console.log(result);
                        $loading.hide();
                        if (result.status) {

                            var promotionset = result.data['response-data'].promotion.promotions;
                            var products = result.data['response-data'].promotion.products;
                            var campaign = null;
                            if (res.data['response-data'].campaign) {
                                campaign = res.data['response-data'].campaign;
                            }

                            if (promotionset && promotionset.length >= 1) {
                                //case have promotionSet then modal promotionset selecter
                                $modal.campaignSelector(promotionset, campaign, itm.code,products);
                            } else {
                                //case not have promotionSet navigate to next step
                                if (campaign) {
                                    var arrServiceCode = [];
                                    if (campaign.services && campaign.services.length >= 1) {
                                        for (var i = 0; i <= campaign.services.length - 1; i++) {
                                            arrServiceCode.push(campaign.services[i].code);
                                        };
                                    }
                                    if (campaign.verifyKeys) {
                                        //case have verify key
                                        $location.path('/privilege').search({
                                            id: $scope.id,
                                            name: $scope.name,
                                            campaignCode: itm.code,
                                            productCode: productCode,
                                            qty: 1,
                                            verifyKeys: campaign.verifyKeys,
                                            services: arrServiceCode
                                        });
                                    } else {
                                        // not have verify ???
                                    }


                                } else {
                                    //case other exception

                                }
                            }


                        } else {
                            $message.alert(result.data["display-message"]);
                        }

                    });
                } else {
                    $message.alert(res.data["display-message"]);
                }

            });
        };

        /**
         * promotionSet selected - if (have promotionSet) 
         *                          then {modal promotionSet selector} 
         *                          else {go to order summary}
         *                       - if (have products type 'S') then (goto open service page)
         */
        $scope.choosePro = function(itm) {
            //case promotion selecter
            $loading.show();
            productService.getPromotionSet(itm.code, function(result) {
                console.log(result);
                $loading.hide();
                if (result.status) {
                    var promotionset = result.data['response-data'].promotion.promotions;
                    var products = result.data['response-data'].promotion.products;
                    if (promotionset && promotionset.length >= 1) {
                        //case have promotionSet then modal promotionset selecter
                        $modal.campaignSelector(promotionset, null, null,products);
                    } else {
                        //case not have promotionSet navigate to next step
                        $location.path('/ordersummary');
                    }
                } else {
                    $message.alert(result.data["display-message"]);
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