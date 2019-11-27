//my Mapbox token
mapboxgl.accessToken =
  "pk.eyJ1IjoiZ2VudGVuIiwiYSI6ImNrMmdzOHFsdTA2Z2UzY252b3B1cjJqdXQifQ.B2doXxjSELmQIf7wIIDBZg";

//The map variable, set initial style, center/zoom
var map = new mapboxgl.Map({
  container: "earthquakes",
  style: "mapbox://styles/genten/ck30r875t03gb1clbqf1fc4wu", // stylesheet location
  center: [-122, 47], // starting position [lng, lat]
  zoom: 2 // starting zoom
});

//on map load, run function to load the geojson
map.on("load", function() {
  //add a source layer for earthquakes
  map.addSource("shocks", {
    type: "geojson",
    data:
      "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_month.geojson"
  });
  //add the earthquakes to the map
  map.addLayer({
    id: "quake-heat",
    type: "heatmap",
    source: "shocks"
  });
  map.addLayer({
    id: "quake-point",
    type: "circle",
    source: "shocks"
  });
});

//add a handler for clicking/popups
//Thanks to: https://www.mapbox.com/mapbox-gl-js/example/popup-on-click/
map.on("click", "quake-point", function(e) {
  //1. set the coordinates of the popup
  var coordinates = e.features[0].geometry.coordinates;
  //2. create the information that will display in the popup
  var description = e.features[0].properties.mag;
  var description =
    "<h3>" +
    e.features[0].properties.title +
    "</h3>" +
    "<p>Magnitude: " +
    e.features[0].properties.mag +
    "<br>Status: " +
    e.features[0].properties.status +
    "<br> Tsunami: " +
    e.features[0].properties.tsunami +
    "<br> Find more: " +
    "<a target='_blank' href=" +
    e.features[0].properties.url +
    ">Here</a></p>";
  //3. make the popup
  new mapboxgl.Popup()
    .setLngLat(coordinates)
    .setHTML(description)
    .addTo(map);
});
