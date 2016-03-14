/**
 * @file toggle.js
 * JS for handling the subscription form.
 *
 * Toggles the visibility of the 'city' field and get the reverse geolocation.
 */

$(document).ready(function() {
  // List of available cities.
  // Remote data is not working in Firefox. Google library is an lighter option
  // than JQuery UI: https://jsfiddle.net/cbwd42yv/
  var availableCities = [
    "Montreal, Canada",
    "Ottawa, Canada",
    "Toronto, Canada",
    "New York, USA"
  ];

  // Make sure the field will be displayed on page reload if there is input.
  toggleCity();

  // Autocomplete for 'city' field.
  $( "#mce-CITY" ).autocomplete({
    source: availableCities,
    minLength: 2
  });

});

/**
 * Helper function to toggle 'city' field visibility.
 */
function toggleCity() {
  var hasInput = document.getElementById("mce-EMAIL").value.length;
  var cityField = $("#mc-field-group-city");

  if (hasInput) {
    cityField.show("slow");
  }
  else {
    cityField.hide();
  }
}
