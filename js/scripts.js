$(function () {
  var age = prompt("What is your age");
  if (age>=18) {
    $("#vote-form").removeClass();
    $("#vote-form").show();
  }
  else {
    $("#vote-info").removeClass();
    $("#vote-info").show();
    alert("You're to young to vote.")
  }

});
