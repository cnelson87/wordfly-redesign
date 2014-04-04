
/**
 * notify
 * Automatic desktop notifications for Grunt errors and warnings.
 */

module.exports = function (grunt) {

	return {

		html: {
			options: {
				title: '<%= pkgDesc %>',
				message: 'HTML - Done!'
			}
		},

		scripts: {
			options: {
				title: '<%= pkgDesc %>',
				message: 'Scripts - Done!'
			}
		},

		styles: {
			options: {
				title: '<%= pkgDesc %>',
				message: 'Styles - Done!'
			}
		}

	};

};