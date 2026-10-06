import * as THREE from 'three';
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xEEEEEE);
const camera = new THREE.PerspectiveCamera(20, 1, 1, 1000);
camera.position.z = 10;
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x000000, wireframe: true });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);
const renderer = new THREE.WebGLRenderer();
const parent = document.getElementById('div-container-cube1');
renderer.setSize(parent.clientWidth, parent.clientHeight);
parent.appendChild(renderer.domElement);
const animate = () => {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.005;
    cube.rotation.y += 0.005;
    renderer.render(scene, camera);
};
const main = () => {
    requestAnimationFrame(animate);
};
main();
