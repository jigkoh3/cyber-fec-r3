'use strict';

/**
 * @ngdoc function
 * @name fec3App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the fec3App
 */
angular.module('fec3App')


.controller('orderDeviceCtrl', function($routeParams, $scope, $localstorage, $location, $loading, $message, $modal, productService, $log, $linq) {


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
        //console.log(itm);
        $scope.color = itm.stock;

        if (itm.itemCount > 1) {

            $modal.productSelector(itm, $scope.tabselected, {
                "pieceGold0": null
            },$scope.name);

        } else {

            if ($scope.tabselected == "1") {
                if (oldProItem != id) {
                    $scope.proItem['piece' + oldProItem] = null;
                    oldProItem = id;
                }
                $scope.proItem['piece' + id] = 1;
                // console.log($scope.proItem['piece' + id]);
                // console.log(id);
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
        var customerProfile = $localstorage.getObject("customerProfile");
        var orderItemList = [];
        var d = new Date();
        var TrxID = d.getTime() + '';
        if ($scope.tabselected == "1") {
            //$location.path('/promotion?productCode=' + $scope.productCode + '&productType=' + $scope.productType)
            if ($scope.productCode && $scope.productType) {

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
                            order.IS_SIM = 'N';
                            order.APPLECARE_CODE = null;
                            order.GROUP_ID = prod.code + TrxID;

                            orderItemList.push(order);
                            //customerProfile.orderObj = {};
                            //customerProfile.orderObj.order_product_item_list = [];
                            //if (!customerProfile.orderObj) { customerProfile.orderObj = {}; }
                            //if (!customerProfile.orderObj.order_product_item_list) { customerProfile.orderObj.order_product_item_list = []; }
                            //customerProfile.orderObj.order_product_item_list.push(order);

                        }

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
                    if (!customerProfile.orderObj.order_product_item_list) {
                        customerProfile.orderObj.order_product_item_list = [];
                    }

                    var maxReqForm = 3;
                    var isReqAppCare = false;

                    var existingReqFormList = $linq.Enumerable().From(customerProfile.orderObj.order_product_item_list).Where("$.IS_PRODUCT_REQUESTFORM == 'Y'").ToArray();
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

                    } else {

                        var itemAppCareList = $linq.Enumerable().From(selectedOrderItemList).Where("$.APPLECARE_CODE != null && $.APPLECARE_CODE != '' ").ToArray();
                        if (itemAppCareList && itemAppCareList.length > 0) {

                            var msg = "Need to confirm about Apple Care";
                            
                            $message.confirm(msg, function(result) {
                                if (result.status) {
                                    for (var idx = 0; idx < selectedOrderItemList.length; idx++) {
                                        customerProfile.orderObj.order_product_item_list.push(selectedOrderItemList[idx]);
                                    }

                                    logger.debug("...Complete Validate. order_product_item_list=", customerProfile.orderObj.order_product_item_list);

                                    $localstorage.setObject("customerProfile", customerProfile);
                                    $localstorage.logObject("customerProfile");

                                    //$location.path('/ordersummary');
                                    $location.path('/promotion').search({
                                        id: $scope.id,
                                        name: $scope.name,
                                        productCode: $scope.productCode,
                                        productType: $scope.productType,
                                        trxId: TrxID
                                    });
                                }else{
                                    for (var idx = 0; idx < selectedOrderItemList.length; idx++) {
                                        selectedOrderItemList[idx].APPLECARE_CODE = null;
                                        customerProfile.orderObj.order_product_item_list.push(selectedOrderItemList[idx]);
                                    }

                                    $localstorage.setObject("customerProfile", customerProfile);
                                    $localstorage.logObject("customerProfile");

                                    //$location.path('/ordersummary');
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

                            //$location.path('/ordersummary');
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
                        order.IS_SIM = 'N';
                        order.APPLECARE_CODE = null;
                        order.GROUP_ID = prod.code + TrxID;

                        orderItemList.push(order);
                        //customerProfile.orderObj = {};
                        //customerProfile.orderObj.order_product_item_list = [];
                        //if (!customerProfile.orderObj) { customerProfile.orderObj = {}; }
                        //if (!customerProfile.orderObj.order_product_item_list) { customerProfile.orderObj.order_product_item_list = []; }
                        //customerProfile.orderObj.order_product_item_list.push(order);

                    }

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
                if (!customerProfile.orderObj.order_product_item_list) {
                    customerProfile.orderObj.order_product_item_list = [];
                }

                var maxReqForm = 3;
                var isReqAppCare = false;

                var existingReqFormList = $linq.Enumerable().From(customerProfile.orderObj.order_product_item_list).Where("$.IS_PRODUCT_REQUESTFORM == 'Y'").ToArray();
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

                } else {

                    var itemAppCareList = $linq.Enumerable().From(selectedOrderItemList).Where("$.APPLECARE_CODE != null && $.APPLECARE_CODE != '' ").ToArray();
                    if (itemAppCareList && itemAppCareList.length > 0) {

                       // alert("Need to confirm about Apple Care");
                        var msg = "Need to confirm about Apple Care";
                            
                        $message.confirm(msg, function(result) {
                            if (result.status) {

                                for (var idx = 0; idx < selectedOrderItemList.length; idx++) {
                                    customerProfile.orderObj.order_product_item_list.push(selectedOrderItemList[idx]);
                                }

                                logger.debug("...Complete Validate. order_product_item_list=", customerProfile.orderObj.order_product_item_list);

                                $localstorage.setObject("customerProfile", customerProfile);
                                $localstorage.logObject("customerProfile");

                                $location.path('/ordersummary');
                            } else {
                                
                                for (var idx = 0; idx < selectedOrderItemList.length; idx++) {
                                    selectedOrderItemList[idx].APPLECARE_CODE = null;
                                    customerProfile.orderObj.order_product_item_list.push(selectedOrderItemList[idx]);
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

        };
    };


});