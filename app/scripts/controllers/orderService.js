'use strict';

/**
 * @ngdoc function
 * @name fec3App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the fec3App
 */
angular.module('fec3App')
    .controller('orderServiceCtrl', function($scope) {
       
       
         $scope.service = [{
            name: "เปิดบริการรายเดือน",
            pic: "Picture1",
        }];

        $scope.detail =[{
            name: "TMV เปิดบริการรายเดือน(RMV)",
            name2: "TMV เปิดบริการรายเดือน(RFT)",
        }]

    });