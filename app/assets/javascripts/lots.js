(function() {
  window.onload = getLocation;
  var map;

  function getLocation() {
    console.log('getLocation');
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
  }

  function showPosition(position) {
    console.log('showPosition');
    console.log(position)
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
    console.log(latitude);
    initialize(latitude, longitude);
  }

  function initialize(latitude, longitude) {
    console.log('initialize');
    var mapOptions = {
      center: new google.maps.LatLng(latitude,longitude),
      zoom: 16
    };
    map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

    requestData(map);
  }

  function requestData() {
    $.ajax({
      type: 'get',
      url: '/lots',
      dataType: 'json'
    }).done(function(data){
      parseData(data);
    });
  }

  function parseData(data) {
    console.log(data);
    for (var i = 0; i < data.length; i++) {
      var contentString;
      var lotLocation = new google.maps.LatLng(data[i].longitude,data[i].latitude);
      var lotAddress = data[i].address;
      var lotID = "<a href='/lots/'" + data[i].id;
      var contentString = lotAddress + lotID + "> More Details</a>" + "this is the id: " + data[i].id;
    addMarker(map, lotLocation, lotAddress, contentString);
    } //end for loop
  }

    function addMarker(map, location, title, contentString){
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
})(); //end wrapper
