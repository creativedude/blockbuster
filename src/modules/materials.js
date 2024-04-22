import CANNON from "cannon";

export const plastic = new CANNON.Material('plastic');

export const target = new CANNON.Material('target')


export const concrete = new CANNON.Material('concrete')
export const metal = new CANNON.Material('metal')

export const contactMaterial = new CANNON.ContactMaterial(
    concrete, plastic,
    {
        friction: 0.9,
        restitution: 0.4
    })


    export const plasticContactMaterial = new CANNON.ContactMaterial(
    plastic, plastic,
    {
        friction: 0.1,
        restitution: 0.7
    })

    export const targetContactMaterial = new CANNON.ContactMaterial(
    metal, target,
    {
        friction: 0.1,
        restitution: 3
    })

