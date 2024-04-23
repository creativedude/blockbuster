import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import GUI from 'lil-gui'
//import * as dat from 'dat.gui'  
import CANNON, { Vec3 } from 'cannon'
import Stats from 'three/examples/jsm/libs/stats.module.js'
import { environmentMapTexture } from './modules/textures'
import { createsphere, createBox, meshMaterial } from './modules/createObjects'
import { ambientLight, directionalLight } from './modules/lights'
import { camera } from './modules/camera'
import { inertReactionMaterial } from './modules/materials'
import { world } from './modules/world'
import { scene } from './modules/scene'
import { playsound, playWinSound } from './modules/sounds'
import { generateBulletFn, generateCannonFn, generateCannonStandFn } from './modules/bullet'


/**
 * Debug
 */
const urlParams = new URLSearchParams(window.location.search);
const debugMode = urlParams.get('debug') === 'true'
console.log(debugMode)

const gui = new GUI()

var stats = new Stats();
if (debugMode) {
    gui.show()

    document.body.appendChild(stats.dom);
    stats.showPanel(0); // 0: fps, 1: ms, 2: mb, 3+: custom
} else {
    gui.hide()
}

/**
 * game variables
 */

let score = 0;
let scoreMultiplier = 1;
let level = 0;
let gameOver = false;
let ammo = 3;

let boxesHit = 0;
let hasHitBox = false;

const sharedParams = {
    bullet: {
        diameter: 0.25,
        x: 0,
        y: 0,
        z: 0
    },
    plane: {
        width: 6,
        length: 16
    }
}


/**
 * collisions
 */


export const collisionDetector = (e) => {
    console.log(e.body.material.name)
    if (e.body.material.name === 'targetReactionMaterial' && e.body.mass !== 0) {
        playWinSound(e)
        boxArr.map((box, i) => {
            if (e.body === box.body) {
                hitRedBoxFn(e)

                setTimeout(() => {
                    boxArr.splice(i, 1);
                    // Remove body
                    box.body.removeEventListener('collide', playsound)
                    world.removeBody(box.body)
                    //targets--;
                    updateDetails();

                    // Remove mesh
                    scene.remove(box.mesh)
                }, 30)
            }
        })
    } else {
        playsound(e)
    }
}


const hitRedBoxFn = (e) => {
    scoreMultiplier++;

    document.getElementById('multiplier').classList.add('big')
    setTimeout(() => {
        document.getElementById('multiplier').classList.remove('big')
    }, 200)

    boxesHit++;
    hasHitBox = true;
    if (boxesHit >= 5) {
        ammo++;
        boxesHit = 0;
        document.getElementById('bulletCounter').classList.add('big')
        setTimeout(() => {
            document.getElementById('bulletCounter').classList.remove('big')
        }, 200)
    }
    score = score + ((50 * (level + 1)) * scoreMultiplier);
    updateDetails()
}

/**
 * Utils
 */

export let boxArr = [];
const spheresArr = [];

const debugObj = {
    createBox: () => {
        for (let i = 0; i < 10; i++) {
            createBox(boxArr, world, scene, playsound, Math.random() * 0.1, { x: 0, y: 10, z: 0 })
        }
    },
    createSphere: () => {
        for (let i = 0; i < 1; i++) {
            createsphere(spheresArr, world, scene, playsound, Math.random(), { x: 0, y: 10, z: 0 })
        }
    },
    levelUp: () => {
        nextLevel()

    }
}

gui.add(debugObj, 'createBox')
gui.add(debugObj, 'createSphere')
gui.add(debugObj, 'levelUp')

/**
 * Physics
 */

/**
 * bullet sphere
 */

const bulletObject = generateBulletFn(world, scene, collisionDetector)
const cannonObject = await generateCannonFn(scene);
const cannonStand = await generateCannonStandFn(scene)

const bulletBody = bulletObject.bulletBody
const bullet = bulletObject.bullet
const aimHelper = bulletObject.aimHelper
const powerHelper = bulletObject.powerHelper
const shotheight = bulletObject.shotheight


/**
 * targets
 */
let targets = 0;
//sharedParams.plane.width.length

