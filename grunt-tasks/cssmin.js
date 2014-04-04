
/**
 * cssmin
 * Compress CSS files.
 */

module.exports = function (grunt) {

	return {

		devstyles: {
			files: [{
				src: '<%= localStyles %>/<%= fileName %>.css',
				dest: '<%= localStyles %>/<%= fileName %>.min.css'
			}]
		},

		diststyles: {
			files: [{
				src: '<%= publicStyles %>/<%= fileName %>.css',
				dest: '<%= publicStyles %>/<%= fileName %>.min.css'
			}]
		}

	};

};