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
.config( require('./app.route.js') );

// Constants
require('./app.constants.js');
