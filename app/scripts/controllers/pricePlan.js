'use strict';
angular.module('fec3App')
    .controller('pricePlanCtrl', function($scope, productService) {
        
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
            phonenumber: "0891112222",
            simcard: "1",
            priceplan: "RMABCDO1:Real Move Very Good Price Plan",
            search: "",
        }];

        $scope.openservice_obj = {
            status: 'new_number',
            customer_subtype: [{
                    textname:'RPI: บุคคลธรรมดา',
                    textvalue:'RPI'
                },{
                    textname:'RPO: บริษัท',
                    textvalue:'RPO'
                }],
             
            postPromotion: [{
                    textname:'100932 : New Post Privilge Free HS',
                    textvalue:'promotion_1'
                },{
                    textname:'100933 : New Post Privilge Free HS 2',
                    textvalue:'promotion_2'
                },{
                    textname:'100934 : New Post Privilge Free HS 3',
                    textvalue:'promotion_3'
                }
           ],
            phonenumberReservations: [
                {phone :'0865630240'},
                {phone :'0891112222'},
                {phone :'0863334444'}
            ]

        };

    $scope.getPrivilegeSaleType = [{
        "status": "SUCCESSFUL",
        "display-messages": [],
        "trx-id": "461HQMYTGV3HF",
        "process-instance": "psaapdv1 (instance: SFF_node1)",
        "response-data": {
            "sale-type" : [ 
                "NEW"
            ],
            "is-change-priceplan" : "true"
        }
    }];


//var customersubtype_val = 'RPI';
//$scope.customer_subtype.val() = customersubtype_val;
$scope.customer_subtype = $scope.openservice_obj.customer_subtype[1].textvalue;
$scope.promotion = $scope.openservice_obj.postPromotion[1].textvalue;

    $scope.addGroup = function() {
       $scope.detailPhonenumber.push( [{
            phonenumber: "",
            simcard: "",
            priceplan: "",
            search: "",
        }]);            
    }

    $scope.removeGroup = function(numIndex) {
        $scope.detailPhonenumber.splice(numIndex, 1);
    }

$scope.gotoNext = function(){
    console.log();
}


    });
