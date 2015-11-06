'use strict';

/**
 * @ngdoc function
 * @name fec3App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the fec3App
 */
angular.module('fec3App')
    .controller('productSelectorCtrl', function($scope, $routeParams, $modal) {

        $scope.name = $routeParams.name;
        
        $scope.data = $modal.mathList();
        console.log($scope.data);
        //console.log($scope.ngDialogData);
        $scope.ngBootBoxClose = function() {

            bootbox.hideAll();
            // try {
            //     angular.element(document.getElementById('' + $('#divID').val())).scope().afterCloseWarning();
            // } catch (e) {}
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
            var order = {};
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
                        order.PRODUCT_TYPE = prod.type;
                        order.PRODUCT_CODE = prod.code;
                        order.PRODUCT_NAME = prod.name;
                        order.PRICE = prod.price;
                        order.QTY = $scope.proItem['piece' + arr[i].colorName + ii];
                        order.TOTAL = order.QTY * order.PRICE;

                        customerProfile.orderObj = {};
                        customerProfile.orderObj.order_product_item_list = [];

                        customerProfile.orderObj.order_product_item_list.push(order);

                    }

                }

            }
            $localstorage.setObject("customerProfile", customerProfile);
            $localstorage.logObject("customerProfile");
            $location.path('/ordersummary')
        };
    };
    });