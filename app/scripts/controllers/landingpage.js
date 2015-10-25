'use strict';

/**
 * @ngdoc function
 * @name fec3App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the fec3App
 */
angular.module('fec3App')
    .controller('landingpageCtrl', function($scope, $loading, productService) {
        $('.ng-menu').click(function() {
            $('.ng-menu').removeClass('active');
            $(this).addClass('active');
        });



        // $scope.gotopricePlan = function() {
        //     window.location = "#/landingpage";
        //     setTimeout(function() {
        //         window.location = "#/pricePlan";
        //     }, 1000);

        // };
        $loading.show();
        productService.getProductRecommend(function(result){
            // console.log(result);
            // $scope.truePromotions
            $loading.hide();
            if(result.status){
                console.log(result.data);
                $scope.truePromotions = result.data.Promotions;
                $scope.trueDevices = result.data.Devices;
            }
            else{
                console.log(result.data);
            }
        });
        // $scope.truePromotions = [{
        //     promotionCode: "gold",
        //     upload: "50",
        //     download: "5.0",
        //     pricePlan: "4P Value + 2,999",
        //     description: "ไฟเบอร์เคเบิลอินเทอร์เน็ต (Docsis)",
        //     promotionDtls: [{
        //         desc: "TOL 50/5.0 Mbps."
        //     }, {
        //         desc: "TVS GOLD HD 170 ช่อง 39 HD"
        //     }, {
        //         desc: "TMVH 450 mins+DATA 4GB"
        //     }, {
        //         desc: "Fixline Plus 100 mins"
        //     }]
        // }, {
        //     promotionCode: "gold",
        //     upload: "50",
        //     download: "5.0",
        //     pricePlan: "4P Value + 2,999",
        //     description: "ไฟเบอร์เคเบิลอินเทอร์เน็ต (Docsis)",
        //     promotionDtls: [{
        //         desc: "TOL 50/5.0 Mbps."
        //     }, {
        //         desc: "TVS GOLD HD 170 ช่อง 39 HD"
        //     }, {
        //         desc: "TMVH 450 mins+DATA 4GB"
        //     }, {
        //         desc: "Fixline Plus 100 mins"
        //     }]
        // }, {
        //     promotionCode: "gold",
        //     upload: "50",
        //     download: "5.0",
        //     pricePlan: "4P Value + 2,999",
        //     description: "ไฟเบอร์เคเบิลอินเทอร์เน็ต (Docsis)",
        //     promotionDtls: [{
        //         desc: "TOL 50/5.0 Mbps."
        //     }, {
        //         desc: "TVS GOLD HD 170 ช่อง 39 HD"
        //     }, {
        //         desc: "TMVH 450 mins+DATA 4GB"
        //     }, {
        //         desc: "Fixline Plus 100 mins"
        //     }]
        // }, {
        //     promotionCode: "gold",
        //     upload: "50",
        //     download: "5.0",
        //     pricePlan: "4P Value + 2,999",
        //     description: "ไฟเบอร์เคเบิลอินเทอร์เน็ต (Docsis)",
        //     promotionDtls: [{
        //         desc: "TOL 50/5.0 Mbps."
        //     }, {
        //         desc: "TVS GOLD HD 170 ช่อง 39 HD"
        //     }, {
        //         desc: "TMVH 450 mins+DATA 4GB"
        //     }, {
        //         desc: "Fixline Plus 100 mins"
        //     }]
        // }, {
        //     promotionCode: "gold",
        //     upload: "50",
        //     download: "5.0",
        //     pricePlan: "4P Value + 2,999",
        //     description: "ไฟเบอร์เคเบิลอินเทอร์เน็ต (Docsis)",
        //     promotionDtls: [{
        //         desc: "TOL 50/5.0 Mbps."
        //     }, {
        //         desc: "TVS GOLD HD 170 ช่อง 39 HD"
        //     }, {
        //         desc: "TMVH 450 mins+DATA 4GB"
        //     }, {
        //         desc: "Fixline Plus 100 mins"
        //     }]
        // }, {
        //     promotionCode: "gold",
        //     upload: "50",
        //     download: "5.0",
        //     pricePlan: "4P Value + 2,999",
        //     description: "ไฟเบอร์เคเบิลอินเทอร์เน็ต (Docsis)",
        //     promotionDtls: [{
        //         desc: "TOL 50/5.0 Mbps."
        //     }, {
        //         desc: "TVS GOLD HD 170 ช่อง 39 HD"
        //     }, {
        //         desc: "TMVH 450 mins+DATA 4GB"
        //     }, {
        //         desc: "Fixline Plus 100 mins"
        //     }]
        // }];

        // $scope.trueDevices = [{
        //     name: "iPhone 6 Plus",
        //     price: "29,450.00",
        //     imgAS: "iPhone_6_Plus",
        //     networks: ["3g", "4g"]
        // }, {
        //     name: "iPhone 6",
        //     price: "29,450.00",
        //     imgAS: "Picture4",
        //     networks: ["3g", "4g"]
        // }, {
        //     name: "iPhone 6 Plus",
        //     price: "29,450.00",
        //     imgAS: "iPhone_6_Plus",
        //     networks: ["3g", "4g"]
        // }, {
        //     name: "iPhone 6 Plus",
        //     price: "29,450.00",
        //     imgAS: "iPhone_6_Plus",
        //     networks: ["3g", "4g"]
        // }, {
        //     name: "iPhone 6 Plus",
        //     price: "29,450.00",
        //     imgAS: "iPhone_6_Plus",
        //     networks: ["3g", "4g"]
        // }, {
        //     name: "iPhone 6 Plus",
        //     price: "29,450.00",
        //     imgAS: "iPhone_6_Plus",
        //     networks: ["3g", "4g"]
        // }];
    });
