'use strict';

var Controller = function (
	$state,
	$stateParams,
	utils,
	sitesService,
	Collection,
	IS_FUCK_ENABLED,
	IS_STILL_PRESIDENT,
	NEGATIVE_ANSWERS,
	POSITIVE_ANSWERS,
	JOY_COLLECTION,
	ACTIONS_COLLECTION
) {
	'ngInject';

	var $ctrl = this;

    $ctrl.render = false;

	$ctrl.init = function () {
		var validation = $ctrl.state.validate($stateParams.view);

		if( !validation.passed ) {
			$ctrl.state.go({view: validation.fallback, id: null}, {notify: true});
			return false;
		}

		$ctrl.sisterSite.setup();

		$ctrl.answerCollection = new Collection('answers');
		$ctrl.joyCollection = new Collection('joy');
		$ctrl.actionsCollection = new Collection('actions');

		$ctrl.state.setup({
			view: $stateParams.view,
			id: $stateParams.id - 1
		});

		if ($ctrl.state.currentView !== 'answer') {
			$ctrl.answerCollection.updateSelectedItem();
		}

		$ctrl.render = true;

		return true;
	};

	$ctrl.state = {
		supported: ['answer', 'joy', 'actions'],
		currentView: null,
		currentId: null,
		setup: function (state) {
			var id = parseInt(state.id, 10);

			this.currentView = state.view;

			if (typeof id === 'number' && !isNaN(id)) {
				this.currentId = id;
			} else {
				this.currentId = null;
			}

			if (_.isFunction(this[this.currentView])) {
				this[this.currentView](this.currentId);
			}

			return true;
		},
		go: function (state, params) {
			this.updateLocationBar(state, params);
			this.setup(state);
		},
		updateLocationBar: function (state, params, source) {
			var defaults = { notify: false };
			var settings = angular.extend({}, defaults, params);

			$state.go('main', state, settings);
			$stateParams = state;
		},
		validate: function (state) {
			if (this.supported.indexOf(state) === -1) {
				return {
					passed: false,
					fallback: 'answer',
				}
			}

			return { passed: true };
		},
		answer: function () {
			$ctrl.answerCollection.updateSelectedItem();
		},
		joy: function (id) {
			var res = $ctrl.joyCollection.updateSelectedItem(id);

			if (res === false) {
				this.go({view: this.currentView, id: null});
				return false;
			}

			this.currentId = res.currentIndex + 1;

			var newState = { view: this.currentView, id: this.currentId };
			this.updateLocationBar(newState, {}, 'joy');
			return true;
		}
	};

	$ctrl.sisterSite = {
		data: null,
		setup: function () {
			this.data = sitesService.getSisterSite();
			this.data.cta = (this.data.hasFucks) ? 'Add some fucks' : 'Remove the fucks'
		},
		go: function () {
			window.location.href = this.data.url + window.location.pathname;
		}
	};

	$ctrl.init();
}

module.exports = Controller;
