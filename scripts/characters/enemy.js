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

    let spriteBlood = imageLoader.getImage("/asset/graphics/fx/blood.png")
    enemy.blood = new Sprite(spriteBlood)
    enemy.blood.setTileSheet(32, 32)
    enemy.blood.setScale(4, 4)

    let spriteWarning = imageLoader.getImage("/asset/graphics/hud/alerte.png")
    enemy.alerte = new Sprite(spriteWarning)
    enemy.alerte.setTileSheet(16, 16)
    enemy.alerte.setScale(4, 4)

    let spriteShadow = imageLoader.getImage("/asset/graphics/actor/characters/shadow.png")
    enemy.shadow = new Sprite(spriteShadow)
    enemy.shadow.setTileSheet(32, 32)
    enemy.shadow.setScale(4, 4)
    enemy.shadow.x = enemy.x + 2*TILE_SCALE
    enemy.shadow.y = enemy.y + 12*TILE_SCALE

    enemy.setTileSheet(16, 16)
    enemy.setScale(4, 4)

    enemyManage.setAnimation(enemy)
    listCharacter.push(enemy)
}

function enemyManager(dt){
    enemy.shadow.x = enemy.x + 2*TILE_SCALE
    enemy.shadow.y = enemy.y + 12*TILE_SCALE

    enemy.alerte.x = enemy.x + (7*TILE_SCALE)
    enemy.alerte.y = enemy.y - (7*TILE_SCALE)

    enemyManage.move(enemy, dt)
    enemyManage.animationDirection(enemy)
    enemyManage.isDead(enemy)
}

function enemyStateMachine(pEnemy){
    switch (pEnemy.state){

    case "NONE":
        pEnemy.state = "IDLE"
        break

    case "ATTACK":
        if(enemyManage.detectionArea(pEnemy, player)){
            if(firstAlerteSound){
                alertSound.play()
                firstAlerteSound = false
            }
        }

        // NO TARGET
        if(pEnemy.target == null){
            pEnemy.state = "IDLE"
            
        // TARGET OUT OF RANGE
        } else if(
                !enemyManage.detectionArea(pEnemy, player) &&
                pEnemy.target.type == "player"
            ){
            
            pEnemy.vx = 0
            pEnemy.vy = 0
            pEnemy.state = "IDLE"
            pEnemy.target = null

        // TARGET DETECTED
        } else if(
                enemyManage.detectionArea(pEnemy, player) &&
                pEnemy.target.type == "player"
            ){

            let angle = getAngle(pEnemy.x, pEnemy.y, pEnemy.target.x, pEnemy.target.y)
            pEnemy.vx = pEnemy.speed * Math.cos(angle)
            pEnemy.vy = pEnemy.speed * Math.sin(angle)

        // TARGET ON RANGE
        } else if(
                enemyManage.inHitRange(pEnemy, player) &&
                pEnemy.target.type == "player"
            ){

            pEnemy.state = "HIT"
            pEnemy.vx = 0
            pEnemy.vy = 0
            break
        }

    case "HIT":
        if(
            !enemyManage.inHitRange(pEnemy, player) &&
            pEnemy.target.type == "player"
            ){
            
            pEnemy.state = "ATTACK"

        } else if(
                enemyManage.inHitRange(pEnemy, player) &&
                pEnemy.target.hitPoint != null
            ){

            enemyManage.hit(pEnemy, pEnemy.target)

        } else if(pEnemy.target.hitPoint <= 0){
            pEnemy.state = "IDLE"
        }
        break

    case "IDLE":
        firstAlerteSound = true

        if(enemyManage.detectionArea(pEnemy, player)){
            pEnemy.state = "ATTACK"
            pEnemy.target = player
        }
        break

    case "DEAD":
        enemy.isAlive = false
        enemy.vx = 0
        enemy.vy = 0
        
        break
    }
}
