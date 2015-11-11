/**
 * HOMER - Responsive Admin Theme
 * Copyright 2015 Webapplayers.com
 *
 */

angular
    .module('fec3App')
    .directive('customerMenu', customerMenu)
    .directive('userMenu', userMenu)
    .directive('customerToggleGet', customerToggleGet)
    .directive('userToggleInfo', userToggleInfo)
    .directive('customerToggleInfo', customerToggleInfo)
    .directive('userBarInfo', userBarInfo)
    .directive('ngHoverDisplay', ngHoverDisplay)
    .directive('landingClick', landingClick)
    .directive('ngMenu', ngMenu)
    .directive('version', version)
    .directive('recommend', recommend)
    .directive('actualSrc', actualSrc)
    



/**
 * minimalizaSidebar - Directive for minimalize sidebar
 */
function customerMenu($rootScope) {
    return {
        restrict: 'EA',
        template: '<a ng-click="toggleOpen()" class="btn btn-menu"><span class="btn-menu-icon"></span><span class="btn-menu-text">menu</span></a>',
        controller: function($scope, $element) {


            $scope.toggleOpen = function() {

                $element.parent().toggleClass('open');
            }
        }
    };
};
/**
 * minimalizaSidebar - Directive for minimalize sidebar
 */
function userMenu($rootScope) {
    return {
        restrict: 'EA',
        template: '<a ng-click="toggleUser()" class="btn btn-login dropdown-toggle"><p class="navbar-text navbar-text-right"><i class="fa fa-user"></i> ID: {{userinfo.saleCode}}</p></a>',
        controller: function($scope, $element, $localstorage) {
            $scope.userinfo = $localstorage.getObject("userProfile");
            $scope.toggleUser = function() {

                $element.parent().toggleClass('open');
            }
        }
    };
};
/**
 * minimalizaSidebar - Directive for minimalize sidebar
 */
