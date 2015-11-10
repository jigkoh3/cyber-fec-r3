angular.module('fec3App')

.controller('ordersummaryCtrl', function($scope, $loading, $localstorage, $routeParams, $linq, productService, $message) {

    $scope.id = $routeParams.id;
    $scope.name = $routeParams.name;
    $scope.dataType = 'D';

    var customerInfo = $localstorage.getObject("customerProfile");
    $scope.order_product_item_list = customerInfo.orderObj.order_product_item_list;

    
    $scope.order_add = [];
    $scope.removeRow = function(GROUP_ID) {
        var count = 0;
        //var indexlist = [];	
        var indexlist = -1;
        var oldgroup;
        var listArr = $scope.order_product_item_list;
        for (var i = 0; i < listArr.length; i++) {
            if (listArr[i].GROUP_ID === GROUP_ID) {
                $scope.order_product_item_list.splice(i, 1);
                i--;
                indexlist = i;
                count = count + 1;
                //console.log($scope.order_product_item_list);
                $scope.totalCalculate();
            }
        }
        customerInfo.orderObj.order_product_item_list = $scope.order_product_item_list;
        $localstorage.setObject("customerProfile", customerInfo);
        //$localstorage.logObject("customerProfile");
    }

    $scope.totalCalculate = function() {
        $scope.total = 0;
        for (var i = 0; i < $scope.order_product_item_list.length; i++) {
            $scope.total = $scope.total + parseInt($scope.order_product_item_list[i]['TOTAL']);
        }
    }

    $scope.totalCalculate();

    
    $scope.totalCalculate_modal = function() {
        $scope.total_modal = 0;
        for (var i = 0; i < $scope.order_insert.length; i++) {
            $scope.total_modal = $scope.total_modal + parseInt($scope.order_insert[i]['TOTAL']);
        }
    }


    $scope.deleted = function(Group_id, num_index) {
        var showName;
        var msg;
        var countItem;
        var listArr = $scope.order_product_item_list;
                if (listArr[num_index].CAMPAIGN_PROMO_ITEM_QTY > 1) {
                    console.log(listArr[num_index]);
                    showName = listArr[num_index].CAMPAIGN_NAME;
                    countItem = listArr[num_index].CAMPAIGN_PROMO_ITEM_QTY;
                    msg = 'TH: The item that you want to delete is ' + showName + ' (' + countItem + ' item)  selling type. \
							Please confirm if you want to delete all set.<br/>\
							 EN: รายการที่ท่านต้องการลบเป็นการขายแบบ ' + showName + ' (' + countItem + ' รายการ) กรุณายืนยันการลบทั้งกลุ่ม';
                } else {
                    showName = listArr[num_index].PRODUCT_NAME;
                    msg = 'EN: Please confirm to delete this item ' + showName + '.<br/>TH: ท่านต้องการลบ ' + showName + ' หรือไม่';
                }
        

        $message.confirm(msg, function(result) {
            if (result.status) {
                $scope.removeRow(Group_id);
            }
        });
    };

    $scope.cleartext = function() {
        $scope.promotionSearch = null;
        if ($scope.promotionType == null) {
            document.getElementById('textcode').disabled = true;
        } else {
            document.getElementById('textcode').disabled = false;
        }
        document.getElementById("textcode").focus();
    }

    $scope.cleartext();
    $scope.order_insert = [];
    $scope.searchlist = function(event) {

        if ($scope.promotionSearch != null && $scope.promotionType != null) {
            productService.getDiscountAndBooking($scope.promotionType, $scope.promotionSearch, function(result) {
                $scope.order_insert.push(result.data["response-data"]);
                $scope.totalCalculate_modal();
                $scope.promotionSearch = null;
            });
        }
    }

    $scope.addToListCard = function() {
        var discountList;
        for (var i = 0; i < $scope.order_insert.length; i++) {
            discountList = $scope.order_insert[i]
            if (discountList.DISCOUNT_4_PROD_ITEM < 0) {
                $scope.order_product_item_list.push(discountList);
            } else {
                $scope.order_product_item_list.splice(discountList.DISCOUNT_4_PROD_ITEM, 0, discountList);
            }
            $scope.btnDisabled = true;
        }
        $scope.promotionSearch = null;
        $scope.order_insert = [];
        $scope.totalCalculate_modal();
        $scope.totalCalculate();
    }


});