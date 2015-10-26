'use strict';

/**
 * @ngdoc function
 * @name fec3App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the fec3App
 */
angular.module('fec3App')
    .controller('productsCtrl', function($scope, $location, $loading, $message, productService) {
        $('.ng-menu').click(function() {
            $('.ng-menu').removeClass('active');
            $(this).addClass('active');
        });


        productService.getDevices(function(result) {
            
            if(result.status){
                //console.log(result.data);
                $scope.categories = result.data;
            }else{
                $message.alert(result.data["display-messages"][0]);
            }
        });
        $scope.imgPrefix = function(id){
            //var preFixURL = 'http://172.19.193.71/sale/img/category/';
            var preFixURL = 'http://localhost:9000/images/category/'
            return preFixURL + id + '.png';
        };
        $scope.dilldown = function(item){
            //console.log(item);
            if(item.child && item.child.length >= 1)
            {
                $scope.categories= item.child;
            }else{
                // var target = '/orderDevice?id='  + item.id +'&name=' + item.name;
                // $location.path(target);
                $location.path('/orderDevice').search({id: item.id,name: item.name});
            }
            
        }

        // $scope.aircard = [{
        //     productname: "Air Card 1",
        //     productpic: "Picture1",
        // }, {
        //     productname: "Air Card 2",
        //     productpic: "Picture1",

        // }];


        // $scope.smartphone = [{
        //     productname: "SAMSUNG Galaxy Note5",
        //     productpic: "note5",

        // }, {
        //     productname: "iPhone 6",
        //     productpic: "iPhone",
        // }];


        // $scope.phone = [{

        //     productname: "Go Live",
        //     productpic: "Go_Live",
        // }];


        // $scope.tablet = [{
        //     productname: "SAMSUNG Galaxy Tab3",
        //     productpic: "tab3",
        // }, {
        //     productname: "SAMSUNG Galaxy Tab4",
        //     productpic: "tab4",
        // }, {
        //     productname: "iPad mini3",
        //     productpic: "ipadmini3",
        // }];




        //$scope.trueDevices =[{name:"iPhone 6 Plus",price:"",imgAS:""}];
    });