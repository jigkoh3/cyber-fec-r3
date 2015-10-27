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
  	var userProfile = $localstorage.getObject("userProfile");
  	if(userProfile != null)
  	{
  		$scope.isAuthen = true;
  	}
    
  });