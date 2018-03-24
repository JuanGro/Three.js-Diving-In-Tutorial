var renderer = new THREE.WebGLRenderer();

renderer.setClearColor(0x333333 );
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 300, 3000);
camera.position.z = 300;

// var light = new THREE.AmbientLight(0xffffff, 0.5);
// scene.add(light);

// var light1 = new THREE.PointLight(0xffffff, 0.5);
// scene.add(light1);

// var material = new THREE.MeshNormalMaterial({
// 	color: 0xff0000,
// 	transparent: true,
// 	opacity: 1,
// 	wireframe: true,
// 	wireframeLinewidth: 5,
// 	wireframeLinejoin: 'round',
// 	wireframeLinecap: 'round'
// });

var material = new THREE.MeshLambertMaterial();
var material2 = new THREE.MeshPhongMaterial();
var material3 = new THREE.MeshStandardMaterial();

var geometry = new THREE.BoxGeometry(100, 100, 100, 10, 10, 10);
var geometry2 = new THREE.SphereGeometry(50, 20, 20);
var geometry3 = new THREE.PlaneGeometry(10000, 10000, 100, 100);

var mesh = new THREE.Mesh(geometry, material);
mesh.position.z = -500;
mesh.position.x = -100;
mesh.position.y = -50;
scene.add(mesh);

var mesh2 = new THREE.Mesh(geometry2, material2);
mesh2.position.z = -500;
mesh2.position.x = 100;
mesh2.position.y = -50;
scene.add(mesh2);

var mesh3 = new THREE.Mesh(geometry3, material3);
mesh3.rotation.x = -90 * Math.PI / 180;
mesh3.position.y = -100;
scene.add(mesh3);

// LIGHTS
// var light = new THREE.AmbientLight(0xffffff, 0.5);
// var light = new THREE.PointLight(0xffffff, 2.0, 1000);
// var light = new THREE.DirectionalLight(0xffffff, 2.0, 1000);
// var light = new THREE.SpotLight(0xffffff, 2.0, 1000);
// light.target = mesh; 
// scene.add(light);

var light = new THREE.HemisphereLight(0xffffbb, 0x0808dd, 1); 
scene.add(light);

renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFShadowMap;

var light = new THREE.SpotLight(0xFFFFFF, 4.0, 3000);
light.position.y = 100;
light.target = mesh;

light.castShadow = true;
light.shadow = new THREE.LightShadow(new THREE.PerspectiveCamera(100, 1, 500, 1000));
light.shadow.bias = 0.0001;
light.shadow.mapSize.width = 2048 * 2;
light.shadow.mapSize.height = 2048 * 2;
scene.add(light);

mesh.castShadow = true;
mesh2.castShadow = true;
mesh3.receiveShadow = true;

//RENDER LOOP
render();

var delta = 0;
function render() {
	delta += 0.01;
	// camera.position.x = Math.sin(delta) * 200;
	// camera.position.z = Math.cos(delta) * 300;
	renderer.render(scene, camera);
	requestAnimationFrame(render);
}