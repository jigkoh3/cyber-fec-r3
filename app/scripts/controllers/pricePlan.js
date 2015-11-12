'use strict';
angular.module('fec3App')
    .controller('pricePlanCtrl', function($scope, $location, pricePlanService) {
        
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

        $scope.detailPhonenumber = [{
            phonenumber: "",
            simcard: "",
            priceplan: "",
            search: "",
        }];


        pricePlanService.getPrivilegeSaleType(function(result) {
            $scope.getPrivilegeSaleType = result.data["response-data"]['sale-type'];
        });

        pricePlanService.getAccountType(function(result) {
            $scope.grade = result.data["response-data"]['company-grade']['grade-id'];
            $scope.companyId = result.data["response-data"]['company-grade']['company-id'];
        });

        var custType ='';
        var company ='RM';
        var serviceType ='RM';
        var roles ='I';
        pricePlanService.getAccountSubType(custType, company, serviceType, roles, $scope.grade ,function(result) {
            $scope.dataSubType = result.data["response-data"];
        });
 

         $scope.getPromotion = [{
                    "status" : "SUCCESSFUL",
                    "trx-id" : "0439PKB10EDP",
                    "process-instance" : "tpx61.true.th (instance: sale)",
                    "response-data" : [ {
                    "name" : "P00000000000211",
                    "description" : "SIM Koo Kan",
                    "soc" : null,
                    "rc" : 0.0,
                    "service-level" : null,
                    "proposition-code" : "0019087"
                  }, {
                    "name" : "RMV000000000001",
                    "description" : "New Sim Only",
                    "soc" : null,
                    "rc" : 0.0,
                    "service-level" : null,
                    "proposition-code" : "0019123"
                  } ]

        }];

        $scope.dataPromotion = $scope.getPromotion[0]['response-data'];


        $scope.getNasProposition = [{
                            "status": "SUCCESSFUL",
                            "display-messages": [],
                            "trx-id": "461HQMYTGV3HF",
                            "process-instance": "psaapdv1 (instance: SFF_node1)",
                            "response-data": {
                              "nas-subscriber-reserve" : [ {
                                "subscriber" : "0890000001",
                                "proposition-code" : "0019123"
                              }, {
                                "subscriber" : "0890000002",
                                "proposition-code" : "0019124"
                              } ]
                            }

        }];

        $scope.dataNasProposition = $scope.getNasProposition[0]['response-data']['nas-subscriber-reserve'];
        
        



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


    });
