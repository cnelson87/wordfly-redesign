
/**
 * browserify2
 * Compile javascript modules
 */

var handleify	= require('handleify');

module.exports = function (grunt) {

	return {

		devcompile: {
			entry: '<%= sourceScripts %>/initialize.js',
			compile: '<%= localScripts %>/<%= fileName %>.js',
			// Precompile Handlebars templates
			beforeHook: function(bundle) {
				bundle.transform(handleify);
			},
			debug: true
		},

		distcompile: {
			entry: '<%= sourceScripts %>/initialize.js',
			compile: '<%= publicScripts %>/<%= fileName %>.js',
			// Precompile Handlebars templates
			beforeHook: function(bundle) {
				bundle.transform(handleify);
			},
			debug: true
		}

	};

};