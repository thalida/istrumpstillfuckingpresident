'use strict';

angular
.module('app')
.filter('fuck', function (IS_FUCK_ENABLED) {
    return function (input, ending) {
        if (!IS_FUCK_ENABLED) {
            return '';
        }

        return 'fuck' + ending;
    }
})
.filter('youtubeEmbedUrl', function ($sce) {
    return function(videoId) {
        return $sce.trustAsResourceUrl('https://www.youtube.com/embed/' + videoId);
    }
})
.filter('spotifyEmbedUrl', function ($sce) {
    return function(videoId) {
        return $sce.trustAsResourceUrl('https://embed.spotify.com/?uri=' + videoId);
    }
})
;
