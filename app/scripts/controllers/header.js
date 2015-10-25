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
  	var customerProfile = $localstorage.getObject("customerProfile");
  	if(customerProfile != null)
  	{
  		$scope.isAuthen = true;
  	}
    
  });