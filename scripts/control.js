let downKey = false     // MOVE_DOWN
let upKey = false       // MOVE_UP
let leftKey = false     // MOVE_LEFT
let rightKey = false    // MOVE_RIGHT
let spaceKey = false    // ATTACK
let aKey = false   // SPECIAL
let sKey = false   // SPECIAL

let animation = ""
let movement = ""
let firstAttack = "IDLE_DOWN"
let firstSpecial = "IDLE_DOWN"

let displayGrid = false
let displayHotspots = true

function keyDown(k){
    k.preventDefault()

    // =============== MOVEMENT ===============
    if(k.code == "ArrowDown"){
        downKey = true
        animation = "WALK_DOWN"
        movement = "MOVEMENT_DOWN"
        firstAttack = ""
        setplayer(false, true, false, false, false, false, false, false, false, false, false, false)
    }
    if(k.code == "ArrowUp"){
        upKey = true
        animation = "WALK_UP"
        movement = "MOVEMENT_UP"
        firstAttack = ""
        setplayer(false, false, false, true, false, false, false, false, false, false, false, false)
    }
    if(k.code == "ArrowLeft"){
        leftKey = true
        animation = "WALK_LEFT"
        movement = "MOVEMENT_LEFT"
        firstAttack = ""
        setplayer(false, false, false, false, false, true, false, false, false, false, false, false)
    }
    if(k.code == "ArrowRight"){
        rightKey = true
        animation = "WALK_RIGHT"
        movement = "MOVEMENT_RIGHT"
        firstAttack = ""
        setplayer(false, false, false, false, false, false, false, true, false, false, false, false)
    }

    // =============== ATTACK ===============
    if(k.code == "Space"){
        spaceKey = true

        if(movement == "MOVEMENT_DOWN" || movement == "IDLE_DOWN" || firstAttack == "IDLE_DOWN"){
            animation = "ATTACK_DOWN"
            setplayer(false, false, false, false, false, false, false, false, true, false, false, false)

            setTimeout(function() {
                if(movement == "MOVEMENT_DOWN"){
                    animation = "WALK_DOWN"
                    movement = "MOVEMENT_DOWN"
                    firstAttack = ""
                    setplayer(false, true, false, false, false, false, false, false, false, false, false, false)

                } else if(movement == "IDLE_DOWN" || firstAttack == "IDLE_DOWN"){
                    animation = "IDLE_DOWN"
                    movement = "IDLE_DOWN"
                    firstAttack = ""
                    setplayer(true, false, false, false, false, false, false, false, false, false, false, false)
                }
            }, 350)



        } else if(movement == "MOVEMENT_UP" || movement == "IDLE_UP"){
            animation = "ATTACK_UP"
            firstAttack = ""
            setplayer(false, false, false, false, false, false, false, false, false, true, false, false)

            setTimeout(function() {
                if(movement == "MOVEMENT_UP"){
                    animation = "WALK_UP"
                    movement = "MOVEMENT_UP"
                    setplayer(false, false, false, true, false, false, false, false, false, false, false, false)

                } else if(movement == "IDLE_UP"){
                    animation = "IDLE_UP"
                    movement = "IDLE_UP"
                    setplayer(false, false, true, false, false, false, false, false, false, false, false, false)
                }
            }, 350)
            


        } else if(movement == "MOVEMENT_LEFT" || movement == "IDLE_LEFT"){
            animation = "ATTACK_LEFT"
            firstAttack = ""
            setplayer(false, false, false, false, false, false, false, false, false, false, true, false)

            setTimeout(function() {
                if(movement == "MOVEMENT_LEFT"){
                    animation = "WALK_LEFT"
                    movement = "MOVEMENT_LEFT"
                    setplayer(false, false, false, false, false, true, false, false, false, false, false, false)

                } else if(movement == "IDLE_LEFT"){
                    animation = "IDLE_LEFT"
                    movement = "IDLE_LEFT"
                    setplayer(false, false, false, false, true, false, false, false, false, false, false, false)
                }
            }, 350)
            


        } else if(movement == "MOVEMENT_RIGHT" || movement == "IDLE_RIGHT"){
            animation = "ATTACK_RIGHT"
            firstAttack = ""
            setplayer(false, false, false, false, false, false, false, false, false, false, false, true)

            setTimeout(function() {
                if(movement == "MOVEMENT_RIGHT"){
                    animation = "WALK_RIGHT"
                    movement = "MOVEMENT_RIGHT"
                    setplayer(false, false, false, false, false, false, false, true, false, false, false, false)

                } else if(movement == "IDLE_RIGHT"){
                    animation = "IDLE_RIGHT"
                    movement = "IDLE_RIGHT"
                    setplayer(false, false, false, false, false, false, true, false, false, false, false, false)
                }
            }, 350)
        }
    }

    // =============== SPECIAL 1 ===============
    if(k.code == "KeyA"){
        aKey = true

        animation = "SPECIAL_1"
        setplayer(false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, false)

        setTimeout(function(){
            if(movement == "MOVEMENT_DOWN"){
                downKey = true
                animation = "WALK_DOWN"
                movement = "MOVEMENT_DOWN"
                setplayer(false, true, false, false, false, false, false, false, false, false, false, false)

            } else if(movement == "MOVEMENT_UP"){
                upKey = true
                animation = "WALK_UP"
                movement = "MOVEMENT_UP"
                setplayer(false, false, false, true, false, false, false, false, false, false, false, false)
                
            } else if(movement == "MOVEMENT_LEFT"){
                leftKey = true
                animation = "WALK_LEFT"
                movement = "MOVEMENT_LEFT"
                setplayer(false, false, false, false, false, true, false, false, false, false, false, false)

            } else if(movement == "MOVEMENT_RIGHT"){
                rightKey = true
                animation = "WALK_RIGHT"
                movement = "MOVEMENT_RIGHT"
                setplayer(false, false, false, false, false, false, false, true, false, false, false, false)

            } else if(movement == "IDLE_DOWN" || firstSpecial == "IDLE_DOWN"){
                animation = "IDLE_DOWN"
                movement = "IDLE_DOWN"
                firstSpecial = ""
                setplayer(true, false, false, false, false, false, false, false, false, false, false, false)

            } else if(movement == "IDLE_UP"){
                animation = "IDLE_UP"
                movement = "IDLE_UP"
                setplayer(false, false, true, false, false, false, false, false, false, false, false, false)

            } else if(movement == "IDLE_LEFT"){
                animation = "IDLE_LEFT"
                movement = "IDLE_LEFT"
                setplayer(false, false, false, false, true, false, false, false, false, false, false, false)

            } else if(movement == "IDLE_RIGHT"){
                animation = "IDLE_RIGHT"
                movement = "IDLE_RIGHT"
                setplayer(true, false, false, false, false, false, true, false, false, false, false, false)
            }
        }, 750)
    }

    // =============== SPECIAL 2 ===============
    if(k.code == "KeyS"){
        sKey = true

        animation = "SPECIAL_2"
        setplayer(false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true)

        setTimeout(function() {
            if(movement == "MOVEMENT_DOWN"){
                downKey = true
                animation = "WALK_DOWN"
                movement = "MOVEMENT_DOWN"
                setplayer(false, true, false, false, false, false, false, false, false, false, false, false)

            } else if(movement == "MOVEMENT_UP"){
                upKey = true
                animation = "WALK_UP"
                movement = "MOVEMENT_UP"
                setplayer(false, false, false, true, false, false, false, false, false, false, false, false)
                
            } else if(movement == "MOVEMENT_LEFT"){
                leftKey = true
                animation = "WALK_LEFT"
                movement = "MOVEMENT_LEFT"
                setplayer(false, false, false, false, false, true, false, false, false, false, false, false)

            } else if(movement == "MOVEMENT_RIGHT"){
                rightKey = true
                animation = "WALK_RIGHT"
                movement = "MOVEMENT_RIGHT"
                setplayer(false, false, false, false, false, false, false, true, false, false, false, false)

            } else if(movement == "IDLE_DOWN" || firstSpecial == "IDLE_DOWN"){
                animation = "IDLE_DOWN"
                movement = "IDLE_DOWN"
                firstSpecial = ""
                setplayer(true, false, false, false, false, false, false, false, false, false, false, false)

            } else if(movement == "IDLE_UP"){
                animation = "IDLE_UP"
                movement = "IDLE_UP"
                setplayer(false, false, true, false, false, false, false, false, false, false, false, false)

            } else if(movement == "IDLE_LEFT"){
                animation = "IDLE_LEFT"
                movement = "IDLE_LEFT"
                setplayer(false, false, false, false, true, false, false, false, false, false, false, false)

            } else if(movement == "IDLE_RIGHT"){
                animation = "IDLE_RIGHT"
                movement = "IDLE_RIGHT"
                setplayer(true, false, false, false, false, false, true, false, false, false, false, false)
            }
        }, 750)
    }

    // =============== DEVTOOLS ===============
    if(k.code == "KeyG"){
        if(!displayGrid){
            displayGrid = true

        } else if(displayGrid){
            displayGrid = false
        }
    }
    if(k.code == "KeyH"){
        if(!displayHotspots){
            displayHotspots = true

        } else if(displayHotspots){
            displayHotspots = false
        }
    }
}

