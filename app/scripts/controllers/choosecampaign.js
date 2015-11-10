'use strict';

/**
 * @ngdoc function
 * @name fec3App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the fec3App
 */
angular.module('fec3App')
    .controller('choosecampaignCtrl', function($scope, $modal, $log, $routeParams, $localstorage, $linq, $location, productService) {
        //var customerProfile = $localstorage.getObject("customerProfile");
        var productCode = $routeParams.productCode;
        var productType = $routeParams.productType;
        var id = $routeParams.id;
        var name = $routeParams.name;

        var logger = $log.getInstance('choosecampaignCtrl');
        var order_product_item_list = [];
        $scope.isValidated = false;
        var d = new Date();
        //var TrxID = d.getTime() + '';
        var TrxID = $routeParams.trxId;
        var _productCode = $routeParams.productCode;
        $scope.proItem = {
            "pieceGold0": null
        };

        //get modal varibles
        $scope.data = $modal.campaignList();
        var verifyKeys = $modal.verifyKeys();
        var campaignCode = $modal.campaignCode();

        for (var i = 0; i < $scope.data.length; i++) {
            //console.log($scope.data[i].type);
            switch ($scope.data[i].type) {
                case '1':
                    $scope.data[i].type = "แถม";
                    break;
                case '2':
                    $scope.data[i].type = "แลกซื้อ";
                    break;
                case '3':
                    $scope.data[i].type = "ลดบาท";
                    break;
                case '4':
                    $scope.data[i].type = "ลดเปอร์เซนต์";
                    break;
                case '5':
                    $scope.data[i].type = "subsidy";
                    break;
            }
        }


        // $scope.data =$scope.listdata ;   
        $scope.validateInput = function(item, gitem) {
            $scope.isValidated = false;
            //logger.debug(item, gitem);
            //logger.debug($scope.proItem[item.code]);
            var arr = gitem.products;
            var sumMax = 0;
            for (var i = 0; i < arr.length; i++) {
                //logger.debug($scope.proItem[arr[i].code]);
                if ($scope.proItem[arr[i].code]) {
                    sumMax = sumMax + $scope.proItem[arr[i].code];
                    //logger.debug(sumMax);
                    if (sumMax > gitem.maxGet) {

                        $scope.proItem[arr[i].code] = null;
                    } else {
                        $scope.isValidated = true;
                    }
                }
            }

        };

        $scope.nextModal = function() {
            var customerProfile = $localstorage.getObject("customerProfile");
            var orderItemList = [];
            var arr = $scope.data;
            var sum = 0;
            for (var i = 0; i < arr.length; i++) {
                for (var ii = 0; ii < arr[i].products.length; ii++) {
                    if ($scope.proItem[arr[i].products[ii].code] && $scope.proItem[arr[i].products[ii].code] > 0) {
                        //console.log("Tingtang:" + arr[i]);
                        //var order.PRODUCT_TYPE = arr[i].type;
                        var prod = arr[i].products[ii];
                        var order = {};
                        var prodOrderQty = $scope.proItem[arr[i].products[ii].code];
                        var totalAmt = prod.price * prodOrderQty;

                        // logger.debug("...Product[" + prod.code + "] Qty=" + prodOrderQty);
                        // logger.debug("...Product[" + prod.code + "] totalAmt=" + totalAmt);

                        order.PRODUCT_TYPE = prod.type;
                        order.PRODUCT_CODE = prod.code;
                        order.PRODUCT_NAME = prod.name;
                        order.PRICE = prod.price;
                        order.QTY = prodOrderQty;
                        order.TOTAL = totalAmt;
                        order.IS_CAMPAIGN_PROMO_ITEM = 'Y';
                        order.IS_PRODUCT_REQUESTFORM = 'N';
                        order.APPLECARE_CODE = null;
                        order.GROUP_ID = _productCode + TrxID;

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
                // var sum_i = 0;


            }
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

                // if ((existReqFormQty + itemReqFormQty) > maxReqForm) {

                //     alert("Cannot Process. Request From Item > 3 ");
                //     //$modal.productSelector($scope.data, $scope.tabselected, $scope.proItem);
                //     //$modal.campaignSelector($scope.data);

                // } else {

                //     var itemAppCareList = $linq.Enumerable().From(selectedOrderItemList).Where("$.APPLECARE_CODE != null && $.APPLECARE_CODE != '' ").ToArray();
                //     if (itemAppCareList && itemAppCareList.length > 0) {

                //         alert("Need to confirm about Apple Care");

                //         //if confirm == no call >> $modal.productSelector($scope.data, $scope.tabselected, $scope.proItem);
                //         //else >> process code below
                //         for (var idx = 0; idx < selectedOrderItemList.length; idx++) {
                //             customerProfile.orderObj.order_product_item_list.push(selectedOrderItemList[idx]);
                //         }

                //         logger.debug("...Complete Validate. order_product_item_list=", customerProfile.orderObj.order_product_item_list);

                //         $localstorage.setObject("customerProfile", customerProfile);
                //         $localstorage.logObject("customerProfile");

                //         $location.path('/ordersummary');

                //     } else {

                //         logger.debug("...Complete Validate");

                //         for (var idx = 0; idx < selectedOrderItemList.length; idx++) {
                //             customerProfile.orderObj.order_product_item_list.push(selectedOrderItemList[idx]);
                //         }

                //         logger.debug("...Complete Validate. order_product_item_list=", customerProfile.orderObj.order_product_item_list);

                //         $localstorage.setObject("customerProfile", customerProfile);
                //         $localstorage.logObject("customerProfile");

                //         $location.path('/ordersummary');
                //     }
                // }

                //jigkoh3 bypass validate Requestform & Applecare
                logger.debug("...Complete Validate");

                for (var idx = 0; idx < selectedOrderItemList.length; idx++) {
                    customerProfile.orderObj.order_product_item_list.push(selectedOrderItemList[idx]);
                }

                logger.debug("...Complete Validate. order_product_item_list=", customerProfile.orderObj.order_product_item_list);

                $localstorage.setObject("customerProfile", customerProfile);
                $localstorage.logObject("customerProfile");

                if (verifyKeys) {
                    $location.path('/privilege').search({
                        id: id,
                        name: name,
                        campaignCode: campaignCode,
                        productCode: productCode,
                        qty: 1,
                        verifyKeys: verifyKeys
                    });
                } else {
                    $location.path('/ordersummary');
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


    });