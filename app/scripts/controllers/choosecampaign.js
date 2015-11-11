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
        var campaign = $modal.campaign();
        var campaignCode = $modal.campaignCode();
        var products = $modal.products();

        for (var i = 0; i < $scope.data.length; i++) {
            //console.log($scope.data[i].type);
            $scope.data[i].promoType = $scope.data[i].type;
            if ($scope.data[i].force) { $scope.data[i].chk = true; }

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
        $scope.clearInputGroup = function(item, check) {
            if (check) {
                var arr = item.products;
                var sumMax = 0;
                for (var i = 0; i < arr.length; i++) {
                    $scope.proItem[arr[i].code] = null;
                }
            }

        };
        $scope.initModal = function() {
            for (var i = 0; i < $scope.data.length; i++) {
                if ($scope.data[i].force) {
                    $scope.isValidated = true;
                    break;
                } else {
                    for (var ii = 0; ii < $scope.data[i].products.length; ii++) {
                        var arr = $scope.data[i].products;
                        var sumMax = 0;
                        for (var iii = 0; iii < arr.length; iii++) {
                            //logger.debug($scope.proItem[arr[i].code]);
                            if ($scope.proItem[arr[iii].code]) {
                                $scope.isValidated = true;
                            }
                        }
                    }
                }
            }
        }

        $scope.initModal();
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
                        //$scope.isValidated = true;
                    }
                }
            }
            for (var i = 0; i < $scope.data.length; i++) {

                for (var ii = 0; ii < $scope.data[i].products.length; ii++) {
                    var arr = $scope.data[i].products;
                    var sumMax = 0;
                    for (var iii = 0; iii < arr.length; iii++) {
                        //logger.debug($scope.proItem[arr[i].code]);
                        if ($scope.proItem[arr[iii].code]) {
                            $scope.isValidated = true;
                        }
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

            //jigkoh3 bypass validate Requestform & Applecare
            logger.debug("...Complete Validate");

            for (var idx = 0; idx < orderItemList.length; idx++) {
                customerProfile.orderObj.order_product_item_list.push(orderItemList[idx]);
            }

            logger.debug("...Complete Validate. order_product_item_list=", customerProfile.orderObj.order_product_item_list);

            $localstorage.setObject("customerProfile", customerProfile);
            $localstorage.logObject("customerProfile");

            if (campaign) {
                //from campaign
                var arrServiceCode = [];
                if (campaign.services && campaign.services.length >= 1) {
                    for (var i = 0; i <= campaign.services.length - 1; i++) {
                        arrServiceCode.push(campaign.services[i].code);
                    };
                }
                if (campaign.verifyKeys) {
                    // have verify
                    $location.path('/privilege').search({
                        id: id,
                        name: name,
                        campaignCode: campaignCode,
                        productCode: productCode,
                        qty: 1,
                        verifyKeys: campaign.verifyKeys,
                        services: arrServiceCode
                    });
                } else {
                    // not have verify ???

                }

            } else {
                // from promotion set
                // if products type "S" goto open service
                // else goto order summary
                if (products && products.length >= 1) {
                    $location.path('/pricePlan');
                } else {
                    $location.path('/ordersummary');
                }
                //$location.path('/ordersummary');
            }

            logger.debug("...After call updateSelectedOrderItem");
        };


        

    });
