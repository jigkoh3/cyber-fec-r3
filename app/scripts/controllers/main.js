'use strict';

/**
 * @ngdoc function
 * @name fec3App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the fec3App
 */
angular.module('fec3App')
    .controller('MainCtrl', function($scope, $location, $localstorage, $loading, $message, productService) {
        $loading.show();
        $localstorage.destroy("customerProfile");
        productService.getCategories(function(result) {
            //console.log(result.data);
            $loading.hide();
            if (result.status) {
                var master = $localstorage.getObject("master");
                //console.log(master);



            } else {
                $message.alert(result.data["display-message"]);
                //console.log(result.data);
            }
        });

    });
