'use strict';

/**
 * @ngdoc function
 * @name fec3App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the fec3App
 */
angular.module('fec3App')
    .controller('choosecampaignCtrl', function($scope, $modal) {
    	
        $scope.data = $modal.campaignList();
        $scope.txtChanged = function(){
            // var arr = $scope.data;
            // for (var i = 0; i < arr.length; i++) {
            //     $scope.proItem['' + arr.products[i].code] = 0;
            // }
            $modal.campaignSelected({code:"13",name:"name13"});
        };


    });