'use strict';

angular.module('fec3App')
    .controller('selectshopCtrl', function($scope, $location, userService) {

        // $scope.selectShops = [{
        //     branch: "80000007 - True Distribution & Sales Co., Ltd (Central Bangna Branch)",
        // }, {
        //     branch: "80000008 - True Distribution & Sales Co., Ltd (Future Park Rangsit Branch)",
        // }, {
        //     branch: "80000009 - True Distribution & Sales Co., Ltd (Fashion Island Branch)",
        // }];
        userService.initailData(function(result) {
            if (result.status) {


                userService.getShops(function(resp) {
                    if (resp.status) {
                        if (resp.data && resp.data["response-data"]) {
                            if (resp.data["response-data"].length == 0) {
                                console.log(resp.data);
                            } else if (resp.data["response-data"].length == 1) {
                                var val = resp.data["response-data"][0].shopCode + ":" + resp.data["response-data"][0].shopNameTh;
                                userService.setShopSelectd(val, function(result) {
                                    if (result.status) {
                                        console.log(result);
                                        $location.path('/main')
                                    } else {
                                        console.log(result);
                                    }

                                });
                                
                            } else {
                                $scope.selectShops = resp.data["response-data"];
                            }
                        } else {
                            console.log(result.data);
                        }
                    } else {

                    }
                });
            } else {
                console.log(result.data);
            }
        });
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