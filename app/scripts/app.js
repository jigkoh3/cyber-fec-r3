'use strict';

/**
 * @ngdoc overview
 * @name fec3App
 * @description
 * # fec3App
 *
 * Main module of the application.
 */
angular
    .module('fec3App', [
        'ngRoute',
        'ngBootbox',
        'angular-linq'
    ])
    .config(['$logProvider', function($logProvider) {
        $logProvider.debugEnabled(true);
    }])
    .provider('logEnhancer', function() {
        this.loggingPattern = '%s - %s: ';

        this.$get = function() {
            var loggingPattern = this.loggingPattern;
            return {
                enhanceAngularLog: function($log) {
                    $log.enabledContexts = [];

                    $log.getInstance = function(context) {
                        return {
                            log: enhanceLogging($log.log, context, loggingPattern),
                            info: enhanceLogging($log.info, context, loggingPattern),
                            warn: enhanceLogging($log.warn, context, loggingPattern),
                            debug: enhanceLogging($log.debug, context, loggingPattern),
                            error: enhanceLogging($log.error, context, loggingPattern),
                            enableLogging: function(enable) {
                                $log.enabledContexts[context] = enable;
                            }
                        };
                    };

                    function enhanceLogging(loggingFunc, context, loggingPattern) {
                        return function() {
                            var contextEnabled = $log.enabledContexts[context];
                            if (contextEnabled === undefined || contextEnabled) {
                                var modifiedArguments = [].slice.call(arguments);
                                modifiedArguments[0] = ".." + new Date().getTime() + " [" + context + "] " + modifiedArguments[0];
                                loggingFunc.apply(null, modifiedArguments);
                            }
                        };
                    }
                }
            };
        };
    })
    .config(['logEnhancerProvider', function(logEnhancerProvider) {
        logEnhancerProvider.loggingPattern = '%s::[%s]> ';
    }])
    .run(['$log', 'logEnhancer', function($log, logEnhancer) {
        logEnhancer.enhanceAngularLog($log);
    }])
    .run(['$anchorScroll', function($anchorScroll) {
        $anchorScroll.yOffset = 100; // always scroll by 50 extra pixels
    }])
    .run(function($rootScope, $templateCache) {
        $rootScope.$on('$viewContentLoaded', function() {
            console.log("before $templateCache : ");
            console.log($templateCache.info())
            $templateCache.removeAll();
            console.log("after $templateCache : ");
            console.log($templateCache.info())
        });
    })
    .config(function($routeProvider, $httpProvider) {
        $httpProvider.interceptors.push('smartUIHttpInterceptor');
        $routeProvider
            .when('/', {
                templateUrl: 'views/welcome.html',
                controller: 'welcomeCtrl',
                controllerAs: 'welcome'
            })
            .when('/main', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl',
                controllerAs: 'main'
            })
            .when('/landingpage', {
                templateUrl: 'views/landingpage.html',
                controller: 'landingpageCtrl',
                controllerAs: 'landingpage'
            })
            .when('/products/:id?/:name?', {
                templateUrl: 'views/products.html',
                controller: 'productsCtrl',
                controllerAs: 'products'
            })
            .when('/orderDevice/:id?/:name?', {
                templateUrl: 'views/orderDevice.html',
                controller: 'orderDeviceCtrl',
                controllerAs: 'orderDevice'
            })
            .when('/promotion/:id?/:name?/:productCode?/:productType?/:trxId?', {
                templateUrl: 'views/promotion.html',
                controller: 'promotionCtrl',
                controllerAs: 'promotion'
            })
            .when('/existingcustomer', {
                templateUrl: 'views/existingcustomer.html',
                controller: 'existingcustomerCtrl',
                controllerAs: 'existingcustomer'
            })
            .when('/selectshop', {
                templateUrl: 'views/selectshop.html',
                controller: 'selectshopCtrl',
                controllerAs: 'selectshop'
            })
            .when('/listpayment', {
                templateUrl: 'views/underconstruction.html'
                    // templateUrl: 'views/listpayment.html',
                    // controller: 'listpaymentCtrl',
                    // controllerAs: 'listpayment'
            })
            // .when('/listpayment2', {
            //     templateUrl: 'views/listpayment2.html',
            //     controller: 'listpayment2Ctrl',
            //     controllerAs: 'listpayment2'
            // })
            .when('/openservicenew', {
                templateUrl: 'views/openservicenew.html',
                controller: 'openServiceNewCtrl',
                controllerAs: 'openServiceNew'
            })
            // .when('/payment', {
            //     templateUrl: 'views/payment.html',
            //     controller: 'paymentCtrl',
            //     controllerAs: 'payment'
            // })
            // .when('/payment2', {
            //     templateUrl: 'views/payment2.html',
            //     controller: 'payment2Ctrl',
            //     controllerAs: 'payment2'
            // })
            // .when('/payment3', {
            //     templateUrl: 'views/payment3.html',
            //     controller: 'payment3Ctrl',
            //     controllerAs: 'payment3'
            // })
            // .when('/payment4', {
            //     templateUrl: 'views/payment4.html',
            //     controller: 'payment4Ctrl',
            //     controllerAs: 'payment4'
            // })
            // .when('/payment5', {
            //     templateUrl: 'views/payment5.html',
            //     controller: 'payment5Ctrl',
            //     controllerAs: 'payment5'
            // })
            // .when('/payment6', {
            //     templateUrl: 'views/payment6.html',
            //     controller: 'payment6Ctrl',
            //     controllerAs: 'payment6'
            // })
            // .when('/about', {
            //     templateUrl: 'views/about.html',
            //     controller: 'AboutCtrl',
            //     controllerAs: 'about'
            // })
            // .when('/stockissue', {
            //     templateUrl: 'views/stockissue.html',
            //     controller: 'stockissueCtrl',
            //     controllerAs: 'stockissue'
            // })
            // .when('/orderCapture', {
            //     templateUrl: 'views/orderCapture.html',
            //     controller: 'orderCaptureCtrl',
            //     controllerAs: 'orderCapture'
            // })
            // .when('/orderCapture2', {
            //     templateUrl: 'views/orderCapture2.html',
            //     controller: 'orderCapture2Ctrl',
            //     controllerAs: 'orderCapture2'
            // })
            // .when('/appleCare', {
            //     templateUrl: 'views/appleCare.html',
            //     controller: 'appleCareCtrl',
            //     controllerAs: 'appleCare'
            // })
            // .when('/golive', {
            //     templateUrl: 'views/golive.html',
            //     controller: 'goliveCtrl',
            //     controllerAs: 'golive'
            // })
            // .when('/ordercaptureexisting', {
            //     templateUrl: 'views/ordercaptureexisting.html',
            //     controller: 'ordercaptureexistingCtrl',
            //     controllerAs: 'ordercaptureexisting'
            // })
            // .when('/priceplanexisting', {
            //     templateUrl: 'views/priceplanexisting.html',
            //     controller: 'priceplanexistingCtrl',
            //     controllerAs: 'priceplanexisting'
            // })
            // .when('/printpreview', {
            //     templateUrl: 'views/printpreview.html',
            //     // controller: 'printpreviewCtrl',
            //     // controllerAs: 'printpreview'
            // })
            .when('/privilege/:id?/:name?/:campaignCode?/:productCode?/:qty?/:verifyKeys?/:services?', {
                templateUrl: 'views/privilege.html',
                controller: 'privilegeCtrl',
                controllerAs: 'privilege'
                    //campaignCode=RS228&productCode=3000024133&qty=1
            })
            // .when('/complete', {
            //     templateUrl: 'views/complete.html',
            //     // controller: 'printpreviewCtrl',
            //     // controllerAs: 'printpreview'
            // })
            // .when('/ordermonitor', {
            //     templateUrl: 'views/ordermonitor.html',
            //     controller: 'ordermonitorCtrl',
            //     controllerAs: 'ordermonitor'
            // })
            // .when('/dataorder', {
            //     templateUrl: 'views/dataorder.html',
            //     // controller: 'printpreviewCtrl',
            //     // controllerAs: 'printpreview'
            // })
            // .when('/allproducts', {
            //     templateUrl: 'views/allproducts.html',
            //     controller: 'allproductsCtrl',
            //     controllerAs: 'allproducts'
            // })
            .when('/payment', {
                templateUrl: 'views/underconstruction.html',
                // controller: 'printpreviewCtrl',
                // controllerAs: 'printpreview'
            })
            .when('/order', {
                templateUrl: 'views/underconstruction.html',
                // controller: 'printpreviewCtrl',
                // controllerAs: 'printpreview'
            })
            .when('/orderService', {
                templateUrl: 'views/orderService.html',
                controller: 'orderServiceCtrl',
                controllerAs: 'orderService'
            })
            .when('/ordersummary', {
                templateUrl: 'views/ordersummary.html',
                controller: 'ordersummaryCtrl',
                controllerAs: 'ordersummary'
            })
            .when('/openservicetype', {
                templateUrl: 'views/openservicetype.html',
                controller: 'openServiceTypeCtrl',
                controllerAs: 'openServiceType'
            })
            .otherwise({
                redirectTo: '/'
            });
    });

//TODO Start_smartUIHttpInterceptor

smartApp.factory('smartUIHttpInterceptor', function($q, $rootScope) {
    return {
        request: function(config) {
            return config || $q.when(config);
        },
        requestError: function(response) {
            console.log("requestError");
            console.log(response);
            return $q.reject(response);
        },
        response: function(response) {
            return response || $q.when(response);
        },

        // responseError : function(response) {
        // console.log("responseError");
        // var msg = response.status + ' ' + response.statusText;
        // if (msg == '0 error' || msg == '200 OK') {
        // location.reload();
        // }
        //
        // return $q.reject(response);
        // }
        responseError: function(response) {
            console.log("responseError");
            if (response.status === 0) {
                location.reload();
            }
            return $q.reject(response);
        }
    };
});

// TODO End_smartUIHttpInterceptor