const generateTargets = () => {
    targets = 0
    let redLikelihood = 0.1 - (level * 0.005);
    let whiteLikelihood = 0.05 + (level * 0.02);
    if (level < 40 && redLikelihood > 0) {
        for (let i = 0; i < sharedParams.plane.length - 8; i++) {
            for (let j = 0; j < sharedParams.plane.width - 1; j++) {
                const z = - i - 4
                const x = - j + (sharedParams.plane.width / 2) - 1
                const chance = Math.random();
                if (chance > 1 - redLikelihood) {
                    targets++;
                    createBox(
                        boxArr, world, scene, playsound,
                        0.9,
                        { x: x, y: 0.5, z: z },
                        0.5,
                        false,
                        '#f00'
                    )
                } else if (chance < whiteLikelihood) {
                    createBox(
                        boxArr, world, scene, playsound,
                        0.9,
                        { x: x, y: 0.5, z: z },
                    )
                }
            }
        }
        updateDetails();
    } else {
        gameOver = true
    }
    if (targets < 1 && redLikelihood > 0) {

        clearBoxes();
        generateTargets();
    } else {

        levelTransition = false
    }

}






/**
 * Floor
 */
let floorGeometry = new THREE.BoxGeometry(sharedParams.plane.width, 100, sharedParams.plane.length)
const floor = new THREE.Mesh(
    floorGeometry,
    new THREE.MeshStandardMaterial({
        color: '#34de78',
        metalness: 0.3,
        roughness: 0.4,
        envMap: environmentMapTexture,
        envMapIntensity: 0.5,
        //transparent:true,
        opacity: 0.2
    })
)
floor.receiveShadow = true
floor.position.y = -50;
floor.position.z = (- sharedParams.plane.length / 2) + 4;
scene.add(floor)

// create physics body

const floorShape = new CANNON.Box(new CANNON.Vec3(sharedParams.plane.width / 2, 100 / 2, sharedParams.plane.length / 2));
const floorBody = new CANNON.Body({
    mass: 0,
    shape: floorShape,
    material: inertReactionMaterial
})
floorBody.position.copy(floor.position)
floorBody.addEventListener('collide', playsound)
world.add(floorBody)


const axesHelper = new THREE.AxesHelper(5);
//scene.add(axesHelper)

/**
 * Lights
 */

scene.add(ambientLight)
scene.add(directionalLight)

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}


window.addEventListener('resize', () => {
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height

    camera.setViewOffset(sizes.width * 3, sizes.height * 1.5, sizes.width * 1, sizes.height * 0, sizes.width, sizes.height);
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

})

/**
 * Camera
 */
scene.add(camera)


// Canvas
const canvas = document.querySelector('canvas.webgl')

//Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.shadowMap.enabled = true
renderer.shadowMap.type = THREE.PCFSoftShadowMap
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))


/**
 * bulletPhysics
 */
let powerValues = {
    x: 0,
    y: 0,
    z: 0
};
let powerGrowthInterval;
const fireFn = () => {
    console.log('firing, gamneover?', gameOver)
    if (!gameOver) {
        if (bullet.position.x === 0) {

            ammo--;

            document.getElementById('bulletCounter').innerHTML = ammo
            clearInterval(powerGrowthInterval);
            setTimeout(() => {
                const button = document.getElementById('firebtn');
                const scaleFactor = 1; // Increase scale by 0.1 for each count
                button.style.transform = `scale(${scaleFactor})`;
            }, 250)
            getPower();
            const powX = - 2000 * powerValues.x;
            const powY = - 2000 * powerValues.y;
            const powZ = - 2000 * powerValues.z;
            bulletBody.applyForce(new CANNON.Vec3(powX, powY, powZ), bulletBody.position)
            power = 0;
            getPower();
            //bulletBody.applyForce(new CANNON.Vec3(0, 0, -150), new CANNON.Vec3(0, 0, 0))
        } else {
            console.log('bullet not in position, cant fire', bullet.position.x)
        }
    }
}

const resetFn = () => {
    console.log('resetting')
    if (!gameOver) {
        boxesHit = 0;
        if (hasHitBox) {
            ammo++;
            hasHitBox = false;
        }
        console.log('game is not over')
        if (ammo <= 0) {

            gameOver = true
            showGameOver();
            console.log('game over', ammo)
            //bulletBody.position.set(0, 0.75, 0)
        }
        scoreMultiplier = 1;
        bulletBody.position.set(0, 0.95, 0)
        bulletBody.velocity.set(0, 0, 0);
        bulletBody.angularVelocity.set(0, 0, 0);
    } else {
        console.log('game is over')
        scoreMultiplier = 1;
        bulletBody.position.set(0, 0.95, 0)
        bulletBody.velocity.set(0, 0, 0);
        bulletBody.angularVelocity.set(0, 0, 0);

    }
    updateDetails();
    //bulletBody.applyForce(new CANNON.Vec3(0, 0, -150), new CANNON.Vec3(0, 0, 0))
}
let angle = 0;
let windage = 0;
let power = 0


