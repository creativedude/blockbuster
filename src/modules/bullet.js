import CANNON from "cannon";
import * as THREE from 'three';
import { playWinSound, playsound } from "./sounds";
import { bulletReactionMaterial, inertReactionMaterial, woodMaterial, bulletMaterial } from "./materials";
import { environmentMapTexture } from "./textures";
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';

const shotheight = 0.7

const aimTorusGeo = new THREE.TorusGeometry(0.1, 0.05, 16, 100)

const aimSphereGeo = new THREE.SphereGeometry(0.1, 16,16)

export const generateBulletFn = (world, scene, collisionDetector) => {
    const diameter = 0.25

    const bulletShape = new CANNON.Sphere(diameter)

    const bulletBody = new CANNON.Body({
        mass: 2,
        shape: bulletShape,
        position: new CANNON.Vec3(0, shotheight + 0.25, 0),
        material: bulletReactionMaterial
    })
    bulletBody.allowSleep = false;

    bulletBody.addEventListener('collide', collisionDetector)

    world.addBody(bulletBody)


    const bullet = new THREE.Mesh(
        new THREE.SphereGeometry(diameter, 32, 32),
        bulletMaterial
    )
    bullet.castShadow = true
    bullet.position.y = shotheight

    scene.add(bullet)

    const ahGroup = new THREE.Group()

    const aimHelperRod = new THREE.Mesh(
        new THREE.BoxGeometry(0.001, 0.001, 6),
        new THREE.MeshStandardMaterial({
            color: '#f00',
            metalness: 0.5,
            roughness: 0.4,
            transparent: true,
            opacity: 0
        })
    )
    aimHelperRod.name = "ahRod"
    //aimHelperRod.position.set(0, shotheight + 0.25, 0)
    aimHelperRod.position.set(0, 0, 0)


    const powerHelper = new THREE.Mesh(
        new THREE.BoxGeometry(0.1, 0.1, 0.1),
        new THREE.MeshStandardMaterial({
            color: '#ff0',
            opacity:0,
            transparent: true,
        })
    )
    
    for (let i = 0; i <= 9; i++) {
        const mesh = new THREE.Mesh(
            aimTorusGeo,
            new THREE.MeshStandardMaterial({
                color: 'rgb(255,' + i * 25 + ',0)',
                metalness: 0.1,
                roughness: 0.4,
                transparent: true,
                opacity:0
            })
        )

        const distanceDiff = 0.125 + (i * i * 0.001) // // ave should be 2, should become smaller
        const zpos = 1.9 - ( 2.6 + (i *  distanceDiff))
        console.log(i, 'z: ', distanceDiff)
        mesh.position.set(0, 0, zpos)



        let scale = 0.5 +(i * 0.25)
        //console.log('scale:', scale) 
        mesh.scale.set(scale,scale,scale)
        ahGroup.add(mesh)

    }

    const cannonPuffGroup = new THREE.Group()

    for (let i = 0; i <= 8; i++) {

        const puff = new THREE.Mesh(
            aimSphereGeo,
            new THREE.MeshStandardMaterial({
                color: '#fff',
                metalness: 0,
                roughness: 0.9,
                transparent: true,
                //opacity:0
            })
        )
        cannonPuffGroup.add(puff)
        let puffX = Math.sin(i * Math.PI / 4) * 0.25
        let puffY = Math.cos(i * Math.PI / 4) * 0.25
        puff.position.set(puffX,puffY,0)
    }
    
    ahGroup.add(cannonPuffGroup)

    powerHelper.position.set(1, shotheight + 0.25, 0)
    ahGroup.add(aimHelperRod)


    scene.add(ahGroup, powerHelper)

    ahGroup.position.set(0, shotheight + 0.25, 0)

    const teeShape = new CANNON.Box(new CANNON.Vec3(0.2, shotheight / 2, 0.2));
    const teeBody = new CANNON.Body({
        mass: 0,
        shape: teeShape,
        position: new CANNON.Vec3(0, shotheight / 2, 0),
        material: inertReactionMaterial
    })

    world.add(teeBody)
    return {
        bulletBody,
        bullet,
        aimHelperGroup: ahGroup,
        powerHelper,
        shotheight,
        cannonPuffGroup
    }
}
const metalMaterial = new THREE.MeshStandardMaterial({
    metalness: 0.2,
    color: '#E3AF66',
    roughness: 0.4,
    //envMap: environmentMapTexture,
    envMapIntensity: 0.5
})

const steelMaterial = new THREE.MeshStandardMaterial({
    metalness: 0.9,
    color: '#fff',
    roughness: 0.2,
    envMap: environmentMapTexture,
    envMapIntensity: 0.15
})
export const generateCannonFn = async (scene) => {
    const loader = new OBJLoader();

    return new Promise((resolve, reject) => {
        // load a resource
        loader.load(
            // resource URL
            'models/sightedcannon.obj',
            // called when resource is loaded
            function (object) {
                object.traverse(child => {

                    child.castShadow = true
                    if (child.isMesh) {
                        if (child.name === 'Body1') {
                            child.material = steelMaterial
                        } else {

                            child.material = metalMaterial
                        }
                    }
                })
                object.scale.set(0.15, 0.15, 0.15);
                object.position.y = shotheight + 0.25
                object.rotation.z = Math.PI * 2;
                scene.add(object);
                resolve(object)
                //return object;

            },
            // called when loading is in progresses
            function (xhr) {

                console.log((xhr.loaded / xhr.total * 100) + '% loaded');

            },
            // called when loading has errors
            function (error) {

                console.log('An error happened', error);

            }
        );

    })
}

export const generateCannonStandFn = (scene) => {
    const loader = new OBJLoader();

    return new Promise((resolve, reject) => {
        // load a resource
        loader.load(
            // resource URL
            'models/stand.obj',
            // called when resource is loaded
            function (object) {
                object.traverse(child => {
                    child.castShadow = true
                    if (child.isMesh) {
                        if (child.name.includes('metal')) {

                            child.material = steelMaterial
                        } else {

                            child.material = woodMaterial
                        }
                    }
                })

                object.scale.set(0.15, 0.15, 0.15);
                object.position.y = shotheight + 0.25
                object.rotation.z = Math.PI * 2;
                scene.add(object);
                resolve(object)
                //return object;

            },
            // called when loading is in progresses
            function (xhr) {

                console.log((xhr.loaded / xhr.total * 100) + '% loaded');

            },
            // called when loading has errors
            function (error) {

                console.log('An error happened', error);

            }
        );

    })
}