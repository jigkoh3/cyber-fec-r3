'use strict';

/**
 * @ngdoc function
 * @name fec3App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the fec3App
 */
angular.module('fec3App')
    .controller('choosecampaignCtrl', function($scope, $modal, $log, $routeParams) {
        //var customerProfile = $localstorage.getObject("customerProfile");
        var logger = $log.getInstance('choosecampaignCtrl');
        var order_product_item_list = [];
        var d = new Date();
        var TrxID = d.getTime() + '';
        var _productCode = $routeParams.productCode;
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
        $scope.txtChanged = function(item, gitem) {
            console.log(item, gitem);
            console.log($scope.proItem[item.code]);
            var arr = gitem.products;
            var sumMax = 0;
            for (var i = 0; i < arr.length; i++) {
                console.log($scope.proItem[arr[i].code]);
                if ($scope.proItem[arr[i].code]) {
                    sumMax = sumMax + $scope.proItem[arr[i].code];
                    console.log(sumMax);
                    if (sumMax > gitem.maxGet) {

                        $scope.proItem[arr[i].code] = null;
                    }
                }
            }

            if ($scope.proItem[item.code] > gitem.maxGet) {
                $scope.proItem[item.code] = null;
            }

            var arr = gitem.products;

            // for (var i = 0; i < arr.length; i++) {
            //     //$scope.proItem['' + arr[i].code] = null;
            //     var sum_i = 0;
            //         if ('' + arr[i].code != gitem) {
            //             $scope.proItem['' + arr[i].code] = null;
            //         }
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
            order.GROUP_ID = _productCode + TrxID;

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
