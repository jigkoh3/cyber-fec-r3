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