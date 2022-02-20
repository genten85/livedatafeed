var mymap = L.map("secondmap").setView([0, 0], 3);
L.tileLayer(
  "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}",
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 9,
    id: "mapbox.country-boundaries-v1",
    accessToken:
      "pk.eyJ1IjoiZ2VudGVuIiwiYSI6ImNrMmdzOHFsdTA2Z2UzY252b3B1cjJqdXQifQ.B2doXxjSELmQIf7wIIDBZg"
  }
).addTo(mymap);

var geojsonMarkerOptions = {
  fillOpacity: 1,
  fillColor: "red",
  color: "red",
  radius: 0.1
};

var customLayer = L.geoJson(null, {
  // http://leafletjs.com/reference.html#geojson-style
  pointToLayer: function(feature, latlng) {
    return L.circleMarker(latlng, geojsonMarkerOptions);
  },
  onEachFeature: function(feature, layer) {
    layer.bindPopup(
      "<strong>" +
        "Name: " +
        "</strong>" +
        "Alaska" +
        "<strong><br>" +
        "Coordinates: " +
        "</strong>" +
        feature.geometry.coordinates +
        "<strong><br/>"
    );
  }
});
// this can be any kind of omnivore layer
var runLayer = omnivore
  .kml("MODIS_C6_Alaska_24h.kml", null, customLayer)
  .addTo(mymap);

var customLayer = L.geoJson(null, {
  // http://leafletjs.com/reference.html#geojson-style
  pointToLayer: function(feature, latlng) {
    return L.circleMarker(latlng, geojsonMarkerOptions);
  },
  onEachFeature: function(feature, layer) {
    layer.bindPopup(
      "<strong>" +
        "Name: " +
        "</strong>" +
        "Australia and New Zealand" +
        "<strong><br>" +
        "Coordinates: " +
        "</strong>" +
        feature.geometry.coordinates +
        "<strong><br/>"
    );
  }
});
// this can be any kind of omnivore layer
var runLayer = omnivore
  .kml("MODIS_C6_Australia_and_New_Zealand_24h.kml", null, customLayer)
  .addTo(mymap);

var customLayer = L.geoJson(null, {
  // http://leafletjs.com/reference.html#geojson-style
  pointToLayer: function(feature, latlng) {
    return L.circleMarker(latlng, geojsonMarkerOptions);
  },
  onEachFeature: function(feature, layer) {
    layer.bindPopup(
      "<strong>" +
        "Name: " +
        "</strong>" +
        "Canada" +
        "<strong><br>" +
        "Coordinates: " +
        "</strong>" +
        feature.geometry.coordinates +
        "<strong><br/>"
    );
  }
});
// this can be any kind of omnivore layer
var runLayer = omnivore
  .kml("MODIS_C6_Canada_24h.kml", null, customLayer)
  .addTo(mymap);

var customLayer = L.geoJson(null, {
  // http://leafletjs.com/reference.html#geojson-style
  pointToLayer: function(feature, latlng) {
    return L.circleMarker(latlng, geojsonMarkerOptions);
  },
  onEachFeature: function(feature, layer) {
    layer.bindPopup(
      "<strong>" +
        "Name: " +
        "</strong>" +
        "Central America" +
        "<strong><br>" +
        "Coordinates: " +
        "</strong>" +
        feature.geometry.coordinates +
        "<strong><br/>"
    );
  }
});
// this can be any kind of omnivore layer
var runLayer = omnivore
  .kml("MODIS_C6_Central_America_24h.kml", null, customLayer)
  .addTo(mymap);

var customLayer = L.geoJson(null, {
  // http://leafletjs.com/reference.html#geojson-style
  pointToLayer: function(feature, latlng) {
    return L.circleMarker(latlng, geojsonMarkerOptions);
  },
  onEachFeature: function(feature, layer) {
    layer.bindPopup(
      "<strong>" +
        "Name: " +
        "</strong>" +
        "Europe" +
        "<strong><br>" +
        "Coordinates: " +
        "</strong>" +
        feature.geometry.coordinates +
        "<strong><br/>"
    );
  }
});
// this can be any kind of omnivore layer
var runLayer = omnivore
  .kml("MODIS_C6_Europe_24h.kml", null, customLayer)
  .addTo(mymap);

var customLayer = L.geoJson(null, {
  // http://leafletjs.com/reference.html#geojson-style
  pointToLayer: function(feature, latlng) {
    return L.circleMarker(latlng, geojsonMarkerOptions);
  },
  onEachFeature: function(feature, layer) {
    layer.bindPopup(
      "<strong>" +
        "Name: " +
        "</strong>" +
        "Northern and Central Africa" +
        "<strong><br>" +
        "Coordinates: " +
        "</strong>" +
        feature.geometry.coordinates +
        "<strong><br/>"
    );
  }
});
// this can be any kind of omnivore layer
var runLayer = omnivore
  .kml("MODIS_C6_Northern_and_Central_Africa_24h.kml", null, customLayer)
  .addTo(mymap);

