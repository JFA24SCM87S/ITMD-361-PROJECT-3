function initMap() {
    var location = {lat: 41.8349, lng: -87.627};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        center: location
    });

    var marker = new google.maps.Marker({
        position: location,
        map: map,
        draggable: true,
        title: 'Drag me!'
    });

    var infoWindow = new google.maps.InfoWindow({
        content: '<p>Your current position is at Illinois Institute of Technology, located at coordinates 41.8349, -87.6270.</p><p><b>Drag this marker to your desired location, displaying the (Lat, Long) position.</b></p>',
        ariaLabel: "Current Position",
    });

    infoWindow.open(map, marker);

    marker.addListener('dragend', function(event) {
        infoWindow.setContent('New Location: ' + event.latLng.lat().toFixed(4) + ', ' + event.latLng.lng().toFixed(4));
        infoWindow.open(map, marker);
    });

    var customMapStyle = [
        {
            featureType: 'all',
            stylers: [
                { saturation: -100 },
                { gamma: 0.50 }
            ]
        }
    ];

    map.setOptions({styles: customMapStyle});
}

function loadGoogleMapsScript() {
    var script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyD9cO23vf_Jxsih20CITyw_5-jYMWrJ9OY&callback=initMap`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
}

document.addEventListener("DOMContentLoaded", function(){
    loadGoogleMapsScript();
});


let currentSlide = 0;
const images = [
    'images/chopper.png',
    'images/hattori.png',
    'images/karoo.png',
    'images/pappagu.png',
    'images/eyelashes.png',
];

function showSlide(index) {
    currentSlide = index;
    if (currentSlide >= images.length) { currentSlide = 0; }
    if (currentSlide < 0) { currentSlide = images.length - 1; }
    document.getElementById('slideImg').src = images[currentSlide];
}

function changeSlide(direction) {
    showSlide(currentSlide + direction);
}

document.getElementById('slideLeft').addEventListener('click', function() {
    changeSlide(-1);
});

document.getElementById('slideRight').addEventListener('click', function() {
    changeSlide(1);
});

