'use strict';
angular.module('fec3App')
    .controller('privilegeCtrl', function($scope, $routeParams, productService, $localstorage, $loading, $message) {
        var customerProfile = $localstorage.getObject("customerProfile");

        var campaign_code = $routeParams.campaignCode;
        var product_code = $routeParams.productCode;
        var qty = $routeParams.qty;
        
        $scope.id = $routeParams.id;
        $scope.name = $routeParams.name;

        var _verifyKeys = $routeParams.verifyKeys;
        var _services = $routeParams.services;
        $scope.verifyKeys = [];
        for (var i = 0; i <= _verifyKeys.length-1; i++) {
            var _vlf = {};

            _vlf.key = _verifyKeys[i];
            _vlf.value=null;
            if(_verifyKeys[i] == "ThaiId"){
                _vlf.value = customerProfile.certificateId;
            }
            $scope.verifyKeys.push(_vlf);
        };
        
        $scope.param = {
            "campaign_code": campaign_code,
            "product_code": product_code,
            "qty": qty,
            "verifyKeys": $scope.verifyKeys
        };
        $scope.isClick = false;

        $scope.onVerify = function() {
            $loading.show();
            if ($routeParams.campaignCode) {
                productService.verify($scope.param, function(result) {
                    //location.href='#priceplanexisting
                    $scope.isClick = false;
                    if (result.data['response-data']['result'] == 'Pass') {
                        $loading.hide();
                        // if open service
                        // if not open service
                        if(_services && _services.length >= 1){
                            location.href = '#pricePlan';
                        }else{
                            location.href = '#ordersummary';
                        }
                        
                    } else {
                        if (result.data['response-data']['result'] == "SegmentCodeIsNotDefine") {
                            $message.alert({
                                "message": "",
                                "message-code": "",
                                "message-type": "Warning",
                                "en-message": "Cannot check privilege, Please contact IT Helpdesk.",
                                "th-message": "ไม่สามารถตรวจสอบสิทธิ์ได้ กรุณาติดต่อ IT Helpdesk",
                                "technical-message": ""
                            });
                        }
                        else if (result.data['response-data']['result'] == "DuplicateReceiptNo") {
                            $message.alert({
                                "message": "",
                                "message-code": "",
                                "message-type": "Warning",
                                "en-message": "Cannot check privilege, Please contact IT Helpdesk.",
                                "th-message": "ไม่สามารถตรวจสอบสิทธิ์ได้ กรุณาติดต่อ IT Helpdesk",
                                "technical-message": ""
                            });
                        }
                        else if (result.data['response-data']['result'] == "UnknowError") {
                            $message.alert({
                                "message": "",
                                "message-code": "",
                                "message-type": "Warning",
                                "en-message": "Cannot check privilege, Please contact IT Helpdesk.",
                                "th-message": "ไม่สามารถตรวจสอบสิทธิ์ได้ กรุณาติดต่อ IT Helpdesk",
                                "technical-message": ""
                            });
                        }
                        else if (result.data['response-data']['result'] == "LogInFail") {
                            $message.alert({
                                "message": "",
                                "message-code": "",
                                "message-type": "Warning",
                                "en-message": "Cannot check privilege, Please contact IT Helpdesk.",
                                "th-message": "ไม่สามารถตรวจสอบสิทธิ์ได้ กรุณาติดต่อ IT Helpdesk",
                                "technical-message": ""
                            });
                        }
                        else if (result.data['response-data']['result'] == "VerifyAgingFail") {
                            $message.alert({
                                "message": "",
                                "message-code": "",
                                "message-type": "Warning",
                                "en-message": "Cannot check privilege, Please contact IT Helpdesk.",
                                "th-message": "ไม่สามารถตรวจสอบสิทธิ์ได้ กรุณาติดต่อ IT Helpdesk",
                                "technical-message": ""
                            });
                        }
                        else if (result.data['response-data']['result'] == "FullSuspendMSISDN") {
                            $message.alert({
                                "message": "",
                                "message-code": "",
                                "message-type": "Warning",
                                "en-message": "Cannot check privilege, Please contact IT Helpdesk.",
                                "th-message": "ไม่สามารถตรวจสอบสิทธิ์ได้ กรุณาติดต่อ IT Helpdesk",
                                "technical-message": ""
                            });
                        }
                        else if (result.data['response-data']['result'] == "NotMNP1Oct") {
                            $message.alert({
                                "message": "",
                                "message-code": "",
                                "message-type": "Warning",
                                "en-message": "Cannot check privilege, Please contact IT Helpdesk.",
                                "th-message": "ไม่สามารถตรวจสอบสิทธิ์ได้ กรุณาติดต่อ IT Helpdesk",
                                "technical-message": ""
                            });
                        }
                        else if (result.data['response-data']['result'] == "InvalidParameter") {
                            $message.alert({
                                "message": "",
                                "message-code": "",
                                "message-type": "Warning",
                                "en-message": "Cannot check privilege, Please contact IT Helpdesk.",
                                "th-message": "ไม่สามารถตรวจสอบสิทธิ์ได้ กรุณาติดต่อ IT Helpdesk",
                                "technical-message": ""
                            });
                        }
                        else if (result.data['response-data']['result'] == "PrivilegeIsAlreadyReserved") {
                            $message.alert({
                                "message": "",
                                "message-code": "",
                                "message-type": "Warning",
                                "en-message": "Cannot check privilege, Please contact IT Helpdesk.",
                                "th-message": "ไม่สามารถตรวจสอบสิทธิ์ได้ กรุณาติดต่อ IT Helpdesk",
                                "technical-message": ""
                            });
                        }
                        else if (result.data['response-data']['result'] == "InvalidProduct") {
                            $message.alert({
                                "message": "",
                                "message-code": "",
                                "message-type": "Warning",
                                "en-message": "Cannot check privilege, Please contact IT Helpdesk.",
                                "th-message": "ไม่สามารถตรวจสอบสิทธิ์ได้ กรุณาติดต่อ IT Helpdesk",
                                "technical-message": ""
                            });
                        }
                        else if (result.data['response-data']['result'] == "CannotFindPrivilege") {
                            $message.alert({
                                "message": "",
                                "message-code": "",
                                "message-type": "Warning",
                                "en-message": "Customer is not eligible.",
                                "th-message": "ไม่พบสิทธิ์ลูกค้า",
                                "technical-message": ""
                            });
                        }
                        else if (result.data['response-data']['result'] == "PrivilegeIsAlreadyUsed") {
                            $message.alert({
                                "message": "",
                                "message-code": "",
                                "message-type": "Warning",
                                "en-message": "Privilege is already used.",
                                "th-message": "ลูกค้าใชสิ้ทธิ์ไปแล้ว",
                                "technical-message": ""
                            });
                        }
                        else if (result.data['response-data']['result'] == "CustomerMustUsedCampaignRS003") {
                            $message.alert({
                                "message": "",
                                "message-code": "",
                                "message-type": "Warning",
                                "en-message": "Privilege is already used.",
                                "th-message": "ลูกค้าใชสิ้ทธิ์ไปแล้ว",
                                "technical-message": ""
                            });
                        }
                        else if (result.data['response-data']['result'] == "AlreadyUsedPrivilegeCampaignRS003") {
                            $message.alert({
                                "message": "",
                                "message-code": "",
                                "message-type": "Warning",
                                "en-message": "Privilege is already used.",
                                "th-message": "ลูกค้าใชสิ้ทธิ์ไปแล้ว",
                                "technical-message": ""
                            });
                        } else {
                            $message.alert({
                                "message": "",
                                "message-code": "",
                                "message-type": "Warning",
                                "en-message": result.data['response-data']['result'],
                                "th-message": result.data['response-data']['result'],
                                "technical-message": ""
                            });

                        }

                    }

                    console.log(result);
                });
            }
        };

    });
