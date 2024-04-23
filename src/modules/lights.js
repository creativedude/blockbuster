import * as THREE from 'three'


export const directionalLight = new THREE.DirectionalLight(0xffffff, 1.6)
directionalLight.castShadow = true
directionalLight.shadow.mapSize.set(1024, 1024)
directionalLight.shadow.camera.far = 45
directionalLight.shadow.camera.left = - 20
directionalLight.shadow.camera.top = 20
directionalLight.shadow.camera.right = 20
directionalLight.shadow.camera.bottom = - 20
directionalLight.position.set(5, 5, 5)
export const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);//2.1)