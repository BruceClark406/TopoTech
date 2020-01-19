let map;
let rectangle;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        mapTypeId: 'satellite',
        center: { lat: 45.743438, lng: -110.967997 },
        streetViewControl: false,
        zoom: 8,
        mapTypeId: 'terrain'
    });

};

function drawRec(){
    let center = map.getCenter();
    let sizeOfRec = .1

    let bounds = {
        north: center.lat() + sizeOfRec,
        south: center.lat() - sizeOfRec,
        east: center.lng() + sizeOfRec,
        west: center.lng() - sizeOfRec
    };


    let bound = map.getCenter();

    // Define a rectangle and set its editable property to true.
    rectangle = new google.maps.Rectangle({
        bounds: bounds,
        editable: true,
        draggable: true
    });
    rectangle.setMap(map);
    document.getElementById("drawRec").disabled = true;
}

function clearRec(){
    rectangle.setMap(null)
    document.getElementById("drawRec").disabled = false;
}
