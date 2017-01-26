'use strict';

var Controller = function() {
	'ngInject';

	var $ctrl = this;

    $ctrl.render = false;

	$ctrl.init = function(){
        $ctrl.render = true;
		$ctrl.foo = 'bar';
	}

	$ctrl.init();
}

module.exports = Controller;
