let displayWarning = false

function enimies(){
    let spritesheetEnemy = imageLoader.getImage("/asset/graphics/Actor/Monsters/Owl.png")
    enemy = new Sprite(spritesheetEnemy)
    enemy.type = "enemy"
    enemy.maxHitPoint = 50
    enemy.hitPoint = 50
    enemy.isAlive = true
    enemy.soundKillIsActive = false
    enemy.soundAlertIsActive = false

    enemy.setTileSheet(16, 16)
    enemy.setScale(4, 4)

    enemy.spawnX = (tileSize*tileScale)*10
    enemy.spawnY = (tileSize*tileScale)*9

    enemy.x = enemy.spawnX
    enemy.y = enemy.spawnY
    enemy.vx = 0
    enemy.vy = 0

    enemy.speed = 50
    enemy.range = 200
    enemy.target = null
    enemy.mustTeleport = false

    enemy.movement = "DOWN"

    enemy.state = "NONE"

    setEnemy()
    listCharacter.push(enemy)
}

function setEnemy(){
    
    enemy.addAnimation("IDLE_DOWN", [0], 0.25)
    enemy.addAnimation("WALK_DOWN", [0, 4, 8, 12], 0.25)

    enemy.addAnimation("IDLE_UP", [1], 0.25)
    enemy.addAnimation("WALK_UP", [1, 5, 9, 13], 0.25)

    enemy.addAnimation("IDLE_LEFT", [2], 0.25)
    enemy.addAnimation("WALK_LEFT", [2, 6, 10, 14], 0.25)

    enemy.addAnimation("IDLE_RIGHT", [3], 0.25)
    enemy.addAnimation("WALK_RIGHT", [3, 7, 11, 15], 0.25)

    //enemy.addAnimation("DEAD", [24], 0.25, l13)

    enemy.startAnimation(enemy.animationType)
}

function velocityEnemy(dt){
    enemy.x += enemy.vx*dt
    enemy.y += enemy.vy*dt
}

function updateEnemy(pEnemy){

    switch (pEnemy.state){

    case "NONE":
        pEnemy.state = "IDLE"
        break

    case "ATTACK":
        pEnemy.mustTeleport = false

        if(!pEnemy.soundAlertIsActive){
            alertSound.play()
            pEnemy.soundAlertIsActive = true
        }
        

        displayWarning = true
        warning.x = enemy.x + (7*tileScale)
        warning.y = enemy.y - (7*tileScale)

        if(pEnemy.target == null){
            pEnemy.mustTeleport = false
            pEnemy.state = "IDLE"

        } else if(getDist(pEnemy.x, pEnemy.y, pEnemy.target.x, pEnemy.target.y) > pEnemy.range && pEnemy.target.type == "player"){
            pEnemy.vx = 0
            pEnemy.vy = 0
            pEnemy.state = "IDLE"
            pEnemy.mustTeleport = true
            
        } else if(getDist(pEnemy.x, pEnemy.y, pEnemy.target.x, pEnemy.target.y) < 16*tileScale && pEnemy.target.type == "player"){
            pEnemy.state = "HIT"
            pEnemy.vx = 0
            pEnemy.vy = 0

        } else {
            pEnemy.mustTeleport = false

            let angle = getAngle(pEnemy.x, pEnemy.y, pEnemy.target.x, pEnemy.target.y)
            pEnemy.vx = pEnemy.speed * Math.cos(angle)
            pEnemy.vy = pEnemy.speed * Math.sin(angle)
        }
        break

    case "HIT":
        if(getDist(pEnemy.x, pEnemy.y, pEnemy.target.x, pEnemy.target.y) > 16*tileScale && pEnemy.target.type == "player"){
            pEnemy.state = "ATTACK"

        } else if(pEnemy.target.hitPoint != null){
            Hurt(pEnemy.target)

        } else if(pEnemy.target.hitPoint <= 0){
            pEnemy.state = "IDLE"
        }
        
        break

    case "IDLE":
        displayWarning = false
        pEnemy.soundAlertIsActive = false

        let dist = getDist(pEnemy.x, pEnemy.y, player.x, player.y)
        if(dist < pEnemy.range){
            pEnemy.state = "ATTACK"
            pEnemy.target = player
            pEnemy.mustTeleport = false

        } else{
            if(pEnemy.mustTeleport){

                let cooldown = new Promise((resolve, reject) => {
                    
                })

                cooldown.then(() => {
                    pEnemy.x = pEnemy.spawnX
                    pEnemy.y = pEnemy.spawnY
                    pEnemy.mustTeleport = false
                })

                /*
                setTimeout(function(){
                    if(pEnemy.mustTeleport){
                        pEnemy.x = pEnemy.spawnX
                        pEnemy.y = pEnemy.spawnY
                        pEnemy.mustTeleport = false
                    }
                }, 5000)
                */
            }
        }
        break
    }
}

function whatDirection(){

    if(enemy.vx == 0 && enemy.vy == 0){

        if(enemy.movement == "DOWN"){
            enemy.animationType = "IDLE_DOWN"
            setEnemy()

        } else if(enemy.movement == "UP"){
            enemy.animationType = "IDLE_UP"
            setEnemy()

        } else if(enemy.movement == "LEFT"){
            enemy.animationType = "IDLE_LEFT"
            setEnemy()

        } else if(enemy.movement == "RIGHT"){
            enemy.animationType = "IDLE_RIGHT"
            setEnemy()
        }
    }

    if(enemy.vy > 0 && Math.abs(enemy.vy) > Math.abs(enemy.vx)){
        enemy.animationType = "WALK_DOWN"
        enemy.movement = "DOWN"
        setEnemy()
    }
    if(enemy.vy < 0 && Math.abs(enemy.vy) > Math.abs(enemy.vx)){
        enemy.animationType = "WALK_UP"
        enemy.movement = "UP"
        setEnemy()
    }
    if(enemy.vx < 0 && Math.abs(enemy.vx) > Math.abs(enemy.vy)){
        enemy.animationType = "WALK_LEFT"
        enemy.movement = "LEFT"
        setEnemy()
    }
    if(enemy.vx > 0 && Math.abs(enemy.vx) > Math.abs(enemy.vy)){
        enemy.animationType = "WALK_RIGHT"
        enemy.movement = "RIGHT"
        setEnemy()
    }
}

function restartEnemy(){
    enemy.isAlive = true
    enemy.hitPoint = enemy.maxHitPoint
    enemy.isAlive = true
    enemy.soundKillIsActive = false
    enemy.x = (tileSize*tileScale)*10
    enemy.y = (tileSize*tileScale)*9
    enemy.animationType = "IDLE_DOWN"
    setEnemy()
    enemy.movement = "MOVEMENT_DOWN"
    enemy.firstAttack = "IDLE_DOWN"
}
