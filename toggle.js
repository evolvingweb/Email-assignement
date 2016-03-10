$(document).ready(function() {
  // Make sure the field will be  displayed on page reload if there is input.
  toggleCity();

  $( "#mce-CITY" ).autocomplete({
    source: "data/cities.json",
    dataType: "jsonp",
    minLength: 2
  });

});

function toggleCity() {
  var hasInput = document.getElementById("mce-EMAIL").value.length;
  var cityField = $("#mce-CITY");

  if (hasInput) {
    cityField.show();
  }
  else {
    cityField.hide();
  }
}
