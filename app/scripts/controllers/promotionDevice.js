'use strict';

/**
 * @ngdoc function
 * @name fec3App.controller:promotiondeviceCtrl
 * @description
 * # promotiondeviceCtrl
 * Controller of the fec3App
 */
angular.module('fec3App')
    .controller('promotiondeviceCtrl', function($scope) {
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        $scope.devicecode = [{
            pic: "iPhone_6_Plus",
            device: "iPhone 6 Plus",
            detail: "I Phone 6 Plus (สีทอง)"
        }];



        $scope.devicedetail1 = [{
            categoryName: "Campaing",
            details: [{
                description1: "RS499 TC_iPhone 6 & 6 Plus discount 5000bt",
                price1: "ราคาเครื่องลด  5000 บาท เหลือ  24,450 บาท"
            }, {
                description2: "RS491 RF_Existing iPhone 6 & 6 Plus discount 500",
                price2: "ราคาเครื่องลด  5000 บาท เหลือ  24,450 บาท"
            }],
            items1: "เลือก Promotion ismart 499, 699, 899 หรือ Jumbo 599, 799, 999",
            items2: "ชำระล่วงหน้า 6 เดือน สัญญา 12 เดือน",
        }];



        $scope.devicedetail2 = [{
            categoryName: "Promotion Set",
            details: [{
                description1: "PT343 Device with Sim(TUC)"
            }, {
                description2: "PT343 Device with Sim(RMV)"
            }],
            items1: "ซื้อเครื่องพร้อมเปิดบริการหมายเลข True Move H (TUC)",
            items2: "ซื้อเครื่องพร้อมเปิดบริการหมายเลข True Move H (RMV)",
        }];
    });
