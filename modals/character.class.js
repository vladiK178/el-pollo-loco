class Character extends MovableObject {

    constructor() {
        super().loadImage("img/2_character_pepe/1_p1_stand.pngimg/2_character_pepe/2_walk/W-21.png");
    }

    jump() {
        console.log("Jumping");
    }
}