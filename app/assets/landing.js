    $(document).ready(function() {
      var x = document.getElementById("demo");

        function getLocation() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(showPosition);
            } else { 
                x.innerHTML = "Geolocation is not supported by this browser.";
            }
        }

        function showPosition(position) {
            x.innerHTML="Latitude: " + position.coords.latitude + 
            "<br>Longitude: " + position.coords.longitude;  
        }
      });

      function initialize() {
        var mapOptions = {
          center: new google.maps.LatLng(-45.397, 180.644),
          zoom: 8
        };
        var map = new google.maps.Map(document.getElementById("map-canvas"),
            mapOptions);
      }
      google.maps.event.addDomListener(window, 'load', initialize);