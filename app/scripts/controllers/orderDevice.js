'use strict';

/**
 * @ngdoc function
 * @name fec3App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the fec3App
 */
angular.module('fec3App')
    .controller('orderDeviceCtrl', function($routeParams, $scope, $location, $loading, $message, $modal, productService) {
        //get querystring request
        $scope.id = $routeParams.id;
        $scope.name = $routeParams.name;
        $scope.productCode = null;
        $scope.productType = null;
        //onload page event
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
        //display category image by category id
        $scope.imgPrefix = function(id) {
            var preFixURL = 'http://localhost:9000/images/category/'
            return preFixURL + id + '.png';
        };


        $scope.detail = "";
        $scope.tabselected = "1"; // default promotion (promotion or device only)

        //is unUsed ????
        $scope.IsVisible = false;
        $scope.ShowHide = function() {
            //If DIV is visible it will be hidden and vice versa.
            $scope.IsVisible = $scope.IsVisible ? false : true;
        };
        //is initail set order volume (qty)s by item is null after select tab order action
        $scope.selectTab = function(idx) {

            $scope.total = 0;
            var arr = $scope.trueProduct.productColor;
            for (var i = 0; i < arr.length; i++) {

                for (var ii = 0; ii < arr[i].memSize.length; ii++) {
                    $scope.proItem['piece' + arr[i].colorName + ii] = null;
                }
            }
            $scope.tabselected = idx;
        };
        //??????
        $scope.proItem = {
            "pieceGold0": null
        };

        //
        var oldProItem = "";
        $scope.choose = function(itm, id) {
            //console.log("selected itm piece :" + itm.piece)
            //$modal.productSelector(itm);
            if ($scope.tabselected == "1") {
                if (oldProItem != id) {
                    $scope.proItem['piece' + oldProItem] = null;
                    oldProItem = id;
                }
                $scope.proItem['piece' + id] = 1;
                console.log($scope.proItem['piece' + id]);
                console.log(id);
            } else {
                if ($scope.proItem['piece' + id] < itm.piece) {
                    $scope.proItem['piece' + id] += 1;
                } else {
                    $scope.proItem['piece' + id] = itm.piece;
                }

            }
            $scope.productCode = itm.code;
            $scope.productType = "P";
            $scope.calculate(itm, 'piece' + id);
        };
        //culate order total summary
        $scope.total = 0;
        $scope.calculate = function(item, proItem) {
            console.log("calculate :" + $scope.proItem[proItem]);
            if (!$scope.proItem[proItem]) { // if more than max piece
                //console.log("more than max piece :" + item.piece);
                $scope.proItem[proItem] = null;
            }
            var arr = $scope.trueProduct.productColor;
            var sum = 0;
            for (var i = 0; i < arr.length; i++) {
                var sum_i = 0;
                for (var ii = 0; ii < arr[i].memSize.length; ii++) {
                    var sum_ii = 0;
                    if ($scope.proItem['piece' + arr[i].colorName + ii]) {
                        sum = sum + $scope.proItem['piece' + arr[i].colorName + ii] * item.price;
                    }

                }
            }
            $scope.total = sum;
        };

        $scope.next = function() {
            if ($scope.tabselected == "1") {
                //$location.path('/promotion?productCode=' + $scope.productCode + '&productType=' + $scope.productType)
                if($scope.productCode && $scope.productType){
                    $location.path('/promotion').search({id: $scope.id,name: $scope.name,productCode: $scope.productCode,productType: $scope.productType});
                }
                
            } else {
                $location.path('/listpayment')
            }
        };

        
    });