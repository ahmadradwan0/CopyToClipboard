$(document).ready(function($) {
    function add() {
      $(".copied").addClass("bounce-effect");
    }
  
    function remove() {
      $(".copied").removeClass("bounce-effect");
    }
  
    // Call function and copy text
    $(".copy-btn").click(function() {
      $("#textField").select();
      document.execCommand("copy");
      add();
      setTimeout(remove, 800);
    //   alert($("#textField").val()); // Display the text in an alert message
    });
  });
  