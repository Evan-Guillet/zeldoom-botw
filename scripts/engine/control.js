let downKey = false     // MOVE_DOWN
let upKey = false       // MOVE_UP
let leftKey = false     // MOVE_LEFT
let rightKey = false    // MOVE_RIGHT
let spaceKey = false    // ATTACK
let aKey = false        // SPECIAL 1
let sKey = false        // SPECIAL 2

let isActiveDown = ""
let isActiveUp = ""
let isActiveLeft = ""
let isActiveRight = ""

let displayGrid = false
let displayHotspots = false
let displayState = false

let displayControl = false

function click(pClick){

    if(!gameReady){
        // ===============| PLAY GAME |===============
        if((pClick.pageX >= 340) &&
            (pClick.pageX <= 552) &&
            (pClick.pageY >= 500) &&
            (pClick.pageY <= 560)
            ){

            gameReady = true
            acceptSound.play()
        }

        // ===============| DISPLAY HELP CONTROL |===============
        if((pClick.pageX >= 340) &&
            (pClick.pageX <= 552) &&
            (pClick.pageY >= 584) &&
            (pClick.pageY <= 644)
            ){

            displayControl = true
            acceptSound.play()
        }

        // ===============| OUT HELP CONTROL |===============
        if(displayControl){
            if((pClick.pageX >= 40) &&
                (pClick.pageX <= 200) &&
                (pClick.pageY >= 40) &&
                (pClick.pageY <= 60)
                ){

                displayControl = false
                cancelSound.play()
            }
        }

    } else if(gameReady){
        // ===============| OUT WIN SCREEN |===============
        if(playerManage.win(enemy)){
            if((pClick.pageX >= 40) &&
                (pClick.pageX <= 200) &&
                (pClick.pageY >= 40) &&
                (pClick.pageY <= 60)
                ){

                gameReady = false
                playerManage.restore(player)
                enemyManage.restore(enemy)
                firstWinSound = true
                acceptSound.play()
            }
        }

        // ===============| OUT GAMEOVER SCREEN |===============
        if(playerManage.isDead(player)){
            if((pClick.pageX >= 40) &&
                (pClick.pageX <= 200) &&
                (pClick.pageY >= 40) &&
                (pClick.pageY <= 60)
                ){

                gameReady = false
                playerManage.restore(player)
                enemyManage.restore(enemy)
                firstGameoverSound = true
                acceptSound.play()
            }
        }
    }
}

