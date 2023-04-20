let downKey = false     // MOVE_DOWN
let upKey = false       // MOVE_UP
let leftKey = false     // MOVE_LEFT
let rightKey = false    // MOVE_RIGHT
let spaceKey = false    // ATTACK
let aKey = false        // SPECIAL 1
let sKey = false        // SPECIAL 2

let isLockDown = true
let isLockUp = true
let isLockLeft = true
let isLockRight = true

let isActiveDown = false
let isActiveUp = false
let isActiveLeft = false
let isActiveRight = false

let displayGrid = false
let displayHotspots = false
let displayState = false

function keyDown(k){
    k.preventDefault()

    if(player.isAlive){
        // ===============| MOVEMENT |===============
        if(k.code == "ArrowDown"){

            isActiveDown = true
            moveDown()

            player.animationType = "WALK_DOWN"
            player.movement = "MOVEMENT_DOWN"
            player.firstAttack = ""
            setplayer()
        }
        if(k.code == "ArrowUp"){

            isActiveUp = true
            moveUp()

            player.animationType = "WALK_UP"
            player.movement = "MOVEMENT_UP"
            player.firstAttack = ""
            setplayer()
        }
        if(k.code == "ArrowLeft"){

            isActiveLeft = true
            moveLeft()
            
            player.animationType = "WALK_LEFT"
            player.movement = "MOVEMENT_LEFT"
            player.firstAttack = ""
            setplayer()
        }
        if(k.code == "ArrowRight"){

            isActiveRight = true
            moveRight()
            
            player.animationType = "WALK_RIGHT"
            player.movement = "MOVEMENT_RIGHT"
            player.firstAttack = ""
            setplayer()
        }

        // ===============| ATTACK |===============
        if(k.code == "Space"){
            spaceKey = true

            if(player.movement == "MOVEMENT_DOWN" || player.movement == "IDLE_DOWN" || player.firstAttack == "IDLE_DOWN"){
                player.animationType = "ATTACK_DOWN"
                setplayer()

                setTimeout(function() {
                    if(player.movement == "MOVEMENT_DOWN"){
                        player.animationType = "WALK_DOWN"
                        player.movement = "MOVEMENT_DOWN"
                        player.firstAttack = ""
                        setplayer()

                    } else if(player.movement == "IDLE_DOWN" || player.firstAttack == "IDLE_DOWN"){
                        player.animationType = "IDLE_DOWN"
                        player.movement = "IDLE_DOWN"
                        player.firstAttack = ""
                        setplayer()
                    }
                }, 350)



            } else if(player.movement == "MOVEMENT_UP" || player.movement == "IDLE_UP"){
                player.animationType = "ATTACK_UP"
                player.firstAttack = ""
                setplayer()

                setTimeout(function() {
                    if(player.movement == "MOVEMENT_UP"){
                        player.animationType = "WALK_UP"
                        player.movement = "MOVEMENT_UP"
                        setplayer()

                    } else if(player.movement == "IDLE_UP"){
                        player.animationType = "IDLE_UP"
                        player.movement = "IDLE_UP"
                        setplayer()
                    }
                }, 350)
                


            } else if(player.movement == "MOVEMENT_LEFT" || player.movement == "IDLE_LEFT"){
                player.animationType = "ATTACK_LEFT"
                player.firstAttack = ""
                setplayer()

                setTimeout(function() {
                    if(player.movement == "MOVEMENT_LEFT"){
                        player.animationType = "WALK_LEFT"
                        player.movement = "MOVEMENT_LEFT"
                        setplayer()

                    } else if(player.movement == "IDLE_LEFT"){
                        player.animationType = "IDLE_LEFT"
                        player.movement = "IDLE_LEFT"
                        setplayer()
                    }
                }, 350)
                


            } else if(player.movement == "MOVEMENT_RIGHT" || player.movement == "IDLE_RIGHT"){
                player.animationType = "ATTACK_RIGHT"
                player.firstAttack = ""
                setplayer()

                setTimeout(function() {
                    if(player.movement == "MOVEMENT_RIGHT"){
                        player.animationType = "WALK_RIGHT"
                        player.movement = "MOVEMENT_RIGHT"
                        setplayer()

                    } else if(player.movement == "IDLE_RIGHT"){
                        player.animationType = "IDLE_RIGHT"
                        player.movement = "IDLE_RIGHT"
                        setplayer()
                    }
                }, 350)
            }
        }

        // ===============| SPECIAL 1 |===============
        if(k.code == "KeyA"){
            aKey = true

            player.animationType = "SPECIAL_1"
            setplayer()

            setTimeout(function(){
                if(player.movement == "MOVEMENT_DOWN"){
                    downKey = true
                    player.animationType = "WALK_DOWN"
                    player.movement = "MOVEMENT_DOWN"
                    setplayer()

                } else if(player.movement == "MOVEMENT_UP"){
                    upKey = true
                    player.animationType = "WALK_UP"
                    player.movement = "MOVEMENT_UP"
                    setplayer()
                    
                } else if(player.movement == "MOVEMENT_LEFT"){
                    leftKey = true
                    player.animationType = "WALK_LEFT"
                    player.movement = "MOVEMENT_LEFT"
                    setplayer()

                } else if(player.movement == "MOVEMENT_RIGHT"){
                    rightKey = true
                    player.animationType = "WALK_RIGHT"
                    player.movement = "MOVEMENT_RIGHT"
                    setplayer()

                } else if(player.movement == "IDLE_DOWN" || player.firstSpecial == "IDLE_DOWN"){
                    player.animationType = "IDLE_DOWN"
                    player.movement = "IDLE_DOWN"
                    player.firstSpecial = ""
                    setplayer()

                } else if(player.movement == "IDLE_UP"){
                    player.animationType = "IDLE_UP"
                    player.movement = "IDLE_UP"
                    setplayer()

                } else if(player.movement == "IDLE_LEFT"){
                    player.animationType = "IDLE_LEFT"
                    player.movement = "IDLE_LEFT"
                    setplayer()

                } else if(player.movement == "IDLE_RIGHT"){
                    player.animationType = "IDLE_RIGHT"
                    player.movement = "IDLE_RIGHT"
                    setplayer()
                }
            }, 750)
        }

        // ===============| SPECIAL 2 |===============
        if(k.code == "KeyS"){
            sKey = true

            player.animationType = "SPECIAL_2"
            setplayer()

            setTimeout(function() {
                if(player.movement == "MOVEMENT_DOWN"){
                    downKey = true
                    player.animationType = "WALK_DOWN"
                    player.movement = "MOVEMENT_DOWN"
                    setplayer()

                } else if(player.movement == "MOVEMENT_UP"){
                    upKey = true
                    player.animationType = "WALK_UP"
                    player.movement = "MOVEMENT_UP"
                    setplayer()
                    
                } else if(player.movement == "MOVEMENT_LEFT"){
                    leftKey = true
                    player.animationType = "WALK_LEFT"
                    player.movement = "MOVEMENT_LEFT"
                    setplayer()

                } else if(player.movement == "MOVEMENT_RIGHT"){
                    rightKey = true
                    player.animationType = "WALK_RIGHT"
                    player.movement = "MOVEMENT_RIGHT"
                    setplayer()

                } else if(player.movement == "IDLE_DOWN" || player.firstSpecial == "IDLE_DOWN"){
                    player.animationType = "IDLE_DOWN"
                    player.movement = "IDLE_DOWN"
                    player.firstSpecial = ""
                    setplayer()

                } else if(player.movement == "IDLE_UP"){
                    player.animationType = "IDLE_UP"
                    player.movement = "IDLE_UP"
                    setplayer()

                } else if(player.movement == "IDLE_LEFT"){
                    player.animationType = "IDLE_LEFT"
                    player.movement = "IDLE_LEFT"
                    setplayer()

                } else if(player.movement == "IDLE_RIGHT"){
                    player.animationType = "IDLE_RIGHT"
                    player.movement = "IDLE_RIGHT"
                    setplayer()
                }
            }, 750)
        }

    } else if(!player.isAlive){
        player.animationType = "DEAD"
        setplayer()
    }
    
    // ===============| DEVTOOLS |===============
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
    if(k.code == "KeyJ"){
        if(!displayState){
            displayState = true

        } else if(displayState){
            displayState = false
        }
    }
}

