'use strict';

/**
 * @ngdoc function
 * @name fec3App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the fec3App
 */
angular.module('fec3App')
    .controller('promotionCtrl', function($scope, $loading, $message, $routeParams, productService) {

        var productCode = $routeParams.productCode;
        var productType = $routeParams.productType;
        $scope.id = $routeParams.id;
        $scope.name = $routeParams.name;
        productService.getProduct(productCode,productType,function(result) {
            // console.log(result);
            $scope.campaigns = result.data['response-data'].product.campaigns;
            $scope.promotions = result.data['response-data'].product.promotions;

        });


        productService.getPromotionSet(function(result) {
            console.log(result);
            $scope.promotionset = result.data['response-data'].promotion.promotions;
        });

        $('.ng-menu').click(function() {
            $('.ng-menu').removeClass('active');
            $(this).addClass('active');
        });
        // this.awesomeThings = [
        //     'HTML5 Boilerplate',
        //     'AngularJS',
        //     'Karma'
        // ];
        $scope.tabname = "1";
        $scope.selectTab = function(tab) {
            $scope.tabname = tab;
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
            }else{
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


        // $scope.campaigns = [{
        //     campaignName: "RS499 TC_iPhone 6 & 6 Plus discount 5000bt",
        //     details: [{
        //         name: "เลือก Promotion ismart 499, 699, 899 หรือ Jumbo 599, 799, 999"
        //     }, {
        //         name: "ชำระล่วงหน้า 6 เดือน สัญญา 12 เดือน"
        //     }],
        //     price: "ราคาเครื่องลด  5000 บาท เหลือ  24,450 บาท"
        // }];





        // $scope.promotions = [{
        //     promotionName: "PT343 Device with Sim (TUC)",
        //     details: "ซื้อเครื่องพร้อมเปิดบริการหมายเลข True Move H (TUC)"
        // }, {
        //     promotionName: "PT343 Device with Sim (RMV)",
        //     details: "ซื้อเครื่องพร้อมเปิดบริการหมายเลข True Move H (RMV)"
        // }];

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
