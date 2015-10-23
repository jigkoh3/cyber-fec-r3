'use strict';

angular.module('fec3App')
    .service('dalService', function($filter, $http) {
        this.demo = true;
        //for get by env
        //this.secondAuthenURL = getSecondAuthenURL();

        this.callServiceGet = function(target, headers, fnCallback) {
            var requestData = {
                target: target
            };
            var httpRequest = {
                method: "POST",
                url: getURL('services/gateway/get.service'),
                data: requestData,
                timeout: 180000
            };
            if (headers != null) {
                httpRequest.headers = headers;
            }
            if (localStorage.getItem('orderId')) {
                httpRequest.headers = {
                    'WEB_METHOD_CHANNEL': 'WEBUI',
                    'E2E_REFID': localStorage.getItem('orderId')
                };
            }
            //console.log(httpRequest);
            $http(httpRequest).success(function(data) {
                console.log('success ::: callServiceGet');
                console.log(requestData.target);
                console.log(data);

                if (data.status == "SUCCESSFUL") {
                    fnCallback({
                        status: true,
                        data: data,
                        error: "",
                        msgErr: ""
                    });
                } else {
                    fnCallback({
                        status: false,
                        data: data,
                        error: "ERROR",
                        msgErr: ""
                    });

                }
            }).error(function(data, status, errorJSON) {
                console.log('error ::: callServiceGet');
                console.log(requestData.target);
                console.log("ERROR");
                console.log(status, data, errorJSON);
                fnCallback({
                    status: false,
                    data: data,
                    error: status,
                    msgErr: status == 0 ? "Can not connect!" : ""
                });

            });
        };

        this.callServicePost = function(data, headers, fnCallback) {
            console.log(data);
            var httpRequest = {
                method: "POST",
                url: getURL('services/gateway/post.service'),
                data: data,
                timeout: 180000
            };

            if (headers != null) {
                //httpRequest.headers = headers;
            }
            if (localStorage.getItem('orderId')) {
                httpRequest.headers = {
                    'WEB_METHOD_CHANNEL': 'WEBUI',
                    'E2E_REFID': localStorage.getItem('orderId')
                };
            }
            $http(httpRequest).success(function(data) {
                console.log(data);
                if (data.status == "SUCCESSFUL") {
                    fnCallback({
                        status: true,
                        data: data,
                        error: "",
                        msgErr: ""
                    });
                } else {
                    fnCallback({
                        status: false,
                        data: data,
                        error: "ERROR",
                        msgErr: ""
                    });

                }
            }).error(function(dataErr, status) {
                console.log("ERROR");
                console.log(status, dataErr);
                fnCallback({
                    status: false,
                    data: "",
                    error: status,
                    msgErr: status == 0 ? "Can not connect!" : ""
                });


            });
        };
    });