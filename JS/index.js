$(document).ready(function($) {
    var $textField = $("#textField");
  
    // Copy text and display message
    $(document).on("click", ".copy-btn", function() {
      $textField.select();
      document.execCommand("copy");
      $(".copied").toggleClass("bounce-effect");
      setTimeout(function() {
        $(".copied").toggleClass("bounce-effect");
      }, 800);
      
    });
  });