function customerToggleGet($rootScope, $route) {
    return {
        restrict: 'EA',
        templateUrl: 'views/templates/customer-toggle-get.html',
        controller: function($scope, $element, $location, $localstorage, $loading, dalService, $message, customerService, dalService) {
            $scope.divID = "customerToggleGet";
            $scope.inputCardNo = "";
            $scope.onReading = false;
            $scope.isReadCardErroe = false;
            $scope.readCardErrorDesc = "";
            $scope.cardTypes = [{
                name: "หมายเลขบัตรประชาชน/พาสพอร์ต",
                value: "01"
            }, {
                name: "เบอร์ True Move H",
                value: "02"
            }, {
                name: "True Online No.",
                value: "03"
            }, {
                name: "True Vision Account",
                value: "04"
            }];
            $scope.cardTypeSelected = "01";
            $scope.onReadcard = function() {
                $loading.show();
                //$scope.onReading = true;
                // setTimeout(function() {
                //     $scope.SetCardValue({
                //         CitizenID: "3180200336928"
                //     });
                // }, 1001);

                // setTimeout(function() {
                //     $scope.readCardError("card reader not found.");
                // }, 1001);

            }
            $scope.SetCardValue = function(result) {
                //$scope.onReading = false;
                //$loading.hide();
                var cardInfo = eval(result);
                //console.log(JSON.stringify(cardInfo) );
                $localstorage.setObject("cardInfo", cardInfo);

                //$loading.show();
                customerService.getCustomerReadCard(function(result) {
                    //$loading.hide();
                    if (result.status) {
                        //console.log(result);


                        //console.log($route.current);
                        if ($route.current.templateUrl == "views/main.html") {
                            $location.path('/existingcustomer')
                        } else {
                            $route.reload();
                        }
                    } else {
                        $message.alert(result.data["display-messages"][0]);
                    }
                })

            };
            $scope.readCardError = function(msg) {
                //$scope.onReading = false;
                $loading.hide();
                $message.alert({
                    "message": "ไม่สามารถอ่านค่าจากบัตรประชาชนได้ กรุณาค้นหาข้อมูลลูกค้าจากการ Key In ด้วยข้อมูลต่อไปนี้ (1) หมายเลขบัตรปนะชาชน 13 หลัก หรือ (2) หมายเลขโทรศัพท์ Truemove H หรือ (3) True Vision No หรือ (4) True Online No",
                    "message-code": "",
                    "message-type": "WARNING",
                    "en-message": "Unable to reach customer’s information from this Thai smart card. Please find customer’s information with input via keyboard from the following information (1) Thai ID, or (2) Cell phone no, or (3) True Vision No, or (4) True Online No.",
                    "th-message": "ไม่สามารถอ่านค่าจากบัตรประชาชนได้ กรุณาค้นหาข้อมูลลูกค้าจากการ Key In ด้วยข้อมูลต่อไปนี้ (1) หมายเลขบัตรปนะชาชน 13 หลัก หรือ (2) หมายเลขโทรศัพท์ Truemove H หรือ (3) True Vision No หรือ (4) True Online No",
                    "technical-message": "Readcard error"
                });
            };
            $scope.onCardNoKeydown = function(inputCardNo) {
                //console.log(inputCardNo);
                switch ($scope.cardTypeSelected) {
                    case "01":
                        if (inputCardNo && inputCardNo.length == 13) {
                            // console.log(inputCardNo);
                            $loading.show();
                            customerService.getCustomerManual(inputCardNo, "I", function(result) {
                                $loading.hide();
                                if (result.status) {
                                    //console.log(result);
                                    //$localstorage.log("customerProfile");

                                    //console.log($route.current);
                                    if ($route.current.templateUrl == "views/main.html") {
                                        $location.path('/existingcustomer')
                                    } else {
                                        $route.reload();
                                    }

                                } else {
                                    $location.path('/existingcustomer');
                                    $message.alert(result.data["display-messages"][0]);
                                }
                            })
                        }
                        break;

                    case "02":
                        $loading.show();
                        customerService.getCustomerByTMV(inputCardNo, "msisdn", function(result) {
                            $loading.hide();
                            if (result.status) {
                                //console.log(result);

                                $location.path('/existingcustomer')
                            } else {
                                $message.alert(result.data["display-messages"][0]);
                            }
                        })

                        break;
                    case "03":
                        $loading.show();

                        customerService.getCustomerByTMV(inputCardNo, "assetnumber", function(result) {
                            $loading.hide();
                            if (result.status) {
                                //console.log(result);


                                $location.path('/existingcustomer')
                            } else {
                                $message.alert(result.data["display-messages"][0]);
                            }
                        })
                        break;
                    case "04":
                        $loading.show();
                        customerService.getCustomerByTMV(inputCardNo, "tvsnumber", function(result) {
                            $loading.hide();
                            if (result.status) {
                                //console.log(result);

                                $location.path('/existingcustomer')
                            } else {
                                $message.alert(result.data["display-messages"][0]);
                            }
                        })
                        break;
                }

            }

            var isSSOSuccessed = false;
            $scope.openSSO = function() {

                // dalService.getOrderId(result.channel, result.shopcode, function(resultData) {
                //     localStorage.setItem('getOrderId', resultData);
                //     $scope.TrxID = resultData.TrxID;
                //     $scope.orderId = resultData.orderId;
                // };
                var d = new Date();


                $scope.TrxID = d.getTime() + '';
                //$localstorage.setItem('TrxID', $scope.TrxID);

                var openDialog = function(uri, name, options, closeCallback) {
                    var win = window.open(uri, name, options);
                    var interval = window.setInterval(function() {
                        try {
                            if (win == null || win.closed) {
                                window.clearInterval(interval);
                                closeCallback(win);
                            }
                        } catch (e) {}
                    }, 1000);
                    return win;
                };

                var url = dalService.secondAuthenURL + "SecondAuthen.jsp?App=WEBUI&TrxID=" + $scope.TrxID + "&Retry=yes&Goto=";
                var userinfo = $localstorage.getObject("userProfile");
                //console.log(userinfo);
                if (userinfo.isSecondAuthen == false && userinfo.shopType == "1") {
                    setTimeout(function() {
                        $('#inputCardNo').focus();
                        $('#inputCardNo').removeAttr('readonly');
                    }, 100);

                } else {
                    if (!isSSOSuccessed) {
                        openDialog(url, "MsgWindow", "width=800, height=600", function(w) {
                            //alert('debug : close and call(second_authen?trx_id=' + $scope.TrxID + '&app_id=WEBUI)');
                            $loading.show()
                            dalService.second_authen($scope.TrxID, function(result) {
                                //alert(result["status"]);
                                $loading.hide();
                                //console.log(result);
                                //$scope.secondAuthenData = result;
                                if (result.status) {
                                    isSSOSuccessed = true;
                                    setTimeout(function() {
                                        $('#inputCardNo').focus();
                                        $('#inputCardNo').removeAttr('readonly');
                                    }, 1001);
                                } else {

                                    setTimeout(function() {
                                        $message.alert({
                                            "message": result.data["display-messages"][0]["message"],
                                            "message-code": result.data["display-messages"][0]["message-code"],
                                            "message-type": "WARNING",
                                            "en-message": result.data["display-messages"][0]["en-message"],
                                            "th-message": result.data["display-messages"][0]["th-message"],
                                            "technical-message": result.data["display-messages"][0]["technical-message"]
                                        });
                                    }, 1000);
                                }
                            });

                        });
                    }


                }
            }

        }

    };
};
/**
 * minimalizaSidebar - Directive for minimalize sidebar
 */
