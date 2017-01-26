'use strict';

var appConsts = {};

for(var key in appConsts) {
   if( appConsts.hasOwnProperty(key) ){
       var value = appConsts[key];
       angular.module('app').constant(key, value);
   }
}
