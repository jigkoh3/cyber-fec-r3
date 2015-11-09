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


        $scope.id = $routeParams.id;
        $scope.name = $routeParams.name;

        

        $scope.productCode = null;
        $scope.productType = null;

        var logger = $log.getInstance('productSelectorCtrl');
        $scope.name = $routeParams.name;


        $scope.data = $modal.mathList();
        $scope.tabSelected = $modal.tabSelected();
        $scope.isValidated = false;

        console.log($scope.data);
        console.log("tabSelected" + $scope.tabSelected);
        $scope.ngBootBoxClose = function() {

            bootbox.hideAll();
            // try {
            //     angular.element(document.getElementById('' + $('#divID').val())).scope().afterCloseWarning();
            // } catch (e) {}
        };

        $scope.proItem = {
            "pieceGold0": null
        };

        //culate order total summary
        $scope.total = 0;
        $scope.validateInput = function(item, proItem) {
            $scope.isValidated = false;
            console.log("calculate :" + $scope.proItem[proItem]);
            if ($scope.tabSelected == 1) {
                var arr = $scope.data.childs;
                for (var i = 0; i < arr.length; i++) {
                    var sum_i = 0;
                    if ('piece' + arr[i].productInfo.color + i != proItem) {
                        $scope.proItem['piece' + arr[i].productInfo.color + i] = null;
                    }
                }
                if (!$scope.proItem[proItem]) { // if more than max piece
                    //console.log("more than max piece :" + item.piece);
                    $scope.proItem[proItem] = null;
                } else {
                    if ($scope.proItem[proItem] != 1) {
                        $scope.proItem[proItem] = null;
                    }else{
                        $scope.productCode = item.code;
                        $scope.productType = item.type;
                        $scope.isValidated = true;
                    }
                }
            } else {
                if (!$scope.proItem[proItem]) { // if more than max piece
                    //console.log("more than max piece :" + item.piece);
                    $scope.proItem[proItem] = null;
                } else {
                    if ($scope.proItem[proItem] > item.qty) {
                        $scope.proItem[proItem] = null;
                    }
                    else{
                        $scope.isValidated = true;
                    }
                }
            }
            
        };
        $scope.nextModal = function() {
            var d = new Date();
            var TrxID = d.getTime() + '';
            if ($scope.tabSelected == 1) {
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
                var arr = $scope.data.childs;
                var sum = 0;
                for (var i = 0; i < arr.length; i++) {
                    var sum_i = 0;

                    if ($scope.proItem['piece' + arr[i].productInfo.color + i] && $scope.proItem['piece' + arr[i].productInfo.color + i] > 0) {
                        //console.log("Tingtang:" + arr[i]);
                        //var order.PRODUCT_TYPE = arr[i].type;
                        var prod = arr[i];
                        var order = {};
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
                        order.GROUP_ID = prod.code + TrxID;

                        if (!customerProfile.orderObj) {
                            customerProfile.orderObj = {};
                        }
                        if (!customerProfile.orderObj.order_product_item_list) {
                            customerProfile.orderObj.order_product_item_list = [];
                        }

                        customerProfile.orderObj.order_product_item_list.push(order);
                        logger.debug("...After order_product_item_list.push", customerProfile.orderObj.order_product_item_list);

                    }


                }
                $localstorage.setObject("customerProfile", customerProfile);
                $localstorage.logObject("customerProfile");
                $location.path('/ordersummary');
            };
        };
    });