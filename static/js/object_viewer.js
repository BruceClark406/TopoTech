
function build(elevations1d){
   
    let elevations
            //gets coordinates and then returns elevations
            $.ajax({
                url: "get_coordinates",
                type: "GET",
                async: false,
                success: function(response){
                    elevations = stringToArray(response);
                },
                error: function(error){
                    console.log(error);
                }
            })
            
            //get rid of parentheses sourounding shape
            let width = elevations[elevations.length-1]
            width = parseInt(width.replace(")", ""))
            let height = elevations[elevations.length-2]
            height = parseInt(height.replace("(", ""))

            elevations.pop()
            elevations.pop()
            
            //get rid of brackets sourounding shape
            elevations[0] = elevations[0].replace("[", "")
            elevations[elevations.length-1] = elevations[elevations.length-1].replace("]", "")

            //convert to typeof number
            elevations = stringToNumArray(elevations)

            
            //THREE JS IMPLEMENTATION
            let scene = new THREE.Scene();
            let camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000)
            camera.position.z = 5;

            let renderer = new THREE.WebGLRenderer();
            renderer.setClearColor("#e5e5e5");

            //where to render
            let object_viewer_div = document.getElementById("object_viewer_div");
            renderer.setSize($(object_viewer_div).width(), $(object_viewer_div).height());
            object_viewer_div.appendChild(renderer.domElement); 

            //resizing the window (changing side bar, changing window size)
            window.addEventListener('resize', () => {
                renderer.setSize($(object_viewer_div).width(), $(object_viewer_div).height());
                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();
            })
            document.getElementById("sidebarCollapse").addEventListener('click', function(){
                if($(sidebar).hasClass("active")){
                    renderer.setSize($(object_viewer_div).width()-$(sidebar).width(), $(object_viewer_div).height());
                    camera.aspect = window.innerWidth / window.innerHeight;
                    camera.updateProjectionMatrix();
                }else{
                    renderer.setSize($(object_viewer_div).width()+$(sidebar).width(), $(object_viewer_div).height());
                    camera.aspect = window.innerWidth / window.innerHeight;
                    camera.updateProjectionMatrix();
                }
                
            })


            controls = new THREE.OrbitControls(camera, renderer.domElement);
            controls.target.set(0, 0, 0);
            controls.update();
            
            //create the plane -> width, height, width-verticies, height-verticies
            let geometry = new THREE.PlaneGeometry(width/240, height/240, width-1, height-1);

            //extrude verticies on the plane
            for (let i = 0, l = geometry.vertices.length; i < l; i++) {
                geometry.vertices[i].z = elevations[i] / 65535 * 10;
            }

            // create meaterial
            let material = new THREE.MeshPhongMaterial({color: "#000000", side: THREE.DoubleSide, wireframe: true});
            let mesh = new THREE.Mesh(geometry, material);
            scene.add(mesh);

            //change the orientation of the camera
            mesh.lookAt(new THREE.Vector3(0, 1, 0));


            //add light
            let light = new THREE.PointLight(0xFFFFFF,1,500)
            light.position.set(50,50,50);
            scene.add(light);

            //animate for object controls
            function animate() {

                requestAnimationFrame( animate );

                // required if controls.enableDamping or controls.autoRotate are set to true
                controls.update();

                renderer.render( scene, camera );
                //mesh.rotation.y += 0.0001
            }   

            animate()
}

function stringToNumArray(elevations){
    elevations = elevations.map(Number)
    return elevations
}

function stringToArray(elevations){
    elevations = elevations.substr(1, elevations.length-2)
    elevations = elevations.split(",")
    return elevations
}

