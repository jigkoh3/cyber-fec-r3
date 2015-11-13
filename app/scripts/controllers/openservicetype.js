'use strict';
angular.module('fec3App')
    .controller('openServiceTypeCtrl', function($scope, $location) {
	var openservicetype = 'NEW';
	
	if(openservicetype == 'NEW'){
		$location.path('/openservicenew');
	}else{
		console.log(openservicetype);
	}
});