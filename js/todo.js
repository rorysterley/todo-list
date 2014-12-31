 // Add user input to the list when the "enter/return" key is pressed.
$('document').ready(function() { 
  $('#userinput').focus();

  $('#userinput').keyup(function(e) {
    if(e.keyCode == 13) { 
      var input = "<li>" + $('#userinput').val() + "</li>"; 
      $('#todolist').append(input);
      $('#userinput').val('');
    }
  });

  $('#todolist').on('click', 'li', function(event) {
    $(this).remove();
  });
});