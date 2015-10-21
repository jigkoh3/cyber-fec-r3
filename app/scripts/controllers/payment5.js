'use strict';

/**
 * @ngdoc function
 * @name fec3App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the fec3App
 */
angular.module('fec3App')
    .controller('payment5Ctrl', function($scope) {
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
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
