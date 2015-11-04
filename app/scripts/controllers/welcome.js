'use strict';

angular.module('fec3App')
    .controller('welcomeCtrl', function ($scope, $location, $loading, $message, userService, $log) {

        $loading.show();
        userService.initailData(function (result) {

            var logger = $log.getInstance('welcomeCtrl');
            logger.debug('$log.debug(Hello Debug!)');
            $log.debug("Hello Debug!2222");

            $loading.hide();
            //console.log(result.data);
            if (result.status) {
                
                if (result.data.shops.length == 1) {
                    
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