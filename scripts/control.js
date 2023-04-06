let KeyRight = false
let KeyLeft = false
let KeyUp = false
let KeyDown = false

let animation = "IDLE"

function keyDown(k){
    k.preventDefault()

    if(k.code == "KeyS"){
        KeyDown = true
        animation = "WALK_DOWN"
        setHeroAnimation(false, true, false, false, false, false, false, false)
    }
    if(k.code == "KeyW"){
        KeyUp = true
        animation = "WALK_UP"
        setHeroAnimation(false, false, false, true, false, false, false, false)
    }
    if(k.code == "KeyA"){
        KeyLeft = true
        animation = "WALK_LEFT"
        setHeroAnimation(false, false, false, false, false, true, false, false)
    }
    if(k.code == "KeyD"){
        KeyRight = true
        animation = "WALK_RIGHT"
        setHeroAnimation(false, false, false, false, false, false, false, true)
    }
}

function keyUp(k){
    k.preventDefault()

    if(k.code == "KeyS"){
        KeyDown = false
        if(KeyUp == false && KeyLeft == false && KeyRight == false){
            animation = "IDLE_DOWN"
            setHeroAnimation(true, false, false, false, false, false, false, false)
        }
    }
    if(k.code == "KeyW"){
        KeyUp = false
        if(KeyDown == false && KeyLeft == false && KeyRight == false){
            animation = "IDLE_UP"
            setHeroAnimation(false, false, true, false, false, false, false, false)
        }
    }
    if(k.code == "KeyA"){
        KeyLeft = false
        if(KeyDown == false && KeyUp == false && KeyRight == false){
            animation = "IDLE_LEFT"
            setHeroAnimation(false, false, false, false, true, false, false, false)
        }
    }
    if(k.code == "KeyD"){
        KeyRight = false
        if(KeyDown == false && KeyUp == false && KeyLeft == false){
            animation = "IDLE_RIGHT"
            setHeroAnimation(false, false, false, false, false, false, true, false)
        }
    }
}

function setHeroAnimation(l1, l2, l3, l4, l5, l6, l7, l8){

    hero.addAnimation("IDLE_DOWN", [0], 0.25, l1)
    hero.addAnimation("WALK_DOWN", [0, 4, 8, 12], 0.25, l2)

    hero.addAnimation("IDLE_UP", [1], 0.25, l3)
    hero.addAnimation("WALK_UP", [1, 5, 9, 13], 0.25, l4)

    hero.addAnimation("IDLE_LEFT", [2], 0.25, l5)
    hero.addAnimation("WALK_LEFT", [2, 6, 10, 14], 0.25, l6)

    hero.addAnimation("IDLE_RIGHT", [3], 0.25, l7)
    hero.addAnimation("WALK_RIGHT", [3, 7, 11, 15], 0.25, l8)

    hero.startAnimation(animation)
}
