'use strict';

var route = function ($stateProvider, $urlRouterProvider) {
	'ngInject';

	$urlRouterProvider.when('/', '/answer/');
	$urlRouterProvider.when('/:view', '/:view/');
	$urlRouterProvider.when('/:view/:id/', '/:view/:id');

    $stateProvider.state('main', {
        url: '/:view/:id',
        templateUrl: 'views/main/main.html',
        controller: 'MainController',
        controllerAs: '$ctrl'
    });
};

module.exports = route;
