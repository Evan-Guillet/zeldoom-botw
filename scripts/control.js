let downKey = false     // MOVE_DOWN
let upKey = false       // MOVE_UP
let leftKey = false     // MOVE_LEFT
let rightKey = false    // MOVE_RIGHT
let spaceKey = false    // ATTACK
let digit1Key = false   // SPECIAL
let digit2Key = false   // SPECIAL

let animation = ""
let movement = ""

function keyDown(k){
    k.preventDefault()

    // =============== MOVEMENT ===============
    if(k.code == "KeyS"){
        downKey = true
        animation = "WALK_DOWN"
        movement = "MOVEMENT_DOWN"
        setHeroAnimation(false, true, false, false, false, false, false, false, false, false, false, false)
    }
    if(k.code == "KeyW"){
        upKey = true
        animation = "WALK_UP"
        movement = "MOVEMENT_UP"
        setHeroAnimation(false, false, false, true, false, false, false, false, false, false, false, false)
    }
    if(k.code == "KeyA"){
        leftKey = true
        animation = "WALK_LEFT"
        movement = "MOVEMENT_LEFT"
        setHeroAnimation(false, false, false, false, false, true, false, false, false, false, false, false)
    }
    if(k.code == "KeyD"){
        rightKey = true
        animation = "WALK_RIGHT"
        movement = "MOVEMENT_RIGHT"
        setHeroAnimation(false, false, false, false, false, false, false, true, false, false, false, false)
    }

    // =============== ATTACK ===============
    if(k.code == "Space"){
        spaceKey = true

        if(movement == "MOVEMENT_DOWN" || movement == "IDLE_DOWN"){
            animation = "ATTACK_DOWN"
            setHeroAnimation(false, false, false, false, false, false, false, false, true, false, false, false)

            setTimeout(function() {
                if(movement == "MOVEMENT_DOWN"){
                    downKey = true
                    animation = "WALK_DOWN"
                    movement = "MOVEMENT_DOWN"
                    setHeroAnimation(false, true, false, false, false, false, false, false, false, false, false, false)

                } else if(movement == "IDLE_DOWN"){
                    animation = "IDLE_DOWN"
                    movement = "IDLE_DOWN"
                    setHeroAnimation(true, false, false, false, false, false, false, false, false, false, false, false)
                }
            }, 300)



        } else if(movement == "MOVEMENT_UP" || movement == "IDLE_UP"){
            animation = "ATTACK_UP"
            setHeroAnimation(false, false, false, false, false, false, false, false, false, true, false, false)

            setTimeout(function() {
                if(movement == "MOVEMENT_UP"){
                    upKey = true
                    animation = "WALK_UP"
                    movement = "MOVEMENT_UP"
                    setHeroAnimation(false, false, false, true, false, false, false, false, false, false, false, false)

                } else if(movement == "IDLE_UP"){
                    animation = "IDLE_UP"
                    movement = "IDLE_UP"
                    setHeroAnimation(false, false, true, false, false, false, false, false, false, false, false, false)
                }
            }, 300)
            


        } else if(movement == "MOVEMENT_LEFT" || movement == "IDLE_LEFT"){
            animation = "ATTACK_LEFT"
            setHeroAnimation(false, false, false, false, false, false, false, false, false, false, true, false)

            setTimeout(function() {
                if(movement == "MOVEMENT_LEFT"){
                    leftKey = true
                    animation = "WALK_LEFT"
                    movement = "MOVEMENT_LEFT"
                    setHeroAnimation(false, false, false, false, false, true, false, false, false, false, false, false)

                } else if(movement == "IDLE_LEFT"){
                    animation = "IDLE_LEFT"
                    movement = "IDLE_LEFT"
                    setHeroAnimation(false, false, false, false, true, false, false, false, false, false, false, false)
                }
            }, 300)
            


        } else if(movement == "MOVEMENT_RIGHT" || movement == "IDLE_RIGHT"){
            animation = "ATTACK_RIGHT"
            setHeroAnimation(false, false, false, false, false, false, false, false, false, false, false, true)

            setTimeout(function() {
                if(movement == "MOVEMENT_RIGHT"){
                    rightKey = true
                    animation = "WALK_RIGHT"
                    movement = "MOVEMENT_RIGHT"
                    setHeroAnimation(false, false, false, false, false, false, false, true, false, false, false, false)

                } else if(movement == "IDLE_RIGHT"){
                    animation = "IDLE_RIGHT"
                    movement = "IDLE_RIGHT"
                    setHeroAnimation(false, false, false, false, false, false, true, false, false, false, false, false)
                }
            }, 300)
        }
    }

    // =============== SPECIAL 1 ===============
    if(k.code == "Digit1"){
        digit1Key = true

        animation = "SPECIAL_1"
        setHeroAnimation(false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, false)

        setTimeout(function() {
            if(movement == "MOVEMENT_DOWN"){
                downKey = true
                animation = "WALK_DOWN"
                movement = "MOVEMENT_DOWN"
                setHeroAnimation(false, true, false, false, false, false, false, false, false, false, false, false)

            } else if(movement == "MOVEMENT_UP"){
                downKey = true
                animation = "WALK_UP"
                movement = "MOVEMENT_UP"
                setHeroAnimation(false, false, false, true, false, false, false, false, false, false, false, false)
                
            } else if(movement == "MOVEMENT_LEFT"){
                downKey = true
                animation = "WALK_LEFT"
                movement = "MOVEMENT_LEFT"
                setHeroAnimation(false, false, false, false, false, true, false, false, false, false, false, false)

            } else if(movement == "MOVEMENT_RIGHT"){
                downKey = true
                animation = "WALK_RIGHT"
                movement = "MOVEMENT_RIGHT"
                setHeroAnimation(false, false, false, false, false, false, false, true, false, false, false, false)

            } else if(movement == "IDLE_DOWN"){
                animation = "IDLE_DOWN"
                movement = "IDLE_DOWN"
                setHeroAnimation(true, false, false, false, false, false, false, false, false, false, false, false)

            } else if(movement == "IDLE_UP"){
                animation = "IDLE_UP"
                movement = "IDLE_UP"
                setHeroAnimation(false, false, true, false, false, false, false, false, false, false, false, false)

            } else if(movement == "IDLE_LEFT"){
                animation = "IDLE_LEFT"
                movement = "IDLE_LEFT"
                setHeroAnimation(false, false, false, false, true, false, false, false, false, false, false, false)

            } else if(movement == "IDLE_RIGHT"){
                animation = "IDLE_RIGHT"
                movement = "IDLE_RIGHT"
                setHeroAnimation(true, false, false, false, false, false, true, false, false, false, false, false)
            }
        }, 1000)
    }

    // =============== SPECIAL 2 ===============
    if(k.code == "Digit2"){
        digit2Key = true

        animation = "SPECIAL_2"
        setHeroAnimation(false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true)

        setTimeout(function() {
            if(movement == "MOVEMENT_DOWN"){
                downKey = true
                animation = "WALK_DOWN"
                movement = "MOVEMENT_DOWN"
                setHeroAnimation(false, true, false, false, false, false, false, false, false, false, false, false)

            } else if(movement == "IDLE_DOWN"){
                animation = "IDLE_DOWN"
                movement = "IDLE_DOWN"
                setHeroAnimation(true, false, false, false, false, false, false, false, false, false, false, false)
            }
        }, 1000)
    }
}

