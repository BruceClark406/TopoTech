var map;
var rectangle;

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
        var center = map.getCenter();
        var sizeOfRec = .1

        var bounds = {
          north: center.lat() + sizeOfRec,
          south: center.lat() - sizeOfRec,
          east: center.lng() + sizeOfRec,
          west: center.lng() - sizeOfRec
        };


        var bound = map.getCenter();

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

    function generateModel(){


        rect_bounds = rectangle.getBounds()
        north = rect_bounds.pa.h
        east = rect_bounds.ka.h
        south = rect_bounds.pa.g
        west = rect_bounds.ka.g


        //north, east, south, west
        //desired_coordinates = [45.8683101144738, -110.81068980284495, 45.6683101144738, -111.01068980284494]
        console.log(north,east,south,west)

        coordinates = {
        "north": north,
        "east": east,
        "south": south,
        "west": west
        }
        $.ajax({
          url: "generate",
          type: "POST",
          data: coordinates
        })

    }
