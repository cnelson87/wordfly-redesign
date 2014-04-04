
module.exports = function(grunt) {

	'use strict';

	var path		= require('path');
	var cwd			= process.cwd();
	var pkg			= grunt.file.readJSON('package.json');

	require('load-grunt-config')( grunt, {
		configPath: path.join(cwd,'grunt-tasks'), //path to task.js files
		init: true, //auto grunt.initConfig
		config: {

			// Pkg data
			pkg			: pkg,
			pkgName		: pkg.name,
			pkgDesc		: pkg.description,
			fileName	: pkg.abbr,
			metaTitle	: pkg.title,
			portNum		: pkg.portNumber,
			lrPortNum	: pkg.livereloadPortNum,

			// source file paths
			sourcePath			: './src',
			sourceData			: './src/data',
			sourceHTML			: './src/html',
			sourceIncludes		: './src/html/_includes',
			sourceFonts			: './src/fonts',
			sourceImages		: './src/images',
			sourceScripts		: './src/scripts',
			sourceStyles		: './src/styles',
			sourceTemplates		: './src/templates',
			sourceVendor		: './src/vendor',

			// local file paths
			localPath			: './local',
			localData			: './local/_data',
			localAssets			: './local/_assets',
			localFonts			: './local/_assets/fonts',
			localImages			: './local/_assets/images',
			localScripts		: './local/_assets/scripts',
			localStyles			: './local/_assets/styles',
			
			// public file paths
			publicPath			: './public',
			publicData			: './public/_data',
			publicAssets		: './public/_assets',
			publicFonts			: './public/_assets/fonts',
			publicImages		: './public/_assets/images',
			publicScripts		: './public/_assets/scripts',
			publicStyles		: './public/_assets/styles'

		},
		'loadGruntTasks': {
			package: require('./package.json'),
			scope: 'devDependencies',
			pattern: 'grunt-*'
		}
	});


	// Register custom tasks
	grunt.registerTask('build', ['includereplace', 'copy', 'jshint', 'concat', 'browserify2', 'sass', 'uglify', 'cssmin']);
	grunt.registerTask('run', ['build', 'connect', 'watch']);


};
