/*
	TITLE: ContactForm

	DESCRIPTION: The Contact Form

	AUTHORS: CN

	DEPENDENCIES:
		- jQuery 1.10+

*/

var FormValidator		= require('../utils/FormValidator');
var FieldValidator		= require('../utils/FieldValidator');

var tmplThankYouMsg		= require('../../templates/contact-thankyou-message.hbs');

var ContactForm = function() {
	var self = this;

	this.elForm			= document.getElementById('contactForm');
	this.elSubject		= document.getElementById('cfSubject');
	this.elName			= document.getElementById('cfName');
	this.elEmail		= document.getElementById('cfEmail');
	this.elMessage		= document.getElementById('cfMessage');

	this.$elForm		= $(this.elForm);
	this.$elSubject		= $(this.elSubject);
	this.$elName		= $(this.elName);
	this.$elEmail		= $(this.elEmail);
	this.$elMessage		= $(this.elMessage);
	this.$elFieldset	= this.$elForm.children('fieldset');

	//elForm.setAttribute('novalidate', 'novalidate');

	this.$elForm.on('submit', function(e) {
		e.preventDefault();
		self.postForm();
	});

};

ContactForm.prototype = {

	postForm: function() {
		var self = this;
		var postURL = this.$elForm.attr('action');
		var postData = {
			fSubject:		this.$elSubject.val(),
			fName:			this.$elName.val(),
			fEmailAddress:	this.$elEmail.val(),
			fMessage:		this.$elMessage.val(),
			fNewsletterRequest:	'false'
		};
		//console.log(postData);

		this.$elFieldset.fadeOut(400, function() {
			self.$elForm.append(tmplThankYouMsg());
		});

		$.ajax({
			type: 'POST',
			url: postURL,
			data: postData
			// dataType: 'jsonp',
			// crossDomain: true
		});

	}

};


module.exports = ContactForm;
