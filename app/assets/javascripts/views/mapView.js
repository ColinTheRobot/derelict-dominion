var MapView = Backbone.View.extend({
  el: 'window',

  initialize: function() {
    this.$el.empty();
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
      self = this;
      console.log('getLocation this is self ' + self);
        navigator.geolocation.getCurrentPosition(this.showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
  },

  showPosition: function(position){
    this.latitude = position.coords.latitude;
    this.longitude = position.coords.longitude;
    console.log("showPosition - im lat: " + this.latitude + " im lon: " + this.longitude);
    self.displayMap(this.latitude, this.longitude);
    },

  displayMap: function(latitude, longitude) {
    console.log("hey im displayMap, im lat: " + latitude + " im lon: " + longitude);
    var mapOptions = {
      center: new google.maps.LatLng(latitude, longitude),
      zoom: 16
    };
    map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
    this.requestData();
  },

  requestData: function() {
    $.ajax({
      type: 'get',
      url: '/lots',
      dataType: 'json'
    }).done(function(data){
      self.parseData(data);
    });
  },

  parseData: function(data) {
    for (var i = 0; i < data.length; i++) {
      var contentString;
      var lotLocation = new google.maps.LatLng(data[i].longitude,data[i].latitude);
      var lotAddress = data[i].address;
      var lotID = "<a href='/lots/'" + data[i].id;
      var contentString = lotAddress + lotID + "> More Details</a>" + "this is the id: " + data[i].id;
    this.addMarker(map, lotLocation, lotAddress, contentString);
    } //end for loop
  },

  addMarker: function(map, location, title, contentString){
    var marker = new google.maps.Marker({
      position: location,
      map: map,
      title: title,
      clickable: true
    });

    google.maps.event.addListener(marker, 'click', getDataCallback(map, contentString));

    function getDataCallback(map, contentString) {
      var lotInfoWindow = new google.maps.InfoWindow({
        content: contentString
      });
      return function() {
        lotInfoWindow.setContent(contentString);
        lotInfoWindow.open(map, this);
      } //end return function
    } // end dataCallback
  } //end addMarker
});