function userToggleInfo($rootScope, $localstorage) {
    return {
        restrict: 'EA',
        templateUrl: 'views/templates/user-toggle-info.html',
        controller: function($scope, $element) {
            //console.log($localstorage.getObject("userProfile"));
            $scope.userinfo = $localstorage.getObject("userProfile");

        }
    };
};
/**
 * minimalizaSidebar - Directive for minimalize sidebar
 */
function customerToggleInfo($rootScope, $localstorage, $loading) {
    return {
        restrict: 'EA',
        templateUrl: 'views/templates/customer-toggle-info.html',
        controller: function($scope, $element, $location) {
            $scope.customerProfile = $localstorage.getObject("customerProfile");
            if(!$scope.customerProfile.fullName){
                //{{customerProfile.title}} {{customerProfile.firstName}} {{customerProfile.lastName}}
                $scope.customerProfile.fullName = $scope.customerProfile.title + " " + $scope.customerProfile.firstName + " " + $scope.customerProfile.lastName;
            }
            
            $scope.isNewCust = true;
            if($scope.customerProfile.firstName){
                $scope.isNewCust = false;
            }
            $scope.onInputFullName = function(){
                $loading.show();
                $localstorage.setObject("customerProfile",$scope.customerProfile);
                $loading.hide();
            }
            $scope.onClickEndServe = function() {

                var customer = $localstorage.getObject("customerProfile");
                console.log("onClickEndServe");
                console.log(customer);
                $localstorage.destroy("customerProfile");
                var cus = $localstorage.getObject("customerProfile");
                console.log(cus);
                $location.path('/main');
            }
        }
    };
};
/**
 * minimalizaSidebar - Directive for minimalize sidebar
 */
function userBarInfo($rootScope) {
    return {
        restrict: 'EA',
        templateUrl: 'views/templates/user-bar-info.html',
        controller: function($scope, $element, $localstorage) {
            $scope.userinfo = $localstorage.getObject("userProfile");
        }
    };
};
/**
 * minimalizaSidebar - Directive for minimalize sidebar
 */
function ngHoverDisplay($rootScope) {
    return {
        link: function(scope, element, attrs) {
            element.parent().bind('mouseenter', function() {
                element.find('p').hide(200);
            });
            element.parent().bind('mouseleave', function() {
                element.find('p').show(200);
            });
        }
    };
};


function landingClick($rootScope) {
    return {
        link: function(scope, element, attrs) {
            element.parent().bind('click', function() {

                element.addClass('active').siblings().removeClass('active');
                // var link = $(this);
                // $('html, body').stop().animate({
                //     scrollTop: $(link.attr('href')).offset().top - 100
                // }, 500);
                // event.preventDefault();
                // var aa = attrs.('href');
                // alert(aa);

                // attrs.$observe('mark', function(val) {
                //      alert(val);
                //     // if (newVal != undefined) {
                //     //     var img = new Image();
                //     //     img.src = attrs.actualSrc;
                //     //     angular.element(img).bind('load', function() {
                //     //         element.attr("src", attrs.actualSrc);
                //     //     });
                //     // }
                // });
                //console.log(attrs.value);
                // attrs.$observe('myText', function(value) {
                //     console.log('class=', value);
                // });

            });

        }
    };
};

function ngMenu($rootScope, $localstorage) {
    return {
        restrict: 'EA',
        templateUrl: 'views/templates/menu.html',
        controller: function($scope, $element, $location, customerService) {
            var userinfo = $localstorage.getObject("userProfile");
            //console.log(userinfo.menus);
            $scope.menu = userinfo.menus;
        }

    };
};

function version() {
    return {
        restrict: 'EA',
        template: 'Version : 0.0.2'
    };
};

function recommend($rootScope, $localstorage) {
    return {
        restrict: 'EA',
        templateUrl: 'views/templates/recommend.html',
        controller: function($scope, $element) {
            //console.log($localstorage.getObject("userProfile"));
            //$scope.userinfo = $localstorage.getObject("userProfile");

        }
    };
};

function actualSrc() {
    return {
        link: function postLink(scope, element, attrs) {
            attrs.$observe('actualSrc', function(newVal, oldVal) {
                if (newVal != undefined) {
                    var img = new Image();
                    img.src = attrs.actualSrc;
                    angular.element(img).bind('load', function() {
                        element.attr("src", attrs.actualSrc);
                    });
                }
            });
        }
    };
};
