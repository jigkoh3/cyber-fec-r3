'use strict';

/**
 * @ngdoc function
 * @name fec3App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the fec3App
 */
angular.module('fec3App')
    .controller('landingpageCtrl', function($scope, $loading, $message, $location, anchorSmoothScroll, productService) {
        $scope.selectedTab = "";
        $loading.show();
        productService.getCategories(function(result) {
            //console.log(result.data);
            $loading.hide();
            if (result.status) {
                productService.getProductRecommend(function(result) {
                    // console.log(result);
                    // $scope.truePromotions
                    $loading.hide();
                    if (result.status) {
                        console.log(result.data);
                        $scope.recommend = result.data;
                        $scope.selectedTab = $scope.recommend.child[0].id;
                    } else {
                        $message.alert(result.data["display-message"]);
                    }
                });

            } else {
                $message.alert(result.data["display-messages"][0]);
                //console.log(result.data);
            }


        });




        $scope.imgPrefix = function(id) {
            //var preFixURL = 'http://172.19.193.71/sale/img/category/';
            var preFixURL = 'http://localhost:9000/images/category/'
            return preFixURL + id + '.png';
        };

        $scope.viewCate = function(item) {

            if (item.child && item.child.length >= 1) {
                $location.path('/products').search({
                    id: item.id,
                    name: item.name
                });
            } else {

                $location.path('/orderDevice').search({
                    id: item.id,
                    name: item.name
                });
            }
        }

        
        $scope.gotoElement = function(eID) {
            
            anchorSmoothScroll.scrollTo(eID);
            $scope.selectedTab=eID;
        };
        
    });