function keyDown(k){
    k.preventDefault()

    if(player.isAlive && gameReady && !playerManage.win(enemy) && !playerManage.lose(player)){
        // ===============| MOVEMENT |===============
        if(k.code == "KeyS"){

            player.animationType = "WALK_DOWN"
            player.movement = "MOVEMENT_DOWN"
            player.firstAttack = ""

            isActiveDown = "KeyS"
            moveDown()
            playerManage.setAnimation(player)
        }
        if(k.code == "KeyW"){

            player.animationType = "WALK_UP"
            player.movement = "MOVEMENT_UP"
            player.firstAttack = ""

            isActiveUp = "KeyW"
            moveUp()
            playerManage.setAnimation(player)
        }
        if(k.code == "KeyA"){
            
            player.animationType = "WALK_LEFT"
            player.movement = "MOVEMENT_LEFT"
            player.firstAttack = ""

            isActiveLeft = "KeyA"
            moveLeft()
            playerManage.setAnimation(player)
        }
        if(k.code == "KeyD"){
            
            player.animationType = "WALK_RIGHT"
            player.movement = "MOVEMENT_RIGHT"
            player.firstAttack = ""

            isActiveRight = "KeyD"
            moveRight()
            playerManage.setAnimation(player)
        }

        // ===============| ATTACK |===============
        if(k.code == "Space"){
            spaceKey = true
            hitSound.play()

            if(player.isAlive && player.movement == "MOVEMENT_DOWN" || player.movement == "IDLE_DOWN" || player.firstAttack == "IDLE_DOWN"){
                player.animationType = "ATTACK_DOWN"
                playerManage.setAnimation(player)

                setTimeout(function() {
                    if(player.movement == "MOVEMENT_DOWN"){
                        player.animationType = "WALK_DOWN"
                        player.movement = "MOVEMENT_DOWN"
                        player.firstAttack = ""
                        playerManage.setAnimation(player)

                    } else if(player.movement == "IDLE_DOWN" || player.firstAttack == "IDLE_DOWN"){
                        player.animationType = "IDLE_DOWN"
                        player.movement = "IDLE_DOWN"
                        player.firstAttack = ""
                        playerManage.setAnimation(player)
                    }
                }, 350)



            } else if(player.isAlive && player.movement == "MOVEMENT_UP" || player.movement == "IDLE_UP"){
                player.animationType = "ATTACK_UP"
                player.firstAttack = ""
                playerManage.setAnimation(player)

                setTimeout(function() {
                    if(player.movement == "MOVEMENT_UP"){
                        player.animationType = "WALK_UP"
                        player.movement = "MOVEMENT_UP"
                        playerManage.setAnimation(player)

                    } else if(player.movement == "IDLE_UP"){
                        player.animationType = "IDLE_UP"
                        player.movement = "IDLE_UP"
                        playerManage.setAnimation(player)
                    }
                }, 350)
                


            } else if(player.isAlive && player.movement == "MOVEMENT_LEFT" || player.movement == "IDLE_LEFT"){
                player.animationType = "ATTACK_LEFT"
                player.firstAttack = ""
                playerManage.setAnimation(player)

                setTimeout(function() {
                    if(player.movement == "MOVEMENT_LEFT"){
                        player.animationType = "WALK_LEFT"
                        player.movement = "MOVEMENT_LEFT"
                        playerManage.setAnimation(player)

                    } else if(player.movement == "IDLE_LEFT"){
                        player.animationType = "IDLE_LEFT"
                        player.movement = "IDLE_LEFT"
                        playerManage.setAnimation(player)
                    }
                }, 350)
                


            } else if(player.isAlive && player.movement == "MOVEMENT_RIGHT" || player.movement == "IDLE_RIGHT"){
                player.animationType = "ATTACK_RIGHT"
                player.firstAttack = ""
                playerManage.setAnimation(player)

                setTimeout(function() {
                    if(player.movement == "MOVEMENT_RIGHT"){
                        player.animationType = "WALK_RIGHT"
                        player.movement = "MOVEMENT_RIGHT"
                        playerManage.setAnimation(player)

                    } else if(player.movement == "IDLE_RIGHT"){
                        player.animationType = "IDLE_RIGHT"
                        player.movement = "IDLE_RIGHT"
                        playerManage.setAnimation(player)
                    }
                }, 350)
            }
        }

        // ===============| SPECIAL 1 |===============
        if(k.code == "ShiftLeft"){
            aKey = true

            player.animationType = "SPECIAL_1"
            playerManage.setAnimation(player)

            setTimeout(function(){
                if(player.movement == "MOVEMENT_DOWN"){
                    downKey = true
                    player.animationType = "WALK_DOWN"
                    player.movement = "MOVEMENT_DOWN"
                    playerManage.setAnimation(player)

                } else if(player.movement == "MOVEMENT_UP"){
                    upKey = true
                    player.animationType = "WALK_UP"
                    player.movement = "MOVEMENT_UP"
                    playerManage.setAnimation(player)
                    
                } else if(player.movement == "MOVEMENT_LEFT"){
                    leftKey = true
                    player.animationType = "WALK_LEFT"
                    player.movement = "MOVEMENT_LEFT"
                    playerManage.setAnimation(player)

                } else if(player.movement == "MOVEMENT_RIGHT"){
                    rightKey = true
                    player.animationType = "WALK_RIGHT"
                    player.movement = "MOVEMENT_RIGHT"
                    playerManage.setAnimation(player)

                } else if(player.movement == "IDLE_DOWN" || player.firstSpecial == "IDLE_DOWN"){
                    player.animationType = "IDLE_DOWN"
                    player.movement = "IDLE_DOWN"
                    player.firstSpecial = ""
                    playerManage.setAnimation(player)

                } else if(player.movement == "IDLE_UP"){
                    player.animationType = "IDLE_UP"
                    player.movement = "IDLE_UP"
                    playerManage.setAnimation(player)

                } else if(player.movement == "IDLE_LEFT"){
                    player.animationType = "IDLE_LEFT"
                    player.movement = "IDLE_LEFT"
                    playerManage.setAnimation(player)

                } else if(player.movement == "IDLE_RIGHT"){
                    player.animationType = "IDLE_RIGHT"
                    player.movement = "IDLE_RIGHT"
                    playerManage.setAnimation(player)
                }
            }, 750)
        }

        // ===============| SPECIAL 2 |===============
        if(k.code == "ControlLeft"){
            sKey = true

            player.animationType = "SPECIAL_2"
            playerManage.setAnimation(player)

            setTimeout(function() {
                if(player.movement == "MOVEMENT_DOWN"){
                    downKey = true
                    player.animationType = "WALK_DOWN"
                    player.movement = "MOVEMENT_DOWN"
                    playerManage.setAnimation(player)

                } else if(player.movement == "MOVEMENT_UP"){
                    upKey = true
                    player.animationType = "WALK_UP"
                    player.movement = "MOVEMENT_UP"
                    playerManage.setAnimation(player)
                    
                } else if(player.movement == "MOVEMENT_LEFT"){
                    leftKey = true
                    player.animationType = "WALK_LEFT"
                    player.movement = "MOVEMENT_LEFT"
                    playerManage.setAnimation(player)

                } else if(player.movement == "MOVEMENT_RIGHT"){
                    rightKey = true
                    player.animationType = "WALK_RIGHT"
                    player.movement = "MOVEMENT_RIGHT"
                    playerManage.setAnimation(player)

                } else if(player.movement == "IDLE_DOWN" || player.firstSpecial == "IDLE_DOWN"){
                    player.animationType = "IDLE_DOWN"
                    player.movement = "IDLE_DOWN"
                    player.firstSpecial = ""
                    playerManage.setAnimation(player)

                } else if(player.movement == "IDLE_UP"){
                    player.animationType = "IDLE_UP"
                    player.movement = "IDLE_UP"
                    playerManage.setAnimation(player)

                } else if(player.movement == "IDLE_LEFT"){
                    player.animationType = "IDLE_LEFT"
                    player.movement = "IDLE_LEFT"
                    playerManage.setAnimation(player)

                } else if(player.movement == "IDLE_RIGHT"){
                    player.animationType = "IDLE_RIGHT"
                    player.movement = "IDLE_RIGHT"
                    playerManage.setAnimation(player)
                }
            }, 750)
        }

    // ==============| RESTART |===============
    } else if(player.isAlive && !gameReady && displayControl){
        if(k.code == "Escape"){
            displayControl = false
            cancelSound.play()
        }

    } else if(player.isAlive && playerManage.win(enemy) || !player.isAlive && playerManage.lose(player)){
        if(k.code == "Escape"){
            gameReady = false
            playerManage.restore(player)
            enemyManage.restore(enemy)
            acceptSound.play()
            firstWinSound = true
            firstGameoverSound = true
        }
    }

    // ===============| DEVTOOLS |===============
    dtKeyboard(k)
}

