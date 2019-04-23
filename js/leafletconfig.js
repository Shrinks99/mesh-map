//General map config
var map = L.map('map', {
  center: [43.651890, -79.381706],
  //minZoom: 11,
  zoom: 13,
});

//Map tile layer setup
L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
  subdomains: 'abcd',
}).addTo(map);

//Marker placement
for (var i = 0; i < markers.length; ++i) {
  L.marker([markers[i].lat, markers[i].lng])
    .bindPopup('<h3>' + markers[i].name + '</h3>')
    .addTo(map);
}