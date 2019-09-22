var mymap = L.map('mapid').setView([-41.1351, 174.8391], 13);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiYWxpY2VhbHMiLCJhIjoiY2swdXE1YjFjMHFwMzNucHI5cGI5dmp0ayJ9.o3PFbQB_zSPIAqzelNUudw'
}).addTo(mymap);


function addMarker(long, lat, message) {
    L.marker([long, lat]).addTo(mymap).bindPopup(message);
}

addMarker(-41.1351, 174.8391, "<b>Welcome to Porirua</b><br>The city of the future");
addMarker(-41.1351, 174.88, "New");
addMarker(-41.132984, 174.838207, "Te Rauparaha Arena");
addMarker(-41.119978, 174.856833, "Aotea Lagoon");

var popup = L.popup()
    .setLatLng([-41.1351, 174.8391])
    .setContent("<b>Welcome to Porirua</b><br>The city of the future<br>Explore this page to see all the fun activities for you and your family")
    .openOn(mymap);

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(mymap);
}

mymap.on('click', onMapClick);