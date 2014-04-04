
/**
 * copy
 * Copy files and folders.
 */

module.exports = function (grunt) {

	return {

		devfonts: {
			files: [
				{
					expand: true,
					cwd: '<%= sourceFonts %>',
					src: [
						'**/*',
					],
					dest: '<%= localFonts %>'					
				}
			]
		},

		distfonts: {
			files: [
				{
					expand: true,
					cwd: '<%= sourceFonts %>',
					src: [
						'**/*',
					],
					dest: '<%= publicFonts %>'					
				}
			]
		},

		devimages: {
			files: [
				{
					expand: true,
					cwd: '<%= sourceImages %>',
					src: [
						'**/*',
					],
					dest: '<%= localImages %>'
				}
			]
		},

		distimages: {
			files: [
				{
					expand: true,
					cwd: '<%= sourceImages %>',
					src: [
						'**/*',
					],
					dest: '<%= publicImages %>'					
				}
			]
		}

	};

};