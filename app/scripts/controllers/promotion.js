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

        productService.getCampaign(function(result){
            // console.log(result);
            $scope.campaigns=result.data['response-data'].product.campaigns;
           
        });
        productService.getPromotionSet(function(result){
            console.log(result);
            $scope.promotions=result.data['response-data'].product.promotions;
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

        // $scope.campaignTypes = [{
        //     type: "RF",
        // }, {
        //     type: "TC",
        // }];



    });
