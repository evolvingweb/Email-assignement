/**
 * @file toggle.js
 * JS for handling the subscription form.
 *
 * Toggles the visibility of the 'city' field and get the reverse geolocation.
 */

$(function($){
  // List of available cities.
  // Remote data is not working in Firefox. Google library is an lighter option
  // than JQuery UI: https://jsfiddle.net/cbwd42yv/
  var availableCities = [
    "Montreal, Canada",
    "Ottawa, Canada",
    "Toronto, Canada",
    "New York, USA"
  ];

  // City field.
  var cityField = $("#mce-CITY");
  // e-mail Field.
  var emailField = $( "#mce-EMAIL" );

  // Hide city field.
  $("#mc-field-group-city").hide();

  // Autocomplete for 'city' field.
  cityField.autocomplete({
    source: function( request, response ) {
      $.ajax({
        url: "//gd.geobytes.com/AutoCompleteCity",
        dataType: "jsonp",
        data: {
          q: request.term
        },
        crossDomain: true,
        success: function( data ) {
          response( data );
        }
      });
    },
    minLength: 2
  });

  // Geolocate once on focus on e-mail field.
  emailField.one( "focus", function() {
    $.getJSON("http://geoip.nekudo.com/api?callback=?", function (data) {
      cityField.val(data.city);
    });
  });

  // Toggle city field visibility on e-mail input.
  emailField.on('input', function(){
    var hasInput = document.getElementById("mce-EMAIL").value.length;
    var cityField = $("#mc-field-group-city");

    if (hasInput) {
      cityField.show("slow");
    }
    else {
      cityField.hide();
    }
  });

});
