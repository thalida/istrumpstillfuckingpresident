'use strict';

var service = function( $sce ){
	'ngInject';
	var utils = {};

	utils.getRandomInArr = function( arr ){
		return arr[Math.floor(Math.random()*arr.length)];
	};

	utils.sanitize = function(str){
		return $sce.trustAsHtml(str);
	};

	return utils;
}

module.exports = service;
