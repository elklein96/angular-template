(function () {
    'use strict';

    angular
        .module('templateApp.core', [])
        .factory('templateFactory', ['$http', '$q', function($http, $q) {
        
	    	var service = {
	    		foo: fooMethod, 
	    		bar: barMethod 
	    	};

	    	return service;

	        function fooMethod() {
	        	return "foo";
	        }

	        function barMethod() {
	        	return "bar";
	        }
    	}]);
})();
