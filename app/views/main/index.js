'use strict';

// Styles
require('./main.scss');

// Templates
require('./partials');
require('./main.html');

angular
    .module('app')
    .config( require('./main.route.js') )
    .controller('MainController', require('./main.controller.js') )
