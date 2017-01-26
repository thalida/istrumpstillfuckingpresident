// Vendors
require('jquery');
require('lodash');
require('angular');
require('moment');
require('jquery-color/jquery.color');

window.requireAll = require('./assets/helpers/require-utils.js').requireAll;

// Styles
require('./app.scss');

// Assets
require('./assets/images');

// App
require('./app.module.js');
require('./app.route.js');
require('./app.filters.js');

require('./services');
require('./components');
require('./views');

// Bootstrap the angular app (if it hasn't been done already)
var appScope = angular.element(document.querySelectorAll('.app')).scope()
if( typeof appScope === 'undefined' || appScope === null ){
    angular.bootstrap(document, ['app'])
}
