'use strict';

/**
 * @ngdoc function
 * @name fec3App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the fec3App
 */
angular.module('fec3App')
    .controller('existingcustomerCtrl', function($scope) {

        $('.ng-menu').click(function() {
            $('.ng-menu').removeClass('active');
            $(this).addClass('active');
        });

        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        $scope.dataPro1 = [{
            name: "ชื่อลูกค้า: คุณสุขแสนสุข ใจอารีย์",
            passWord: "รหัสการจอง: 20141733882",
            product: "สินค้า: 3000036061 iPhone 6 plus 16GB Gold ",
            getPre: "นัดรับสินค้า: 80000124 (true shop ใยแก้ว)",

        }];

        $scope.dataPro2 = [{
            name: "ชื่อลูกค้า: คุณสุขแสนสุข ใจอารีย์",
            passWord: "รหัสการจอง: 20141733889",
            product: "สินค้า: 3000036061 iPhone 6 plus 16GB Silver",
            getPre: "นัดรับสินค้า: 80000124 (true shop ใยแก้ว)",
            getplace: "รับสินค้าที่: 80000124 (true shop ใยแก้ว)",
            getdate: "วันที่รับสินค้า 01/12/2015"

        }];

        $scope.trueMoveHProdeucts = [{
            prodCate: "ทรูมูฟเอช รายเดือน",
            subNo: "0865333463",
            pricePlane: "PLSMAP10: 4G iSmart399, V450m, WIFI, TVS1GB, Free5GB 6m.6m PLSMAP10: 4G iSmart399, V450m, WIFI, TVS1GB, Free5GB 6m.6m"
        }, {
            prodCate: "ทรูมูฟเอช รายเดือน",
            subNo: "0865333463",
            pricePlane: "PLSMAP10: 4G iSmart399, V450m, WIFI, TVS1GB, Free5GB 6m.6m PLSMAP10: 4G iSmart399, V450m, WIFI, TVS1GB, Free5GB 6m.6m"
        }, {
            prodCate: "ทรูมูฟเอช รายเดือน",
            subNo: "0865333463",
            pricePlane: "PLSMAP10: 4G iSmart399, V450m, WIFI, TVS1GB, Free5GB 6m.6m PLSMAP10: 4G iSmart399, V450m, WIFI, TVS1GB, Free5GB 6m.6m"
        }, {
            prodCate: "ทรูมูฟเอช รายเดือน",
            subNo: "0865333463",
            pricePlane: "PLSMAP10: 4G iSmart399, V450m, WIFI, TVS1GB, Free5GB 6m.6m PLSMAP10: 4G iSmart399, V450m, WIFI, TVS1GB, Free5GB 6m.6m"
        }, {
            prodCate: "ทรูมูฟเอช รายเดือน",
            subNo: "0865333463",
            pricePlane: "PLSMAP10: 4G iSmart399, V450m, WIFI, TVS1GB, Free5GB 6m.6m PLSMAP10: 4G iSmart399, V450m, WIFI, TVS1GB, Free5GB 6m.6m"
        }];

        $scope.trueVisionProdeucts = [{
            prodCate: "ทรูวิชั่น",
            subNo: "029044589",
            pricePlane: "Gold Package"
        }, {
            prodCate: "ทรูวิชั่น",
            subNo: "029044589",
            pricePlane: "Gold Package"
        }];

        $scope.trueOnlineProdeucts = [{
            prodCate: "ทรูออนไลน์",
            subNo: "9100198785",
            pricePlane: "Change Ultra hi-speed 2013 (03)15M/1.5M + RTWIFI(02)"
        }, {
            prodCate: "ทรูออนไลน์",
            subNo: "9100198785",
            pricePlane: "Change Ultra hi-speed 2013 (03)15M/1.5M + RTWIFI(02)"
        }];
    });
