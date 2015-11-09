angular.module('fec3App')

.controller('ordersummaryCtrl', function($scope, $loading, $localstorage, $routeParams, $linq, productService, $message) {

    $scope.id = $routeParams.id;
    $scope.name = $routeParams.name;
    $scope.dataType = 'D';

    var customerInfo = $localstorage.getObject("customerProfile");
    $scope.order_product_item_list = customerInfo.orderObj.order_product_item_list;

    // $scope.order_product_item_list = [{
    //        	"ORDER_ID": "1",
    // 	"SEQUENCE": 1,
    // 	"CAMPAIGN": "string",
    // 	"CAMPAIGN_NAME": "CAMPAIGN 2",
    // 	"PROMOTION_SET": "string",
    // 	"PROMOTION_TYPE": "string",
    // 	"CAMPAIGN_PROMO_ITEM_QTY": 2,
    // 	"GROUP_ID": "222",
    // 	"PRODUCT_TYPE": "string",
    // 	"PRODUCT_CODE": "string",
    // 	"PRODUCT_NAME": "3000036063 iPhone 6 Plus, 16GB, Gold",
    // 	"PRICEPLAN_CODE": "string",
    // 	"PRICEPLAN_NAME": "string",
    // 	"SERVICE_REGISTER_TYPE": "string",
    // 	"MOBILE_NUMBER": "string",
    // 	"PRICE": 29450.00 ,
    // 	"QTY": 1,
    // 	"TOTAL": 1,
    // 	"DISCOUNT_AMOUNT": 1.5,
    // 	"DEPOSIT_AMOUNT": 1.5,
    // 	"NET_AMOUNT": 29450,
    // 	"OTHER_PAYMENT_AMOUNT": 1.5
    // },{
    // 	"ORDER_ID": "2",
    // 	"SEQUENCE": 2,
    // 	"CAMPAIGN": "string",
    // 	"CAMPAIGN_NAME": "CAMPAIGN 1",
    // 	"PROMOTION_SET": "string",
    // 	"PROMOTION_TYPE": "string",
    // 	"CAMPAIGN_PROMO_ITEM_QTY": 2,
    // 	"GROUP_ID": "111",
    // 	"PRODUCT_TYPE": "string",
    // 	"PRODUCT_CODE": "string",
    // 	"PRODUCT_NAME": "3000014920 Sim Card",
    // 	"PRICEPLAN_CODE": "string",
    // 	"PRICEPLAN_NAME": "string",
    // 	"SERVICE_REGISTER_TYPE": "string",
    // 	"MOBILE_NUMBER": "string",
    // 	"PRICE": 69.00,
    // 	"QTY": 1,
    // 	"TOTAL": 1,
    // 	"DISCOUNT_AMOUNT": 1.5,
    // 	"DEPOSIT_AMOUNT": 1.5,
    // 	"NET_AMOUNT": 69,
    // 	"OTHER_PAYMENT_AMOUNT": 1.5
    // },{
    // 	"ORDER_ID": "3",
    // 	"SEQUENCE": 3,
    // 	"CAMPAIGN": "string",
    // 	"CAMPAIGN_NAME": "CAMPAIGN 3",
    // 	"PROMOTION_SET": "string",
    // 	"PROMOTION_TYPE": "string",
    // 	"CAMPAIGN_PROMO_ITEM_QTY": 1,
    // 	"GROUP_ID": "333",
    // 	"PRODUCT_TYPE": "string",
    // 	"PRODUCT_CODE": "string",
    // 	"PRODUCT_NAME": "3000014333 test",
    // 	"PRICEPLAN_CODE": "string",
    // 	"PRICEPLAN_NAME": "string",
    // 	"SERVICE_REGISTER_TYPE": "string",
    // 	"MOBILE_NUMBER": "string",
    // 	"PRICE": 169.00,
    // 	"QTY": 1,
    // 	"TOTAL": 1,
    // 	"DISCOUNT_AMOUNT": 1.5,
    // 	"DEPOSIT_AMOUNT": 1.5,
    // 	"NET_AMOUNT": 169,
    // 	"OTHER_PAYMENT_AMOUNT": 1.5
    // },{
    // 	"ORDER_ID": "4",
    // 	"SEQUENCE": 4,
    // 	"CAMPAIGN": "string",
    // 	"CAMPAIGN_NAME": "CAMPAIGN 1",
    // 	"PROMOTION_SET": "string",
    // 	"PROMOTION_TYPE": "string",
    // 	"CAMPAIGN_PROMO_ITEM_QTY": 2,
    // 	"GROUP_ID": "111",
    // 	"PRODUCT_TYPE": "string",
    // 	"PRODUCT_CODE": "string",
    // 	"PRODUCT_NAME": "2200005555 test2",
    // 	"PRICEPLAN_CODE": "string",
    // 	"PRICEPLAN_NAME": "string",
    // 	"SERVICE_REGISTER_TYPE": "string",
    // 	"MOBILE_NUMBER": "string",
    // 	"PRICE": 569.00,
    // 	"QTY": 1,
    // 	"TOTAL": 1,
    // 	"DISCOUNT_AMOUNT": 1.5,
    // 	"DEPOSIT_AMOUNT": 1.5,
    // 	"NET_AMOUNT": 569,
    // 	"OTHER_PAYMENT_AMOUNT": 1.5
    // },{
    // 	"ORDER_ID": "5",
    // 	"SEQUENCE": 5,
    // 	"CAMPAIGN": "string",
    // 	"CAMPAIGN_NAME": "CAMPAIGN 2",
    // 	"PROMOTION_SET": "string",
    // 	"PROMOTION_TYPE": "string",
    // 	"CAMPAIGN_PROMO_ITEM_QTY": 2,
    // 	"GROUP_ID": "222",
    // 	"PRODUCT_TYPE": "string",
    // 	"PRODUCT_CODE": "string",
    // 	"PRODUCT_NAME": "3344556677 test3",
    // 	"PRICEPLAN_CODE": "string",
    // 	"PRICEPLAN_NAME": "string",
    // 	"SERVICE_REGISTER_TYPE": "string",
    // 	"MOBILE_NUMBER": "string",
    // 	"PRICE": -5000.00,
    // 	"QTY": 1,
    // 	"TOTAL": 1,
    // 	"DISCOUNT_AMOUNT": 1.5,
    // 	"DEPOSIT_AMOUNT": 1.5,
    // 	"NET_AMOUNT": -5000,
    // 	"OTHER_PAYMENT_AMOUNT": 1.5
    // }];



    $scope.order_add = [];
    $scope.removeRow = function(GROUP_ID) {
        var count = 0;
        //var indexlist = [];	
        var indexlist = -1;
        var oldgroup;
        var listArr = eval($scope.order_product_item_list);
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
    };

    $scope.totalCalculate = function() {
        $scope.total = 0;
        for (var i = 0; i < $scope.order_product_item_list.length; i++) {
            $scope.total = $scope.total + parseInt($scope.order_product_item_list[i]['TOTAL']);
        }
    };

    $scope.totalCalculate();

    $scope.removeRow_modal = function(PRODUCT_NAME) {
        var count = 0;
        //var indexlist = [];	
        var indexlist = -1;
        var oldgroup;
        var listArr = eval($scope.order_list);

        for (var i = 0; i < listArr.length; i++) {
            if (listArr[i].PRODUCT_NAME === PRODUCT_NAME) {
                $scope.order_list.splice(i, 1);
                i--;
                indexlist = i;
                count = count + 1;
                $scope.totalCalculate_modal();
            }
        }
    };

    $scope.totalCalculate_modal = function() {
        $scope.total_modal = 0;
        for (var i = 0; i < $scope.order_insert.length; i++) {
            $scope.total_modal = $scope.total_modal + parseInt($scope.order_insert[i]['TOTAL']);
        }
    };


    $scope.delete = function(Group_id, ORDER_ID) {
        var showName;
        var msg;
        var countItem;
        var listArr = $scope.order_product_item_list;
        for (var i = 0; i < listArr.length; i++) {
            if (listArr[i].ORDER_ID === ORDER_ID) {
                if (listArr[i].CAMPAIGN_PROMO_ITEM_QTY > 1) {
                    showName = listArr[i].CAMPAIGN_NAME;
                    countItem = listArr[i].CAMPAIGN_PROMO_ITEM_QTY;
                    msg = 'TH: The item that you want to delete is ' + showName + ' (' + countItem + ' item)  selling type. \
							Please confirm if you want to delete all set.<br/>\
							 EN: รายการที่ท่านต้องการลบเป็นการขายแบบ ' + showName + ' (' + countItem + ' รายการ) กรุณายืนยันการลบทั้งกลุ่ม';
                } else {
                    showName = listArr[i].PRODUCT_NAME;
                    msg = 'EN: Please confirm to delete this item ' + showName + '.<br/>TH: ท่านต้องการลบ ' + showName + ' หรือไม่';
                }
            }
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