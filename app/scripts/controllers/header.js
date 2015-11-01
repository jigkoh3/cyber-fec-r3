'use strict';

/**
 * @ngdoc function
 * @name fec3App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the fec3App
 */
angular.module('fec3App')
  .controller('headerCtrl', function ($scope, $localstorage) {
  	$scope.isAuthen = false;
  	var customerProfile = $localstorage.get("customerProfile");
  	//$localstorage.log("customerProfile");
  	//console.log(customerProfile);
  	if(customerProfile)
  	{
  		//console.log("isAuthen : true" )
  		$scope.isAuthen = true;
  	}
    
  });