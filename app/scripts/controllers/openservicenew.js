'use strict';
angular.module('fec3App')
    .controller('openServiceNewCtrl', function($scope, $location, openServiceNewService,$modal) {
        
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

       

       
        openServiceNewService.getPrivilegeSaleType(function(result) {
            $scope.getPrivilegeSaleType = result.data["response-data"]['sale-type'];
        });

        openServiceNewService.getAccountType(function(result) {
            $scope.grade = result.data["response-data"]['company-grade']['grade-id'];
            $scope.companyId = result.data["response-data"]['company-grade']['company-id'];
        });

        var custType ='';
        var company ='RM';
        var serviceType ='RM';
        var roles ='I';
        openServiceNewService.getAccountSubType(custType, company, serviceType, roles, $scope.grade ,function(result) {
            $scope.dataSubType = result.data["response-data"];
        });

        var propoType ='NEW';
        var mobileServicetype ='';
        var partnerCode ='';
        var privilege =false;
        var proposition ='';
        openServiceNewService.getPromotion(company, custType, propoType, mobileServicetype, partnerCode, privilege, proposition, function(result) {
            $scope.dataPromotion = result.data["response-data"];
        });

        openServiceNewService.getNasProposition(company, mobileServicetype, partnerCode, function(result) {
            $scope.dataNasProposition = result.data["response-data"]['nas-subscriber-reserve'];
        });

        $scope.checkSubscriber= function() {
            var project;
            var pairSim;
            if($scope.phonenumber != null && $scope.promotion != null){
                openServiceNewService.validatesubscriber($scope.phonenumber,company, project, pairSim, proposition, function(result) {
                
                if(result.data.status == 'SUCCESSFUL'){
                    var lastPhonenumber = $scope.phonenumber.length-1;
                   
                        /*$scope.detailPhonenumber.push([{
                            phonenumber: $scope.phonenumber,
                            simcard: "",
                            priceplan: "",
                            search: "",
                        }]);*/
                   
                   // console.log($scope.detailPhonenumber);
                }   
            });
            }
        }
        $scope.detailPhonenumber = [];
        $scope.addGroup = function() {
            $scope.detailPhonenumber.push([{
                phonenumber: "",
                simcard: "",
                priceplan: "",
                search: "",
            }]);
        }

        $scope.removeGroup = function(numIndex) {
            $scope.detailPhonenumber.splice(numIndex, 1);
        }

        $scope.gotoNext = function() {
            $location.path('/ordersummary');
        }

        $scope.showModal = function() {
        $modal.dialogmodal('priceplan.html', 'Price Plan');
    }


    });
