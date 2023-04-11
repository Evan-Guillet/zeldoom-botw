const tileSize = 16
const tileScale = 4

function setHero(l1, l2, l3, l4, l5, l6, l7, l8, l9, l10, l11, l12, l13, l14, l15, l16){
    
    hero.setTileSheet(16, 16)
    hero.setScale(4, 4)
    

    hero.addAnimation("IDLE_DOWN", [0], 0.25, l1)
    hero.addAnimation("WALK_DOWN", [0, 4, 8, 12], 0.25, l2)

    hero.addAnimation("IDLE_UP", [1], 0.25, l3)
    hero.addAnimation("WALK_UP", [1, 5, 9, 13], 0.25, l4)

    hero.addAnimation("IDLE_LEFT", [2], 0.25, l5)
    hero.addAnimation("WALK_LEFT", [2, 6, 10, 14], 0.25, l6)

    hero.addAnimation("IDLE_RIGHT", [3], 0.25, l7)
    hero.addAnimation("WALK_RIGHT", [3, 7, 11, 15], 0.25, l8)

    
    hero.addAnimation("ATTACK_DOWN", [16], 0.25, l9)
    hero.addAnimation("ATTACK_UP", [17], 0.25, l10)
    hero.addAnimation("ATTACK_LEFT", [18], 0.25, l11)
    hero.addAnimation("ATTACK_RIGHT", [19], 0.25, l12)

    
    hero.addAnimation("DEAD", [24], 0.25, l13)
    hero.addAnimation("ITEM", [25], 0.25, l14)
    hero.addAnimation("SPECIAL_1", [26], 0.25, l15)
    hero.addAnimation("SPECIAL_2", [27], 0.25, l16)

    hero.startAnimation(animation)
}

let animationWeapon = "HIT_RIGHT"

function setSword(l1, l2, l3, l4){

    sword2.setTileSheet(16, 16)
    sword2.setScale(4, 4)
    sword2.x = hero.x
    sword2.y = hero.y

    sword2.addAnimation("HIT_DOWN", [0], 0.25, l1)
    sword2.addAnimation("HIT_UP", [1], 0.25, l2)
    sword2.addAnimation("HIT_LEFT", [2], 0.25, l3)
    sword2.addAnimation("HIT_RIGHT", [3], 0.25, l4)

    hero.startAnimation(animationWeapon)
}
