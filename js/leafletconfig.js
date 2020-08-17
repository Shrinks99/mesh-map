// General map position & UI config
var map = L.map('map', {
  center: [43.651890, -79.381706],
  // minZoom: 11,
  zoom: 13,
  zoomControl: false
});

L.control.zoom({
  position: 'bottomright'
}).addTo(map);

// Map tile layer
L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/light_all/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>, Map Tiles &copy; <a href="https://carto.com/attributions">CARTO</a>',
  subdomains: 'abcd',
}).addTo(map);

// Points layer
$.getJSON("../nodelist.geo.json",function(data){

  var nodeIcon = L.divIcon({
    iconSize: new L.Point(15,15),
    className: 'onlinenode'
  });

 var geoJsonLayer = L.geoJson(data,{
   pointToLayer: function (feature, latlng) {
     return L.marker(latlng, {icon: nodeIcon});
   }
 }).addTo(map);
});

// Node Info layer
var nodeinfo = L.geoJson({
  pointToLayer: function(feature, latlng){
    var marker = L.marker(latlng, {icon:nodeIcon});
    marker.bindPopup(features.properties.name + '<br/>' + features.properties.type);
    return marker;
  }
}).addTo(map);