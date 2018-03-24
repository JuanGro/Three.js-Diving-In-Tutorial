var renderer = new THREE.WebGLRenderer();

renderer.setClearColor(0x14149f);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

var camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 300, 3000);

var scene = new THREE.Scene();

var light = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(light);

var light1 = new THREE.PointLight(0xffffff, 0.5);
scene.add(light1);			

var material = new THREE.MeshNormalMaterial({
	color: 0xff0000,
	transparent: true,
	opacity: 1,
	wireframe: true,
	wireframeLinewidth: 5,
	wireframeLinejoin: 'round',
	wireframeLinecap: 'round'
});

var geometry = new THREE.BoxGeometry(100, 100, 100);
var mesh = new THREE.Mesh(geometry, material);
mesh.position.z = -1000;
mesh.position.x = -100;
scene.add(mesh);


var geometry2 = new THREE.SphereGeometry(50, 20, 20);
var mesh2 = new THREE.Mesh(geometry2, material);
mesh2.position.z = -1000;
mesh2.position.x = 100;
scene.add(mesh2);

var geometry3 = new THREE.PlaneGeometry(10000, 10000, 100, 100);
var mesh3 = new THREE.Mesh(geometry3, material);
mesh3.rotation.x = -90 * Math.PI / 180;
mesh3.position.y = -100;
scene.add(mesh3);

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