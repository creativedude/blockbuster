import * as THREE from 'three'
import CANNON from 'cannon';
import { environmentMapTexture } from './textures'
import { inertReactionMaterial, targetReactionMaterial} from './materials';


const sphereGeo = new THREE.SphereGeometry(1, 16, 16)
const boxGeo = new THREE.BoxGeometry(1, 1, 1);

export const meshMaterial = new THREE.MeshStandardMaterial({
    metalness: 0.3,
    roughness: 0.4,
    envMap: environmentMapTexture,
    envMapIntensity: 0.5
})

export const createsphere = (spheresArr, world, scene, playsound, radius, position) => {
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


export const createBox = (boxArr, world, scene, playsound, radius, position, mass, invisible, color) => {
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
    if (!invisible) {
        mesh.castShadow = true
        mesh.position.copy(position)
        mesh.scale.set(radius, radius, radius)

        scene.add(mesh)
    }

    // create physics body
    let computedMass = mass || mass === 0 ? mass : 0.1

    const physShape = new CANNON.Box(new CANNON.Vec3(radius / 2, radius / 2, radius / 2));
    const physBody = new CANNON.Body({
        mass: computedMass,
        shape: physShape,
        position: new CANNON.Vec3(0, 3, 0),
        material: color && !invisible ? targetReactionMaterial : inertReactionMaterial
    })
    physBody.position.copy(position)
    physBody.addEventListener('collide', playsound)

    boxArr.push({
        mesh: mesh,
        body: physBody,
    })

    world.add(physBody)
}