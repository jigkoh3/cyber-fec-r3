'use strict';

/**
 * @ngdoc function
 * @name fec3App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the fec3App
 */
angular.module('fec3App')
    .controller('productSelectorCtrl', function($scope, $localstorage, $routeParams, $location, $modal, $log, productService, $linq,  $message) {


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

        //$scope.proItem = {
        //    "pieceGold0": null
        //};
        $scope.proItem = $modal.values();

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
                    } else {
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
                    } else {
                        $scope.isValidated = true;
                    }
                }
            }

        };
        $scope.nextModal = function() {
            var d = new Date();
            var TrxID = d.getTime() + '';
            var customerProfile = $localstorage.getObject("customerProfile");
            var orderItemList = [];
            if ($scope.tabSelected == 1) {
                //$location.path('/promotion?productCode=' + $scope.productCode + '&productType=' + $scope.productType)
                if ($scope.productCode && $scope.productType) {


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
                            order.CAMPAIGN_PROMO_ITEM_QTY = 1;
                            order.APPLECARE_CODE = null;
                            order.GROUP_ID = prod.code + TrxID;

                            //if (!customerProfile.orderObj) {
                            //    customerProfile.orderObj = {};
                            //}
                            //if (!customerProfile.orderObj.order_product_item_list) {
                            //    customerProfile.orderObj.order_product_item_list = [];
                            //}

                            orderItemList.push(order);
                            //logger.debug("...After order_product_item_list.push", customerProfile.orderObj.order_product_item_list);

                        }

                    }

                    /// Varidate Here !!!
                    logger.debug("...Before call updateSelectedOrderItem=", orderItemList);

                    var finishUpdateSelectedOrderItem = function(selectedOrderItemList) {

                        logger.debug("...### FINISH finishUpdateSelectedOrderItem=", selectedOrderItemList);
                        logger.debug("...BEGIN Validate Data");

                        //var customerProfile = $localstorage.getObject("customerProfile");
                        if (!customerProfile.orderObj) {
                            customerProfile.orderObj = {};
                        }
                        if (!customerProfile.orderObj.actual_order_product_item_list) {
                            customerProfile.orderObj.actual_order_product_item_list = [];
                        }

                        var maxReqForm = 3;
                        var isReqAppCare = false;

                        var existingReqFormList = $linq.Enumerable().From(customerProfile.orderObj.actual_order_product_item_list).Where("$.IS_PRODUCT_REQUESTFORM == 'Y'").ToArray();
                        var itemReqFormList = $linq.Enumerable().From(selectedOrderItemList).Where("$.IS_PRODUCT_REQUESTFORM == 'Y'").ToArray();
                        var itemReqFormQty = 0;
                        if (itemReqFormList && itemReqFormList.length > 0) {
                            for (var itemIdx = 0; itemIdx < itemReqFormList.length; itemIdx++) {
                                itemReqFormQty = itemReqFormQty + itemReqFormList[itemIdx].QTY;
                            }
                        }

                        var existReqFormQty = 0;
                        if (existingReqFormList && existingReqFormList.length > 0) {
                            for (var itemIdx = 0; itemIdx < existingReqFormList.length; itemIdx++) {
                                existReqFormQty = existReqFormQty + existingReqFormList[itemIdx].QTY;
                            }
                        }

                        if ((existReqFormQty + itemReqFormQty) > maxReqForm) {

                            alert("Cannot Process. Request From Item > 3 ");
                            $modal.productSelector($scope.data, $scope.tabselected, $scope.proItem);

                        } else {

                            var itemAppCareList = $linq.Enumerable().From(selectedOrderItemList).Where("$.APPLECARE_CODE != null && $.APPLECARE_CODE != '' ").ToArray();
                            if (itemAppCareList && itemAppCareList.length > 0) {

                                //alert("Need to confirm about Apple Care");
                                var msg = "Need to confirm about Apple Care";

                                //if confirm == no call >> $modal.productSelector($scope.data, $scope.tabselected, $scope.proItem);
                                //else >> process code below
                                $message.confirm(msg, function(result) {

                                    if (result.status) {
                                        for (var idx = 0; idx < selectedOrderItemList.length; idx++) {
                                            customerProfile.orderObj.order_product_item_list.push(selectedOrderItemList[idx]);
                                            
                                        }

                                        logger.debug("...Complete Validate. order_product_item_list=", customerProfile.orderObj.order_product_item_list);

                                        $localstorage.setObject("customerProfile", customerProfile);
                                        $localstorage.logObject("customerProfile");


                                        $location.path('/promotion').search({
                                            id: $scope.id,
                                            name: $scope.name,
                                            productCode: $scope.productCode,
                                            productType: $scope.productType,
                                            trxId: TrxID
                                        });
                                    }else{
                                       // $modal.productSelector($scope.data, $scope.tabselected, $scope.proItem);
                                        for (var idx = 0; idx < selectedOrderItemList.length; idx++) {
                                            selectedOrderItemList[idx].APPLECARE_CODE = null;
                                            customerProfile.orderObj.order_product_item_list.push(selectedOrderItemList[idx]);
                                        }

                                        logger.debug("...Complete Validate. order_product_item_list=", customerProfile.orderObj.order_product_item_list);

                                        $localstorage.setObject("customerProfile", customerProfile);
                                        $localstorage.logObject("customerProfile");


                                        $location.path('/promotion').search({
                                            id: $scope.id,
                                            name: $scope.name,
                                            productCode: $scope.productCode,
                                            productType: $scope.productType,
                                            trxId: TrxID
                                        });
                                    }
                                });    

                            } else {

                                logger.debug("...Complete Validate");

                                for (var idx = 0; idx < selectedOrderItemList.length; idx++) {
                                    customerProfile.orderObj.order_product_item_list.push(selectedOrderItemList[idx]);
                                }

                                logger.debug("...Complete Validate. order_product_item_list=", customerProfile.orderObj.order_product_item_list);

                                $localstorage.setObject("customerProfile", customerProfile);
                                $localstorage.logObject("customerProfile");

                                $location.path('/promotion').search({
                                    id: $scope.id,
                                    name: $scope.name,
                                    productCode: $scope.productCode,
                                    productType: $scope.productType,
                                    trxId: TrxID
                                });
                            }
                        }

                    }

                    var updateSelectedOrderItem = function(selectedOrderItemList) {

                        logger.debug("...### BEGIN selectedOrderItemList=", selectedOrderItemList);

                        var totalItem = selectedOrderItemList.length;

                        logger.debug("...### BEGIN totalItem=", totalItem);

                        for (var idx = 0; idx < selectedOrderItemList.length; idx++) {

                            var updateOrderItemData = function(itemIdx, response_data) {

                                totalItem--;
                                var resData = response_data.data["response-data"]
                                logger.debug("...Update Order Info form response_data=", resData);
                                logger.debug("...selectedOrderItemList[idx]=", selectedOrderItemList[0]);

                                selectedOrderItemList[itemIdx].IS_PRODUCT_REQUESTFORM = (resData.product.productInfo.requireForm ? "Y" : "N");
                                selectedOrderItemList[itemIdx].IS_SIM = (resData.product.productInfo.isSim ? "Y" : "N");
                                selectedOrderItemList[itemIdx].APPLECARE_CODE = resData.product.productInfo.appleCareCode;

                                if (totalItem == 0) {
                                    finishUpdateSelectedOrderItem(selectedOrderItemList);
                                };
                            };

                            productService.getProduct(idx, selectedOrderItemList[idx].PRODUCT_CODE, selectedOrderItemList[idx].PRODUCT_TYPE, updateOrderItemData);
                        }

                    };

                    updateSelectedOrderItem(orderItemList);
                    logger.debug("...After call updateSelectedOrderItem");
                }

            } else {

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
                        order.CAMPAIGN_PROMO_ITEM_QTY = 1;
                        order.APPLECARE_CODE = null;
                        order.GROUP_ID = prod.code + TrxID;

                        //if (!customerProfile.orderObj) {
                        //    customerProfile.orderObj = {};
                        //}
                        //if (!customerProfile.orderObj.order_product_item_list) {
                        //    customerProfile.orderObj.order_product_item_list = [];
                        //}

                        orderItemList.push(order);
                        //logger.debug("...After order_product_item_list.push", customerProfile.orderObj.order_product_item_list);

                    }

                }

                /// Varidate Here !!!
                logger.debug("...Before call updateSelectedOrderItem=", orderItemList);

                var finishUpdateSelectedOrderItem = function(selectedOrderItemList) {

                    logger.debug("...### FINISH finishUpdateSelectedOrderItem=", selectedOrderItemList);
                    logger.debug("...BEGIN Validate Data");

                    //var customerProfile = $localstorage.getObject("customerProfile");
                    if (!customerProfile.orderObj) {
                        customerProfile.orderObj = {};
                    }
                    if (!customerProfile.orderObj.actual_order_product_item_list) {
                        customerProfile.orderObj.actual_order_product_item_list = [];
                    }

                    var maxReqForm = 3;
                    var isReqAppCare = false;

                    var existingReqFormList = $linq.Enumerable().From(customerProfile.orderObj.actual_order_product_item_list).Where("$.IS_PRODUCT_REQUESTFORM == 'Y'").ToArray();
                    var itemReqFormList = $linq.Enumerable().From(selectedOrderItemList).Where("$.IS_PRODUCT_REQUESTFORM == 'Y'").ToArray();
                    var itemReqFormQty = 0;
                    if (itemReqFormList && itemReqFormList.length > 0) {
                        for (var itemIdx = 0; itemIdx < itemReqFormList.length; itemIdx++) {
                            itemReqFormQty = itemReqFormQty + itemReqFormList[itemIdx].QTY;
                        }
                    }

                    var existReqFormQty = 0;
                    if (existingReqFormList && existingReqFormList.length > 0) {
                        for (var itemIdx = 0; itemIdx < existingReqFormList.length; itemIdx++) {
                            existReqFormQty = existReqFormQty + existingReqFormList[itemIdx].QTY;
                        }
                    }

                    if ((existReqFormQty + itemReqFormQty) > maxReqForm) {

                        alert("Cannot Process. Request From Item > 3 ");
                        $modal.productSelector($scope.data, $scope.tabselected, $scope.proItem);

                    } else {

                        var itemAppCareList = $linq.Enumerable().From(selectedOrderItemList).Where("$.APPLECARE_CODE != null && $.APPLECARE_CODE != '' ").ToArray();
                        if (itemAppCareList && itemAppCareList.length > 0) {
                            //alert("Need to confirm about Apple Care");
                             //if confirm == no call >> $modal.productSelector($scope.data, $scope.tabselected, $scope.proItem);
                            //else >> process code below
                            var msg = "Need to confirm about Apple Care";
                            $message.confirm(msg, function(result) {
                                if (result.status) {
                                    for (var idx = 0; idx < selectedOrderItemList.length; idx++) {
                                        customerProfile.orderObj.order_product_item_list.push(selectedOrderItemList[idx]);
                                       // console.log(selectedOrderItemList[idx]);
                                    }
                                    logger.debug("...Complete Validate. order_product_item_list=", customerProfile.orderObj.order_product_item_list);
                                    $localstorage.setObject("customerProfile", customerProfile);
                                    $localstorage.logObject("customerProfile");
                                    $location.path('/ordersummary');
                                }else{
                                    //$modal.productSelector($scope.data, $scope.tabselected, $scope.proItem);
                                      for (var idx = 0; idx < selectedOrderItemList.length; idx++) {
                                         selectedOrderItemList[idx].APPLECARE_CODE = null;
                                        customerProfile.orderObj.order_product_item_list.push(selectedOrderItemList[idx]);
                                       // console.log(selectedOrderItemList[idx]);
                                    }

                                     logger.debug("...Complete Validate. order_product_item_list=", customerProfile.orderObj.order_product_item_list);
                                    $localstorage.setObject("customerProfile", customerProfile);
                                    $localstorage.logObject("customerProfile");
                                    $location.path('/ordersummary');
                                }  

                                
                            });
                        } else {

                            logger.debug("...Complete Validate");

                            for (var idx = 0; idx < selectedOrderItemList.length; idx++) {
                                customerProfile.orderObj.order_product_item_list.push(selectedOrderItemList[idx]);
                            }

                            logger.debug("...Complete Validate. order_product_item_list=", customerProfile.orderObj.order_product_item_list);

                            $localstorage.setObject("customerProfile", customerProfile);
                            $localstorage.logObject("customerProfile");

                            $location.path('/ordersummary');
                        }
                    }

                }

                var updateSelectedOrderItem = function(selectedOrderItemList) {

                    logger.debug("...### BEGIN selectedOrderItemList=", selectedOrderItemList);

                    var totalItem = selectedOrderItemList.length;

                    logger.debug("...### BEGIN totalItem=", totalItem);

                    for (var idx = 0; idx < selectedOrderItemList.length; idx++) {

                        var updateOrderItemData = function(itemIdx, response_data) {

                            totalItem--;
                            var resData = response_data.data["response-data"]
                            logger.debug("...Update Order Info form response_data=", resData);
                            logger.debug("...selectedOrderItemList[idx]=", selectedOrderItemList[0]);

                            selectedOrderItemList[itemIdx].IS_PRODUCT_REQUESTFORM = (resData.product.productInfo.requireForm ? "Y" : "N");
                            selectedOrderItemList[itemIdx].IS_SIM = (resData.product.productInfo.isSim ? "Y" : "N");
                            selectedOrderItemList[itemIdx].APPLECARE_CODE = resData.product.productInfo.appleCareCode;

                            if (totalItem == 0) {
                                finishUpdateSelectedOrderItem(selectedOrderItemList);
                            };
                        };

                        productService.getProduct(idx, selectedOrderItemList[idx].PRODUCT_CODE, selectedOrderItemList[idx].PRODUCT_TYPE, updateOrderItemData);
                    }

                };

                updateSelectedOrderItem(orderItemList);
                logger.debug("...After call updateSelectedOrderItem");

                //$localstorage.setObject("customerProfile", customerProfile);
                //$localstorage.logObject("customerProfile");
                //$location.path('/ordersummary');
            };
        };
    });