var customLayer = L.geoJson(null, {
  // http://leafletjs.com/reference.html#geojson-style
  pointToLayer: function(feature, latlng) {
    return L.circleMarker(latlng, geojsonMarkerOptions);
  },
  onEachFeature: function(feature, layer) {
    layer.bindPopup(
      "<strong>" +
        "Name: " +
        "</strong>" +
        "Russia and Asia" +
        "<strong><br>" +
        "Coordinates: " +
        "</strong>" +
        feature.geometry.coordinates +
        "<strong><br/>"
    );
  }
});
// this can be any kind of omnivore layer
var runLayer = omnivore
  .kml("MODIS_C6_Russia_and_Asia_24h.kml", null, customLayer)
  .addTo(mymap);

var customLayer = L.geoJson(null, {
  // http://leafletjs.com/reference.html#geojson-style
  pointToLayer: function(feature, latlng) {
    return L.circleMarker(latlng, geojsonMarkerOptions);
  },
  onEachFeature: function(feature, layer) {
    layer.bindPopup(
      "<strong>" +
        "Name: " +
        "</strong>" +
        "South America" +
        "<strong><br>" +
        "Coordinates: " +
        "</strong>" +
        feature.geometry.coordinates +
        "<strong><br/>"
    );
  }
});
// this can be any kind of omnivore layer
var runLayer = omnivore
  .kml("MODIS_C6_South_America_24h.kml", null, customLayer)
  .addTo(mymap);

var customLayer = L.geoJson(null, {
  // http://leafletjs.com/reference.html#geojson-style
  pointToLayer: function(feature, latlng) {
    return L.circleMarker(latlng, geojsonMarkerOptions);
  },
  onEachFeature: function(feature, layer) {
    layer.bindPopup(
      "<strong>" +
        "Name: " +
        "</strong>" +
        "South Asia" +
        "<strong><br>" +
        "Coordinates: " +
        "</strong>" +
        feature.geometry.coordinates +
        "<strong><br/>"
    );
  }
});
// this can be any kind of omnivore layer
var runLayer = omnivore
  .kml("MODIS_C6_South_Asia_24h.kml", null, customLayer)
  .addTo(mymap);

var customLayer = L.geoJson(null, {
  // http://leafletjs.com/reference.html#geojson-style
  pointToLayer: function(feature, latlng) {
    return L.circleMarker(latlng, geojsonMarkerOptions);
  },
  onEachFeature: function(feature, layer) {
    layer.bindPopup(
      "<strong>" +
        "Name: " +
        "</strong>" +
        "Southeast Asia" +
        "<strong><br>" +
        "Coordinates: " +
        "</strong>" +
        feature.geometry.coordinates +
        "<strong><br/>"
    );
  }
});
// this can be any kind of omnivore layer
var runLayer = omnivore
  .kml("MODIS_C6_SouthEast_Asia_24h.kml", null, customLayer)
  .addTo(mymap);

var customLayer = L.geoJson(null, {
  // http://leafletjs.com/reference.html#geojson-style
  pointToLayer: function(feature, latlng) {
    return L.circleMarker(latlng, geojsonMarkerOptions);
  },
  onEachFeature: function(feature, layer) {
    layer.bindPopup(
      "<strong>" +
        "Name: " +
        "</strong>" +
        "Southern Africa" +
        "<strong><br>" +
        "Coordinates: " +
        "</strong>" +
        feature.geometry.coordinates +
        "<strong><br/>"
    );
  }
});
// this can be any kind of omnivore layer
var runLayer = omnivore
  .kml("MODIS_C6_Southern_Africa_24h.kml", null, customLayer)
  .addTo(mymap);

var customLayer = L.geoJson(null, {
  // http://leafletjs.com/reference.html#geojson-style
  pointToLayer: function(feature, latlng) {
    return L.circleMarker(latlng, geojsonMarkerOptions);
  },
  onEachFeature: function(feature, layer) {
    layer.bindPopup(
      "<strong>" +
        "Name: " +
        "</strong>" +
        "United States and Hawaii" +
        "<strong><br>" +
        "Coordinates: " +
        "</strong>" +
        feature.geometry.coordinates +
        "<strong><br/>"
    );
  }
});
// this can be any kind of omnivore layer
var runLayer = omnivore
  .kml("MODIS_C6_USA_contiguous_and_Hawaii_24h.kml", null, customLayer)
  .addTo(mymap);
