// Exercise 14: jQuery and JS Frameworks


// Use jQuery to handle Register button click
$(document).ready(function() {
  $('#registerBtn').click(function() {
    // Show the message with fadeIn effect
    $('#message').fadeIn();

    // After 2 seconds, fade out the message
    setTimeout(() => {
      $('#message').fadeOut();
    }, 2000);
  });
});