function keyUp(k){
    k.preventDefault()

    if(player.isAlive){
        // ===============| MOVEMENT |===============
        if(k.code == "ArrowDown"){
            downKey = false
            isActiveDown = false
            if(!upKey && !leftKey && !rightKey){
                player.animationType = "IDLE_DOWN"
                player.movement = "IDLE_DOWN"
                setplayer()
            }
        }
        if(k.code == "ArrowUp"){
            upKey = false
            isActiveUp = false
            if(!downKey && !leftKey && !rightKey){
                player.animationType = "IDLE_UP"
                player.movement = "IDLE_UP"
                setplayer()
            }
        }
        if(k.code == "ArrowLeft"){
            leftKey = false
            isActiveLeft = false
            if(!downKey && !upKey && !rightKey){
                player.animationType = "IDLE_LEFT"
                player.movement = "IDLE_LEFT"
                setplayer()
            }
        }
        if(k.code == "ArrowRight"){
            rightKey = false
            isActiveRight = false
            if(!downKey && !upKey && !leftKey){
                player.animationType = "IDLE_RIGHT"
                player.movement = "IDLE_RIGHT"
                setplayer()
            }
        }

    } else if(!player.isAlive){
        player.animationType = "DEAD"
        setplayer()
    }
    
}

function move(dt){
    if(downKey){
        player.y += 200*dt
    }
    if(upKey){
        player.y -= 200*dt
    }
    if(leftKey){
        player.x -= 200*dt
    }
    if(rightKey){
        player.x += 200*dt
    }
}

function moveDown(){
    if(isActiveDown){
        if(collideDown(player) == 0){
            isLockDown = false

            if(!isLockDown){
                downKey = true
            }
        }
        if(collideDown(player) == 1){
            downKey = false
            isLockDown = true
        }
    }
}
function moveUp(){
    if(isActiveUp){
        if(collideUp(player) == 0){
            isLockUp = false

            if(!isLockUp){
                upKey = true
            }
        }
        if(collideUp(player) == 1){
            upKey = false
            isLockUp = true
        }
    }
}
function moveLeft(){
    if(isActiveLeft){
        if(collideLeft(player) == 0){
            isLockLeft = false

            if(!isLockLeft){
                leftKey = true
            }
        }
        if(collideLeft(player) == 1){
            leftKey = false
            isLockLeft = true
        }
    }
}
function moveRight(){
    if(isActiveRight){
        if(collideRight(player) == 0){
            isLockRight = false

            if(!isLockRight){
                rightKey = true
            }
        }
        if(collideRight(player) == 1){
            rightKey = false
            isLockRight = true
        }
    }
}
