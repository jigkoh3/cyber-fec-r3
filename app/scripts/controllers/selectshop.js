'use strict';

angular.module('fec3App')
    .controller('selectshopCtrl', function($scope, $location, $localstorage, userService) {

        // userService.initailData(function(result) {
        //     console.log(result.data);
        //     if (result.status) {
                
        //         if(result.data.shops.length == 1){
                    
        //             $location.path('/main')
        //         }
        //         else{
        //             $scope.selectShops = result.data.shops;
        //         }
        //     } else {
        //         console.log(result.data);
        //     }
        // });
        var userinfo = $localstorage.getObject("userProfile");
        $scope.selectShops = userinfo.shops;
        
        $scope.$watch('shopSelected', function(val) {
            if (val) {
                console.log(val);
                userService.setShopSelectd(val, function(result) {
                    if (result.status) {
                        console.log(result);
                        $location.path('/main')
                    } else {
                        console.log(result);
                    }

                });

            }

        });

    });