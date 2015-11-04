'use strict';

/**
 * @ngdoc function
 * @name fec3App.controller:productsCtrl
 * @description
 * # productsCtrl
 * Controller of the fec3App
 * display all categories or category by name
 */
angular.module('fec3App')
    .controller('productsCtrl', function($scope, $location, $loading, $message,  $routeParams, productService) {
        //query string param
        $scope.id = $routeParams.id;
        $scope.name = $routeParams.name;

        //on load page event
        productService.getCategoryById($scope.id,function(result) {
            
            if(result.status){
                //console.log(result.data);
                $scope.categories = result.data;
            }else{
                $message.alert(result.data["display-message"]);
            }
        });

        //disply image by category
        $scope.imgPrefix = function(id){
            //var preFixURL = 'http://172.19.193.71/sale/img/category/';
            var preFixURL = 'http://localhost:9000/images/category/'
            return preFixURL + id + '.png';
        };

        //dilldown recusive
        //if category is have child then recusive data dilldown
        //if categoru is not have child then navigate to route orderDevice(product by category)
        $scope.dilldown = function(item){
            //console.log(item);
            if(item.child && item.child.length >= 1)
            {
                $scope.categories= item.child;
            }else{
                $location.path('/orderDevice').search({id: item.id,name: item.name});
            }
            
        }

    });