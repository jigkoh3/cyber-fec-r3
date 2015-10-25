'use strict';

/**
 * @ngdoc function
 * @name fec3App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the fec3App
 */
angular.module('fec3App')
    .controller('MainCtrl', function($scope, $location, $localstorage, $loading, $message, $linq, productService) {
        $loading.show();
        productService.getCategories(function(result) {
            //console.log(result.data);
            $loading.hide();
            if (result.status) {
                var master = $localstorage.getObject("master");
                //console.log(master);
                var products = {
                    "response-data": {
                        "products": [{
                            "code": "iPhone6",
                            "name": "iPhone6",
                            "desc": "iPhone6",
                            "type": "string",
                            "price": 1.5,
                            "qty": 8,
                            "productInfo": {
                                "capacity": "16 M",
                                "color": "Gold"
                            }
                        }, {
                            "code": "iPhone6",
                            "name": "iPhone6",
                            "desc": "iPhone6",
                            "type": "string",
                            "price": 1.5,
                            "qty": 7,
                            "productInfo": {
                                "capacity": "16 M",
                                "color": "Gold"
                            }
                        }, {
                            "code": "iPhone6",
                            "name": "iPhone6",
                            "desc": "iPhone6",
                            "type": "string",
                            "price": 1.5,
                            "qty": 5,
                            "productInfo": {
                                "capacity": "16 M",
                                "color": "Silver"
                            }
                        }]
                    }
                }
                var queryResult = $linq.Enumerable().From(products["response-data"].products)
                    .GroupBy("$.name", null,
                        function(key, g) {
                            var result = {
                                name: key,
                                colors: g.GroupBy("$.productInfo.color",null,
                                function(color,c){
                                    var cr = {
                                        name:color
                                    }
                                    return cr;
                                }).ToArray()
                            }
                            return result;
                        }).ToArray();

                console.log("queryResult : ", queryResult);

            } else {
                $message.alert(result.data["display-messages"][0]);
                //console.log(result.data);
            }


        });
        // $scope.disasbledInput = true;
        // $scope.openSSO = function() {
        //     //var new_window = window.open('', "MsgWindow", "width=320, height=240");
        //     //new_window.onbeforeunload = function () {
        //     //    alert('close');
        //     //}
        //     //var new_window = window.open("", "MsgWindow", "width=800, height=600");
        //     //new_window.onbeforeunload = function () { alert('close'); }



        //     var openDialog = function(uri, name, options, closeCallback) {
        //         var win = window.open(uri, name, options);

        //         var interval = window.setInterval(function() {

        //             try {
        //                 if (win == null || win.closed) {
        //                     window.clearInterval(interval);
        //                     closeCallback(win);
        //                 }

        //             } catch (e) {}
        //         }, 1000);
        //         return win;
        //     };

        //     //var url = getSecondAuthenURL()+"SecondAuthen.jsp?App=WEBUI&TrxID=" + $scope.TrxID + "&Retry=yes&Goto=";
        //     var url = "https://xxo-uat.true.th:11443/SSORESTFul/SecondAuthen.jsp?App=WEBUI&TrxID=" + $scope.TrxID + "&Retry=yes&Goto=";



        //     openDialog(url, "MsgWindow", "width=800, height=600", function(w) {
        //         //alert('debug : close and call(second_authen?trx_id=' + $scope.TrxID + '&app_id=WEBUI)');
        //         $('#inputCardNo').removeAttr('readonly');

        //     });

        // };

    });