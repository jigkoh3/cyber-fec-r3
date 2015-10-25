'use strict';

/**
 * @ngdoc function
 * @name fec3App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the fec3App
 */
angular.module('fec3App')
    .controller('existingcustomerCtrl', function($scope, $loading, $localstorage) {

        $('.ng-menu').click(function() {
            $('.ng-menu').removeClass('active');
            $(this).addClass('active');
        });
        $loading.show();
        var customerProfile = $localstorage.getObject("customerProfile");
        if(customerProfile){
            $scope.dataPro1 = customerProfile.bookings;
            $scope.trueMoveHProdeucts = customerProfile.TMV;
            $scope.trueVisionProdeucts = customerProfile.TVS;
            $scope.trueOnlineProdeucts = customerProfile.TOL;
        }
        $loading.hide();
        // bookingService.getBookingByCiti(function(result) {

        //     if (result.status) {
        //         $scope.dataPro1 = result.data["response-data"].bookings;

        //     } else {
        //         console.log(result);
        //     }
        // });


        // $scope.trueMoveHProdeucts = [{
        //     prodCate: "ทรูมูฟเอช รายเดือน",
        //     subNo: "0865333463",
        //     pricePlane: "PLSMAP10: 4G iSmart399, V450m, WIFI, TVS1GB, Free5GB 6m.6m PLSMAP10: 4G iSmart399, V450m, WIFI, TVS1GB, Free5GB 6m.6m"
        // }, {
        //     prodCate: "ทรูมูฟเอช รายเดือน",
        //     subNo: "0865333463",
        //     pricePlane: "PLSMAP10: 4G iSmart399, V450m, WIFI, TVS1GB, Free5GB 6m.6m PLSMAP10: 4G iSmart399, V450m, WIFI, TVS1GB, Free5GB 6m.6m"
        // }, {
        //     prodCate: "ทรูมูฟเอช รายเดือน",
        //     subNo: "0865333463",
        //     pricePlane: "PLSMAP10: 4G iSmart399, V450m, WIFI, TVS1GB, Free5GB 6m.6m PLSMAP10: 4G iSmart399, V450m, WIFI, TVS1GB, Free5GB 6m.6m"
        // }, {
        //     prodCate: "ทรูมูฟเอช รายเดือน",
        //     subNo: "0865333463",
        //     pricePlane: "PLSMAP10: 4G iSmart399, V450m, WIFI, TVS1GB, Free5GB 6m.6m PLSMAP10: 4G iSmart399, V450m, WIFI, TVS1GB, Free5GB 6m.6m"
        // }, {
        //     prodCate: "ทรูมูฟเอช รายเดือน",
        //     subNo: "0865333463",
        //     pricePlane: "PLSMAP10: 4G iSmart399, V450m, WIFI, TVS1GB, Free5GB 6m.6m PLSMAP10: 4G iSmart399, V450m, WIFI, TVS1GB, Free5GB 6m.6m"
        // }];

        // $scope.trueVisionProdeucts = [{
        //     prodCate: "ทรูวิชั่น",
        //     subNo: "029044589",
        //     pricePlane: "Gold Package"
        // }, {
        //     prodCate: "ทรูวิชั่น",
        //     subNo: "029044589",
        //     pricePlane: "Gold Package"
        // }];

        // $scope.trueOnlineProdeucts = [{
        //     prodCate: "ทรูออนไลน์",
        //     subNo: "9100198785",
        //     pricePlane: "Change Ultra hi-speed 2013 (03)15M/1.5M + RTWIFI(02)"
        // }, {
        //     prodCate: "ทรูออนไลน์",
        //     subNo: "9100198785",
        //     pricePlane: "Change Ultra hi-speed 2013 (03)15M/1.5M + RTWIFI(02)"
        // }];
    });