function keyUp(k){
    k.preventDefault()

    // =============== MOVEMENT ===============
    if(k.code == "ArrowDown"){
        downKey = false
        if(!upKey && !leftKey && !rightKey){
            animation = "IDLE_DOWN"
            movement = "IDLE_DOWN"
            setplayer(true, false, false, false, false, false, false, false, false, false, false, false)
        }
    }
    if(k.code == "ArrowUp"){
        upKey = false
        if(!downKey && !leftKey && !rightKey){
            animation = "IDLE_UP"
            movement = "IDLE_UP"
            setplayer(false, false, true, false, false, false, false, false, false, false, false, false)
        }
    }
    if(k.code == "ArrowLeft"){
        leftKey = false
        if(!downKey && !upKey && !rightKey){
            animation = "IDLE_LEFT"
            movement = "IDLE_LEFT"
            setplayer(false, false, false, false, true, false, false, false, false, false, false, false)
        }
    }
    if(k.code == "ArrowRight"){
        rightKey = false
        if(!downKey && !upKey && !leftKey){
            animation = "IDLE_RIGHT"
            movement = "IDLE_RIGHT"
            setplayer(false, false, false, false, false, false, true, false, false, false, false, false)
        }
    }
}

function move(dt){
    let oldPos = {
        x: player.x,
        y: player.y
    }
    
    if(downKey){
        player.y = player.y + 224 * dt
    }
    if(upKey){
        player.y = player.y - 224 * dt
    }
    if(leftKey){
        player.x = player.x - 224 * dt
    }
    if(rightKey){
        player.x = player.x + 224 * dt
    }

    if(collideMap()){
        player.x = oldPos.x
        player.y = oldPos.y
    }
}
