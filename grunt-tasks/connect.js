
/**
 * connect
 * Start a connect web server.
 */

module.exports = function (grunt) {

	return {

		dev: {
			options: {
				base: '<%= localPath %>/',
				port: '<%= portNum %>',
				livereload: '<%= lrPortNum %>'
			}
		}

	};

};