
import * as THREE from 'three';


/**
 * Base
 */

// Scene
export const scene = new THREE.Scene()
scene.background = '#0000ff'

let fogLight = '#fff'//'#262837'
const fog = new THREE.Fog(fogLight, 20, 70)
scene.fog = fog;

