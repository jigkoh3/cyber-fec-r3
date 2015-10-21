'use strict';
angular.module('fec3App')
    .controller('listpaymentCtrl', function($scope) {
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

         $scope.ordersummary = [{
         	imageno: "icon_no",
            promotion: "1.3000036063 iPhone 6 Plus,16GB,Gold",
            price: "29,450.00",
          }, {
          	imageno: "icon_no",
            promotion: "2.3000036063 SIM CARD",
            price: "69.00",
          }, {
          	imageno: "icon_no",
            promotion: "3.SVRMVO39 ค่าบริการล่วงหน้า",
            price: "5,320.00",
        }, {
        	imageno: "icon_no",
            promotion: "4.อื่่นๆ (E88 - iPhone6_Maracon)",
            price: "-5,000.00",
        },{
        	imageno: "icon_no",
            promotion: "5.อื่นๆ (C01 - Free RMV SIM SOOk Campaign for Shop)",
            price: "29,450.00", 
         }];
         });