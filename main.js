var mymap = L.map('mapid').setView([-41.1351, 174.8391], 13);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiYWxpY2VhbHMiLCJhIjoiY2swdXE1YjFjMHFwMzNucHI5cGI5dmp0ayJ9.o3PFbQB_zSPIAqzelNUudw'
}).addTo(mymap);


var photo2 = "porirua.jpeg"

function addMarker(long, lat, name, subtitle, photo, website) {
    L.marker([long, lat]).addTo(mymap).bindPopup(`<b><h2>${name}</h2></b>${subtitle}<br><br> 
    <img src="/images/${photo}" height="140px" width="180px"/> <br><br>For opening hours and ticket prices:<br> <a href=${website} target="_blank">Visit Website</a>`);
}

addMarker(-41.13158, 174.83352, "Awesome Bounce", "Childrens playland and cafe, bouncy castles, indoor trampolines and climbing wall", "bounce.jpg", "https://www.awesomebounce.co.nz/");
addMarker(-41.1351, 174.88, "Test", "This is a test", "pools.jpeg", "www.google.com");
addMarker(-41.1351, 174.88, "Pirate's Cove", "Putt through caves, past waterfalls, through tombstones, around shark infested waters, and on a nice day check out the beautiful sea views as you putt around the pirate mini golf course!", "pirate.jpg", "http://www.adventuregolf.co.nz/locations/pirates-cove-wellington/");
addMarker(-41.122587, 174.853852, "Adrenalin Forest", "Adrenalin Forest is a series of rope bridges, Tarzan swings and flying foxes from platforms constructed in the tree canopy", "adrenalin forest.jpeg", "http://www.adrenalin-forest.co.nz/wellington");
addMarker(-41.132984, 174.838207, "Te Rauparaha Arena", "Porirua's biggest aquatic centre", "pools.jpeg", "https://terauparaha-arena.co.nz/     aquatics/visit-arena-pool/");
addMarker(-41.119978, 174.856833, "Aotea Lagoon", "Aotea Lagoon features a huge playground complete with a separate toddlers’ area, picnic      and BBQ areas, and an awesome splash pad. All free except for the train", "aotea.jpg", "https://poriruacity.govt.nz/discover-porirua/parks-and-reserves/aotea-lagoon/");

var popup = L.popup()
    .setLatLng([-41.1351, 174.8391])
    .setContent(`<b>Welcome to Porirua</b><br><br>The city of the future<br>Explore this page to see all the fun activities for you and your family<br><br><img src="/images/${photo2}" height="240px" width="280px"/>`)
    .openOn(mymap);

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(mymap);
}

mymap.on('click', onMapClick);

