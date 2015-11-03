'use strict';

/**
 * @ngdoc function
 * @name fec3App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the fec3App
 */
angular.module('fec3App')
    .controller('orderDeviceCtrl', function($routeParams, $scope, $location, $loading, $message, productService) {





        $scope.id = $routeParams.id;
        $scope.name = $routeParams.name;
        $loading.show();
        productService.getProductByCategory($scope.id, function(result) {
            //console.log(result.data);
            $loading.hide();
            if (result.status) {

                console.log(result.data);
                $scope.trueProduct = result.data;


            } else {
                $message.alert(result.data["display-message"]);
                //console.log(result.data);
            }


        });
        $scope.imgPrefix = function(id) {
            //var preFixURL = 'http://172.19.193.71/sale/img/category/';
            var preFixURL = 'http://localhost:9000/images/category/'
            return preFixURL + id + '.png';
        };


        // $scope.trueProduct = {
        //     productName: "IPhone 6 Plus",
        //     productImg: "iPhone_6_Plus",
        //     productTotal: "ราคารวม",
        //     productColor: [{
        //             colorName: "Gold",
        //             // colorImg: "gold",
        //             memSize: [{
        //                 sizeName: "16 GB",
        //                 price: "27000.00",
        //                 stock: "yellow",
        //                 piece: ""
        //             }, {
        //                 sizeName: "64 GB",
        //                 price: "31000.00",
        //                 stock: "green",
        //                 piece: ""
        //             }, {
        //                 sizeName: "128 GB",
        //                 price: "35000.00",
        //                 stock: "red",
        //                 piece: ""
        //             }]
        //         }, {
        //             colorName: "Silver",
        //             // colorImg: "silver",
        //             memSize: [{
        //                 sizeName: "16 GB",
        //                 price: "27000.00",
        //                 stock: "yellow",
        //                 piece: ""
        //             }, {
        //                 sizeName: "64 GB",
        //                 price: "31000.00",
        //                 stock: "green",
        //                 piece: ""
        //             }, {
        //                 sizeName: "128 GB",
        //                 price: "35000.00",
        //                 stock: "green",
        //                 piece: ""
        //             }]
        //         }, {
        //             colorName: "Gray",
        //             // colorImg: "black",
        //             memSize: [{
        //                 sizeName: "16 GB",
        //                 price: "27000.00",
        //                 stock: "red",
        //                 piece: ""
        //             }, {
        //                 sizeName: "64 GB",
        //                 price: "31000.00",
        //                 stock: "green",
        //                 piece: ""
        //             }, {
        //                 sizeName: "128 GB",
        //                 price: "35000.00",
        //                 stock: "green",
        //                 piece: ""
        //             }]

        //         }

        //     ]

        // };

        $scope.total = 0;
        $scope.calculate = function(item) {
            console.log(item);
         // //console.log($scope.trueProduct.productColor[0].memSize);
         //    var total = 0;
         //    angular.forEach($scope.trueProduct.productColor, function(itm) {
         //        var totalByColor = 0;
         //        angular.forEach(itm.memSize, function(item) {

         //            totalByColor += item.price * item.piece;

         //             console.log($scope.total);
         //        })
         //        console.debug(totalByColor);
         //        total += totalByColor;

         //    })
         //    return total;
         //    // $scope.total += item.price * item.piece;

         var arr = $scope.trueProduct.productColor;
         var sum = 0;
            for(var i=0; i<arr.length; i++){
                var sum_i = 0;
                for(var ii=0; ii<arr[i].memSize.length; ii++){
                    var sum_ii = 0;
                    if($scope.proItem['itemCount'+arr[i].colorName+ii]){
                        sum = sum+$scope.proItem['itemCount'+arr[i].colorName+ii]*item.price;
                    }
                }
            }
         $scope.total = sum;
        }

        $scope.detail = "";
        // $scope.preDetail = function(item) {
        //     // console.log($scope.trueProduct.productColor[0].memSize);
        //     var detail = "";
        //     angular.forEach($scope.trueProduct.productColor, function(itm) {
        //         var sizeDetail = "";
        //         angular.forEach(itm.memSize, function(item) {

        //             sizeDetail == item.sizeName

        //             // console.log($scope.total);
        //         })
        //         //console.debug(sizeDetail);
        //         detail == sizeDetail;

        //     })
        //     return detail;
        //     //$scope.total += item.price * item.piece;

        // }


        $scope.IsVisible = false;
        $scope.ShowHide = function() {
            //If DIV is visible it will be hidden and vice versa.
            $scope.IsVisible = $scope.IsVisible ? false : true;

        }

        $scope.next = function() {
            //alert("");
            //onclick="location.href='#promotion'"
            if ($scope.tabselected == "1") {
                $location.path('/promotion')
            } else {
                $location.path('/listpayment')
            }

        }
        $scope.tabselected = "1";
        $scope.selectTab = function(idx) {

            $scope.total = 0;
            var arr = $scope.trueProduct.productColor;
            for(var i=0; i<arr.length; i++){
                
                for(var ii=0; ii<arr[i].memSize.length; ii++){
                    $scope.proItem['itemCount'+arr[i].colorName+ii] = null;
                }
            }
                
            
            $scope.tabselected = idx;
        }
        $scope.proItem = {
            "pieceGold0": null
        }
        var oldProItem = "";
        $scope.choose = function(itm,id) {
            $scope.calculate(itm);
            if(oldProItem != id){
                $scope.proItem['itemCount'+oldProItem] = null;
                oldProItem = id;
            }
            $scope.proItem['itemCount'+id] = 1;
            console.log($scope.proItem['itemCount'+id]);
            console.log(id);

        }
            

    });
