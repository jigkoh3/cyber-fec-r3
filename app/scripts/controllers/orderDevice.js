'use strict';

/**
 * @ngdoc function
 * @name fec3App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the fec3App
 */
angular.module('fec3App')


.controller('orderDeviceCtrl', function ($routeParams, $scope, $localstorage, $location, $loading, $message, $modal, productService, $log) {


    var logger = $log.getInstance('productSelectorCtrl');

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

    $scope.chooseMath = function(item) {
        //alert(itm.code);
        productService.getProductByCategory(itm.code, function(result) {
            console.log(result);
            if (result.status) {
                var products = result.data['response-data'].products;
                $modal.productSelector(products);
            }

        });

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
    $scope.color = "";
    $scope.choose = function(itm, id) {
        console.log(itm);
        $scope.color = itm.stock;

        if (itm.itemCount > 1) {
            $modal.productSelector(itm,$scope.tabselected);
        } else {

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
        }



        // if ($scope.tabselected == "1") {
        //     if (oldProItem != id) {
        //         $scope.proItem['piece' + oldProItem] = null;
        //         oldProItem = id;
        //     }
        //     $scope.proItem['piece' + id] = 1;
        //     console.log($scope.proItem['piece' + id]);
        //     console.log(id);
        // } else {
        //     if ($scope.proItem['piece' + id] < itm.piece) {
        //         $scope.proItem['piece' + id] += 1;
        //     } else {
        //         $scope.proItem['piece' + id] = itm.piece;
        //     }

        // }
        // $scope.productCode = itm.code;
        // $scope.productType = "P";
        // $scope.calculate(itm, 'piece' + id);

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
            if ($scope.productCode && $scope.productType) {
                $location.path('/promotion').search({
                    id: $scope.id,
                    name: $scope.name,
                    productCode: $scope.productCode,
                    productType: $scope.productType
                });
            }

        } else {
            var customerProfile = $localstorage.getObject("customerProfile");
            var orderList = [];            
            var arr = $scope.trueProduct.productColor;
            var sum = 0;
            for (var i = 0; i < arr.length; i++) {
                var sum_i = 0;
                for (var ii = 0; ii < arr[i].memSize.length; ii++) {
                    var sum_ii = 0;
                    if ($scope.proItem['piece' + arr[i].colorName + ii] && $scope.proItem['piece' + arr[i].colorName + ii] > 0) {
                        //console.log("Tingtang:" + arr[i]);
                        // var order.PRODUCT_TYPE = arr[i].
                        var prod = arr[i].memSize[ii];
                        var order = {};
                        var prodOrderQty = $scope.proItem['piece' + arr[i].colorName + ii];
                        var totalAmt = prod.price * prodOrderQty;
                        logger.debug("...Product[" + prod.code + "] Qty=" + prodOrderQty);
                        logger.debug("...Product[" + prod.code + "] totalAmt=" + totalAmt);

                        order.PRODUCT_TYPE = prod.type;
                        order.PRODUCT_CODE = prod.code;
                        order.PRODUCT_NAME = prod.name;
                        order.PRICE = prod.price;
                        order.QTY = prodOrderQty;
                        order.TOTAL = totalAmt;
                        order.IS_CAMPAIGN_PROMO_ITEM = 'N';
                        order.IS_PRODUCT_REQUESTFORM = 'N';
                        order.APPLECARE_CODE = null;


                        //customerProfile.orderObj = {};
                        //customerProfile.orderObj.order_product_item_list = [];
                        if (!customerProfile.orderObj) { customerProfile.orderObj = {}; }
                        if (!customerProfile.orderObj.order_product_item_list) { customerProfile.orderObj.order_product_item_list = []; }
                        customerProfile.orderObj.order_product_item_list.push(order);

                    }

                }

            }
            $localstorage.setObject("customerProfile", customerProfile);
            $localstorage.logObject("customerProfile");
            $location.path('/ordersummary');
        };
    };

   
});
