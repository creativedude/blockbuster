import CANNON from "cannon";
import { contactMaterial, plasticContactMaterial } from "./materials";


export const world = new CANNON.World()
world.gravity.set(0, -9.82, 0);

//performance
world.broadphase = new CANNON.SAPBroadphase(world)
world.allowSleep = true;

//materials
//probably best to stick to just one material, but whatever 
world.defaultContactMaterial = contactMaterial
world.addContactMaterial(contactMaterial)
world.addContactMaterial(plasticContactMaterial)