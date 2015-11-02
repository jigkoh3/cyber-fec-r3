'use strict';

/**
 * @ngdoc function
 * @name fec3App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the fec3App
 */
angular.module('fec3App')
    .controller('existingcustomerCtrl', function($scope, $loading, $filter, $localstorage, anchorSmoothScroll) {

        // $('.ng-menu').click(function() {
        //     $('.ng-menu').removeClass('active');
        //     $(this).addClass('active');
        // });

        $loading.show();
        var customerProfile = $localstorage.getObject("customerProfile");
        var userinfo = $localstorage.getObject("userProfile");
        console.log(userinfo);
        if (customerProfile) {

            $scope.dataPro1 = $filter("filter")(customerProfile.bookings, {
                receiveShop: userinfo.shopSelected
            });
            $scope.trueMoveHProdeucts = customerProfile.TMV;
            $scope.trueVisionProdeucts = customerProfile.TVS;
            $scope.trueOnlineProdeucts = customerProfile.TOL;

            //set default tab
            $scope.selectedTab = $scope.dataPro1 && $scope.dataPro1.length >= 1 ? "booking" : $scope.trueMoveHProdeucts ? "truemove" : $scope.trueVisionProdeucts ? "truevision" : $scope.trueOnlineProdeucts ? "trueonline" : "";
        }
        $loading.hide();

        $scope.bookingsClass = function(expectRecpDate, receiveDate) {
            //console.log("api resp: " + expectRecpDate);
            //console.log("api receive: " + receiveDate);
            var dateData = new Date(expectRecpDate);
            //console.log("chg format:" + dateData);
            var curDate = new Date();
            var bclass = "";
            //&& (receiveDate == null || receiveDate == '' )
            //console.log( dateData + "<" + curDate + " is " + (dateData < curDate));
            if ((dateData > curDate) || (receiveDate == null || receiveDate == '')) {
                // ยังไม่ถึงกำหนดรับสินค้า
                // ยังไม่รับสินค้า
                bclass = "booking-active";

            } else {
                bclass = "booking-inactive";
            }
            return bclass;

        }

        $scope.formatDate = function(strDate) {
            
            Date.fromISO = function(s) {
                    var day, tz,
                        rx = /^(\d{4}\-\d\d\-\d\d([tT ][\d:\.]*)?)([zZ]|([+\-])(\d\d):(\d\d))?$/,
                        p = rx.exec(s) || [];
                    if (p[1]) {
                        day = p[1].split(/\D/);
                        for (var i = 0, L = day.length; i < L; i++) {
                            day[i] = parseInt(day[i], 10) || 0;
                        };
                        day[1] -= 1;
                        day = new Date(Date.UTC.apply(Date, day));
                        if (!day.getDate()) return NaN;
                        if (p[5]) {
                            tz = (parseInt(p[5], 10) * 60);
                            if (p[6]) tz += parseInt(p[6], 10);
                            if (p[4] == '+') tz *= -1;
                            if (tz) day.setUTCMinutes(day.getUTCMinutes() + tz);
                        }
                        return day;
                    }
                    return NaN;
                }
            return Date.fromISO(strDate);
        }

        $scope.gotoElement = function(eID) {
            $scope.selectedTab = eID;
            anchorSmoothScroll.scrollTo(eID);

        };


    });