function keyUp(k){
    k.preventDefault()

    // =============== MOVEMENT ===============
    if(k.code == "KeyS"){
        downKey = false
        if(upKey == false && leftKey == false && rightKey == false){
            animation = "IDLE_DOWN"
            movement = "IDLE_DOWN"
            setHeroAnimation(true, false, false, false, false, false, false, false, false, false, false, false)
        }
    }
    if(k.code == "KeyW"){
        upKey = false
        if(downKey == false && leftKey == false && rightKey == false){
            animation = "IDLE_UP"
            movement = "IDLE_UP"
            setHeroAnimation(false, false, true, false, false, false, false, false, false, false, false, false)
        }
    }
    if(k.code == "KeyA"){
        leftKey = false
        if(downKey == false && upKey == false && rightKey == false){
            animation = "IDLE_LEFT"
            movement = "IDLE_LEFT"
            setHeroAnimation(false, false, false, false, true, false, false, false, false, false, false, false)
        }
    }
    if(k.code == "KeyD"){
        rightKey = false
        if(downKey == false && upKey == false && leftKey == false){
            animation = "IDLE_RIGHT"
            movement = "IDLE_RIGHT"
            setHeroAnimation(false, false, false, false, false, false, true, false, false, false, false, false)
        }
    }
}

function setHeroAnimation(l1, l2, l3, l4, l5, l6, l7, l8, l9, l10, l11, l12, l13, l14, l15, l16){

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
