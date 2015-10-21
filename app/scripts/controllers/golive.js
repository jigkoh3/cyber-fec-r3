'use strict';

/**
 * @ngdoc function
 * @name fec3App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the fec3App
 */
angular.module('fec3App')
    .controller('goliveCtrl', function($scope, $location) {
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        
        $scope.trueProduct = {
            productName: "Go Live",
            productImg: "Go_Live",
            productTotal:"ราคารวม",
            productColor: [{
                     colorName: "Gold",
                    // colorImg: "gold",
                    memSize: [{
                        sizeName: "3031",
                        price: "990",
                        stock:"yellow",
                        piece: ""
                    }, {
                        sizeName: "3031",
                        price: "990",
                        stock:"green",
                        piece: ""
                    }]
                    }, {
                    colorName: "Silver",
                    // colorImg: "silver",
                    memSize: [{
                        sizeName: "S2",
                        price: "2990",
                        stock:"green",
                        piece: ""
                    }, {
                        sizeName: "S2",
                        price: "2990",
                        stock:"green",
                        piece: ""
                    }]
                }, {
                     colorName: "Black",
                    // colorImg: "black",
                    memSize: [{
                        sizeName: "Facebook",
                        price: "1450",
                        stock:"green",
                        piece: ""
                    }, {
                        sizeName: "Facebook",
                        price: "1450",
                        stock:"red",
                        piece: ""
                    }, {
                        sizeName: "Facebook",
                        price: "1450",
                        stock:"green",
                        piece: ""
                    }]

                }

            ]

        };

        $scope.total = 0;
        $scope.calculate = function(item) {
            // console.log($scope.trueProduct.productColor[0].memSize);
            var total = 0;
            angular.forEach($scope.trueProduct.productColor, function(itm) {
                var totalByColor = 0;
                angular.forEach(itm.memSize, function(item) {

                    totalByColor += item.price * item.piece;

                    // console.log($scope.total);
                })
                console.debug(totalByColor);
                total += totalByColor;

            })
            return total;
            //$scope.total += item.price * item.piece;

        }

        $scope.detail = "";
        $scope.preDetail = function(item) {
            // console.log($scope.trueProduct.productColor[0].memSize);
            var detail = "";
            angular.forEach($scope.trueProduct.productColor, function(itm) {
                var sizeDetail = "";
                angular.forEach(itm.memSize, function(item) {

                    sizeDetail == item.sizeName

                    // console.log($scope.total);
                })
                console.debug(sizeDetail);
                detail == sizeDetail;

            })
            return detail;
            //$scope.total += item.price * item.piece;

        }


        $scope.IsVisible = false;
        $scope.ShowHide = function() {
            //If DIV is visible it will be hidden and vice versa.
            $scope.IsVisible = $scope.IsVisible ? false : true;

        }

        $scope.next = function(){
            //alert("");
            //onclick="location.href='#promotion'"
            if($scope.tabselected=="1"){
                $location.path('/promotion')
            }else{
                $location.path('/listpayment')
            }
            
        }
        $scope.tabselected = "1";
        $scope.selectTab = function(idx){
            $scope.tabselected = idx;
        }

    });