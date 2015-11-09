/**
 * HOMER - Responsive Admin Theme
 * Copyright 2015 Webapplayers.com
 *
 */

angular
    .module('fec3App')
    .factory('$localstorage', localstorage)
    .factory('$loading', loading)
    .factory('$message', message)
    .factory('$modal', modal)
    .factory('smartUIHttpInterceptor', smartUIHttpInterceptor)
    .service('anchorSmoothScroll', anchorSmoothScroll)


function smartUIHttpInterceptor($q, $rootScope) {
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
};

function anchorSmoothScroll() {
    this.scrollTo = function(eID) {

        // This scrolling function 
        // is from http://www.itnewb.com/tutorial/Creating-the-Smooth-Scroll-Effect-with-JavaScript

        var startY = currentYPosition();
        var stopY = elmYPosition(eID) - 100;
        var distance = stopY > startY ? stopY - startY : startY - stopY;
        if (distance < 100) {
            scrollTo(0, stopY);
            return;
        }
        var speed = Math.round(distance / 100) * 500;
        if (speed >= 20) speed = 20;
        var step = Math.round(distance / 25);
        var leapY = stopY > startY ? startY + step : startY - step;
        var timer = 0;
        if (stopY > startY) {
            for (var i = startY; i < stopY; i += step) {
                setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
                leapY += step;
                if (leapY > stopY) leapY = stopY;
                timer++;
            }
            return;
        }
        for (var i = startY; i > stopY; i -= step) {
            setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
            leapY -= step;
            if (leapY < stopY) leapY = stopY;
            timer++;
        }

        function currentYPosition() {
            // Firefox, Chrome, Opera, Safari
            if (self.pageYOffset) return self.pageYOffset;
            // Internet Explorer 6 - standards mode
            if (document.documentElement && document.documentElement.scrollTop)
                return document.documentElement.scrollTop;
            // Internet Explorer 6, 7 and 8
            if (document.body.scrollTop) return document.body.scrollTop;
            return 0;
        }

        function elmYPosition(eID) {
            var elm = document.getElementById(eID);

            var y = elm.offsetTop;
            var node = elm;
            while (node.offsetParent && node.offsetParent != document.body) {
                node = node.offsetParent;
                y += node.offsetTop;
            }
            return y;
        }

    };
};


function localstorage($window) {
    return {
        set: function(key, value) {
            $window.localStorage[key] = value;
        },
        get: function(key, defaultValue) {
            return $window.localStorage[key] || defaultValue;
        },
        setObject: function(key, value) {
            $window.localStorage[key] = angular.toJson(value);
        },
        getObject: function(key) {
            return JSON.parse($window.localStorage[key] || '[]');
        },
        destroy: function(key) {
            $window.localStorage.removeItem(key);
        },
        log: function(key, defaultValue) {
            console.log($window.localStorage[key] || defaultValue);
        },
        logObject: function(key) {
            console.log(JSON.parse($window.localStorage[key] || '{}'));
        }
    }
};

function loading($ngBootbox) {
    return {
        show: function() {
            $ngBootbox.customDialog({
                templateUrl: 'views/templates/loading.html',
                onEscape: function() {
                    return false;
                },
                show: true,
                backdrop: true,
                closeButton: false,
                animate: true
            });
        },
        hide: function() {
            setTimeout(function() {
                $ngBootbox.hideAll();
            }, 1000);
        }
    }
};

function message($ngBootbox) {
    var that = this;
    var _alertMsg = {
        "message": "",
        "message-code": "",
        "message-type": "",
        "en-message": "",
        "th-message": "",
        "technical-message": ""
    };
    return {
        confirm: function(msg, fnCallback) {
            //$ngBootbox.confirm(msg, fnCallback);
            $ngBootbox.confirm(msg)
                .then(function() {
                        //console.log('Confirm was accept');
                        fnCallback({
                            status: true
                        });
                    },
                    function() {
                        //Confirm was cancelled, don't delete customer
                        //console.log('Confirm was cancelled');
                        fnCallback({
                            status: false
                        });
                    });
        },
        alertMsg: function() {
            return _alertMsg;
        },
        alert: function(msg) {
            _alertMsg = msg;
            //console.log(_alertMsg);
            setTimeout(function() {
                $ngBootbox.customDialog({
                    templateUrl: 'views/templates/alert.html',
                    onEscape: function() {
                        return false;
                    },
                    show: true,
                    backdrop: true,
                    closeButton: false,
                    animate: true
                });
            }, 1001);

            setTimeout(function() {
                $("#btn_ngbOK").focus();
            }, 800);
        }
    }
};

function modal($ngBootbox,$localstorage) {
    var that = this;
    var _itm = null;
    var _tabIdx = null;
    var _valueData = null;

    var _proSelected = null;

    return {
        campaignList: function() {
            return _itm;
        },

        campaignSelected: function(data) {
            _proSelected = data;
        },

        mathList: function() {
            return _item;
        },
        tabSelected: function() {
            return _tabIdx;
        },
        values: function() {
            return _valueData;
        },
        campaignSelector: function(itm, fnCallback) {
            _itm = itm;
            //console.log(_alertMsg);
            setTimeout(function() {
                $ngBootbox.customDialog({
                    templateUrl: 'views/templates/choosecampaign.html',
                    onEscape: function() {
                        return false;
                    },
                    show: true,
                    backdrop: true,
                    closeButton: false,
                    animate: true,
                    size: "large",
                    buttons: {
                        success: {
                            label: "Ok",
                            className: "btn-success",
                            callback: function() {
                                var customerProfile = $localstorage.getObject("customerProfile");
                                if (!customerProfile.orderObj) {
                                    customerProfile.orderObj = {};
                                }
                                if (!customerProfile.orderObj.order_product_item_list) {
                                    customerProfile.orderObj.order_product_item_list = [];
                                }
                                customerProfile.orderObj.order_product_item_list = _proSelected;
                                $localstorage.setObject("customerProfile", customerProfile);
                                $localstorage.logObject("customerProfile");
                                fnCallback({
                                    status: true,
                                    data: _proSelected
                                });
                            }
                        }
                    }
                });
            }, 1001);

            setTimeout(function() {
                $("#btn_ngbOK").focus();
            }, 800);
        },

        productSelector: function(item, tabSelected, values) {
            _item = item;
            _tabIdx = tabSelected;
            _valueData = values;
            setTimeout(function() {
                $ngBootbox.customDialog({
                    templateUrl: 'views/templates/productselector.html',
                    onEscape: function() {
                        return false;
                    },
                    show: true,
                    backdrop: true,
                    closeButton: false,
                    animate: true,
                    size: "large"

                });
            }, 1001);

            setTimeout(function() {
                $("#btn_ngbOK").focus();
            }, 800);
        }
    }
};