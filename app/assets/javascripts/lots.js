(function() {
  window.onload = getLocation;

  var lots = [];

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

    var map = new google.maps.map(document.getElementById("map-canvas"),
        mapOptions);

    requestData();
  }

  function requestData() {
    $.ajax({
      type: 'get',
      url: '/lots',
      dataType: 'json'
    }).done(function(data){
      console.log(data);
    })
  }

    // for (var i = 0; i < lots.length; i++) {
    //   var lotLocation = new google.maps.LatLng(lots[i].longitude,lots[i].latitude);
    //   var lotAddress = lots[i].address;
    //   var lotID = "<a href='/lots/'" + lots[i].id.toString();
    //   var contentString = lotAddress + lotID + "> More Details</a>";
    //   addMarker(map, lotLocation, lotAddress, contentString);
    // } //end for loop

    function addMarker(map, location, title, contentString){
    console.log('addMarker');
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
      });
    }
})(); //end wrapper
