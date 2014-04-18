/*
	TITLE: NewsletterForm

	DESCRIPTION: The Newsletter Form

	AUTHORS: CN

	DEPENDENCIES:
		- jQuery 1.10+

*/

var FormValidator		= require('../utils/FormValidator');
var FieldValidator		= require('../utils/FieldValidator');

var tmplThankYouMsg		= require('../../templates/newsletter-thankyou-message.hbs');

var NewsletterForm = function() {
	var self = this;

	this.elForm			= document.getElementById('newsletterForm');
	this.elEmail		= document.getElementById('wf_e');
	this.elOrgID		= document.getElementById('wf_o');
	this.elListID		= document.getElementById('wf_l');

	this.$elForm		= $(this.elForm);
	this.$elEmail		= $(this.elEmail);
	this.$elOrgID		= $(this.elOrgID);
	this.$elListID		= $(this.elListID);
	this.$elFieldset	= this.$elForm.children('fieldset');

	//this.elForm.setAttribute('novalidate', 'novalidate');

	this.$elForm.on('submit', function(e) {
		e.preventDefault();

		// var isFormValid = FormValidator(this.elForm);
		// var objEmailValidity = FieldValidator(this.elEmail);
		// var isEmailValid = objEmailValidity.valid;
		// var isEmailValueMissing = objEmailValidity.valueMissing;
		// var isEmailTypeMismatch = objEmailValidity.typeMismatch;

		// console.log(isFormValid);
		// console.log(objEmailValidity);
		// console.log(isEmailValid, isEmailValueMissing, isEmailTypeMismatch);

		//if (isFormValid && isEmailValid) {
			self.postForm();
		//}

	});

};

NewsletterForm.prototype = {

	postForm: function() {
		var self = this;
		var postURL = this.$elForm.attr('action');
		var postData = {
			wf_e: this.$elEmail.val(),
			wf_o: this.$elOrgID.val(),
			wf_l: this.$elListID.val()
		};
		//console.log(postData);

		this.$elFieldset.fadeOut(400, function() {
			self.$elForm.append(tmplThankYouMsg());
		});

		$.ajax({
			type: 'POST',
			url: postURL,
			data: postData,
			dataType: 'jsonp',
			crossDomain: true
		});

	}

};


module.exports = NewsletterForm;