const getPower = () => {
    var horizontalAngleRad = angle
    var x = (power + 0.3) * Math.sin(windage);
    var y = - (power + 0.3) * Math.cos(windage) * Math.sin(angle);
    var z = (power + 0.3) * Math.cos(windage) * Math.cos(angle);

    powerValues.x = x
    powerValues.y = y
    powerValues.z = z

}
getPower()

const angleFn = (e) => {
    angle = Number(e.target.value)
    getPower();
}
const windFn = (e) => {
    windage = - Number(e.target.value)
    getPower();
}
const powerFn = (e) => {
    power = Number(e.target.value)
    getPower();
}
function startGrowPowerFn(e) {
    e.preventDefault()
    powerGrowthInterval = setInterval(growPowerFn, 100);
}
const growPowerFn = () => {
    if (!cooldown && !gameOver) {
        if (bullet.position.x !== 0) {
            //resetFn();
            console.log('not in place, cant fire')
        } else {
            power += 0.05;

            const button = document.getElementById('firebtn');
            const scaleFactor = 1 + power; // Increase scale by 0.1 for each count
            button.style.transform = `scale(${scaleFactor})`;
            getPower();
            if (power >= 2) {
                cooldown = true;
                fireFn();
                setTimeout(() => {
                    cooldown = false;
                }, 2000)
            }
        }
    }
}
const restartFn = () => {
    console.log('restarting')
    level = -1;
    score = 0;
    boxesHit = 0;
    hasHitBox = false;
    scoreMultiplier = 1;
    gameOver = false;
    ammo = 2;
    gameOver = false;
    resetFn();
    nextLevel();
    document.getElementById('gameOverModal').classList.remove('visible')
}

//document.getElementById('powerInput').addEventListener('input', powerFn, false);
document.getElementById('angleInput').addEventListener('input', angleFn, false);
document.getElementById('windageInput').addEventListener('input', windFn, false);
//document.getElementById("firebtn").addEventListener('click', fireFn)
document.getElementById("firebtn").addEventListener('mousedown', startGrowPowerFn)
document.getElementById("firebtn").addEventListener('touchstart', startGrowPowerFn)

document.getElementById("firebtn").addEventListener('touchend', fireFn)

document.getElementById("firebtn").addEventListener('mouseup', fireFn)

document.getElementById("resetbtn").addEventListener('click', resetFn)
document.getElementById("restartBtn").addEventListener('click', restartFn)


let cooldown = false;
let inputAccelerator = 0;
document.addEventListener('keydown', function (event) {
    if (event.keyCode == 40) {
        inputAccelerator += 0.005;
        if (angle <= 1.57) angle += inputAccelerator;
    }
    else if (event.keyCode == 38) {
        inputAccelerator += 0.005;
        if (angle >= -1) angle -= inputAccelerator;
    }
    else if (event.keyCode == 37) {
        inputAccelerator += 0.005;
        if (windage <= 0.7853) windage += inputAccelerator;
    }
    else if (event.keyCode == 39) {
        inputAccelerator += 0.005;

        if (windage >= -0.7853) windage -= inputAccelerator;
    }

    else if (event.keyCode == 32) {
        growPowerFn()
        //
    }
});


document.addEventListener('keyup', function (event) {
    inputAccelerator = 0;
    if (!cooldown) {
        if (event.keyCode == 32) {

            fireFn();
            cooldown = true;
            setTimeout(() => {
                cooldown = false;
            }, 2000)
        }
    }
});

const clearBoxes = () => {

    boxArr.map(box => {
        box.body.removeEventListener('collide', playsound)
        world.removeBody(box.body)
        // Remove mesh
        scene.remove(box.mesh)
    })
    boxArr = [];
}

