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
        content: '<p>Your current position is at Illinois Institute of Technology, located at coordinates 41.8349, -87.6270.</p><p><b>Drag this marker to your desired location, displaying the (Lat, Long) position.</b></p>'
    });

    infoWindow.open(map, marker);


}

function loadGoogleMapsScript() {
    var script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBM1F-BpX660SBK3-Vw9O9f7AEvTAIH8rI&callback=initMap`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
}

document.addEventListener("DOMContentLoaded", function(){
    loadGoogleMapsScript();
});
