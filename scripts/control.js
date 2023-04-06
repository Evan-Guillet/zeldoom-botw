let KeyRight = false
let KeyLeft = false
let KeyUp = false
let KeyDown = false

let animation = "IDLE"

function keyDown(k) {
    k.preventDefault()

    if (k.code == "KeyW") {
        KeyUp = true
        animation = "WALK_UP"
        setHeroAnimation(false, true, false, false, false)
    }
    if (k.code == "KeyS") {
        KeyDown = true
        animation = "WALK_DOWN"
        setHeroAnimation(false, false, true, false, false)
    }
    if (k.code == "KeyA") {
        KeyLeft = true
        animation = "WALK_LEFT"
        setHeroAnimation(false, false, false, true, false)
    }
    if (k.code == "KeyD") {
        KeyRight = true
        animation = "WALK_RIGHT"
        setHeroAnimation(false, false, false, false, true)
    }
}

function keyUp(k) {
    k.preventDefault()

    if (k.code == "KeyW") {
        KeyUp = false
        animation = "IDLE"
        setHeroAnimation(true, false, false, false, false)
    }
    if (k.code == "KeyS") {
        KeyDown = false
        animation = "IDLE"
        setHeroAnimation(true, false, false, false, false)
    }
    if (k.code == "KeyA") {
        KeyLeft = false
        animation = "IDLE"
        setHeroAnimation(true, false, false, false, false)
    }
    if (k.code == "KeyD") {
        KeyRight = false
        animation = "IDLE"
        setHeroAnimation(true, false, false, false, false)
    }
}

function setHeroAnimation(l1, l2, l3, l4, l5){
    hero.addAnimation("IDLE", [0], 0.5, l1)
    hero.addAnimation("WALK_UP", [1, 5, 9, 13], 0.5, l2)
    hero.addAnimation("WALK_DOWN", [0, 4, 8, 12], 0.5, l3)
    hero.addAnimation("WALK_LEFT", [2, 6, 10, 14], 0.5, l4)
    hero.addAnimation("WALK_RIGHT", [3, 7, 11, 15], 0.5, l5)

    hero.startAnimation(animation)
}
