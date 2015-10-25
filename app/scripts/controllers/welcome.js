'use strict';

angular.module('fec3App')
    .controller('welcomeCtrl', function($scope, $location, $loading, userService) {
        $loading.show();
        userService.initailData(function(result) {
            $loading.hide();
            //console.log(result.data);
            if (result.status) {
                
                if(result.data.shops.length == 1){
                    
                    $location.path('/main')
                }
                else{
                    $location.path('/selectshop')
                }
            } else {
                console.log(result.data);
            }
        });
        

    });