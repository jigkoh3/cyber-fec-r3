angular.module('fec3App')

.controller('ordersummaryModalCtrl', function($scope, $loading, $localstorage, $routeParams, $linq, productService, $message) {

	$scope.totalCalculate_modal = function() {
        $scope.total_modal = 0;
        for (var i = 0; i < $scope.order_insert.length; i++) {
            $scope.total_modal = $scope.total_modal + parseInt($scope.order_insert[i]['TOTAL']);
        }
    }

    $scope.cleartext = function() {
        $scope.promotionSearch = null;
        if ($scope.promotionType == null) {
            document.getElementById('textcode').disabled = true;
        } else {
            document.getElementById('textcode').disabled = false;
        }
        document.getElementById("textcode").focus();
    }

    //$scope.cleartext();
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