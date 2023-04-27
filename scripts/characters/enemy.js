let displayWarning = false

function startEnemy(){
    let spritesheetEnemy = imageLoader.getImage("/asset/graphics/Actor/Monsters/Owl.png")
    enemy = new Sprite(spritesheetEnemy,
        (TILE)*10,
        (TILE)*9,
        "enemy"
    )

    enemy.spawnX = (TILE)*10
    enemy.spawnY = (TILE)*9
    enemy.maxHitPoint = 50
    enemy.hitPoint = 50
    enemy.isAlive = true
    enemy.vx = 0
    enemy.vy = 0

    enemy.speed = 50
    enemy.range = 200
    enemy.rangeHit = TILE
    enemy.target = null
    enemy.damagePerSecond = 0.1

    enemy.movement = "DOWN"
    enemy.state = "NONE"
    enemy.isVisible = true

    enemy.setTileSheet(16, 16)
    enemy.setScale(4, 4)

    enemyManage.setAnimation(enemy)
    listCharacter.push(enemy)
}

function enemyManager(dt){

    enemyManage.move(enemy, dt)
    enemyManage.animationDirection(enemy)

    //console.log("vx: " + enemy.vx + " ; vy: " + enemy.vy)
    enemyManage.isDead(enemy)
}

function enemyStateMachine(pEnemy){

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
        warning.x = enemy.x + (7*TILE_SCALE)
        warning.y = enemy.y - (7*TILE_SCALE)

        let distTarget = getDist(pEnemy.x, pEnemy.y, pEnemy.target.x, pEnemy.target.y)

        // NO TARGET
        if(pEnemy.target == null){
            pEnemy.state = "IDLE"

        // TARGET OUT OF RANGE
        } else if(distTarget > pEnemy.range && pEnemy.target.type == "player"){
            displayWarning = false
            pEnemy.vx = 0
            pEnemy.vy = 0
            pEnemy.state = "IDLE"
            pEnemy.target = null

        // TARGET DETECTED
        } else if(distTarget < pEnemy.range && pEnemy.target.type == "player") {

            let angle = getAngle(pEnemy.x, pEnemy.y, pEnemy.target.x, pEnemy.target.y)
            pEnemy.vx = pEnemy.speed * Math.cos(angle)
            pEnemy.vy = pEnemy.speed * Math.sin(angle)

        // TARGET ON RANGE
        } else if(distTarget < 16*TILE_SCALE && pEnemy.target.type == "player"){
            pEnemy.state = "HIT"
            pEnemy.vx = 0
            pEnemy.vy = 0
            break
        }

    case "HIT":
        let hitDist = getDist(pEnemy.x, pEnemy.y, pEnemy.target.x, pEnemy.target.y)

        if(hitDist > pEnemy.rangeHit && pEnemy.target.type == "player"){
            pEnemy.state = "ATTACK"

        } else if(
            hitDist < pEnemy.rangeHit &&
            pEnemy.target.hitPoint != null &&
            pEnemy.target.hitPoint >= 0
            ){

            if(enemyManage.inHitRange(enemy, player)){
                enemyManage.hit(pEnemy, pEnemy.target)
            }

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
        }
        break

    case "DEAD":
        enemy.isAlive = false
        enemy.vx = 0
        enemy.vy = 0
        displayWarning = false
        break
    }
}

/*
function whatDirection(){

    if(enemy.vx == 0 && enemy.vy == 0){

        if(enemy.movement == "DOWN"){
            enemy.animationType = "IDLE_DOWN"
            enemyManage.setAnimation(enemy)

        } else if(enemy.movement == "UP"){
            enemy.animationType = "IDLE_UP"
            enemyManage.setAnimation(enemy)

        } else if(enemy.movement == "LEFT"){
            enemy.animationType = "IDLE_LEFT"
            enemyManage.setAnimation(enemy)

        } else if(enemy.movement == "RIGHT"){
            enemy.animationType = "IDLE_RIGHT"
            enemyManage.setAnimation(enemy)
        }
    }

    if(enemy.vy > 0 && Math.abs(enemy.vy) > Math.abs(enemy.vx)){
        enemy.animationType = "WALK_DOWN"
        enemy.movement = "DOWN"
        enemyManage.setAnimation(enemy)
    }
    if(enemy.vy < 0 && Math.abs(enemy.vy) > Math.abs(enemy.vx)){
        enemy.animationType = "WALK_UP"
        enemy.movement = "UP"
        enemyManage.setAnimation(enemy)
    }
    if(enemy.vx < 0 && Math.abs(enemy.vx) > Math.abs(enemy.vy)){
        enemy.animationType = "WALK_LEFT"
        enemy.movement = "LEFT"
        enemyManage.setAnimation(enemy)
    }
    if(enemy.vx > 0 && Math.abs(enemy.vx) > Math.abs(enemy.vy)){
        enemy.animationType = "WALK_RIGHT"
        enemy.movement = "RIGHT"
        enemyManage.setAnimation(enemy)
    }
}
*/
