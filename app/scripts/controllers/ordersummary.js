'use strict';

/**
 * @ngdoc function
 * @name fec3App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the fec3App
 */
angular.module('fec3App')
    .controller('ordersummaryCtrl', function($scope, $loading, $localstorage,  $routeParams, $linq, orderSummary, $message) {
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
		
		 $scope.id = $routeParams.id;
        $scope.name = $routeParams.name;
		 orderSummary.getDiscount($scope.name,function(result) {
            
            if(result.status){
                //console.log(result.data);
               $scope.order_add = result.data;
            }else{
                $message.alert(result.data["display-message"]);
            }
        });
		 
		$scope.order_product_item_list = [{
         	"ORDER_ID": "1",
			"SEQUENCE": 1,
			"CAMPAIGN": "string",
			"CAMPAIGN_NAME": "CAMPAIGN 2",
			"PROMOTION_SET": "string",
			"PROMOTION_TYPE": "string",
			"CAMPAIGN_PROMO_ITEM_QTY": 2,
			"GROUP_ID": "222",
			"PRODUCT_TYPE": "string",
			"PRODUCT_CODE": "string",
			"PRODUCT_NAME": "3000036063 iPhone 6 Plus, 16GB, Gold",
			"PRICEPLAN_CODE": "string",
			"PRICEPLAN_NAME": "string",
			"SERVICE_REGISTER_TYPE": "string",
			"MOBILE_NUMBER": "string",
			"PRICE": 29450.00 ,
			"QTY": 1,
			"TOTAL": 1,
			"DISCOUNT_AMOUNT": 1.5,
			"DEPOSIT_AMOUNT": 1.5,
			"NET_AMOUNT": 1.5,
			"OTHER_PAYMENT_AMOUNT": 1.5
		},{
			"ORDER_ID": "2",
			"SEQUENCE": 2,
			"CAMPAIGN": "string",
			"CAMPAIGN_NAME": "CAMPAIGN 1",
			"PROMOTION_SET": "string",
			"PROMOTION_TYPE": "string",
			"CAMPAIGN_PROMO_ITEM_QTY": 2,
			"GROUP_ID": "111",
			"PRODUCT_TYPE": "string",
			"PRODUCT_CODE": "string",
			"PRODUCT_NAME": "3000014920 Sim Card",
			"PRICEPLAN_CODE": "string",
			"PRICEPLAN_NAME": "string",
			"SERVICE_REGISTER_TYPE": "string",
			"MOBILE_NUMBER": "string",
			"PRICE": 69.00,
			"QTY": 1,
			"TOTAL": 1,
			"DISCOUNT_AMOUNT": 1.5,
			"DEPOSIT_AMOUNT": 1.5,
			"NET_AMOUNT": 1.5,
			"OTHER_PAYMENT_AMOUNT": 1.5
		},{
			"ORDER_ID": "3",
			"SEQUENCE": 3,
			"CAMPAIGN": "string",
			"CAMPAIGN_NAME": "CAMPAIGN 3",
			"PROMOTION_SET": "string",
			"PROMOTION_TYPE": "string",
			"CAMPAIGN_PROMO_ITEM_QTY": 1,
			"GROUP_ID": "333",
			"PRODUCT_TYPE": "string",
			"PRODUCT_CODE": "string",
			"PRODUCT_NAME": "3000014333 test",
			"PRICEPLAN_CODE": "string",
			"PRICEPLAN_NAME": "string",
			"SERVICE_REGISTER_TYPE": "string",
			"MOBILE_NUMBER": "string",
			"PRICE": 169.00,
			"QTY": 1,
			"TOTAL": 1,
			"DISCOUNT_AMOUNT": 1.5,
			"DEPOSIT_AMOUNT": 1.5,
			"NET_AMOUNT": 1.5,
			"OTHER_PAYMENT_AMOUNT": 1.5
		},{
			"ORDER_ID": "4",
			"SEQUENCE": 4,
			"CAMPAIGN": "string",
			"CAMPAIGN_NAME": "CAMPAIGN 1",
			"PROMOTION_SET": "string",
			"PROMOTION_TYPE": "string",
			"CAMPAIGN_PROMO_ITEM_QTY": 2,
			"GROUP_ID": "111",
			"PRODUCT_TYPE": "string",
			"PRODUCT_CODE": "string",
			"PRODUCT_NAME": "2200005555 test2",
			"PRICEPLAN_CODE": "string",
			"PRICEPLAN_NAME": "string",
			"SERVICE_REGISTER_TYPE": "string",
			"MOBILE_NUMBER": "string",
			"PRICE": 569.00,
			"QTY": 1,
			"TOTAL": 1,
			"DISCOUNT_AMOUNT": 1.5,
			"DEPOSIT_AMOUNT": 1.5,
			"NET_AMOUNT": 1.5,
			"OTHER_PAYMENT_AMOUNT": 1.5
		},{
			"ORDER_ID": "5",
			"SEQUENCE": 5,
			"CAMPAIGN": "string",
			"CAMPAIGN_NAME": "CAMPAIGN 2",
			"PROMOTION_SET": "string",
			"PROMOTION_TYPE": "string",
			"CAMPAIGN_PROMO_ITEM_QTY": 2,
			"GROUP_ID": "222",
			"PRODUCT_TYPE": "string",
			"PRODUCT_CODE": "string",
			"PRODUCT_NAME": "3344556677 test3",
			"PRICEPLAN_CODE": "string",
			"PRICEPLAN_NAME": "string",
			"SERVICE_REGISTER_TYPE": "string",
			"MOBILE_NUMBER": "string",
			"PRICE": -5000.00,
			"QTY": 1,
			"TOTAL": 1,
			"DISCOUNT_AMOUNT": 1.5,
			"DEPOSIT_AMOUNT": 1.5,
			"NET_AMOUNT": 1.5,
			"OTHER_PAYMENT_AMOUNT": 1.5
		}];

		$scope.order_list= [{
         	"ORDER_ID": "1",
			"SEQUENCE": 1,
			"CAMPAIGN": "string",
			"CAMPAIGN_NAME": "CAMPAIGN 1",
			"PROMOTION_SET": "string",
			"PROMOTION_TYPE": "v",
			"CAMPAIGN_PROMO_ITEM_QTY": 2,
			"GROUP_ID": "222",
			"PRODUCT_TYPE": "string",
			"PRODUCT_CODE": "aaa",
			"PRODUCT_NAME": "3000036063 iPhone 6 Plus, 16GB, Gold",
			"PRICEPLAN_CODE": "string",
			"PRICEPLAN_NAME": "string",
			"SERVICE_REGISTER_TYPE": "string",
			"MOBILE_NUMBER": "string",
			"PRICE": 500.00 ,
			"QTY": 1,
			"TOTAL": 1,
			"DISCOUNT_AMOUNT": 1.5,
			"DEPOSIT_AMOUNT": 1.5,
			"NET_AMOUNT": 1.5,
			"OTHER_PAYMENT_AMOUNT": 1.5
		},{
         	"ORDER_ID": "2",
			"SEQUENCE": 2,
			"CAMPAIGN": "string",
			"CAMPAIGN_NAME": "CAMPAIGN 2",
			"PROMOTION_SET": "string",
			"PROMOTION_TYPE": "b",
			"CAMPAIGN_PROMO_ITEM_QTY": 2,
			"GROUP_ID": "111",
			"PRODUCT_TYPE": "string",
			"PRODUCT_CODE": "bbb",
			"PRODUCT_NAME": "3000036063 iPhone 5",
			"PRICEPLAN_CODE": "string",
			"PRICEPLAN_NAME": "string",
			"SERVICE_REGISTER_TYPE": "string",
			"MOBILE_NUMBER": "string",
			"PRICE": 1000.00 ,
			"QTY": 1,
			"TOTAL": 1,
			"DISCOUNT_AMOUNT": 1.5,
			"DEPOSIT_AMOUNT": 1.5,
			"NET_AMOUNT": 1.5,
			"OTHER_PAYMENT_AMOUNT": 1.5
		},{
         	"ORDER_ID": "3",
			"SEQUENCE": 3,
			"CAMPAIGN": "string",
			"CAMPAIGN_NAME": "CAMPAIGN 3",
			"PROMOTION_SET": "string",
			"PROMOTION_TYPE": "d",
			"CAMPAIGN_PROMO_ITEM_QTY": 2,
			"GROUP_ID": "333",
			"PRODUCT_TYPE": "string",
			"PRODUCT_CODE": "ccc",
			"PRODUCT_NAME": "3000036063 iPhone 4",
			"PRICEPLAN_CODE": "string",
			"PRICEPLAN_NAME": "string",
			"SERVICE_REGISTER_TYPE": "string",
			"MOBILE_NUMBER": "string",
			"PRICE": 2000.00 ,
			"QTY": 1,
			"TOTAL": 1,
			"DISCOUNT_AMOUNT": 1.5,
			"DEPOSIT_AMOUNT": 1.5,
			"NET_AMOUNT": 1.5,
			"OTHER_PAYMENT_AMOUNT": 1.5
		}];
		
		$scope.order_add = [];
		$scope.removeRow = function(GROUP_ID){	
			var count = 0;			
			//var indexlist = [];	
			var indexlist = -1;	
			var oldgroup;
			var listArr = eval( $scope.order_product_item_list );
			for(var i = 0; i < listArr.length; i++ ) {
				if( listArr[i].GROUP_ID === GROUP_ID ) {
					$scope.order_product_item_list.splice( i, 1 );	
					i--;
					indexlist = i;
					count = count+1;
					//console.log($scope.order_product_item_list);
					$scope.totalCalculate();
				}
			}
		};
		
		$scope.totalCalculate = function(){	
					$scope.total =0;
				for(var i = 0 ; i< $scope.order_product_item_list.length; i++){
					$scope.total =$scope.total+parseInt($scope.order_product_item_list[i]['PRICE']);	
				}		
		};
		
		$scope.totalCalculate();
		
		$scope.removeRow_modal = function(PRODUCT_NAME){	
			var count = 0;			
			//var indexlist = [];	
			var indexlist = -1;	
			var oldgroup;
			var listArr = eval( $scope.order_list );
			
			for(var i = 0; i < listArr.length; i++ ) {
				if( listArr[i].PRODUCT_NAME === PRODUCT_NAME ) {
					$scope.order_list.splice( i, 1 );	
					i--;
					indexlist = i;
					count = count+1;
					$scope.totalCalculate_modal();
				}
			}
		};
		
		$scope.totalCalculate_modal = function(){	
					$scope.total_modal =0;
					
				for(var i = 0 ; i< $scope.order_insert.length; i++){
					//console.log($scope.order_add[i]['response-data']['coupon']['amount']);
					$scope.total_modal =$scope.total_modal+parseInt($scope.order_insert[i]['PRICE']);	
				}
				
		};
		
		
		$scope.delete = function(Group_id , ORDER_ID) {
			var showName;
			var msg;
			var listArr = eval( $scope.order_product_item_list );
				for(var i = 0; i < listArr.length; i++ ) {
					if( listArr[i].ORDER_ID === ORDER_ID ) {
						if(listArr[i].CAMPAIGN_PROMO_ITEM_QTY > 1){
							showName = listArr[i].CAMPAIGN_NAME;
							msg = 'TH: The item that you want to delete is '+showName+' selling type. Please confirm if you want to delete all set.<br/> EN: รายการที่ท่านต้องการลบเป็นการขายแบบ '+showName+' กรุณายืนยันการลบทั้งกลุ่ม';
						}else{
							showName = listArr[i].PRODUCT_NAME;
							msg = 'EN: Please confirm to delete this item ('+showName+').<br/>TH: ท่านต้องการลบ '+showName+' หรือไม่';
						}
					}
				}		

			$message.confirm(msg,function(result){
				if(result.status){
					$scope.removeRow(Group_id);
				}
			});
		};

		$scope.cleartext = function(){
				$scope.promotionSearch = null;
		}


		$scope.order_insert=[];
		$scope.searchlist = function(event){
			if($scope.promotionSearch != null && $scope.promotionType != null){
				var listArr = eval( $scope.order_list );
				for(var i = 0; i < listArr.length; i++ ) {
					if(listArr[i].PROMOTION_TYPE == $scope.promotionType && listArr[i].PRODUCT_CODE ==  $scope.promotionSearch){

						//$scope.order_insert.push({ 'PRODUCT_NAME':listArr[i].PRODUCT_NAME, 'PRICE': listArr[i].PRICE, 'ORDER_ID': listArr[i].ORDER_ID });
						$scope.order_insert.push({
							"ORDER_ID": listArr[i].ORDER_ID,
							"SEQUENCE": listArr[i].SEQUENCE,
							"CAMPAIGN": listArr[i].CAMPAIGN,
							"CAMPAIGN_NAME": listArr[i].CAMPAIGN_NAME,
							"PROMOTION_SET": listArr[i].PROMOTION_SET,
							"PROMOTION_TYPE": listArr[i].PROMOTION_TYPE,
							"CAMPAIGN_PROMO_ITEM_QTY": listArr[i].CAMPAIGN_PROMO_ITEM_QTY,
							"GROUP_ID": listArr[i].GROUP_ID,
							"PRODUCT_TYPE": listArr[i].PRODUCT_TYPE,
							"PRODUCT_CODE": listArr[i].PRODUCT_CODE,
							"PRODUCT_NAME": listArr[i].PRODUCT_NAME,
							"PRICEPLAN_CODE": listArr[i].PRICEPLAN_CODE,
							"PRICEPLAN_NAME": listArr[i].PRICEPLAN_NAME,
							"SERVICE_REGISTER_TYPE": listArr[i].SERVICE_REGISTER_TYPE,
							"MOBILE_NUMBER": listArr[i].MOBILE_NUMBER,
							"PRICE": listArr[i].PRICE ,
							"QTY": listArr[i].QTY,
							"TOTAL": listArr[i].TOTAL,
							"DISCOUNT_AMOUNT":listArr[i].DISCOUNT_AMOUNT,
							"DEPOSIT_AMOUNT": listArr[i].DEPOSIT_AMOUNT,
							"NET_AMOUNT": listArr[i].NET_AMOUNT,
							"OTHER_PAYMENT_AMOUNT": listArr[i].OTHER_PAYMENT_AMOUNT
						});
						
						$scope.totalCalculate_modal();
						$scope.promotionSearch = null;

					}
				}
			}
			
		}

		$scope.addToListCard = function(){
			for(var i = 0 ; i< $scope.order_insert.length; i++){
				$scope.order_product_item_list.push($scope.order_insert[i]);
				$scope.btnDisabled = true;
			}
			$scope.promotionSearch = null;
			$scope.order_insert = [];
			$scope.totalCalculate_modal();
			$scope.totalCalculate();
		}
		

    });

