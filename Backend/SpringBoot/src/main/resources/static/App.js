//Wait for document to finish loading to start
// Check out this site for Validation http://jsfiddle.net/ACdtX/

$(document).ready(function() {
	
	jQuery.validator.addMethod("lettersonly", function(value, element) 
	{
  		return this.optional(element) || /^[a-z]+$/i.test(value);
	}, "Only Letters please."); 

  $('#inputNames').validate({ // initialize the plugin
    rules: 
    {
      first: {
        required: true,
        lettersonly: true
      },
      last: {
        required: true,
        lettersonly: true
      }
    },
    messages:
    {
		first: {
            required: "Please enter your first name."
        },
		last: {
            required: "Please enter your last name."
        }
	
	},
    submitHandler: function(form) 
    {
	
		var firstname = $("#first").val();
		var lastname = $("#last").val();
		
		var employeeName = {
			//these variable names MUST match the variables in @Entity object
			firstName: firstname,
			lastName: lastname,
		}
		
		
		$.ajax({
			type: "POST",
			url: "/index",
			data: employeeName,
			success: function() 
			{
				//alert("Guessss what")
				window.location.href="page1.html";
			},
			error: function() 
			{
				alert("Something went wrong!")
			}
		})
	}
  });

});

	