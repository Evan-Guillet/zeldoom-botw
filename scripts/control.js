let KeyRight = false
let KeyLeft = false
let KeyUp = false
let KeyDown = false

function keyDown(k) {
    k.preventDefault()

    if (k.code == "KeyW") {
        KeyUp = true
    }
    if (k.code == "KeyS") {
        KeyDown = true
    }
    if (k.code == "KeyA") {
        KeyLeft = true
    }
    if (k.code == "KeyD") {
        KeyRight = true
    }
}

function keyUp(k) {
    k.preventDefault()

    if (k.code == "KeyW") {
        KeyUp = false
    }
    if (k.code == "KeyS") {
        KeyDown = false
    }
    if (k.code == "KeyA") {
        KeyLeft = false
    }
    if (k.code == "KeyD") {
        KeyRight = false
    }
}
