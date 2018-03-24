var renderer = new THREE.WebGLRenderer();

renderer.setClearColor(0x14149f);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

var camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 0.1, 3000);

var scene = new THREE.Scene();

var light = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(light);

var light1 = new THREE.PointLight(0xffffff, 0.5);
scene.add(light1);			

var geometry = new THREE.PlaneGeometry(100, 100);

var material = new THREE.MeshLambertMaterial({color: 0xF3FFE2});
var mesh = new THREE.Mesh(geometry, material);
mesh.position.z = -1000;

scene.add(mesh);

render();

var delta = 0;

function render() {
	// mesh.rotation.x += 0.01;
	// mesh.rotation.y += 0.01;

	delta += 0.1;
	geometry.vertices[0].x = -25 + Math.sin(delta) * 50;
	geometry.verticesNeedUpdate = true;
	renderer.render(scene, camera);
	requestAnimationFrame(render);
}