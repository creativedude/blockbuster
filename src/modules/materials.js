import CANNON from "cannon";

import * as THREE from 'three';

export const inertReactionMaterial = new CANNON.Material('inertReactionMaterial');
export const teeReactionMaterial = new CANNON.Material('teeReactionMaterial');
export const targetReactionMaterial = new CANNON.Material('targetReactionMaterial')


export const floorReactionMaterial = new CANNON.Material('floorReactionMaterial')
export const bulletReactionMaterial = new CANNON.Material('bulletReactionMaterial')


export const crateReactionMaterial = new CANNON.Material('crateReactionMaterial')


import { environmentMapTexture } from './textures'

export const defaultContactMaterial = new CANNON.ContactMaterial(
    floorReactionMaterial, inertReactionMaterial,
    {
        friction: 0.3,
        restitution: 0.2
    })


    export const inertContactMaterial = new CANNON.ContactMaterial(
    inertReactionMaterial, inertReactionMaterial,
    {
        friction: 0.1,
        restitution: 0.3
    })

    export const targetContactMaterial = new CANNON.ContactMaterial(
    bulletReactionMaterial, targetReactionMaterial,
    {
        friction: 0.1,
        restitution: 3
    })

    export const inertBulletContactMaterial = new CANNON.ContactMaterial(
        bulletReactionMaterial, inertReactionMaterial,
        {
            friction: 0.1,
            restitution: 0.7           
        })


    export const teeBulletContactMaterial = new CANNON.ContactMaterial(
        bulletReactionMaterial, teeReactionMaterial,
        {
            friction: 0.1,
            restitution: 0              
        })

    


    const woodTextureMap = new THREE.TextureLoader().load('textures/wood.jpg')
    woodTextureMap.colorSpace = THREE.SRGBColorSpace;
    const crateAlphaMap = new THREE.TextureLoader().load('textures/crateAlpha.jpg')

    woodTextureMap.generateMipmaps = false;
    
    woodTextureMap.minFilter = THREE.NearestFilter;
    woodTextureMap.magFilter = THREE.NearestFilter;

    crateAlphaMap.generateMipmaps = false;
    crateAlphaMap.minFilter = THREE.NearestFilter;
    crateAlphaMap.magFilter = THREE.NearestFilter;
    
    woodTextureMap.repeat.x = 0.1;
    woodTextureMap.repeat.y = 0.1;
    woodTextureMap.wrapS = THREE.MirroredRepeatWrapping;
    woodTextureMap.wrapT = THREE.MirroredRepeatWrapping;
    
    export const woodMaterial = new THREE.MeshStandardMaterial({
        metalness: 0.3,
        //color: '#574327',
        roughness: 0.4,
        map: woodTextureMap,
        envMap: environmentMapTexture,
        envMapIntensity: 0.4
    })


    export const crateMaterial = new THREE.MeshStandardMaterial({
        metalness: 0.2,
        //color: '#574327',
        roughness: 0.4,
        map: woodTextureMap,
        transparent: true,
        alphaMap: crateAlphaMap,
        side: THREE.DoubleSide,
        envMap: environmentMapTexture,
        envMapIntensity: 0.5
    })

    export const bulletMaterial = new THREE.MeshStandardMaterial({
        metalness: 1,
        roughness: 0.4,
        envMap: environmentMapTexture,
        envMapIntensity: 0.5
    })