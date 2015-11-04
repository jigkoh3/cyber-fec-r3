'use strict';

/**
 * @ngdoc function
 * @name fec3App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the fec3App
 */
angular.module('fec3App')
    .controller('productSelectorCtrl', function($scope, $modal) {
        
        $scope.data = $modal.mathList();
        //console.log($scope.ngDialogData);
        $scope.ngBootBoxClose = function() {

            bootbox.hideAll();
            // try {
            //     angular.element(document.getElementById('' + $('#divID').val())).scope().afterCloseWarning();
            // } catch (e) {}
        };
    });