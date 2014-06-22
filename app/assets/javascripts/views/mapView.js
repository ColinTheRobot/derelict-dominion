var MapView = Backbone.View.extend({
  el: 'window',
  // tagName: '#map-canvas',

  initialize: function() {
    this.latitude;
    this.longitude;
    this.mapOptions;
    this.map;
    this.marker;
    this.getLocation();
  },

  getLocation: function() {
    console.log('im getLocation');
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
    // google.maps.event.addDomListener(window, 'load', getLocation);
    function showPosition(position){
    console.log("this is position: " + position);
    this.latitude = position.coords.latitude;
    this.longitude = position.coords.longitude;
    console.log("im lat: " + this.latitude + " im lon: " + this.longitude);
    }
      this.displayMap(this.latitude, this.longitude);
  },

  displayMap: function(latitude, longitude) {
    console.log("hey im displayMap, im lat: " + latitude + " im lon: " + longitude);

    var mapOptions = {
      center: new google.maps.LatLng(latitude, longitude),
      zoom: 16
    };
    console.log(mapOptions);
    var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
    console.log(map);

    // for (var i = 0; i < lots.length; i++) {
    //   var lotLocation = new google.maps.LatLng(lots[i].longitude,lots[i].latitude);
    //   var lotAddress = lots[i].address;
    //   var lotID = "<a href='/lots/'" + lots[i].id.toString();
    //   var contentString = lotAddress + lotID + "> More Details</a>";
      // addMarker(map, lotLocation, lotAddress, contentString);
    // }
  },

  addMarker: function(map, location, title, contentString) {
    var marker = new google.maps.Marker({
      position: location,
      map: map,
      title: title,
      clickable: true
    });
    var lotInfoWindow = new google.maps.InfoWindow({
      content: contentString
    });
    google.maps.event.addListener(marker, 'click', function() {
      lotInfoWindow.open(map,marker);
    })
  }
});
