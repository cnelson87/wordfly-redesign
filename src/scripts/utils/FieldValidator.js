/**
 *	Basic client-side form field validation using the HTML5 Constraint Validation API. 
 */

var FieldValidator = function(elField) {
	var objValidity = elField.validity;
	return objValidity;
};

module.exports = FieldValidator;