function keyUp(k){
    k.preventDefault()

    // ===============| MOVEMENT |===============
    if(k.code == "KeyS"){
        downKey = false
        isActiveDown = false
        if(!upKey && !leftKey && !rightKey){
            player.animationType = "IDLE_DOWN"
            player.movement = "IDLE_DOWN"
            playerManage.setAnimation(player)
        }
    }
    if(k.code == "KeyW"){
        upKey = false
        isActiveUp = false
        if(!downKey && !leftKey && !rightKey){
            player.animationType = "IDLE_UP"
            player.movement = "IDLE_UP"
            playerManage.setAnimation(player)
        }
    }
    if(k.code == "KeyA"){
        leftKey = false
        isActiveLeft = false
        if(!downKey && !upKey && !rightKey){
            player.animationType = "IDLE_LEFT"
            player.movement = "IDLE_LEFT"
            playerManage.setAnimation(player)
        }
    }
    if(k.code == "KeyD"){
        rightKey = false
        isActiveRight = false
        if(!downKey && !upKey && !leftKey){
            player.animationType = "IDLE_RIGHT"
            player.movement = "IDLE_RIGHT"
            playerManage.setAnimation(player)
        }
    }

    if(k.code == "Space"){
        spaceKey = false
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
            downKey = true
        }
        if(collideDown(player) == 1){
            downKey = false
        }
    }
}
function moveUp(){
    if(isActiveUp){
        if(collideUp(player) == 0){
            upKey = true
        }
        if(collideUp(player) == 1){
            upKey = false
        }
    }
}
function moveLeft(){
    if(isActiveLeft){
        if(collideLeft(player) == 0){
            leftKey = true
        }
        if(collideLeft(player) == 1){
            leftKey = false
        }
    }
}
function moveRight(){
    if(isActiveRight){
        if(collideRight(player) == 0){
            rightKey = true
        }
        if(collideRight(player) == 1){
            rightKey = false
        }
    }
}
