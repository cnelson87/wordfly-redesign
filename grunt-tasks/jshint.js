
/**
 * jshint
 * Validate files with JSHint.
 */

module.exports = function (grunt) {

	return {

		options: {
			// options here to override JSHint defaults
			globals: {
				$: true,
				_: true,
				jQuery: true,
				Backbone: true,
				Modernizr: true,
				TweenMax: true,
				alert: true,
				console: true,
				module: true,
				document: true
			}
		},

		files: [
			'<%= sourceScripts %>/**/*.js',
			'!<%= sourceScripts %>/shims/**/*.js',
			'!<%= sourceVendor %>/**/*.js',
			'!Gruntfile.js'
		]

	};

};