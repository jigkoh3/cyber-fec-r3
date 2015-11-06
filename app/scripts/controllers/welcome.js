'use strict';

angular.module('fec3App')
    .controller('welcomeCtrl', function ($scope, $location, $loading, $message, userService, $log) {

        $loading.show();
        userService.initailData(function (result) {

            var testGetHttp = function (url) {

                var flag = false;
                var resData = $.ajax({
                    type: "GET",
                    url: url,
                    cache: false,
                    async: false
                }).responseText;


                return resData;
            };

            var testGetHttp2 = function (url) {

                var xhttp = new XMLHttpRequest();
                xhttp.open("GET", url, false);
                xhttp.send();

                return xhttp.responseText;
            };


            var logger = $log.getInstance('welcomeCtrl');
            $log.debug("Hello Debug!2222");
            logger.debug('$log.debug(Hello Debug!)');
            
            logger.debug('=======================================');
            logger.debug('             START ');
            logger.debug('=======================================');

            var url = "/aj01_Test.aspx?i_DATA_1=AAA&i_DATA_2=BBB";
            var retData = ''; //testGetHttp2(url);
            logger.debug('retData2=', retData);
            logger.debug('=======================================');

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