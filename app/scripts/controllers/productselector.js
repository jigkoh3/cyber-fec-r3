'use strict';

/**
 * @ngdoc function
 * @name fec3App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the fec3App
 */
angular.module('fec3App')
    .controller('productSelectorCtrl', function($scope, $localstorage, $routeParams, $location, $modal, $log) {

        var logger = $log.getInstance('productSelectorCtrl');
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

        $scope.proItem = {
            "pieceGold0": null
        };

        $scope.nextModal = function() {
            if ($scope.tabselected == "1") {
                //$location.path('/promotion?productCode=' + $scope.productCode + '&productType=' + $scope.productType)
                // if ($scope.productCode && $scope.productType) {
                //     $location.path('/promotion').search({
                //         id: $scope.id,
                //         name: $scope.name,
                //         productCode: $scope.productCode,
                //         productType: $scope.productType
                //     });
                // }

            } else {
                var customerProfile = $localstorage.getObject("customerProfile");
                var orderList = [];
                var order = {};
                var arr = $scope.data.childs;
                var sum = 0;
                for (var i = 0; i < arr.length; i++) {
                    var sum_i = 0;

                    if ($scope.proItem['piece' + arr[i].productInfo.color + i] && $scope.proItem['piece' + arr[i].productInfo.color + i] > 0) {
                        //console.log("Tingtang:" + arr[i]);
                        //var order.PRODUCT_TYPE = arr[i].type;
                        var prod = arr[i];
                        var prodOrderQty = $scope.proItem['piece' + arr[i].productInfo.color + i];
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

                        if (!customerProfile.orderObj) { customerProfile.orderObj = {}; }
                        if (!customerProfile.orderObj.order_product_item_list) { customerProfile.orderObj.order_product_item_list = []; }
                        customerProfile.orderObj.order_product_item_list.push(order);

                    }


                }
                $localstorage.setObject("customerProfile", customerProfile);
                $localstorage.logObject("customerProfile");
                $location.path('/ordersummary');
            };
        };
    });
