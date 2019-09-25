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
addMarker(-41.131554, 174.83911, "Pātaka Art + Museum", "Pātaka Art + Museum is a place of inspiration. We encourage you to stop by and enjoy the latest exhibition of contemporary art, take part in an art class, and explore our local history.", "pataka.jpg", "https://www.pataka.org.nz/?utm_source=PCC-PTK&utm_medium=textlink&utm_campaign=PCC-PTK");
addMarker(-41.105155, 174.916417, "LightHouse Cinema", "The Lighthouse Theatre is one of the oldest cinemas in New Zealand, for a boutique movie experience visit here", "lighthouse.jpeg", "https://www.lighthousecinema.co.nz/schedule/venue/pauatahanui/");
addMarker(-41.136761, 174.841306, "Reading Cinemas", "With 5 wall to wall cinema screens featuring the highest quality crystal clear digital sound, you really can experience the difference at Reading Cinemas Porirua.", "reading.jpeg", "https://readingcinemas.co.nz/locations/theatre/porirua");
addMarker(-41.148005, 174.84116, "North City Tenpin", "North City Tenpin has 20 lanes of Tenpin along with Bar and Cafe and also a new virtual reality arcade", "bowling.jpg", "http://northcitytenpin.co.nz/home-1/");
addMarker(-41.132476, 174.839324, "Skatepark", "This is one of the largest skateparks in the Wellington region. It’s a good place to take kids that are still getting the hang of a scooter or skateboard as there’s space to make mistakes and even some decent flat surfaces, as well as lots of different levels of ramps. This activity is free", "skatepark.jpg", "https://kidsonboard.co.nz/activity_dw/skatepark-porirua/");
addMarker(-41.134592, 174.831234, "Indoor Raceway", "Unleash the speed demon lurking inside. Raceway is suitable for all ages, although driving from 5 years", "karts.jpg", "http://www.indoorraceway.co.nz/");
addMarker(-41.120762, 174.860429, "New Zealand Police Museum", "The Museum takes visitors 'up close and personal' with policing methods of the past, present, and future, with dress up and activities for kids", "police.jpg", "https://www.police.govt.nz/about-us/history-museum/museum");
addMarker(-41.059759, 174.937336, "Battle Hill Farm", "Battle Hill Farm Forest Park is 500 hectares of rolling paddocks, native bush and forestry. Come for the day for a picnic or camp overnight", "battle.jpg", "http://www.gw.govt.nz/battlehill/");
addMarker(-41.12907, 174.840159, "Pirate's Cove", "Putt through caves, past waterfalls, through tombstones, around shark infested waters, and on a nice day check out the beautiful sea views as you putt around the pirate mini golf course!", "pirate.jpg", "http://www.adventuregolf.co.nz/locations/pirates-cove-wellington/");
addMarker(-41.122587, 174.853852, "Adrenalin Forest", "Adrenalin Forest is a series of rope bridges, Tarzan swings and flying foxes from platforms constructed in the tree canopy", "adrenalin forest.jpeg", "http://www.adrenalin-forest.co.nz/wellington");
addMarker(-41.132984, 174.838207, "Te Rauparaha Arena", "Porirua's biggest aquatic centre", "pools.jpeg", "https://terauparaha-arena.co.nz/     aquatics/visit-arena-pool/");
addMarker(-41.119978, 174.856833, "Aotea Lagoon", "Aotea Lagoon features a huge playground complete with a separate toddlers’ area, picnic      and BBQ areas, and an awesome splash pad. All free except for the train", "aotea.jpg", "https://poriruacity.govt.nz/discover-porirua/parks-and-reserves/aotea-lagoon/");

var popup = L.popup()
    .setLatLng([-41.1351, 174.8391])
    .setContent(`<h1><b>Welcome to Porirua</h1></b>Explore this page to see all the fun activities for you and your family. Click on the pins to find out more information about many great activies for families in Porirua.<br><br><img src="../images/${photo2}" height="240px" width="280px"/>`)
    .openOn(mymap);

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(mymap);
}

mymap.on('click', onMapClick);

