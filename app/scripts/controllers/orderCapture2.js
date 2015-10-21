'use strict';

/**
 * @ngdoc function
 * @name fec3App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the fec3App
 */

angular.module('fec3App')
.controller('orderCapture2Ctrl', function ($scope,  $timeout) {
$scope.customerType = "N";
    $scope.businessType = "O";
    $scope.changeReqType = function (type) {
        $scope.businessType = type;
        //SystemService.genDatePicker();
    };

    $scope.newOwner = {
        sex: "M"
    };
    var runTime = new Date().getTime();
    $scope.template = {

        "landingheader": "app/views/landingPageHeader.html?" + runTime

    }
    $scope.changeType = function (customerType) {
        $scope.customerType = customerType;
        $scope.isVerify = false;
        $scope.promotion = "";

        if (customerType == 'B' || customerType == 'C') {
            $scope.blah = "3";
        }
    };
    $scope.slipType = "H";
    $scope.slipchangeType = function (Type) {
        $scope.slipType = Type;
    };
    $scope.isAuthorize = false;
    $scope.authorize = function () {
        $scope.isAuthorize = true;
    };
});