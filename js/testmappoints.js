markers = [
  {
    "name": "Node 1",
    "lat": 43.6518,
    "lng": -79.3817,
    "online": 1
  },
  {
    "name": "Node 2",
    "lat": 43.6620,
    "lng": -79.3720,
    "online": 0
  }
];

////Marker placement & Icon (doesn't seem to like being loaded before the markers FYI)
var onlineNode = L.divIcon({className: 'onlinenode'});
var offlineNode = L.divIcon({className: 'offlinenode'});

    for (var i = 0; i < markers.length; ++i) {
      L.marker([markers[i].lat, markers[i].lng], {icon: onlineNode})
        .bindPopup('<h3>' + markers[i].name + '</h3>')
        .addTo(map);
    }