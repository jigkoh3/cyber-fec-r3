'use strict';

/**
 * @ngdoc function
 * @name fec3App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the fec3App
 */
angular.module('fec3App')
    .controller('allproductsCtrl', function($scope) {
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        $scope.categorydevice = [{
            productname: "Air Card",
            productpic: "Picture1",
        }, {
            productname: "Smart Phone",
            productpic: "Picture2",

        }, {

            productname: "True Brand",
            productpic: "Picture3",
        },{
            productname: "Apple",
            productpic: "Picture4",
        },{
            productname: "Lenovo",
            productpic: "Picture5",
        }];

        //$scope.trueDevices =[{name:"iPhone 6 Plus",price:"",imgAS:""}];
    });
