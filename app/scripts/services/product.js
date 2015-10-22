'use strict';

angular.module('fec3App')
    .service('productService', function($http, $filter, $timeout, dalService) {

        this.getProductRecommened = function(fnCallback) {
            if (!dalService.demo) {
                //http://sff-dev.true.th:18087/profiles/customer/get?
                // certificateid
                // certificatetype
                // product-id-name 
                // product-id-number
                var target = '/sales-services/rest/master/get_categories';

                dalService.callServiceGet(target, null, function(result) {
                    fnCallback(result);
                });
            } else {
                var result = {
                    "status": "SUCCESSFUL",
                    "fault": null,
                    "trx-id": "S00000000000001",
                    "process-instance": "SFF_node1",
                    "response-data": {
                        "categories": [{
                            "id": 182,
                            "name": "Accessories",
                            "child": [{
                                "id": 263,
                                "name": "Battery",
                                "child": [{
                                    "id": 810,
                                    "name": "POP2",
                                    "child": []
                                }]
                            }, {
                                "id": 170,
                                "name": "Charger, Adapter, Cable",
                                "child": [{
                                    "id": 172,
                                    "name": "Cable",
                                    "child": []
                                }, {
                                    "id": 283,
                                    "name": "Charger",
                                    "child": []
                                }, {
                                    "id": 209,
                                    "name": "USB Cable",
                                    "child": []
                                }, {
                                    "id": 171,
                                    "name": "Universal Charger,Plug",
                                    "child": []
                                }]
                            }, {
                                "id": 167,
                                "name": "House Brand Case",
                                "child": [{
                                    "id": 204,
                                    "name": "Go Live Case",
                                    "child": []
                                }, {
                                    "id": 203,
                                    "name": "True Beyond Case",
                                    "child": []
                                }]
                            }, {
                                "id": 175,
                                "name": "Other Acc",
                                "child": []
                            }, {
                                "id": 262,
                                "name": "Power Bank, Battery",
                                "child": [{
                                    "id": 282,
                                    "name": "External Battery",
                                    "child": []
                                }]
                            }, {
                                "id": 168,
                                "name": "Protection Film",
                                "child": [{
                                    "id": 208,
                                    "name": "Golive Film",
                                    "child": []
                                }, {
                                    "id": 205,
                                    "name": "Samsung Film",
                                    "child": []
                                }, {
                                    "id": 180,
                                    "name": "True Beyond Film",
                                    "child": []
                                }, {
                                    "id": 207,
                                    "name": "iPad Film",
                                    "child": []
                                }, {
                                    "id": 206,
                                    "name": "iPhone Film",
                                    "child": [{
                                        "id": 181,
                                        "name": "iPhone 4, 4S Film",
                                        "child": []
                                    }, {
                                        "id": 218,
                                        "name": "iPhone 5, 5S, 5C Film",
                                        "child": []
                                    }]
                                }]
                            }, {
                                "id": 184,
                                "name": "Samsung Case",
                                "child": [{
                                    "id": 247,
                                    "name": "Other SS Case",
                                    "child": []
                                }, {
                                    "id": 243,
                                    "name": "SS Note 2",
                                    "child": []
                                }, {
                                    "id": 244,
                                    "name": "SS Note 3",
                                    "child": []
                                }, {
                                    "id": 246,
                                    "name": "SS Note 8",
                                    "child": []
                                }, {
                                    "id": 242,
                                    "name": "SS S3",
                                    "child": []
                                }, {
                                    "id": 221,
                                    "name": "SS S4",
                                    "child": []
                                }]
                            }, {
                                "id": 211,
                                "name": "Speaker,Headphone,Bluetooth",
                                "child": [{
                                    "id": 216,
                                    "name": "Bluetooth",
                                    "child": []
                                }, {
                                    "id": 217,
                                    "name": "Headphone",
                                    "child": []
                                }, {
                                    "id": 213,
                                    "name": "Headset",
                                    "child": [{
                                        "id": 177,
                                        "name": "Headset",
                                        "child": []
                                    }, {
                                        "id": 178,
                                        "name": "In Ear",
                                        "child": []
                                    }, {
                                        "id": 179,
                                        "name": "On Ear ",
                                        "child": []
                                    }, {
                                        "id": 214,
                                        "name": "Over Ear",
                                        "child": []
                                    }, {
                                        "id": 215,
                                        "name": "Wireless Speaker",
                                        "child": []
                                    }]
                                }, {
                                    "id": 212,
                                    "name": "Small Talk",
                                    "child": []
                                }, {
                                    "id": 176,
                                    "name": "Speaker",
                                    "child": []
                                }]
                            }, {
                                "id": 348,
                                "name": "iPad mini2, mini3",
                                "child": []
                            }, {
                                "id": 465,
                                "name": "iPhone 6 Plus",
                                "child": []
                            }]
                        }, {
                            "id": 523,
                            "name": "Bundle",
                            "child": [{
                                "id": 642,
                                "name": "ATB6",
                                "child": []
                            }, {
                                "id": 503,
                                "name": "สุข X3 S",
                                "child": []
                            }]
                        }, {
                            "id": 73,
                            "name": "Campaign",
                            "child": [{
                                "id": 93,
                                "name": "ATB",
                                "child": []
                            }, {
                                "id": 92,
                                "name": "True Move H",
                                "child": []
                            }]
                        }, {
                            "id": 1,
                            "name": "Device",
                            "child": [{
                                "id": 26,
                                "name": "AirCard, WiFi",
                                "child": []
                            }, {
                                "id": 112,
                                "name": "Modem Router",
                                "child": []
                            }, {
                                "id": 23,
                                "name": "Smart Phone",
                                "child": [{
                                    "id": 362,
                                    "name": "ASUS",
                                    "child": []
                                }, {
                                    "id": 30,
                                    "name": "BlackBerry",
                                    "child": []
                                }, {
                                    "id": 47,
                                    "name": "HTC",
                                    "child": []
                                }, {
                                    "id": 144,
                                    "name": "Lenovo",
                                    "child": []
                                }, {
                                    "id": 46,
                                    "name": "Motorola",
                                    "child": []
                                }, {
                                    "id": 48,
                                    "name": "Nokia",
                                    "child": [{
                                        "id": 142,
                                        "name": "Nokia",
                                        "child": []
                                    }, {
                                        "id": 143,
                                        "name": "Nokia Mlink",
                                        "child": []
                                    }]
                                }, {
                                    "id": 79,
                                    "name": "OPPO",
                                    "child": []
                                }, {
                                    "id": 45,
                                    "name": "SONY",
                                    "child": []
                                }, {
                                    "id": 49,
                                    "name": "Samsung",
                                    "child": [{
                                        "id": 69,
                                        "name": "ERICA 3G HERO",
                                        "child": []
                                    }, {
                                        "id": 65,
                                        "name": "GALAXY ACE",
                                        "child": []
                                    }, {
                                        "id": 89,
                                        "name": "GALAXY GRAND",
                                        "child": []
                                    }, {
                                        "id": 70,
                                        "name": "GALAXY NOTE",
                                        "child": []
                                    }, {
                                        "id": 66,
                                        "name": "GALAXY S",
                                        "child": []
                                    }, {
                                        "id": 302,
                                        "name": "Galaxy A",
                                        "child": []
                                    }, {
                                        "id": 71,
                                        "name": "Other",
                                        "child": []
                                    }]
                                }, {
                                    "id": 163,
                                    "name": "i-mobile",
                                    "child": []
                                }]
                            }, {
                                "id": 25,
                                "name": "Tablet",
                                "child": [{
                                    "id": 123,
                                    "name": "Asus Tablet",
                                    "child": []
                                }, {
                                    "id": 117,
                                    "name": "Lenovo Tablet",
                                    "child": []
                                }, {
                                    "id": 31,
                                    "name": "Samsung Tablet",
                                    "child": []
                                }, {
                                    "id": 54,
                                    "name": "Sony Tablet",
                                    "child": []
                                }, {
                                    "id": 116,
                                    "name": "Surface ",
                                    "child": []
                                }]
                            }, {
                                "id": 24,
                                "name": "iPad",
                                "child": [{
                                    "id": 72,
                                    "name": "Other",
                                    "child": []
                                }, {
                                    "id": 53,
                                    "name": "iPad 3G",
                                    "child": []
                                }, {
                                    "id": 103,
                                    "name": "iPad Air",
                                    "child": []
                                }, {
                                    "id": 502,
                                    "name": "iPad Air2",
                                    "child": []
                                }, {
                                    "id": 51,
                                    "name": "iPad RTN",
                                    "child": []
                                }, {
                                    "id": 50,
                                    "name": "iPad mini",
                                    "child": []
                                }, {
                                    "id": 104,
                                    "name": "iPad mini2",
                                    "child": []
                                }, {
                                    "id": 52,
                                    "name": "iPad4G",
                                    "child": []
                                }]
                            }, {
                                "id": 22,
                                "name": "iPhone",
                                "child": [{
                                    "id": 44,
                                    "name": "iPhone 3GS",
                                    "child": []
                                }, {
                                    "id": 42,
                                    "name": "iPhone 4",
                                    "child": []
                                }, {
                                    "id": 29,
                                    "name": "iPhone 4S",
                                    "child": []
                                }, {
                                    "id": 43,
                                    "name": "iPhone 5",
                                    "child": []
                                }, {
                                    "id": 102,
                                    "name": "iPhone 5C",
                                    "child": []
                                }, {
                                    "id": 101,
                                    "name": "iPhone 5S",
                                    "child": []
                                }]
                            }]
                        }, {
                            "id": 803,
                            "name": "Recommend",
                            "child": [{
                                "id": 804,
                                "name": "Devices",
                                "child": [{
                                    "id": 809,
                                    "name": "Other",
                                    "child": []
                                }, {
                                    "id": 807,
                                    "name": "Samsung",
                                    "child": []
                                }, {
                                    "id": 808,
                                    "name": "iPhone 6",
                                    "child": []
                                }]
                            }, {
                                "id": 805,
                                "name": "Promotions",
                                "child": []
                            }, {
                                "id": 806,
                                "name": "Services",
                                "child": []
                            }]
                        }, {
                            "id": 97,
                            "name": "Sim Card",
                            "child": [{
                                "id": 99,
                                "name": "Post Pay",
                                "child": [{
                                    "id": 77,
                                    "name": "SIM 3G",
                                    "child": []
                                }, {
                                    "id": 100,
                                    "name": "SIM 4G",
                                    "child": []
                                }]
                            }, {
                                "id": 98,
                                "name": "Pre Pay",
                                "child": []
                            }]
                        }, {
                            "id": 74,
                            "name": "เปิดบริการ",
                            "child": [{
                                "id": 75,
                                "name": "True Internet",
                                "child": []
                            }, {
                                "id": 76,
                                "name": "True Vision",
                                "child": []
                            }, {
                                "id": 96,
                                "name": "TrueMoveH",
                                "child": []
                            }]
                        }]
                    },
                    "display-message": null
                };

                var recommend = $filter('filter')(result["response-data"].categories, {
                    "name": "Recommend"
                });
                $timeout(function() {
                    fnCallback({
                        status: true,
                        data: recommend,
                        error: "",
                        msgErr: ""
                    });
                }, 1000);
            }
        };


        this.getCategories = function(fnCallback) {
            if (!dalService.demo) {
                //http://sff-dev.true.th:18087/profiles/customer/get?
                // certificateid
                // certificatetype
                // product-id-name 
                // product-id-number
                var target = '/sales-services/rest/master/get_products_by_category';

                dalService.callServiceGet(target, null, function(result) {
                    fnCallback(result);
                });
            } else {
                var result = {
                    "status": "SUCCESSFUL",
                    "fault": null,
                    "trx-id": "S00000000000001",
                    "process-instance": "SFF_node1",
                    "response-data": {
                        "categories": [{
                            "id": 182,
                            "name": "Accessories",
                            "child": [{
                                "id": 263,
                                "name": "Battery",
                                "child": [{
                                    "id": 810,
                                    "name": "POP2",
                                    "child": []
                                }]
                            }, {
                                "id": 170,
                                "name": "Charger, Adapter, Cable",
                                "child": [{
                                    "id": 172,
                                    "name": "Cable",
                                    "child": []
                                }, {
                                    "id": 283,
                                    "name": "Charger",
                                    "child": []
                                }, {
                                    "id": 209,
                                    "name": "USB Cable",
                                    "child": []
                                }, {
                                    "id": 171,
                                    "name": "Universal Charger,Plug",
                                    "child": []
                                }]
                            }, {
                                "id": 167,
                                "name": "House Brand Case",
                                "child": [{
                                    "id": 204,
                                    "name": "Go Live Case",
                                    "child": []
                                }, {
                                    "id": 203,
                                    "name": "True Beyond Case",
                                    "child": []
                                }]
                            }, {
                                "id": 175,
                                "name": "Other Acc",
                                "child": []
                            }, {
                                "id": 262,
                                "name": "Power Bank, Battery",
                                "child": [{
                                    "id": 282,
                                    "name": "External Battery",
                                    "child": []
                                }]
                            }, {
                                "id": 168,
                                "name": "Protection Film",
                                "child": [{
                                    "id": 208,
                                    "name": "Golive Film",
                                    "child": []
                                }, {
                                    "id": 205,
                                    "name": "Samsung Film",
                                    "child": []
                                }, {
                                    "id": 180,
                                    "name": "True Beyond Film",
                                    "child": []
                                }, {
                                    "id": 207,
                                    "name": "iPad Film",
                                    "child": []
                                }, {
                                    "id": 206,
                                    "name": "iPhone Film",
                                    "child": [{
                                        "id": 181,
                                        "name": "iPhone 4, 4S Film",
                                        "child": []
                                    }, {
                                        "id": 218,
                                        "name": "iPhone 5, 5S, 5C Film",
                                        "child": []
                                    }]
                                }]
                            }, {
                                "id": 184,
                                "name": "Samsung Case",
                                "child": [{
                                    "id": 247,
                                    "name": "Other SS Case",
                                    "child": []
                                }, {
                                    "id": 243,
                                    "name": "SS Note 2",
                                    "child": []
                                }, {
                                    "id": 244,
                                    "name": "SS Note 3",
                                    "child": []
                                }, {
                                    "id": 246,
                                    "name": "SS Note 8",
                                    "child": []
                                }, {
                                    "id": 242,
                                    "name": "SS S3",
                                    "child": []
                                }, {
                                    "id": 221,
                                    "name": "SS S4",
                                    "child": []
                                }]
                            }, {
                                "id": 211,
                                "name": "Speaker,Headphone,Bluetooth",
                                "child": [{
                                    "id": 216,
                                    "name": "Bluetooth",
                                    "child": []
                                }, {
                                    "id": 217,
                                    "name": "Headphone",
                                    "child": []
                                }, {
                                    "id": 213,
                                    "name": "Headset",
                                    "child": [{
                                        "id": 177,
                                        "name": "Headset",
                                        "child": []
                                    }, {
                                        "id": 178,
                                        "name": "In Ear",
                                        "child": []
                                    }, {
                                        "id": 179,
                                        "name": "On Ear ",
                                        "child": []
                                    }, {
                                        "id": 214,
                                        "name": "Over Ear",
                                        "child": []
                                    }, {
                                        "id": 215,
                                        "name": "Wireless Speaker",
                                        "child": []
                                    }]
                                }, {
                                    "id": 212,
                                    "name": "Small Talk",
                                    "child": []
                                }, {
                                    "id": 176,
                                    "name": "Speaker",
                                    "child": []
                                }]
                            }, {
                                "id": 348,
                                "name": "iPad mini2, mini3",
                                "child": []
                            }, {
                                "id": 465,
                                "name": "iPhone 6 Plus",
                                "child": []
                            }]
                        }, {
                            "id": 523,
                            "name": "Bundle",
                            "child": [{
                                "id": 642,
                                "name": "ATB6",
                                "child": []
                            }, {
                                "id": 503,
                                "name": "สุข X3 S",
                                "child": []
                            }]
                        }, {
                            "id": 73,
                            "name": "Campaign",
                            "child": [{
                                "id": 93,
                                "name": "ATB",
                                "child": []
                            }, {
                                "id": 92,
                                "name": "True Move H",
                                "child": []
                            }]
                        }, {
                            "id": 1,
                            "name": "Device",
                            "child": [{
                                "id": 26,
                                "name": "AirCard, WiFi",
                                "child": []
                            }, {
                                "id": 112,
                                "name": "Modem Router",
                                "child": []
                            }, {
                                "id": 23,
                                "name": "Smart Phone",
                                "child": [{
                                    "id": 362,
                                    "name": "ASUS",
                                    "child": []
                                }, {
                                    "id": 30,
                                    "name": "BlackBerry",
                                    "child": []
                                }, {
                                    "id": 47,
                                    "name": "HTC",
                                    "child": []
                                }, {
                                    "id": 144,
                                    "name": "Lenovo",
                                    "child": []
                                }, {
                                    "id": 46,
                                    "name": "Motorola",
                                    "child": []
                                }, {
                                    "id": 48,
                                    "name": "Nokia",
                                    "child": [{
                                        "id": 142,
                                        "name": "Nokia",
                                        "child": []
                                    }, {
                                        "id": 143,
                                        "name": "Nokia Mlink",
                                        "child": []
                                    }]
                                }, {
                                    "id": 79,
                                    "name": "OPPO",
                                    "child": []
                                }, {
                                    "id": 45,
                                    "name": "SONY",
                                    "child": []
                                }, {
                                    "id": 49,
                                    "name": "Samsung",
                                    "child": [{
                                        "id": 69,
                                        "name": "ERICA 3G HERO",
                                        "child": []
                                    }, {
                                        "id": 65,
                                        "name": "GALAXY ACE",
                                        "child": []
                                    }, {
                                        "id": 89,
                                        "name": "GALAXY GRAND",
                                        "child": []
                                    }, {
                                        "id": 70,
                                        "name": "GALAXY NOTE",
                                        "child": []
                                    }, {
                                        "id": 66,
                                        "name": "GALAXY S",
                                        "child": []
                                    }, {
                                        "id": 302,
                                        "name": "Galaxy A",
                                        "child": []
                                    }, {
                                        "id": 71,
                                        "name": "Other",
                                        "child": []
                                    }]
                                }, {
                                    "id": 163,
                                    "name": "i-mobile",
                                    "child": []
                                }]
                            }, {
                                "id": 25,
                                "name": "Tablet",
                                "child": [{
                                    "id": 123,
                                    "name": "Asus Tablet",
                                    "child": []
                                }, {
                                    "id": 117,
                                    "name": "Lenovo Tablet",
                                    "child": []
                                }, {
                                    "id": 31,
                                    "name": "Samsung Tablet",
                                    "child": []
                                }, {
                                    "id": 54,
                                    "name": "Sony Tablet",
                                    "child": []
                                }, {
                                    "id": 116,
                                    "name": "Surface ",
                                    "child": []
                                }]
                            }, {
                                "id": 24,
                                "name": "iPad",
                                "child": [{
                                    "id": 72,
                                    "name": "Other",
                                    "child": []
                                }, {
                                    "id": 53,
                                    "name": "iPad 3G",
                                    "child": []
                                }, {
                                    "id": 103,
                                    "name": "iPad Air",
                                    "child": []
                                }, {
                                    "id": 502,
                                    "name": "iPad Air2",
                                    "child": []
                                }, {
                                    "id": 51,
                                    "name": "iPad RTN",
                                    "child": []
                                }, {
                                    "id": 50,
                                    "name": "iPad mini",
                                    "child": []
                                }, {
                                    "id": 104,
                                    "name": "iPad mini2",
                                    "child": []
                                }, {
                                    "id": 52,
                                    "name": "iPad4G",
                                    "child": []
                                }]
                            }, {
                                "id": 22,
                                "name": "iPhone",
                                "child": [{
                                    "id": 44,
                                    "name": "iPhone 3GS",
                                    "child": []
                                }, {
                                    "id": 42,
                                    "name": "iPhone 4",
                                    "child": []
                                }, {
                                    "id": 29,
                                    "name": "iPhone 4S",
                                    "child": []
                                }, {
                                    "id": 43,
                                    "name": "iPhone 5",
                                    "child": []
                                }, {
                                    "id": 102,
                                    "name": "iPhone 5C",
                                    "child": []
                                }, {
                                    "id": 101,
                                    "name": "iPhone 5S",
                                    "child": []
                                }]
                            }]
                        }, {
                            "id": 803,
                            "name": "Recommend",
                            "child": [{
                                "id": 804,
                                "name": "Devices",
                                "child": [{
                                    "id": 809,
                                    "name": "Other",
                                    "child": []
                                }, {
                                    "id": 807,
                                    "name": "Samsung",
                                    "child": []
                                }, {
                                    "id": 808,
                                    "name": "iPhone 6",
                                    "child": []
                                }]
                            }, {
                                "id": 805,
                                "name": "Promotions",
                                "child": []
                            }, {
                                "id": 806,
                                "name": "Services",
                                "child": []
                            }]
                        }, {
                            "id": 97,
                            "name": "Sim Card",
                            "child": [{
                                "id": 99,
                                "name": "Post Pay",
                                "child": [{
                                    "id": 77,
                                    "name": "SIM 3G",
                                    "child": []
                                }, {
                                    "id": 100,
                                    "name": "SIM 4G",
                                    "child": []
                                }]
                            }, {
                                "id": 98,
                                "name": "Pre Pay",
                                "child": []
                            }]
                        }, {
                            "id": 74,
                            "name": "เปิดบริการ",
                            "child": [{
                                "id": 75,
                                "name": "True Internet",
                                "child": []
                            }, {
                                "id": 76,
                                "name": "True Vision",
                                "child": []
                            }, {
                                "id": 96,
                                "name": "TrueMoveH",
                                "child": []
                            }]
                        }]
                    },
                    "display-message": null
                };
                var devices = $filter('filter')(result["response-data"].categories, {
                    "name": "Device"
                });
                $timeout(function() {
                    fnCallback({
                        status: true,
                        data: devices,
                        error: "",
                        msgErr: ""
                    });
                }, 1000);
            }
        };

    });