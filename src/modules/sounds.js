
/**
 * sounds
 */

const sound = new Audio('/sounds/hit.mp3');
const winsound = new Audio('/sounds/win.mp3');
sound.preload = 'auto';
winsound.preload = 'auto';

export const playsound = (collision) => {
    //const strength = collision.contact.getImpactVelocityAlongNormal()
    // const strength = Math.random() * 25
    // if (strength > 1) {
    //     const volume = strength / 30 < 1 ? strength / 30 : 1;
    //     sound.volume = volume;
    //     sound.currentTime = 0;
    //     sound.play();
    // }
}

export const playWinSound = (collision) => {
    //const strength = collision.contact.getImpactVelocityAlongNormal()
    //if (strength > 1) {
        // const volume = strength / 30 < 1 ? strength / 30 : 1;
        // winsound.volume = volume;
         //winsound.currentTime = 0;
     //winsound.play();
    //}
}
