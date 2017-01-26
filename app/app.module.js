'use strict';

var ngstorage = require('ngstorage');

angular
.module('app', [
	require('angular-animate'),
	require('angular-resource'),
	require('angular-sanitize'),
	require('angular-touch'),
    require('angular-ui-router'),
	'ngStorage'
])
.constant('IS_FUCK_ENABLED', (function () {
	var enabledSites = [
		'fuckingdrumpf.dev',
		'istrumpstillfuckingpresident.co',
		'istrumpstillfuckingpresident.com'
	];

	return enabledSites.indexOf(window.location.hostname) >= 0;
})())
.constant('IS_STILL_PRESIDENT', require('./assets/data/stillpresident.json'))
.constant('NEGATIVE_ANSWERS', require('./assets/data/answers/negative.json'))
.constant('POSITIVE_ANSWERS', require('./assets/data/answers/positive.json'))
.constant('JOY_COLLECTION', require('./assets/data/joy/collection.json'))
.constant('ACTIONS_COLLECTION', require('./assets/data/actions/collection.json'))
