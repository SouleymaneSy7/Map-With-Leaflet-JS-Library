function init() {
    // Lattitude and Longitude
    const aop = {
        lat: 9.7241320,
        lng: -13.4462353
    }

    const chezMoi = {
        lat: 9.727859,
        lng: -13.436939
    }

    const salonThierno = {
        lat: 9.731402, 
        lng: -13.436075
    }

    // Zoom Level
    const zoomLevel = 16;

    // Map Set
    const map = L.map('map').setView([coyah.lat, coyah.lng], zoomLevel)


    // Layer
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map); 


    // Map Icons

    const LeafIcon = L.Icon.extend({
        options: {
            shadowUrl: './icons/leaf-shadow.png',
            iconSize:     [38, 95],
            shadowSize:   [50, 64],
            iconAnchor:   [22, 94],
            shadowAnchor: [4, 62],
            popupAnchor:  [-3, -76]
        }
    });

    const greenIcon = new LeafIcon({iconUrl: './icons/leaf-green.png'}),
    redIcon = new LeafIcon({iconUrl: './icons/leaf-red.png'}),
    orangeIcon = new LeafIcon({iconUrl: './icons/leaf-orange.png'});

    
    // Marker

    L.marker([aop.lat, aop.lng], {icon: greenIcon}).addTo(map).bindPopup("Salon de All Game");
    L.marker([chezMoi.lat, chezMoi.lng], {icon: redIcon}).addTo(map).bindPopup("Chez Moi, Ma Maison");
    L.marker([salonThierno.lat, salonThierno.lng], {icon: orangeIcon}).addTo(map).bindPopup("Salon de Grand Thierno");


    // Circle
    const circle = L.circle([coyah.lat, coyah.lng], {
        color: '#0063b1',
        fillColor: '#adf0d1',
        weight: '25px',
        fillOpacity: 0.3,
        radius: 500
    }).addTo(map);

    // Pop-up
    const  ecoleMilitaire = L.popup()
    .setLatLng([coyah.lat, coyah.lng])
    .setContent("Ecole Militaire De Maneah")
    .openOn(map)

    // Pop-up Click
    const  popupClick = L.popup();

    const onMapClick = (e) => {
        popupClick
            .setLatLng(e.latlng)
            .setContent("You clicked the map at " + e.latlng.toString())
            .openOn(map);
    }
    
    map.on('click', onMapClick);
}

init();


 