let levelTransition = false;
const nextLevel = () => {
    ammo++;
    resetFn();
    level++;

    sharedParams.plane.length = 20 + (level * 2);
    clearBoxes();
    floorGeometry.dispose();
    floorGeometry = new THREE.BoxGeometry(sharedParams.plane.width, 100, sharedParams.plane.length)
    floor.geometry = floorGeometry;

    floor.position.z = (- sharedParams.plane.length / 2) + 4;
    let floorShape = new CANNON.Box(new CANNON.Vec3(sharedParams.plane.width / 2, 100 / 2, 6 / 2));
    let floorBody = new CANNON.Body({
        mass: 0,
        shape: floorShape,
        material: inertReactionMaterial,
        position: new CANNON.Vec3(0, -50, - sharedParams.plane.length + 7)
    })
    floorBody.addEventListener('collide', playsound)
    world.add(floorBody)

    generateTargets();

}

const updateDetails = () => {
    // count Targets 
    let countedTargets = 0;
    console.log('counting targets', targets, countedTargets)
    for (var i = boxArr.length - 1; i >= 0; i--) {
        if (boxArr[i].body.material.name === 'targetReactionMaterial') {
            countedTargets++;
            console.log('+')
        }
    }
    console.log(countedTargets, targets)
    targets = countedTargets;
    
    console.log('updating details')
    document.getElementById('levelnr').innerHTML = level;
    document.getElementById('scorenr').innerHTML = score;
    document.getElementById('blocknr').innerHTML = targets;
    document.getElementById('multiplier').innerHTML = 'x' + scoreMultiplier;
    let bulletHTML = ''
    // new Array(ammo).map(() => {
    //     bulletHTML += '<div class="bullet"></div>'
    // })
    document.getElementById('bulletCounter').innerHTML = ammo
}


/**
 * modal
 */
document.getElementById('infobtn').addEventListener('click', () => {
    document.getElementById('infomodal').classList.toggle('visible')
})

document.getElementById('closebtn').addEventListener('click', () => {
    document.getElementById('infomodal').classList.remove('visible')
})


const showGameOver = () => {
    console.log('showing game over')
    document.getElementById('finScore').innerHTML = score;


    document.getElementById('gameOverModal').classList.toggle('visible')
}


/**
 * Animate
 */
const clock = new THREE.Clock()

let prevTime = 0;
let needsUpdate = false;
const tick = () => {

    stats.begin();

    // monitored code goes here



    const elapsedTime = clock.getElapsedTime()
    let deltaTime = elapsedTime - prevTime;
    prevTime = elapsedTime;


    // Update controls
    controls.update()
    //update physics
    world.step(1 / 60, deltaTime, 3);
    //update render


    // bullet.position.x = bulletBody.position.x
    // bullet.position.y = bulletBody.position.y
    // bullet.position.z = bulletBody.position.z
    bullet.position.copy(bulletBody.position)
    if (bullet.position.y < -10) {
        resetFn()
    }


    for (var i = boxArr.length - 1; i >= 0; i--) {

        boxArr[i].mesh.position.copy(boxArr[i].body.position)
        boxArr[i].mesh.quaternion.copy(boxArr[i].body.quaternion)

        if (boxArr[i].mesh.position.y < -10) {
            console.log('removing box because it fell off', boxArr[i].body.material.name)
            if (boxArr[i].body.material.name === 'targetReactionMaterial') { 
                console.log('a red box fell off', targets)
                targets--; 
                console.log('removed red box', targets)
                needsUpdate = true;
            }
            // Remove body
            boxArr[i].body.removeEventListener('collide', playsound)
            world.removeBody(boxArr[i].body)

            // Remove mesh
            scene.remove(boxArr[i].mesh)

            boxArr.splice(i, 1);
        }

    }
    if (needsUpdate) {
        updateDetails();
        needsUpdate = false;
    }

    spheresArr.map(sphereI => {
        sphereI.mesh.position.copy(sphereI.body.position)
        sphereI.mesh.quaternion.copy(sphereI.body.quaternion)
    })

    if (targets === 0 && !levelTransition) {
        levelTransition = true
        //alert('targets done!')
        setTimeout(nextLevel, 1000)
    }


    aimHelper.rotation.x = angle

    aimHelper.rotation.y = windage
    if (cannonObject) {
        cannonObject.rotation.y = windage + Math.PI;
        cannonObject.rotation.x = angle
    }
    if (cannonStand) {
        cannonStand.rotation.y = windage + Math.PI;
    }

    powerHelper.position.x = powerValues.x
    powerHelper.position.y = powerValues.y + shotheight + 0.25
    powerHelper.position.z = powerValues.z

    camera.lookAt(bullet.position)



    // work out 


    // Render
    renderer.render(scene, camera)

    stats.end();

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}
generateTargets();
updateDetails();
tick()