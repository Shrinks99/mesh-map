//General map config
var map = L.map('map', {
  center: [43.651890, -79.381706],
  minZoom: 11,
  zoom: 14,
});

//Map tile layer setup
L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
  subdomains: 'abcd',
}).addTo(map);