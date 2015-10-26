'use strict';

angular.module('fec3App')
    .controller('welcomeCtrl', function($scope, $location, $loading, $message, userService) {
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
                $message.alert(result.data["display-messages"][0]);
            }
        });
        

    });