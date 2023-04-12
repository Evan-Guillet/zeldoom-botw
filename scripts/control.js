let downKey = false     // MOVE_DOWN
let upKey = false       // MOVE_UP
let leftKey = false     // MOVE_LEFT
let rightKey = false    // MOVE_RIGHT
let spaceKey = false    // ATTACK
let digit1Key = false   // SPECIAL
let digit2Key = false   // SPECIAL

let vx = 1
let vy = 1

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

        if(collideDown() == 0){
            hero.y += 5
        }
        
        animation = "WALK_DOWN"
        movement = "MOVEMENT_DOWN"
        firstAttack = ""
        setHero(false, true, false, false, false, false, false, false, false, false, false, false)
    }
    if(k.code == "ArrowUp"){
        if(collideUp() == 0){
            hero.y -= 5
        }
        
        animation = "WALK_UP"
        movement = "MOVEMENT_UP"
        firstAttack = ""
        setHero(false, false, false, true, false, false, false, false, false, false, false, false)
    }
    if(k.code == "ArrowLeft"){
        if(collideLeft() == 0){
            hero.x -= 5
        }

        animation = "WALK_LEFT"
        movement = "MOVEMENT_LEFT"
        firstAttack = ""
        setHero(false, false, false, false, false, true, false, false, false, false, false, false)
    }
    if(k.code == "ArrowRight"){
        if(collideRight() == 0){
            hero.x += 5
        }
        
        animation = "WALK_RIGHT"
        movement = "MOVEMENT_RIGHT"
        firstAttack = ""
        setHero(false, false, false, false, false, false, false, true, false, false, false, false)
    }

    // =============== ATTACK ===============
    if(k.code == "Space"){
        spaceKey = true

        if(movement == "MOVEMENT_DOWN" || movement == "IDLE_DOWN" || firstAttack == "IDLE_DOWN"){
            animation = "ATTACK_DOWN"
            setHero(false, false, false, false, false, false, false, false, true, false, false, false)

            setTimeout(function() {
                if(movement == "MOVEMENT_DOWN"){
                    animation = "WALK_DOWN"
                    movement = "MOVEMENT_DOWN"
                    firstAttack = ""
                    setHero(false, true, false, false, false, false, false, false, false, false, false, false)

                } else if(movement == "IDLE_DOWN" || firstAttack == "IDLE_DOWN"){
                    animation = "IDLE_DOWN"
                    movement = "IDLE_DOWN"
                    firstAttack = ""
                    setHero(true, false, false, false, false, false, false, false, false, false, false, false)
                }
            }, 350)



        } else if(movement == "MOVEMENT_UP" || movement == "IDLE_UP"){
            animation = "ATTACK_UP"
            firstAttack = ""
            setHero(false, false, false, false, false, false, false, false, false, true, false, false)

            setTimeout(function() {
                if(movement == "MOVEMENT_UP"){
                    animation = "WALK_UP"
                    movement = "MOVEMENT_UP"
                    setHero(false, false, false, true, false, false, false, false, false, false, false, false)

                } else if(movement == "IDLE_UP"){
                    animation = "IDLE_UP"
                    movement = "IDLE_UP"
                    setHero(false, false, true, false, false, false, false, false, false, false, false, false)
                }
            }, 350)
            


        } else if(movement == "MOVEMENT_LEFT" || movement == "IDLE_LEFT"){
            animation = "ATTACK_LEFT"
            firstAttack = ""
            setHero(false, false, false, false, false, false, false, false, false, false, true, false)

            setTimeout(function() {
                if(movement == "MOVEMENT_LEFT"){
                    animation = "WALK_LEFT"
                    movement = "MOVEMENT_LEFT"
                    setHero(false, false, false, false, false, true, false, false, false, false, false, false)

                } else if(movement == "IDLE_LEFT"){
                    animation = "IDLE_LEFT"
                    movement = "IDLE_LEFT"
                    setHero(false, false, false, false, true, false, false, false, false, false, false, false)
                }
            }, 350)
            


        } else if(movement == "MOVEMENT_RIGHT" || movement == "IDLE_RIGHT"){
            animation = "ATTACK_RIGHT"
            firstAttack = ""
            setHero(false, false, false, false, false, false, false, false, false, false, false, true)

            setTimeout(function() {
                if(movement == "MOVEMENT_RIGHT"){
                    animation = "WALK_RIGHT"
                    movement = "MOVEMENT_RIGHT"
                    setHero(false, false, false, false, false, false, false, true, false, false, false, false)

                } else if(movement == "IDLE_RIGHT"){
                    animation = "IDLE_RIGHT"
                    movement = "IDLE_RIGHT"
                    setHero(false, false, false, false, false, false, true, false, false, false, false, false)
                }
            }, 350)
        }
    }

    // =============== SPECIAL 1 ===============
    if(k.code == "KeyA"){
        digit1Key = true

        animation = "SPECIAL_1"
        setHero(false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, false)

        setTimeout(function(){
            if(movement == "MOVEMENT_DOWN"){
                downKey = true
                animation = "WALK_DOWN"
                movement = "MOVEMENT_DOWN"
                setHero(false, true, false, false, false, false, false, false, false, false, false, false)

            } else if(movement == "MOVEMENT_UP"){
                upKey = true
                animation = "WALK_UP"
                movement = "MOVEMENT_UP"
                setHero(false, false, false, true, false, false, false, false, false, false, false, false)
                
            } else if(movement == "MOVEMENT_LEFT"){
                leftKey = true
                animation = "WALK_LEFT"
                movement = "MOVEMENT_LEFT"
                setHero(false, false, false, false, false, true, false, false, false, false, false, false)

            } else if(movement == "MOVEMENT_RIGHT"){
                rightKey = true
                animation = "WALK_RIGHT"
                movement = "MOVEMENT_RIGHT"
                setHero(false, false, false, false, false, false, false, true, false, false, false, false)

            } else if(movement == "IDLE_DOWN" || firstSpecial == "IDLE_DOWN"){
                animation = "IDLE_DOWN"
                movement = "IDLE_DOWN"
                firstSpecial = ""
                setHero(true, false, false, false, false, false, false, false, false, false, false, false)

            } else if(movement == "IDLE_UP"){
                animation = "IDLE_UP"
                movement = "IDLE_UP"
                setHero(false, false, true, false, false, false, false, false, false, false, false, false)

            } else if(movement == "IDLE_LEFT"){
                animation = "IDLE_LEFT"
                movement = "IDLE_LEFT"
                setHero(false, false, false, false, true, false, false, false, false, false, false, false)

            } else if(movement == "IDLE_RIGHT"){
                animation = "IDLE_RIGHT"
                movement = "IDLE_RIGHT"
                setHero(true, false, false, false, false, false, true, false, false, false, false, false)
            }
        }, 750)
    }

    // =============== SPECIAL 2 ===============
    if(k.code == "KeyS"){
        digit2Key = true

        animation = "SPECIAL_2"
        setHero(false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true)

        setTimeout(function() {
            if(movement == "MOVEMENT_DOWN"){
                downKey = true
                animation = "WALK_DOWN"
                movement = "MOVEMENT_DOWN"
                setHero(false, true, false, false, false, false, false, false, false, false, false, false)

            } else if(movement == "MOVEMENT_UP"){
                upKey = true
                animation = "WALK_UP"
                movement = "MOVEMENT_UP"
                setHero(false, false, false, true, false, false, false, false, false, false, false, false)
                
            } else if(movement == "MOVEMENT_LEFT"){
                leftKey = true
                animation = "WALK_LEFT"
                movement = "MOVEMENT_LEFT"
                setHero(false, false, false, false, false, true, false, false, false, false, false, false)

            } else if(movement == "MOVEMENT_RIGHT"){
                rightKey = true
                animation = "WALK_RIGHT"
                movement = "MOVEMENT_RIGHT"
                setHero(false, false, false, false, false, false, false, true, false, false, false, false)

            } else if(movement == "IDLE_DOWN" || firstSpecial == "IDLE_DOWN"){
                animation = "IDLE_DOWN"
                movement = "IDLE_DOWN"
                firstSpecial = ""
                setHero(true, false, false, false, false, false, false, false, false, false, false, false)

            } else if(movement == "IDLE_UP"){
                animation = "IDLE_UP"
                movement = "IDLE_UP"
                setHero(false, false, true, false, false, false, false, false, false, false, false, false)

            } else if(movement == "IDLE_LEFT"){
                animation = "IDLE_LEFT"
                movement = "IDLE_LEFT"
                setHero(false, false, false, false, true, false, false, false, false, false, false, false)

            } else if(movement == "IDLE_RIGHT"){
                animation = "IDLE_RIGHT"
                movement = "IDLE_RIGHT"
                setHero(true, false, false, false, false, false, true, false, false, false, false, false)
            }
        }, 750)
    }

    // =============== DEV TOOL ===============
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
            setHero(true, false, false, false, false, false, false, false, false, false, false, false)
        }
    }
    if(k.code == "ArrowUp"){
        upKey = false
        if(!downKey && !leftKey && !rightKey){
            animation = "IDLE_UP"
            movement = "IDLE_UP"
            setHero(false, false, true, false, false, false, false, false, false, false, false, false)
        }
    }
    if(k.code == "ArrowLeft"){
        leftKey = false
        if(!downKey && !upKey && !rightKey){
            animation = "IDLE_LEFT"
            movement = "IDLE_LEFT"
            setHero(false, false, false, false, true, false, false, false, false, false, false, false)
        }
    }
    if(k.code == "ArrowRight"){
        rightKey = false
        if(!downKey && !upKey && !leftKey){
            animation = "IDLE_RIGHT"
            movement = "IDLE_RIGHT"
            setHero(false, false, false, false, false, false, true, false, false, false, false, false)
        }
    }
}
