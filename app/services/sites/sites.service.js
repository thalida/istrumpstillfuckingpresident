'use strict';

var service = function (IS_FUCK_ENABLED) {
	'ngInject';

	var Sites = function () {
		this.sisterSite = {
			hasFucks: false,
			url: null,
		};

		this.dev = {
			safe: 'http://drumpf.dev:8080',
			fuck: 'http://fuckingdrumpf.dev:8080',
		};

		this.prod = {
			safe: 'http://istrumpstillpresident.co',
			fuck: 'http://istrumpstillfuckingpresident.co',
		};

		this.setSisterSite();
	};

	Sites.prototype.getSisterSite = function () {
		return this.sisterSite;
	};

	Sites.prototype.setSisterSite = function () {
		var urls = (MODE.production) ? this.prod : this.dev;
		var url = (IS_FUCK_ENABLED) ? urls.safe : urls.fuck;
		var hasFucks = !IS_FUCK_ENABLED;

		this.sisterSite = {url, hasFucks};

		return this.sisterSite;
	};

	return new Sites();
}

module.exports = service;
