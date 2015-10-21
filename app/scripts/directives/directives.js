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
        template: '<a ng-click="toggleUser()" class="btn btn-login dropdown-toggle"><p class="navbar-text navbar-text-right"><i class="fa fa-user"></i> ID: 01014764</p></a>',
        controller: function($scope, $element) {

            $scope.toggleUser = function() {

                $element.parent().toggleClass('open');
            }
        }
    };
};
/**
 * minimalizaSidebar - Directive for minimalize sidebar
 */
function customerToggleGet($rootScope,$localstorage) {
    return {
        restrict: 'EA',
        templateUrl: '/views/templates/customer-toggle-get.html',
        controller: function($scope, $element, $location) {
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
            }
            ];


            $scope.onCardNoKeydown = function(inputCardNo) {
                if (inputCardNo && inputCardNo.length == 13) {
                    // $scope.inputCardNo = cardNo;
                    console.log(inputCardNo);
                    var customerProfile = {
                        customerId:"8891-3888-8007-2403",
                        expireDate:"08/2015",
                        citizenId:"3600800664204",
                        fullName:"นางสาว สุขแสนสุข ใจอารีย์"
                    };
                    $localstorage.setObject("customerProfile",customerProfile);
                    $location.path('/existingcustomer')
                }
            }
        }

    };
};
/**
 * minimalizaSidebar - Directive for minimalize sidebar
 */
function userToggleInfo($rootScope) {
    return {
        restrict: 'EA',
        templateUrl: '/views/templates/user-toggle-info.html',
        controller: function($scope, $element) {
            $scope.userinfo = {id:"01014764",name:"นางสาว ทรู ทรูมูฟเอช",shopcode:"123456",shopname:"เซ็นทรัลพลาซา พระราม 2",cosale:"นายทรูมูฟ เอช"};
        }
    };
};
/**
 * minimalizaSidebar - Directive for minimalize sidebar
 */
function customerToggleInfo($rootScope,$localstorage) {
    return {
        restrict: 'EA',
        templateUrl: '/views/templates/customer-toggle-info.html',
        controller: function($scope, $element, $location) {
            $scope.customerProfile = $localstorage.getObject("customerProfile");
            $scope.onClickEndServe = function() {
                $localstorage.setObject("customerProfile",null)
                $location.path('/')
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
        templateUrl: '/views/templates/user-bar-info.html',
        controller: function($scope, $element, $location) {
            $scope.userinfo = {id:"01014764",name:"นางสาว ทรู ทรูมูฟเอช",shopcode:"123456",shopname:"เซ็นทรัลพลาซา พระราม 2",mobileno:"089-444-7208"};
        }
    };
};
/**
 * minimalizaSidebar - Directive for minimalize sidebar
 */
function ngHoverDisplay($rootScope) {
    return {
        link : function(scope, element, attrs) {
            element.parent().bind('mouseenter', function() {
                element.find('p').hide(200);
            });
            element.parent().bind('mouseleave', function() {
                 element.find('p').show(200);
            });
       }
    };
};

