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


        // $scope.promotionType = function() {
        //     var promoType = item.type;
        //     switch {
        //         case 1:
        //             promoType = "Monday";
        //             break;
        //         case 2:
        //             promoType = "Tuesday";
        //             break;
        //         case 3:
        //             promoType = "Wednesday";
        //             break;
        //         case 4:
        //             promoType = "Thursday";
        //             break;
        //         case 5:
        //             promoType = "Friday";
        //             break;
        //     }
        // };
        //console.log($scope.datatype);

        // $scope.promotionType = function() {

        //  var promoType = $scope.data;
        // console.log(promoType);
        //  console.log($scope.data[i].type);

        //  }

        // $scope.promotionType();

    });
