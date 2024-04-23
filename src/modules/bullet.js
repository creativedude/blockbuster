import CANNON from "cannon";
import * as THREE from 'three';
import { playWinSound, playsound } from "./sounds";
import { metal, plastic } from "./materials";
import { environmentMapTexture } from "./textures";
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';

const shotheight = 0.7

export const generateBulletFn = (world, scene, collisionDetector) => {
    const diameter = 0.25

    const bulletShape = new CANNON.Sphere(diameter)

    const bulletBody = new CANNON.Body({
        mass: 2,
        shape: bulletShape,
        position: new CANNON.Vec3(0, shotheight + 0.25, 0),
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
    console.log('bullet', bullet)
    bullet.castShadow = true
    bullet.position.y = shotheight

    scene.add(bullet)



    const aimHelper = new THREE.Mesh(
        new THREE.BoxGeometry(0.01, 0.01, 6),
        new THREE.MeshStandardMaterial({
            color: '#f00',
            metalness: 0.5,
            roughness: 0.4,
            transparent: true,
            opacity: 0.5
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
const metalMaterial = new THREE.MeshStandardMaterial({
    metalness: 0.2,
    color: '#E3AF66',
    roughness: 0.4,
    //envMap: environmentMapTexture,
    envMapIntensity: 0.5
})
const woodTextureMap = new THREE.TextureLoader().load('textures/wood.jpg')

woodTextureMap.generateMipmaps = false;

woodTextureMap.minFilter = THREE.NearestFilter;
woodTextureMap.magFilter = THREE.NearestFilter;

woodTextureMap.repeat.x = 0.1;
woodTextureMap.repeat.y = 0.1;
woodTextureMap.wrapS = THREE.MirroredRepeatWrapping;
woodTextureMap.wrapT = THREE.MirroredRepeatWrapping;

const woodMaterial = new THREE.MeshStandardMaterial({
    metalness: 0.2,
    //color: '#574327',
    roughness: 0.4,
    map: woodTextureMap,
    envMap: environmentMapTexture,
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
                    
                    console.log('object', object)
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