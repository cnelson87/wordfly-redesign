/**
 *	Basic client-side form validation using the HTML5 Constraint Validation API. 
 */

var FormValidator = function(elForm) {
	var isValid = elForm.checkValidity();
	return isValid;
};

module.exports = FormValidator;
