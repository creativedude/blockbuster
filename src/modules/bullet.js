import CANNON from "cannon";
import * as THREE from 'three';
import { playWinSound, playsound } from "./sounds";
import { metal, plastic } from "./materials";
import { environmentMapTexture } from "./textures";
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';

const shotheight = 1

export const generateBulletFn = (world, scene, collisionDetector) => {
    const diameter = 0.25

    const bulletShape = new CANNON.Sphere(diameter)

    const bulletBody = new CANNON.Body({
        mass: 2,
        shape: bulletShape,
        position: new CANNON.Vec3(0, 2.25, 0),
        material: metal
    })
    bulletBody.allowSleep = false;

    bulletBody.addEventListener('collide', collisionDetector)

    world.addBody(bulletBody)


    const bullet = new THREE.Mesh(
        new THREE.SphereGeometry(diameter, 32, 32),
        new THREE.MeshStandardMaterial({
            metalness: 1,
            roughness: 0.4,
            envMap: environmentMapTexture,
            envMapIntensity: 0.5
        })
    )
    bullet.castShadow = true
    bullet.position.y = shotheight

    bullet.addEventListener('onClick', playsound)
    scene.add(bullet)



    const aimHelper = new THREE.Mesh(
        new THREE.BoxGeometry(0.025, 0.025, 4),
        new THREE.MeshStandardMaterial({
            color: '#f00',
            metalness: 1,
            roughness: 0.4,
        })
    )
    aimHelper.position.set(0, shotheight + 0.25, 0)
    //aimHelper.position.set(0, 0, 0)


    const powerHelper = new THREE.Mesh(
        new THREE.BoxGeometry(0.1, 0.1, 0.1),
        new THREE.MeshStandardMaterial({
            color: '#ff0',
            metalness: 1,
            roughness: 0.4,
        })
    )
    powerHelper.position.set(1, shotheight + 0.25, 0)

    scene.add(aimHelper, powerHelper)


    const teeShape = new CANNON.Box(new CANNON.Vec3(0.2, shotheight / 2, 0.2));
    const teeBody = new CANNON.Body({
        mass: 0,
        shape: teeShape,
        position: new CANNON.Vec3(0, shotheight / 2, 0),
        material: plastic
    })

    world.add(teeBody)
    return {
        bulletBody,
        bullet,
        aimHelper,
        powerHelper,
        shotheight
    }
}

export const generateCannonFn = (scene) => {
    const loader = new OBJLoader();

    // load a resource
    loader.load(
        // resource URL
        'models/monster.obj',
        // called when resource is loaded
        function ( object ) {
    
            scene.add( object );
    
        },
        // called when loading is in progresses
        function ( xhr ) {
    
            console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
    
        },
        // called when loading has errors
        function ( error ) {
    
            console.log( 'An error happened' );
    
        }
    );
}