import CANNON from "cannon";
import { defaultContactMaterial, inertContactMaterial, targetContactMaterial } from "./materials";


export const world = new CANNON.World()
world.gravity.set(0, -9.82, 0);

//performance
world.broadphase = new CANNON.SAPBroadphase(world)
world.allowSleep = true;

//materials
//probably best to stick to just one material, but whatever 
world.defaultContactMaterial = defaultContactMaterial
world.addContactMaterial(defaultContactMaterial)
world.addContactMaterial(inertContactMaterial)
world.addContactMaterial(targetContactMaterial)