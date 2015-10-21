'use strict';
angular.module('fec3App')
    .controller('priceplanexistingCtrl', function($scope) {

    $scope.pricePlans = [{
            pricePlan: "BBSMEP26:Biz_BB BIS 699 3WEG Unlimited",
            rc: "499",
            promotion: "AGE1800000001"
        }, {
            pricePlan: "BUFFTP60:iSmartBuffet399dis100 OnNet24hr net2GB WiFiUNLTD",
            rc: "299",
            promotion: ""
        }, {
            pricePlan: "NPSMAP05:3G iSmart 999, VoiceAllNet600m, Net4GB,WiFiUNLTD",
            rc: "999",
            promotion: ""
        }, {
            pricePlan: "NPSMAP05:4G iSmart 999, VoiceAllNet300m, Net3GB,WiFiUNLTD",
            rc: "699",
            promotion: ""
        }, {
            pricePlan: "NPSMAP05:4G iSmart 699, VoiceAllNet450m, Net5GB,WiFiUNLTD",
            rc: "899",
            promotion: ""
        }];
      

  
    
    });
