// import '/style.css'

import * as THREE from 'https://cdn.skypack.dev/three@0.136.0'

// Initialisation
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
scene.add(camera)
camera.position.set(0, 0,0 )
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg')
})
renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize(window.innerWidth, window.innerHeight)

// Lighting
const light = new THREE.PointLight(0xffffff, 1, 100)
light.position.set(10, 10, 10)
scene.add(light)

// Octahedron
const shapeGeometry = new THREE.OctahedronGeometry()
const shapeMaterial = new THREE.MeshStandardMaterial({
  color: 0xC5D2D3,

})
const octahedron = new THREE.Mesh(shapeGeometry, shapeMaterial)
camera.add(octahedron)
octahedron.position.set(0, 0, -7.5)

// Event Handler
window.onresize = () => {
  renderer.setSize(window.innerWidth, window.innerHeight)
}

// Animation loop
function animate() {
	requestAnimationFrame(animate)

  octahedron.rotation.x += 0.01
  octahedron.rotation.y += 0.01
  octahedron.rotation.z += 0.01

	renderer.render(scene, camera)
}

animate();
