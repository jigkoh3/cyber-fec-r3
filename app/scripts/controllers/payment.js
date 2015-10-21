'use strict';

/**
 * @ngdoc function
 * @name fec3App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the fec3App
 */
angular.module('fec3App')
    .controller('paymentCtrl', function($scope) {
        

 $scope.gotopayment2 = function() {
            window.location = "#/payment";
            setTimeout(function() {
                window.location = "#/payment2";
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
