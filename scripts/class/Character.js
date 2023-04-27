class Character {

    setAnimation(pCharacter){
        if(pCharacter.type == "player"){
            pCharacter.addAnimation("IDLE_DOWN", [0], 0.25)
            pCharacter.addAnimation("WALK_DOWN", [0, 4, 8, 12], 0.25)

            pCharacter.addAnimation("IDLE_UP", [1], 0.25)
            pCharacter.addAnimation("WALK_UP", [1, 5, 9, 13], 0.25)

            pCharacter.addAnimation("IDLE_LEFT", [2], 0.25)
            pCharacter.addAnimation("WALK_LEFT", [2, 6, 10, 14], 0.25)

            pCharacter.addAnimation("IDLE_RIGHT", [3], 0.25)
            pCharacter.addAnimation("WALK_RIGHT", [3, 7, 11, 15], 0.25)

            
            pCharacter.addAnimation("ATTACK_DOWN", [16], 0.25)
            pCharacter.addAnimation("ATTACK_UP", [17], 0.25)
            pCharacter.addAnimation("ATTACK_LEFT", [18], 0.25)
            pCharacter.addAnimation("ATTACK_RIGHT", [19], 0.25)

            
            pCharacter.addAnimation("DEAD", [24], 0.25)
            pCharacter.addAnimation("ITEM", [25], 0.25)
            pCharacter.addAnimation("SPECIAL_1", [26], 0.25)
            pCharacter.addAnimation("SPECIAL_2", [27], 0.25)

            pCharacter.startAnimation(pCharacter.animationType)



        } else if(pCharacter.type == "enemy"){
            pCharacter.addAnimation("IDLE_DOWN", [0], 0.25)
            pCharacter.addAnimation("WALK_DOWN", [0, 4, 8, 12], 0.25)

            pCharacter.addAnimation("IDLE_UP", [1], 0.25)
            pCharacter.addAnimation("WALK_UP", [1, 5, 9, 13], 0.25)

            pCharacter.addAnimation("IDLE_LEFT", [2], 0.25)
            pCharacter.addAnimation("WALK_LEFT", [2, 6, 10, 14], 0.25)

            pCharacter.addAnimation("IDLE_RIGHT", [3], 0.25)
            pCharacter.addAnimation("WALK_RIGHT", [3, 7, 11, 15], 0.25)

            pCharacter.addAnimation("DEAD", [16], 0.25)

            pCharacter.startAnimation(pCharacter.animationType)
        }
    }

    move(pCharacter, dt){
        pCharacter.x += pCharacter.vx*dt
        pCharacter.y += pCharacter.vy*dt
    }

    animationDirection(pCharacter){
        if(pCharacter.vx == 0 && pCharacter.vy == 0){

            if(pCharacter.movement == "DOWN"){
                pCharacter.animationType = "IDLE_DOWN"
                setEnemy()
    
            } else if(pCharacter.movement == "UP"){
                pCharacter.animationType = "IDLE_UP"
                setEnemy()
    
            } else if(pCharacter.movement == "LEFT"){
                pCharacter.animationType = "IDLE_LEFT"
                setEnemy()
    
            } else if(pCharacter.movement == "RIGHT"){
                pCharacter.animationType = "IDLE_RIGHT"
                setEnemy()
            }
        }
    
        if(pCharacter.vy > 0 && Math.abs(pCharacter.vy) > Math.abs(pCharacter.vx)){
            pCharacter.animationType = "WALK_DOWN"
            pCharacter.movement = "DOWN"
            setEnemy()
        }
        if(pCharacter.vy < 0 && Math.abs(pCharacter.vy) > Math.abs(pCharacter.vx)){
            pCharacter.animationType = "WALK_UP"
            pCharacter.movement = "UP"
            setEnemy()
        }
        if(pCharacter.vx < 0 && Math.abs(pCharacter.vx) > Math.abs(pCharacter.vy)){
            pCharacter.animationType = "WALK_LEFT"
            pCharacter.movement = "LEFT"
            setEnemy()
        }
        if(pCharacter.vx > 0 && Math.abs(pCharacter.vx) > Math.abs(pCharacter.vy)){
            pCharacter.animationType = "WALK_RIGHT"
            pCharacter.movement = "RIGHT"
            setEnemy()
        }
    }

    detectionArea(pCharacter){
        pCharacter
    }

    inHitRange(pCharacter, pTarget){

        let distTarget = getDist(pCharacter.x, pCharacter.y, pTarget.x, pTarget.y)

        if(distTarget < pCharacter.rangeHit){
            if(pTarget.type != pCharacter.type){
                return true
            }
        }

        return false
    }

    hit(pCharacter, pTarget){
        pTarget.hitPoint -= pCharacter.damagePerSecond
    }

    isDead(pCharacter){
        if(pCharacter.hitPoint <= 0){
            pCharacter.hitPoint = 0
            pCharacter.isAlive = false
            pCharacter.vx = 0
            pCharacter.vy = 0
            pCharacter.animationType = "DEAD"

            if(pCharacter.type == "player"){
                playerManage.setAnimation(player)

            } else if(pCharacter.type == "enemy"){
                pCharacter.state = "DEAD"
                enemyManage.setAnimation(enemy)
            }

            return true
        }
    }

    restore(pCharacter){
        pCharacter.isAlive = true
        pCharacter.hitPoint = pCharacter.maxHitPoint
        pCharacter.x = pCharacter.spawnX
        pCharacter.y = pCharacter.spawnY
        pCharacter.vx = 0
        pCharacter.vy = 0

        pCharacter.animationType = "IDLE_DOWN"
        pCharacter.movement = "MOVEMENT_DOWN"
        pCharacter.firstAttack = "IDLE_DOWN"

        if(pCharacter.type == "player"){
            playerManage.setAnimation(player)

        } else if(pCharacter.type == "enemy"){
            enemyManage.setAnimation(enemy)
            pCharacter.isVisible = true
        }
    }

    soundBox(pSound){
        switch (pSound) {
            case "kill":
                killSound.play()
                break
            
            case "alert":
                alertSound.play()
                break
        }
    }
}
