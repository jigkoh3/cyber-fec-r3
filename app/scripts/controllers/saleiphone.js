'use strict';

/**
 * @ngdoc function
 * @name fec3App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the fec3App
 */
angular.module('fec3App')
    .controller('saleiphoneCtrl', function($scope) {
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        $scope.iPhone = [{
            imageIphone: "iPhone_6_Plus",
            networks: [{
                networkname: "icon_3g"
            }, {
                networkname: "icon_4g"
            }],
            iphonename: "iPhone 6 Plus"
        }, {
            imageIphone: "iPhone_6",
            networks: [{
                networkname: "icon_3g"
            }, {
                networkname: "icon_4g"
            }],
            iphonename: "iPhone 6 "
        }, {
            imageIphone: "iPhone_5s",
            networks: [{
                networkname: "icon_3g"
            }, {
                networkname: "icon_4g"
            }],
            iphonename: "iPhone 5s "
        }, {
            imageIphone: "iPhone_5c",
            networks: [{
                networkname: "icon_3g"
            }, {
                networkname: "icon_4g"
            }],
            iphonename: "iPhone 5c "
        }, {
            imageIphone: "iPhone_4s",
            networks: [{
                networkname: "icon_3g"
            }],
            iphonename: "iPhone 4s "
        }];


        //$scope.trueDevices =[{name:"iPhone 6 Plus",price:"",imgAS:""}];
    });