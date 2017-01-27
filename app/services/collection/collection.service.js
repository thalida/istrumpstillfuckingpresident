'use strict';

var service = function (
	utils,
	IS_FUCK_ENABLED,
	IS_STILL_PRESIDENT,
	NEGATIVE_ANSWERS,
	POSITIVE_ANSWERS,
	JOY_COLLECTION,
	ACTIONS_COLLECTION
) {
	'ngInject';

	var itemGroups = {
		joy: JOY_COLLECTION,
		actions: ACTIONS_COLLECTION,
		answers: {
			positive: POSITIVE_ANSWERS,
			negative: NEGATIVE_ANSWERS,
		},
	};

	var Collection = function (type) {
		var self = this;

		this.items = itemGroups[type];

		if (type === 'answers') {
			this.items = (IS_STILL_PRESIDENT) ? this.items.negative : this.items.positive;
		}

		this.selectionType = (type === 'actions') ? 'group' : 'item';

		this.itemsIndexes = [];
		this.usedIndexes = [];
		this.currentIndex = null;
		this.selectedItem = null;

		this.selectedGroup = [];

		_.each(this.items, function (item, index) {
			if (typeof item === 'string' || (item.active && item.active === true)) {
				if (self.selectionType === 'item') {
					self.itemsIndexes.push(index);
				} else {
					self.selectedGroup.push(item);
				}
			}
		});

		return this;
	};

	Collection.prototype.isValidId = function (id) {
		if (this.selectionType === 'item') {
			return this.itemsIndexes.indexOf(id) >= 0;
		} else {
			return typeof this.selectedGroup[id] !== 'undefined' && this.selectedGroup[id] !== null;
		}
	};

	Collection.prototype.updateSelectedItem = function (id) {
		if (this.selectionType !== 'item') {
			return;
		}

		var isValidId = true;

		if (typeof id === 'number' && !isNaN(id)) {
			isValidId = this.isValidId(id);
		}

		if (!isValidId) {
			return false;
		}

		if (typeof this.currentIndex !== 'undefined'
			&& this.currentIndex !== null
			&& this.currentIndex >= 0
		) {
			this.usedIndexes.push(this.currentIndex);
		}

		if (typeof id === 'number' && !isNaN(id)) {
			this.currentIndex = id;
		} else {
			var options = _.difference(this.itemsIndexes, this.usedIndexes);

			if (options.length === 0) {
				this.usedIndexes = [];
				options = angular.copy(this.itemsIndexes);
			}

			this.currentIndex = utils.getRandomInArr(options);
		}

		this.selectedItem = this.items[this.currentIndex];

		return {
			currentIndex: this.currentIndex,
			selectedItem: this.selectedItem,
		};
	};

	return Collection;
}

module.exports = service;
