'use strict';

/**
 * @ngdoc function
 * @name fec3App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the fec3App
 */
angular.module('fec3App')
    .controller('existingcustomerCtrl', function($scope, $loading, $localstorage, anchorSmoothScroll) {

        // $('.ng-menu').click(function() {
        //     $('.ng-menu').removeClass('active');
        //     $(this).addClass('active');
        // });

        $loading.show();
        var customerProfile = $localstorage.getObject("customerProfile");
        if (customerProfile) {
            $scope.dataPro1 = customerProfile.bookings;
            $scope.trueMoveHProdeucts = customerProfile.TMV;
            $scope.trueVisionProdeucts = customerProfile.TVS;
            $scope.trueOnlineProdeucts = customerProfile.TOL;

            //set default tab
            $scope.selectedTab = $scope.dataPro1 && $scope.dataPro1.length >= 1 ? "booking" 
                            : $scope.trueMoveHProdeucts ? "truemove" 
                            : $scope.trueVisionProdeucts ? "truevision" 
                            : $scope.trueOnlineProdeucts ? "trueonline"
                            : ""
                            ;
        }
        $loading.hide();

        $scope.bookingsClass = function(expectRecpDate,receiveDate) {
            //console.log("api resp: " + expectRecpDate);
            //console.log("api receive: " + receiveDate);

            var dateData = new Date(expectRecpDate.replace('T', ' '));
            //console.log("chg format:" + dateData);
            var curDate = new Date();
            var bclass = "";
            //&& (receiveDate == null || receiveDate == '' )
            //console.log( dateData + "<" + curDate + " is " + (dateData < curDate));
            if ((dateData > curDate) && (receiveDate == null || receiveDate == '' )){ 
                // ยังไม่ถึงกำหนดรับสินค้า
                // ยังไม่รับสินค้า
                
                bclass = "booking-active";

            } else {
                bclass = "booking-inactive";
            }
            return bclass;
        }

        $scope.formatDate = function(strDate){
            var dateData = new Date(strDate.replace('T', ' '));
            return dateData;
        }

        $scope.gotoElement = function(eID) {
            $scope.selectedTab=eID;
            anchorSmoothScroll.scrollTo(eID);
            
        };

        
    });
