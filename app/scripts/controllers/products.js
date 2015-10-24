'use strict';

/**
 * @ngdoc function
 * @name fec3App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the fec3App
 */
angular.module('fec3App')
    .controller('productsCtrl', function($scope, productService) {
        $('.ng-menu').click(function() {
            $('.ng-menu').removeClass('active');
            $(this).addClass('active');
        });


        productService.getDevices(function(result) {
            
            if(result.status){
                //console.log(result.data);
                $scope.categories = result.data;
            }else{

            }
        });

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