

function stringToArray(elevations){
    elevations = elevations.substr(1, elevations.length-2)
    elevations = elevations.split(",")
    return elevations
}

function stringToNumArray(elevations){
    elevations = elevations.map(Number)
    return elevations
}



function saveCoordinates(){
    

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

}