'use strict';

/**
 * @ngdoc function
 * @name fec3App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the fec3App
 */
angular.module('fec3App')
    .controller('choosecampaignCtrl', function($scope, $modal, $log) {
        //var customerProfile = $localstorage.getObject("customerProfile");
        var logger = $log.getInstance('choosecampaignCtrl');
        var order_product_item_list = [];
        var d = new Date();
        var TrxID = d.getTime() + '';
        $scope.proItem = {
            "pieceGold0": null
        };
        $scope.data = $modal.campaignList();
        $scope.txtChanged = function(item) {
            // var arr = $scope.data;
            // for (var i = 0; i < arr.length; i++) {
            //     $scope.proItem['' + arr.products[i].code] = 0;
            // }
            var prod = item;
            var order = {};
            var prodOrderQty = $scope.proItem[prod.code];
            var totalAmt = prod.price * prodOrderQty;
            logger.debug("...Product[" + prod.code + "] Qty=" + prodOrderQty);
            logger.debug("...Product[" + prod.code + "] totalAmt=" + totalAmt);

            order.PRODUCT_TYPE = prod.type;
            order.PRODUCT_CODE = prod.code;
            order.PRODUCT_NAME = prod.name;
            order.PRICE = prod.price;
            order.QTY = prodOrderQty;
            order.TOTAL = totalAmt;
            order.IS_CAMPAIGN_PROMO_ITEM = 'Y';
            order.IS_PRODUCT_REQUESTFORM = 'N';
            order.APPLECARE_CODE = null;
            order.GROUP_ID = prod.code + TrxID;

            // if (!customerProfile.orderObj) {
            //     customerProfile.orderObj = {};
            // }
            // if (!customerProfile.orderObj.order_product_item_list) {
            //     customerProfile.orderObj.order_product_item_list = [];
            // }
            order_product_item_list.push(order);

            $modal.campaignSelected(order_product_item_list);
        };


    });