'use strict';

/**
 * @ngdoc function
 * @name fec3App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the fec3App
 */
angular.module('fec3App')
    .controller('selectshopCtrl', function($scope) {

        $scope.selectShops = [{
            branch: "80000007 - True Distribution & Sales Co., Ltd (Central Bangna Branch)",
        }, {
            branch: "80000008 - True Distribution & Sales Co., Ltd (Future Park Rangsit Branch)",
        }, {
            branch: "80000009 - True Distribution & Sales Co., Ltd (Fashion Island Branch)",
        }];



    });
