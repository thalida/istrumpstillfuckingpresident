'use strict';

angular
.module('app')
.config(function( $urlRouterProvider, $locationProvider ){
    'ngInject';

    $locationProvider.html5Mode( true );
    $urlRouterProvider.otherwise('/');
});
