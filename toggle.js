$(document).ready(function() {
  // Make sure the field will be  displayed on page reload if there is input.
  toggleCity();

});

function toggleCity() {
  var hasInput = document.getElementById("mce-EMAIL").value.length;
  var cityField = $("#mce-CITY");

  if (hasInput) {
    $("#mce-CITY").show();
  }
  else {
    $("#mce-CITY").hide();
  }
}
