let downKey = false     // MOVE_DOWN
let upKey = false       // MOVE_UP
let leftKey = false     // MOVE_LEFT
let rightKey = false    // MOVE_RIGHT
let spaceKey = false    // ATTACK
let aKey = false        // SPECIAL
let sKey = false        // SPECIAL

let displayGrid = false
let displayHotspots = false

function keyDown(k){
    k.preventDefault()

    // =============== MOVEMENT ===============
    if(k.code == "ArrowDown"){

        if(collideDown() == 0){
            downKey = true

        } else if(collideDown() == 1){
            downKey = false
        }

        player.animationType = "WALK_DOWN"
        player.movement = "MOVEMENT_DOWN"
        player.firstAttack = ""
        setplayer(false, true, false, false, false, false, false, false, false, false, false, false)
    }
    if(k.code == "ArrowUp"){

        if(collideUp() == 0){
            upKey = true

        } else if(collideUp() == 1){
            upKey = false
        }

        player.animationType = "WALK_UP"
        player.movement = "MOVEMENT_UP"
        player.firstAttack = ""
        setplayer(false, false, false, true, false, false, false, false, false, false, false, false)
    }
    if(k.code == "ArrowLeft"){
        
        if(collideLeft() == 0){
            leftKey = true

        } else if(collideLeft() == 1){
            leftKey = false
        }
        
        player.animationType = "WALK_LEFT"
        player.movement = "MOVEMENT_LEFT"
        player.firstAttack = ""
        setplayer(false, false, false, false, false, true, false, false, false, false, false, false)
    }
    if(k.code == "ArrowRight"){

        if(collideRight() == 0){
            rightKey = true

        } else if(collideRight() == 1){
            rightKey = false
        }
        
        player.animationType = "WALK_RIGHT"
        player.movement = "MOVEMENT_RIGHT"
        player.firstAttack = ""
        setplayer(false, false, false, false, false, false, false, true, false, false, false, false)
    }

    // =============== ATTACK ===============
    if(k.code == "Space"){
        spaceKey = true

        if(player.movement == "MOVEMENT_DOWN" || player.movement == "IDLE_DOWN" || player.firstAttack == "IDLE_DOWN"){
            player.animationType = "ATTACK_DOWN"
            setplayer(false, false, false, false, false, false, false, false, true, false, false, false)

            setTimeout(function() {
                if(player.movement == "MOVEMENT_DOWN"){
                    player.animationType = "WALK_DOWN"
                    player.movement = "MOVEMENT_DOWN"
                    player.firstAttack = ""
                    setplayer(false, true, false, false, false, false, false, false, false, false, false, false)

                } else if(player.movement == "IDLE_DOWN" || player.firstAttack == "IDLE_DOWN"){
                    player.animationType = "IDLE_DOWN"
                    player.movement = "IDLE_DOWN"
                    player.firstAttack = ""
                    setplayer(true, false, false, false, false, false, false, false, false, false, false, false)
                }
            }, 350)



        } else if(player.movement == "MOVEMENT_UP" || player.movement == "IDLE_UP"){
            player.animationType = "ATTACK_UP"
            player.firstAttack = ""
            setplayer(false, false, false, false, false, false, false, false, false, true, false, false)

            setTimeout(function() {
                if(player.movement == "MOVEMENT_UP"){
                    player.animationType = "WALK_UP"
                    player.movement = "MOVEMENT_UP"
                    setplayer(false, false, false, true, false, false, false, false, false, false, false, false)

                } else if(player.movement == "IDLE_UP"){
                    player.animationType = "IDLE_UP"
                    player.movement = "IDLE_UP"
                    setplayer(false, false, true, false, false, false, false, false, false, false, false, false)
                }
            }, 350)
            


        } else if(player.movement == "MOVEMENT_LEFT" || player.movement == "IDLE_LEFT"){
            player.animationType = "ATTACK_LEFT"
            player.firstAttack = ""
            setplayer(false, false, false, false, false, false, false, false, false, false, true, false)

            setTimeout(function() {
                if(player.movement == "MOVEMENT_LEFT"){
                    player.animationType = "WALK_LEFT"
                    player.movement = "MOVEMENT_LEFT"
                    setplayer(false, false, false, false, false, true, false, false, false, false, false, false)

                } else if(player.movement == "IDLE_LEFT"){
                    player.animationType = "IDLE_LEFT"
                    player.movement = "IDLE_LEFT"
                    setplayer(false, false, false, false, true, false, false, false, false, false, false, false)
                }
            }, 350)
            


        } else if(player.movement == "MOVEMENT_RIGHT" || player.movement == "IDLE_RIGHT"){
            player.animationType = "ATTACK_RIGHT"
            player.firstAttack = ""
            setplayer(false, false, false, false, false, false, false, false, false, false, false, true)

            setTimeout(function() {
                if(player.movement == "MOVEMENT_RIGHT"){
                    player.animationType = "WALK_RIGHT"
                    player.movement = "MOVEMENT_RIGHT"
                    setplayer(false, false, false, false, false, false, false, true, false, false, false, false)

                } else if(player.movement == "IDLE_RIGHT"){
                    player.animationType = "IDLE_RIGHT"
                    player.movement = "IDLE_RIGHT"
                    setplayer(false, false, false, false, false, false, true, false, false, false, false, false)
                }
            }, 350)
        }
    }

    // =============== SPECIAL 1 ===============
    if(k.code == "KeyA"){
        aKey = true

        player.animationType = "SPECIAL_1"
        setplayer(false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, false)

        setTimeout(function(){
            if(player.movement == "MOVEMENT_DOWN"){
                downKey = true
                player.animationType = "WALK_DOWN"
                player.movement = "MOVEMENT_DOWN"
                setplayer(false, true, false, false, false, false, false, false, false, false, false, false)

            } else if(player.movement == "MOVEMENT_UP"){
                upKey = true
                player.animationType = "WALK_UP"
                player.movement = "MOVEMENT_UP"
                setplayer(false, false, false, true, false, false, false, false, false, false, false, false)
                
            } else if(player.movement == "MOVEMENT_LEFT"){
                leftKey = true
                player.animationType = "WALK_LEFT"
                player.movement = "MOVEMENT_LEFT"
                setplayer(false, false, false, false, false, true, false, false, false, false, false, false)

            } else if(player.movement == "MOVEMENT_RIGHT"){
                rightKey = true
                player.animationType = "WALK_RIGHT"
                player.movement = "MOVEMENT_RIGHT"
                setplayer(false, false, false, false, false, false, false, true, false, false, false, false)

            } else if(player.movement == "IDLE_DOWN" || player.firstSpecial == "IDLE_DOWN"){
                player.animationType = "IDLE_DOWN"
                player.movement = "IDLE_DOWN"
                player.firstSpecial = ""
                setplayer(true, false, false, false, false, false, false, false, false, false, false, false)

            } else if(player.movement == "IDLE_UP"){
                player.animationType = "IDLE_UP"
                player.movement = "IDLE_UP"
                setplayer(false, false, true, false, false, false, false, false, false, false, false, false)

            } else if(player.movement == "IDLE_LEFT"){
                player.animationType = "IDLE_LEFT"
                player.movement = "IDLE_LEFT"
                setplayer(false, false, false, false, true, false, false, false, false, false, false, false)

            } else if(player.movement == "IDLE_RIGHT"){
                player.animationType = "IDLE_RIGHT"
                player.movement = "IDLE_RIGHT"
                setplayer(true, false, false, false, false, false, true, false, false, false, false, false)
            }
        }, 750)
    }

    // =============== SPECIAL 2 ===============
    if(k.code == "KeyS"){
        sKey = true

        player.animationType = "SPECIAL_2"
        setplayer(false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true)

        setTimeout(function() {
            if(player.movement == "MOVEMENT_DOWN"){
                downKey = true
                player.animationType = "WALK_DOWN"
                player.movement = "MOVEMENT_DOWN"
                setplayer(false, true, false, false, false, false, false, false, false, false, false, false)

            } else if(player.movement == "MOVEMENT_UP"){
                upKey = true
                player.animationType = "WALK_UP"
                player.movement = "MOVEMENT_UP"
                setplayer(false, false, false, true, false, false, false, false, false, false, false, false)
                
            } else if(player.movement == "MOVEMENT_LEFT"){
                leftKey = true
                player.animationType = "WALK_LEFT"
                player.movement = "MOVEMENT_LEFT"
                setplayer(false, false, false, false, false, true, false, false, false, false, false, false)

            } else if(player.movement == "MOVEMENT_RIGHT"){
                rightKey = true
                player.animationType = "WALK_RIGHT"
                player.movement = "MOVEMENT_RIGHT"
                setplayer(false, false, false, false, false, false, false, true, false, false, false, false)

            } else if(player.movement == "IDLE_DOWN" || player.firstSpecial == "IDLE_DOWN"){
                player.animationType = "IDLE_DOWN"
                player.movement = "IDLE_DOWN"
                player.firstSpecial = ""
                setplayer(true, false, false, false, false, false, false, false, false, false, false, false)

            } else if(player.movement == "IDLE_UP"){
                player.animationType = "IDLE_UP"
                player.movement = "IDLE_UP"
                setplayer(false, false, true, false, false, false, false, false, false, false, false, false)

            } else if(player.movement == "IDLE_LEFT"){
                player.animationType = "IDLE_LEFT"
                player.movement = "IDLE_LEFT"
                setplayer(false, false, false, false, true, false, false, false, false, false, false, false)

            } else if(player.movement == "IDLE_RIGHT"){
                player.animationType = "IDLE_RIGHT"
                player.movement = "IDLE_RIGHT"
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
            player.animationType = "IDLE_DOWN"
            player.movement = "IDLE_DOWN"
            setplayer(true, false, false, false, false, false, false, false, false, false, false, false)
        }
    }
    if(k.code == "ArrowUp"){
        upKey = false
        if(!downKey && !leftKey && !rightKey){
            player.animationType = "IDLE_UP"
            player.movement = "IDLE_UP"
            setplayer(false, false, true, false, false, false, false, false, false, false, false, false)
        }
    }
    if(k.code == "ArrowLeft"){
        leftKey = false
        if(!downKey && !upKey && !rightKey){
            player.animationType = "IDLE_LEFT"
            player.movement = "IDLE_LEFT"
            setplayer(false, false, false, false, true, false, false, false, false, false, false, false)
        }
    }
    if(k.code == "ArrowRight"){
        rightKey = false
        if(!downKey && !upKey && !leftKey){
            player.animationType = "IDLE_RIGHT"
            player.movement = "IDLE_RIGHT"
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
        player.y += 100*dt
    }
    if(upKey){
        player.y -= 100*dt
    }
    if(leftKey){
        player.x -= 100*dt
    }
    if(rightKey){
        player.x += 100*dt
    }

    if(collideMap()){
        player.x = oldPos.x
        player.y = oldPos.y
    }
}
