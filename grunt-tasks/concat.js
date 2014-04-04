
/**
 * concat
 * Concatenate files.
 */

module.exports = function (grunt) {

	return {

		options: {
			separator: '\n;\n'
			//separator: '\n\n'
		},

		devvendor: {
			src: [
				'<%= sourceVendor %>/modernizr.custom.min.js',
				'<%= sourceVendor %>/jquery.min.js',
				'<%= sourceVendor %>/jquery-ui.custom.min.js',
				'<%= sourceVendor %>/TweenMax.min.js',
				'<%= sourceVendor %>/ScrollToPlugin.min.js',
				'<%= sourceVendor %>/moment.min.js',
				'<%= sourceVendor %>/underscore.min.js',
				'<%= sourceVendor %>/backbone.min.js',
				'<%= sourceVendor %>/backbone-super.min.js',
				'<%= sourceVendor %>/class.js',
				'<%= sourceScripts %>/shims/classList.js'
			],
			dest: '<%= localScripts %>/vendor.js'
		},

		distvendor: {
			src: [
				'<%= sourceVendor %>/modernizr.custom.min.js',
				'<%= sourceVendor %>/jquery.min.js',
				'<%= sourceVendor %>/jquery-ui.custom.min.js',
				'<%= sourceVendor %>/TweenMax.min.js',
				'<%= sourceVendor %>/ScrollToPlugin.min.js',
				'<%= sourceVendor %>/moment.min.js',
				'<%= sourceVendor %>/underscore.min.js',
				'<%= sourceVendor %>/backbone.min.js',
				'<%= sourceVendor %>/backbone-super.min.js',
				'<%= sourceVendor %>/class.js',
				'<%= sourceScripts %>/shims/classList.js'
			],
			dest: '<%= publicScripts %>/vendor.js'
		}

	};

};