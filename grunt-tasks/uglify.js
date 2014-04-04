
/**
 * uglify
 * Minify files with UglifyJS.
 */

module.exports = function (grunt) {

	return {

		options: {
			mangle: false
		},
		// No need to uglify vendor files, already concating min versions
		// vendor: {
		// 	files: [{
		// 		src: '<%= outputVendor %>/vendor.js',
		// 		dest: '<%= outputVendor %>/vendor.min.js'
		// 	}]
		// },

		devscripts: {
			files: [{
				src: '<%= localScripts %>/<%= fileName %>.js',
				dest: '<%= localScripts %>/<%= fileName %>.min.js'
			}]
		},

		distscripts: {
			files: [{
				src: '<%= publicScripts %>/<%= fileName %>.js',
				dest: '<%= publicScripts %>/<%= fileName %>.min.js'
			}]
		}

	};

};