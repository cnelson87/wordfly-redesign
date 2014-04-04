
/**
 * includereplace
 * Grunt task to include files and replace variables to build HTML pages.
 */

module.exports = function (grunt) {

	return {

		devbuild: {
			options: {
				globals: {
					"meta-title": "<%= metaTitle %>",
					"file-name": "<%= fileName %>"
				},
				includesDir: '<%= sourceIncludes %>'
			},
			files: [{
				src: ['**/*.html', '!_includes/*.html'],
				dest: '<%= localPath %>/',
				expand: true,
				cwd: '<%= sourceHTML %>/'
			}]
		},

		distbuild: {
			options: {
				globals: {
					"meta-title": "<%= metaTitle %>",
					"file-name": "<%= fileName %>"
				},
				includesDir: '<%= sourceIncludes %>'
			},
			files: [{
				src: ['**/*.html', '!_includes/*.html'],
				dest: '<%= publicPath %>/',
				expand: true,
				cwd: '<%= sourceHTML %>/'
			}]
		}

	};

};