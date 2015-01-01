$('document').ready(function() { 
  $('#userinput').focus();

  // Add user input to the list when the "enter/return" key is pressed.
  $('#userinput').keyup(function(e) {
    if(e.keyCode == 13) { 
      var input = "<li>" + $('#userinput').val() + "</li>"; 
      $('#todolist').append(input);
      $('#userinput').val('');
    }
  });

  // Remove list item on click
  $('#todolist').on('click', 'li', function(event) {
    $(this).remove();
  });
});