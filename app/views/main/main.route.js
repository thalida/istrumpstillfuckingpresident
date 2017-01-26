'use strict';

var route = function( $stateProvider ){
	'ngInject';

    $stateProvider.state('main', {
        url: '/',
        templateUrl: 'views/main/main.html',
        controller: 'MainController',
        controllerAs: '$ctrl'
    });
};

module.exports = route;
