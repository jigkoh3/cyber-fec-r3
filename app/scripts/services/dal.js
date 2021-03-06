'use strict';

angular.module('fec3App')
    .service('dalService', function($filter, $http) {
        var that = this;
        this.demo = true;

        if (that.demo) {
            this.secondAuthenURL = "https://sso-devt.true.th:11443/"; //DEV
            //this.secondAuthenURL = "https://xxo-uat.true.th:11443/SSORESTFul/"; //UAT
            //this.secondAuthenURL = "https://xxo-uat.true.th:11443/SSORESTFul/";//PRO
        } else {
            //for get by env
            this.secondAuthenURL = getSecondAuthenURL();
        }


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

        this.second_authen = function(trx_id, fnCallback) {
            var target = 'security/identity/second_authen?trx_id=' + trx_id + '&app_id=WEBUI';
            var headers = {
                'WEB_METHOD_CHANNEL': 'WEBUI'
            };
            var onSuccess = function(result) {
                if (result.status) {
                    if (result.data["response-data"] 
                        && result.data["response-data"].length > 0
                        && result.data["response-data"][0].authRes 
                        && result.data["response-data"][0].authRes.responseCode 
                        && result.data["response-data"][0].authRes.responseCode == "200") {

                        fnCallback({
                            status: true,
                            data: result.data,
                            error: "",
                            msgErr: ""
                        });
                    } else {
                        var dataError = {
                            "status": "UNSUCCESSFUL",
                            "display-messages": [{
                                "message": "",
                                "message-code": "",
                                "message-type": "ERROR",
                                "en-message": "",
                                "th-message": "",
                                "technical-message": ""
                            }]
                        };
                        fnCallback({
                            status: false,
                            data: dataError,
                            error: "",
                            msgErr: ""
                        });
                    }

                } else {
                    fnCallback({
                        status: false,
                        data: result.data,
                        error: "",
                        msgErr: ""
                    });
                }


            };
            if (!that.demo) {
                that.callServiceGet(target, headers, function(result) {
                    onSuccess(result);
                });
            } else {
                var data = {
                    "status": "SUCCESSFUL",
                    "trx-id": "6OKMIN4J8HDZ",
                    "process-instance": "psaapdv1 (instance: SFF_node1)",
                    "response-data": [{
                        "loginName": "UserTSM4",
                        "employeeId": "10000004",
                        "authRes": {
                            "app": "WEBUI",
                            "info": "COMPANY=True Information Technology company limited;;DEPARTMENT=Information Technology (Infrastructure);;DIVISION=--;;EMPLOYEEID=10000004;;ENGLISHNAME=User Test4;;FIRSTNAME=User;;INITIALS=Mr.;;LOGINNAME=UserTSM4;;MAIL=usr_tsm4@Truecorp.co.th;;POSITION=IT Security Administration;;ROLES=CN=R-TSM-USER2,OU=Groups,DC=essoad,DC=th|CN=R-INCT-SALESUP,OU=Unused,OU=Groups,DC=essoad,DC=th;;SECTION=IT Security Administration;;SHOPCODE=80000001|80000001|80000005|80000008;;SURNAME=Test4;;THAINAME=นาย ไทย test4",
                            "responseCode": "200",
                            "responseDesc": "Success",
                            "trxID": "71e5603394694c40a744739188496b83"
                        }
                    }]
                };
                var data2 = {
                    "status": "SUCCESSFUL",
                    "trx-id": "6OKMIN4J8HDZ",
                    "process-instance": "psaapdv1 (instance: SFF_node1)",
                    "response-data": [{
                        "loginName": null,
                        "employeeId": "",
                        "authRes": {
                            "app": "WEBUI",
                            "info": "COMPANY=True Information Technology company limited;;DEPARTMENT=Information Technology (Infrastructure);;DIVISION=--;;EMPLOYEEID=10000004;;ENGLISHNAME=User Test4;;FIRSTNAME=User;;INITIALS=Mr.;;LOGINNAME=UserTSM4;;MAIL=usr_tsm4@Truecorp.co.th;;POSITION=IT Security Administration;;ROLES=CN=R-TSM-USER2,OU=Groups,DC=essoad,DC=th|CN=R-INCT-SALESUP,OU=Unused,OU=Groups,DC=essoad,DC=th;;SECTION=IT Security Administration;;SHOPCODE=80000001|80000001|80000005|80000008;;SURNAME=Test4;;THAINAME=นาย ไทย test4",
                            "responseCode": "401",
                            "responseDesc": "Error !!!!!!",
                            "trxID": "71e5603394694c40a744739188496b83"
                        }
                    }]
                };
                var data3 = {
                    "status": "UNSUCCESSFUL",
                    "display-messages": [{
                        "message": "",
                        "message-code": "1",
                        "message-type": "ERROR",
                        "en-message": "Data not found",
                        "th-message": "Data not found",
                        "technical-message": ""
                    }, {
                        "message": "",
                        "message-code": "1",
                        "message-type": "ERROR",
                        "en-message": "สิทธิการใช้งานต่างประเทศจะถูกยกเลิก",
                        "th-message": "สิทธิการใช้งานต่างประเทศจะถูกยกเลิก",
                        "technical-message": ""
                    }],
                    "trx-id": "6OKMIN4J8HDZ",
                    "process-instance": "psaapdv1 (instance: SFF_node1)",
                    "response-data": [{
                        "loginName": "UserTSM4",
                        "employeeId": "10000004",
                        "authRes": {
                            "app": "WEBUI",
                            "info": "COMPANY=True Information Technology company limited;;DEPARTMENT=Information Technology (Infrastructure);;DIVISION=--;;EMPLOYEEID=10000004;;ENGLISHNAME=User Test4;;FIRSTNAME=User;;INITIALS=Mr.;;LOGINNAME=UserTSM4;;MAIL=usr_tsm4@Truecorp.co.th;;POSITION=IT Security Administration;;ROLES=CN=R-TSM-USER2,OU=Groups,DC=essoad,DC=th|CN=R-INCT-SALESUP,OU=Unused,OU=Groups,DC=essoad,DC=th;;SECTION=IT Security Administration;;SHOPCODE=80000001|80000001|80000005|80000008;;SURNAME=Test4;;THAINAME=นาย ไทย test4",
                            "responseCode": "200",
                            "responseDesc": "Success",
                            "trxID": "71e5603394694c40a744739188496b83"
                        }
                    }]
                };
                var resp = data;
                if (resp.status == "SUCCESSFUL") {
                    onSuccess({
                        status: true,
                        data: resp,
                        error: "",
                        msgErr: ""
                    });
                } else {
                    onSuccess({
                        status: false,
                        data: resp,
                        error: "ERROR",
                        msgErr: ""
                    });

                }

            }

        };

    });