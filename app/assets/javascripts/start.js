$().ready(function() {
  console.log('loaded bro');
  // google.maps.event.addDomListener(window, 'load', getLocation);
  var appRouter = new AppRouter();
  var mapView = new MapView();
  Backbone.history.start();
});

_.templateSettings = {
    interpolate: /{{=(.+?)}}/g,
    evaluate: /{{(.+?)}}/g
};
