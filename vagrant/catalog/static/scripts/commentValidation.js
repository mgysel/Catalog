// Useful Variables
var comment = $("input[value='comment']");
//  ******* SUBMIT BUTTON - ENABLE/DISABLE *******
// Disable Submit Button
var commentSubmit = $(".comment-submit");
commentSubmit.attr("disabled", "true");
// Function that enables submit button if all conditions are met
var enableSubmit = function() {
	// If length of comment not 0, enable submit button
	if (comment.val().length > 0) {
		console.log(comment.val());
		commentSubmit.removeAttr("disabled");
		console.log("mikeABLED");
	} else {
		console.log(comment.val());
		commentSubmit.attr("disabled", "true");
		console.log("mike");
	}
};




// *** KEYUP Validation ***
comment.keyup(function() {
	// Enable submit button if all inputs correct
	enableSubmit();
});




// *** FOCUSOUT Validation ***
// Inputs input element, error message box, and validation message
// and styles the border accordingly
var inputStyling = function(input, message) {
	// input and length of input variable
	var inputLen = input.val().length;
	// If the length is 0, style input
	if (input.val().length == 0) {
		input.css("border", "3px solid #cc0000");
		input.css("border-style", "");
		input.attr("placeholder", message);
	// If length is not 0, style input
	} else {
		input.css("border-style", "");
		input.css("border-width", "");
		input.css("border-color", "");
		input.attr("placeholder", "");
	}
};
// Title input styling on focus out
comment.focusout(function() {
	inputStyling($(this), "* Title Required");
});