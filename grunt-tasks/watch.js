
/**
 * watch
 * Run predefined tasks whenever watched file patterns are added, changed or deleted.
 */

module.exports = function (grunt) {

	return {

		options: {
			spawn: false,
			livereload: '<%= lrPortNum %>'
		},

		html: {
			files: '<%= sourceHTML %>/**/*.html',
			tasks: ['includereplace']
		},

		scripts: {
			files: '<%= sourceScripts %>/**/*.js',
			tasks: ['jshint', 'browserify2', 'uglify']
		},

		styles: {
			files: '<%= sourceStyles %>/**/*.*',
			tasks: ['sass', 'cssmin']
		},

		templates: {
			files: '<%= sourceTemplates %>/**/*.hbs',
			tasks: ['browserify2', 'uglify']
		}

	};

};