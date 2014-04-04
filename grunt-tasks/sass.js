
/**
 * sass
 * Compile Sass to CSS
 */

module.exports = function (grunt) {

	return {

		devcompile: {
			options: {
				//style: 'expanded',
				style: 'compact',
				debug: false
			},
			files: [{
				src: '<%= sourceStyles %>/styles.scss',
				dest: '<%= localStyles %>/<%= fileName %>.css'
			}]
		},

		distcompile: {
			options: {
				//style: 'expanded',
				style: 'compact',
				debug: false
			},
			files: [{
				src: '<%= sourceStyles %>/styles.scss',
				dest: '<%= publicStyles %>/<%= fileName %>.css'
			}]
		}

	};

};