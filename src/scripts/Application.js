/**
 * Application Bootstrapper
 * 
 * @author Chris Nelson
 */

var PubSub					= require('./utils/PubSub');
// var GetAjaxContent			= require('./utils/GetAjaxContent');
// var PerformAjaxPost			= require('./utils/PerformAjaxPost');
// var SerializeFormFields		= require('./utils/SerializeFormFields');
var AppEvents				= require('./events/AppEvents');


var Application = {

	/**
	 * Initialize the app
	 **/
	initialize: function() {
		//console.log('Application:initialize');
		var self = this;

		this.$window = $(window);
		this.$document = $(document);
		this.$html = $('html');
		this.$body = $('body');
		this.$wrapper = $('#wrapper');
		this.$menu = $('#menu');
		this.$btnMenu = $('#btn-menu');
		this.$closeMenu = $('#close-menu');
		this.$mqIndicator = $('#mq-indicator');

		this.isMenuActive = false;

		// Initialize custom events        
		this.initResizeEndEvent();
		this.initScrollEndEvent();


		this.$btnMenu.on('click', function(e) {
			e.preventDefault();
			if (self.isMenuActive) {
				self.isMenuActive = false;
				self.$wrapper.removeClass('menu-active');
				self.$menu.removeClass('active');
			} else {
				self.isMenuActive = true;
				self.$wrapper.addClass('menu-active');
				self.$menu.addClass('active');
			}
		});

		this.$closeMenu.on('click', function(e) {
			e.preventDefault();
			self.isMenuActive = false;
			self.$wrapper.removeClass('menu-active');
			self.$menu.removeClass('active');
		});


	},

	/**
	* Create pseudo 'resizeEnd' event
	**/
	initResizeEndEvent: function() {
		var self = this;
		var resizeTimer = false;

		this.$window.on('resize', function(e) {
			clearTimeout(resizeTimer);
			resizeTimer = setTimeout(function() {
				self.onWindowResizeEnd();
			},100);
		});
	},

	/**
	* Create pseudo 'scrollEnd' event
	**/
	initScrollEndEvent: function() {
		var self = this;
		var scrollTimer = false;

		this.$window.on('scroll', function(e) {
			clearTimeout(scrollTimer);
			scrollTimer = setTimeout(function() {
				self.onWindowScrollEnd();
			},100);
		});
	},

	onWindowResizeEnd: function() {
		//console.log('onWindowResizeEnd');
		this.$window.trigger('resizeEnd');
	},

	onWindowScrollEnd: function() {
		//console.log('onWindowScrollEnd');
		this.$window.trigger('scrollEnd');
	},

	render: function() {
		//console.log('Application:render');
		//this.$el.html(this.template());
		//return this.$el;
	}

};

module.exports = Application;
