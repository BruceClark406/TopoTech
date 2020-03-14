let map;
let rectangle;
let cust_bounds;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 45.743438, lng: -110.967997 },
        streetViewControl: false,
        zoom: 8,
        mapTypeId: 'terrain'
    });

};

function drawRec(){
    let center = map.getCenter();
    let sizeOfRec = .1

    cust_bounds = {
        north: center.lat() + sizeOfRec,
        south: center.lat() - sizeOfRec,
        east: center.lng() + sizeOfRec,
        west: center.lng() - sizeOfRec
    };


    // Define a rectangle and set its editable property to true.
    rectangle = new google.maps.Rectangle({
        bounds: cust_bounds,
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

    let ne = rect_bounds.getNorthEast();
    let sw = rect_bounds.getSouthWest();

    cust_bounds = {
        north: ne.lat(),
        south: sw.lat(),
        east: ne.lng(),
        west: sw.lng()
    };


    rectangle.setMap(null)

    rectangle = new google.maps.Rectangle({
        bounds: cust_bounds,
        editable: false,
        draggable: false,
        strokeColor: '#ff6f08',
        strokeOpacity: .5
    });
    rectangle.setMap(map)
       

    //post the coordinates to URL /generate
    $.ajax({
        url: "set_coordinates",
        type: "POST",
        data: cust_bounds,
        async: false,
        error: function(error){
            console.log(error);
        }
    })

    document.getElementById("generate").disabled = false;
    document.getElementById("confirm").disabled = true;
    document.getElementById("drawRec").disabled = true;
}