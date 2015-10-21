'use strict';

/**
 * @ngdoc function
 * @name fec3App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the fec3App
 */
angular.module('fec3App')
    .controller('payment2Ctrl', function($scope) {
        
 $scope.gotopayment3 = function() {
            window.location = "#/payment2";
            setTimeout(function() {
                window.location = "#/payment3";
            }, 1000);

        };


        $scope.showlist = false;
        $scope.Price = "14,450.00";
       
        $scope.ordercard = [{
            imageno: "icon_no",
        }];

        $scope.ClearTxt = function(){
            $scope.Price = "";
        }


        //$scope.trueDevices =[{name:"iPhone 6 Plus",price:"",imgAS:""}];
    });
