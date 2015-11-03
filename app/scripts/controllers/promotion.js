'use strict';

/**
 * @ngdoc function
 * @name fec3App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the fec3App
 */
angular.module('fec3App')
    .controller('promotionCtrl', function($scope, $loading, $message, productService) {

        productService.getCampaign(function(result) {
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

        $scope.selectCampaignCode = "00";

        $scope.onChangeCampaignCode = function() {
            console.log($scope.selectCampaignCode);
            //var $filter("filter")(selectCampaignCode);
        };

        $scope.onSearchCampaign = function(item) {

            if ($scope.query) {
                //var name = item['name'].toUpperCase();
                // var desc = item['desc'].toUpperCase();
                var code = item['code'].toUpperCase();
                var searchValue = $scope.query.toUpperCase();
                var scCode = $scope.selectCampaignCode.toUpperCase();

                if (//(name.indexOf(searchValue) >= 0) ||
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
            value: "00"
        }, {
            name: "TX",
            value: "01"
        }, {
            name: "TR",
            value: "02"
        }, {
            name: "TP",
            value: "03"
        }, {
            name: "TN",
            value: "04"
        }, {
            name: "TM",
            value: "05"
        }, {
            name: "TD",
            value: "06"
        }, {
            name: "RS",
            value: "07"
        }];



    });
