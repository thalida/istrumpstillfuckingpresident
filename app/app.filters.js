'use strict';

angular
.module('app')
.filter('fuck', function(IS_FUCK_ENABLED){
    return function(input, ending) {
        if (!IS_FUCK_ENABLED) {
            return '';
        }

        return 'fuck' + ending;
    }
});
