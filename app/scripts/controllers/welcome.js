'use strict';

angular.module('fec3App')
    .controller('welcomeCtrl', function($scope, $location, userService) {

        userService.initailData(function(result) {
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