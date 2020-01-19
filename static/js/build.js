
function build(elevations1d){

    console.log("we got here 5:54")
    
    /*

    //Three JS Implementation
    let scene = new THREE.Scene();
    let camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000)
    camera.position.z = 5;

    let renderer = new THREE.WebGLRenderer();
    renderer.setClearColor("#e5e5e5");
    renderer.setSize(window.innerWidth,window.innerHeight);

    //Where to display
    let objDiv = document.getElementById("object_viewer")
    objDiv.appendChild(renderer.domElement);

    window.addEventListener('resize', () => {
        renderer.setSize(window.innerWidth,window.innerHeight);
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
    })

    controls = new THREE.OrbitControls(camera, renderer.domElement);
    //controls.addEventListener( 'change', render );
    controls.target.set(0, 0, 0);
    controls.update();

    //create the plane
    let geometry = new THREE.PlaneGeometry(3, 4, 297 ,438 );

    //extrude verticies on the plane
    for (let i = 0, l = geometry.vertices.length; i < l; i++) {
        geometry.vertices[i].z = elevations1d[i] / 65535 * 25;
    }

    // create meaterial
    let material = new THREE.MeshLambertMaterial({color: 0xFFCC00, wireframe: true});
    let mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    //change the orientation of the camera
    mesh.lookAt(new THREE.Vector3(0, 1, 0));


    //add light
    let light = new THREE.PointLight(0xFFFFFF,1,500)
    light.position.set(10,0,25);
    scene.add(light);

    //animate for object controls
    function animate() {

        requestAnimationFrame( animate );

        // required if controls.enableDamping or controls.autoRotate are set to true
        controls.update();

        renderer.render( scene, camera );
    }   

    animate()
    */
}



