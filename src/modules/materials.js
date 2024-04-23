import CANNON from "cannon";

export const inertReactionMaterial = new CANNON.Material('inertReactionMaterial');

export const targetReactionMaterial = new CANNON.Material('targetReactionMaterial')


export const floorReactionMaterial = new CANNON.Material('floorReactionMaterial')
export const bulletReactionMaterial = new CANNON.Material('bulletReactionMaterial')

export const defaultContactMaterial = new CANNON.ContactMaterial(
    floorReactionMaterial, inertReactionMaterial,
    {
        friction: 0.9,
        restitution: 0.4
    })


    export const inertContactMaterial = new CANNON.ContactMaterial(
    inertReactionMaterial, inertReactionMaterial,
    {
        friction: 0.1,
        restitution: 0.7
    })

    export const targetContactMaterial = new CANNON.ContactMaterial(
    bulletReactionMaterial, targetReactionMaterial,
    {
        friction: 0.1,
        restitution: 3
    })

