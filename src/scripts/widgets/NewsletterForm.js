/*
	TITLE: NewsletterForm

	DESCRIPTION: The Newsletter Form

	AUTHORS: CN

	DEPENDENCIES:
		- jQuery 1.8+

*/

var FormValidator = require('../utils/FormValidator');
var FieldValidator = require('../utils/FieldValidator');


var NewsletterForm = function() {

	var elForm = document.getElementById('newsletterForm');
	var elEmail = document.getElementById('wf_e');
	var elOrgID = document.getElementById('wf_o');
	var elListID = document.getElementById('wf_l');

	var $elForm = $(elForm);
	var $elEmail = $(elEmail);
	var $elOrgID = $(elOrgID);
	var $elListID = $(elListID);
	var $elFieldset = $elForm.children('fieldset');

	var postURL = $elForm.attr('action');
	var postData;


	//elForm.setAttribute('novalidate', 'novalidate');


	$elForm.on('submit', function(e) {
		e.preventDefault();

		// var isFormValid = FormValidator(elForm);
		// var objEmailValidity = FieldValidator(elEmail);
		// var isEmailValid = objEmailValidity.valid;
		// var isEmailValueMissing = objEmailValidity.valueMissing;
		// var isEmailTypeMismatch = objEmailValidity.typeMismatch;

		// console.log(isFormValid);
		// console.log(objEmailValidity);
		// console.log(isEmailValid, isEmailValueMissing, isEmailTypeMismatch);


		//if (isFormValid && isEmailValid) {

			postData = {
				wf_e: $elEmail.val(),
				wf_o: $elOrgID.val(),
				wf_l: $elListID.val()
			};
			//console.log(postData);


			$elFieldset.fadeOut(400, function() {
				$elForm.append('<p class="thank-you">Thank you!</p>');
			});

			//async post
			$.ajax({
				type: 'POST',
				url: postURL,
				crossDomain: true,
				data: postData,
				dataType: 'jsonp'
			});	

		//}

	});


};


module.exports = NewsletterForm;
