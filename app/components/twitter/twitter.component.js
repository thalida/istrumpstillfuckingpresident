'use strict';

module.exports = {
    templateUrl: 'components/twitter/twitter.html',
    bindings: {
        url: '@'
    },
    controller: [
        '$element',
        '$sce',
        '$timeout',
        '$http',
        function($element, $sce, $timeout, $http){
            var $ctrl = this;

            $ctrl.$onInit = function(){
                $ctrl.$twitterEl = $element.find('.twitter-component');
                $ctrl.render = false;
                $ctrl.embed = null;
                $ctrl.getEmbed();
            };

            $ctrl.getEmbed = function () {
                var queryUrl = $sce.trustAsResourceUrl('https://publish.twitter.com/oembed?omit_script=true&url=' + $ctrl.url);

                $http
                    .jsonp(queryUrl, {jsonpCallbackParam: 'callback'})
                    .then(function (res) {
                        $ctrl.render = true;
                        $ctrl.embed = $sce.trustAsHtml(res.data.html);

                        $timeout(function(){
                            twttr.widgets.load();
                        }, 10)
                    });
            };
        }
    ]
};
