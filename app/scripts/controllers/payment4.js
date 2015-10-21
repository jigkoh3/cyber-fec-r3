'use strict';

/**
 * @ngdoc function
 * @name fec3App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the fec3App
 */
angular.module('fec3App')
    .controller('payment4Ctrl', function($scope) {
        
 $scope.gotopayment5 = function() {
            window.location = "#/payment4";
            setTimeout(function() {
                window.location = "#/payment5";
            }, 1000);

        };



        $scope.showlist = false;
        $scope.showcard = false;
        $scope.showcard1 = false;
        $scope.showcheck = false;
        $scope.showvat = false;
        $scope.ordercard = [{
            imageno: "icon_no",
        }];




        //$scope.trueDevices =[{name:"iPhone 6 Plus",price:"",imgAS:""}];
    });
