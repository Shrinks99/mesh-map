markers = [
  {
    "name": "Node 1",
    "lat": 43.6518,
    "lng": -79.3817
  },
  {
    "name": "Node 2",
    "lat": 43.6620,
    "lng": -79.3720
  }
];

////Marker placement & Icon (doesn't seem to like being loaded after the markers FYI)
var myIcon = L.divIcon({className: 'onlinenode'});

    for (var i = 0; i < markers.length; ++i) {
      L.marker([markers[i].lat, markers[i].lng], {icon: myIcon})
        .bindPopup('<h3>' + markers[i].name + '</h3>')
        .addTo(map);
    }