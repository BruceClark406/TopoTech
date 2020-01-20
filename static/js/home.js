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
    document.getElementById("confirm").disabled = false;
}

function clearRec(){
    rectangle.setMap(null)
    document.getElementById("drawRec").disabled = false;
    document.getElementById("confirm").disabled = true;
    document.getElementById("generate").disabled = true;
}


function saveCoordinates(){
    rect_bounds = rectangle.getBounds()
    let bounds = {
        north: rect_bounds.pa.h,
        south: rect_bounds.pa.g,
        east: rect_bounds.ka.h,
        west: rect_bounds.ka.g
    };

    clearRec()
    rectangle = new google.maps.Rectangle({
        bounds: bounds,
        editable: false,
        draggable: false,
        strokeColor: '#ff6f08',
        strokeOpacity: .5,
    });
    rectangle.setMap(map)
    
    
    
    rect_bounds = rectangle.getBounds()

    coordinates = {
        "north": rect_bounds.pa.h,
        "east": rect_bounds.ka.h,
        "south": rect_bounds.pa.g,
        "west": rect_bounds.ka.g
    }   

    //post the coordinates to URL /generate
    $.ajax({
        url: "set_coordinates",
        type: "POST",
        data: coordinates,
        async: false,
        error: function(error){
            console.log(error);
        }
    })

    document.getElementById("generate").disabled = false;
    document.getElementById("drawRec").disabled = true;

}