import * as THREE from 'three'

const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}
export const camera = new THREE.PerspectiveCamera(56, sizes.width / sizes.height, 0.1, 100)

export const resetCameraFn = () => {
    camera.position.set(0, 5, 10)
}

//const camera = new THREE.PerspectiveCamera(56, sizes.width / sizes.height, 0.1, 100)
camera.position.set(0, 5, 10)
// const cameraFolder = gui.addFolder('camera')
// cameraFolder.add(camera.position, 'x').min(0).max(80).step(1)
// cameraFolder.add(camera.position, 'y').min(0).max(80).step(1)
// cameraFolder.add(camera.position, 'z').min(0).max(80).step(1)

camera.lookAt(new THREE.Vector3(0, 10, -20));
const heightOffset = 1.5
camera.setViewOffset(sizes.width * 3, sizes.height * heightOffset, sizes.width * 1, sizes.height * 0, sizes.width, sizes.height);
