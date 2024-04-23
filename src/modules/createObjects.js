import * as THREE from 'three'
import CANNON from 'cannon';
import { environmentMapTexture } from './textures'
import { playsound, playWinSound } from './sounds';
import { inertReactionMaterial, targetReactionMaterial, woodMaterial, crateMaterial, bulletMaterial, crateReactionMaterial} from './materials';


const sphereGeo = new THREE.SphereGeometry(1, 16, 16)
const boxGeo = new THREE.BoxGeometry(1, 1, 1);

export const meshMaterial = new THREE.MeshStandardMaterial({
    metalness: 0.3,
    roughness: 0.4,
    envMap: environmentMapTexture,
    envMapIntensity: 0.5
})


export const createsphere = (spheresArr, world, scene, radius, position) => {
    // create 3js mesh
    const mesh = new THREE.Mesh(
        sphereGeo,
        meshMaterial
    )

    mesh.castShadow = true
    mesh.position.copy(position)
    mesh.scale.set(radius, radius, radius)


    scene.add(mesh)

    // create physics body

    const physShape = new CANNON.Sphere(radius);
    const physBody = new CANNON.Body({
        mass: 0.5,
        shape: physShape,
        position: new CANNON.Vec3(0, 3, 0),
        material: inertReactionMaterial
    })
    physBody.position.copy(position)
    physBody.addEventListener('collide', playsound)
    world.add(physBody)

    spheresArr.push({
        mesh: mesh,
        body: physBody,
    })

}


export const createBox = (boxArr, world, scene, radius, position, mass, color) => {

    // create 3js mesh
    let mesh
    if (color) {
        const newmeshMaterial = new THREE.MeshStandardMaterial({
            metalness: 0.3,
            roughness: 0.4,
            envMap: environmentMapTexture,
            envMapIntensity: 0.5,
            color: color
        })

        mesh = new THREE.Mesh(
            boxGeo,
            newmeshMaterial
        )
    } else {

        mesh = new THREE.Mesh(
            boxGeo,
            meshMaterial
        )
    }
        mesh.castShadow = true
        mesh.position.copy(position)
        mesh.scale.set(radius, radius, radius)

        scene.add(mesh)

    // create physics body
    let computedMass = mass === undefined || mass === null ? 0.1 : mass
    

    const physShape = new CANNON.Box(new CANNON.Vec3(radius / 2, radius / 2, radius / 2));
    const physBody = new CANNON.Body({
        mass: computedMass,
        shape: physShape,
        position: new CANNON.Vec3(0, 3, 0),
        material: inertReactionMaterial
    })
    physBody.position.copy(position)
    physBody.addEventListener('collide', playsound)

    boxArr.push({
        mesh: mesh,
        body: physBody,
    })

    world.add(physBody)
}


export const createTarget = (boxArr, world, scene, radius, position, mass, color) => {

    // create 3js mesh
    let mesh
    if (color) {
        const newmeshMaterial = new THREE.MeshStandardMaterial({
            metalness: 0.3,
            roughness: 0.4,
            envMap: environmentMapTexture,
            envMapIntensity: 0.5,
            color: color
        })

        mesh = new THREE.Mesh(
            boxGeo,
            newmeshMaterial
        )
    } else {

        mesh = new THREE.Mesh(
            boxGeo,
            meshMaterial
        )
    }
    mesh.castShadow = true
    mesh.position.copy(position)
    mesh.scale.set(radius, radius, radius)

    scene.add(mesh)

    // create physics body
    let computedMass = mass || mass === 0 ? mass : 0.1

    const physShape = new CANNON.Box(new CANNON.Vec3(radius / 2, radius / 2, radius / 2));
    const physBody = new CANNON.Body({
        mass: computedMass,
        shape: physShape,
        position: new CANNON.Vec3(0, 3, 0),
        material: color ? targetReactionMaterial : inertReactionMaterial
    })
    physBody.position.copy(position)
    physBody.addEventListener('collide', playWinSound)

    boxArr.push({
        mesh: mesh,
        body: physBody,
    })

    world.add(physBody)
}

export const createAmmoBox = (boxArr, world, scene, position) => {
    // create 3js group
    const ammoBox = new THREE.Group();
    const box1 = new THREE.Mesh(
        boxGeo,
        crateMaterial
    )
    box1.castShadow = true

    box1.position.set(0, 0.01, 0)

    const sphere = new THREE.Mesh(
        sphereGeo,
        bulletMaterial
    )
    sphere.position.set(0, 0, 0)
    sphere.scale.set(0.25, 0.25, 0.25)
    ammoBox.add(sphere)
    ammoBox.add(box1)
    ammoBox.position.copy(position)
    ammoBox.scale.set(1, 1, 1)

    scene.add(ammoBox)

    let computedMass =  0.5

    const physShape = new CANNON.Box(new CANNON.Vec3(1 / 2, 1 / 2, 1 / 2));
    const physBody = new CANNON.Body({
        mass: computedMass,
        shape: physShape,
        position: new CANNON.Vec3(0, 3, 0),
        material: crateReactionMaterial
    })
    physBody.position.copy(position)
    physBody.addEventListener('collide', playsound)

    boxArr.push({
        mesh: ammoBox,
        body: physBody,
    })

    world.add(physBody)
}