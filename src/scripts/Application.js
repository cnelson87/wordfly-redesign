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

var FlyoutMenu				= require('./widgets/FlyoutMenu');
var ContactForm				= require('./widgets/ContactForm');
var NewsletterForm			= require('./widgets/NewsletterForm');

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

		this.$mqIndicator = $('#mq-indicator');

		this.bodyID = this.$body.attr('id');


		// Initialize custom events
		this.initResizeEndEvent();
		this.initScrollEndEvent();


		// Initialize widgets
		new FlyoutMenu();
		new NewsletterForm();
		if (this.bodyID === 'contact-page') {
			new ContactForm();
		}


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
