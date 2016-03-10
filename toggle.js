/**
 * @file toggle.js
 * JS for handling the subscription form.
 *
 * Toggles the visibility of the 'city' field and get the reverse geolocation.
 */

$(document).ready(function() {
  // Make sure the field will be displayed on page reload if there is input.
  toggleCity();

  // Autocomplete for 'city' field.
  $( "#mce-CITY" ).autocomplete({
    source: "data/cities.json",
    dataType: "jsonp",
    minLength: 2
  });

  // Geolocation using HTML5 and reversed by Google.
  var locationInput = $("input[name='CITY']");
  var defaultLocationText = "Montreal, Canada";
  if (window.navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
        var lat 	 = position.coords.latitude,
          lng 	 = position.coords.longitude,
          latlng 	 = new google.maps.LatLng(lat, lng),
          geocoder = new google.maps.Geocoder();
        geocoder.geocode({'latLng': latlng}, function(results, status) {
          if (status == google.maps.GeocoderStatus.OK) {
            if (results[1]) {
              for (var i = 0; i < results.length; i++) {
                if (results[i].types[0] === "locality") {
                  var city = results[i].address_components[0].short_name;
                  var state = results[i].address_components[2].short_name;
                  locationInput.val(city + ", " + state);
                  // Stops at the first result.
                  break;
                }
              }
            }
            else {
              console.log("No reverse geocode results.");
              locationInput.val(defaultLocationText);
            }
          }
          else {
            console.log("Geocoder failed: " + status);
            locationInput.val(defaultLocationText);
          }
        });
      },
      function() {
        console.log("Geolocation not available.");
        locationInput.val(defaultLocationText);
      });
  }

});

/**
 * Helper function to toggle 'city' field visibility.
 */
function toggleCity() {
  var hasInput = document.getElementById("mce-EMAIL").value.length;
  var cityField = $(".mc-field-group-city");

  if (hasInput) {
    cityField.show("slow");
  }
  else {
    cityField.hide("slow");
  }
}
