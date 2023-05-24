

$(document).ready(function() {
      $("#emailForm").submit(function(e) {
        e.preventDefault(); // Prevent the form from submitting

        var email = $("input[name='email']").val();

        // Regular expression for email validation
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (emailRegex.test(email)) {
          $("#emailError").text(""); // Clear the error message
          alert("Email is valid!");
          // Perform additional actions (e.g., submit the form)
        } else {
          $("#emailError").text("Invalid email address"); // Display the error message
        }
      });
    });