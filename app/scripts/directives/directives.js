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
    .directive('ngMenu', ngMenu)
    .directive('version', version)
    .directive('actualSrc', function() {
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
        }
    })



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
function customerToggleGet($rootScope, $localstorage, $loading) {
    return {
        restrict: 'EA',
        templateUrl: 'views/templates/customer-toggle-get.html',
        controller: function($scope, $element, $location, $message, customerService) {
            $scope.inputCardNo = "";

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
                alert("read card");
            }
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

                                        $location.path('/existingcustomer')
                                    } else {
                                        $message.alert(result.data["display-messages"][0]);
                                    }
                                })
                            }
                            break;
                        case "02":
                            console.log("02")
                            break;

                    }

                }
                // $scope.$watch('cardTypeSelected', function(val) {
                //     if (val) {
                //         console.log(val);

            //     }

            // });
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
function customerToggleInfo($rootScope, $localstorage) {
    return {
        restrict: 'EA',
        templateUrl: 'views/templates/customer-toggle-info.html',
        controller: function($scope, $element, $location) {
            $scope.customerProfile = $localstorage.getObject("customerProfile");
            $scope.onClickEndServe = function() {
                $localstorage.setObject("customerProfile", null)
                $location.path('/main')
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
        template: 'Version : 0.0.1'
    };
};