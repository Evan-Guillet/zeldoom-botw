function startSkull(){
    let spritesheetSkull = imageLoader.getImage("/asset/graphics/actor/skull.png")
    skull = new Sprite(spritesheetSkull,
        (TILE)*11,
        (TILE)*3,
        "skull"
    )

    skull.spawnX = (TILE)*11
    skull.spawnY = (TILE)*3
    skull.maxHitPoint = 50
    skull.hitPoint = 50
    skull.isAlive = true
    skull.vx = 0
    skull.vy = 0

    skull.speed = 50
    skull.range = 200
    skull.rangeHit = TILE
    skull.target = null
    skull.damagePerSecond = 0.1

    skull.movement = "DOWN"
    skull.state = "NONE"
    skull.isVisible = true
    skull.firstAlerteSound = true

    let spriteWarning = imageLoader.getImage("/asset/graphics/hud/alerte.png")
    skull.alerte = new Sprite(spriteWarning)
    skull.alerte.setTileSheet(16, 16)
    skull.alerte.setScale(4, 4)

    let spriteShadow = imageLoader.getImage("/asset/graphics/actor/shadow.png")
    skull.shadow = new Sprite(spriteShadow)
    skull.shadow.setTileSheet(32, 32)
    skull.shadow.setScale(4, 4)
    skull.shadow.x = skull.x + 2*TILE_SCALE
    skull.shadow.y = skull.y + 12*TILE_SCALE

    skull.setTileSheet(16, 16)
    skull.setScale(4, 4)

    skullManage.setAnimation(skull)
    listCharacter.push(skull)
}

function skullManager(dt){
    skull.shadow.x = skull.x + 2*TILE_SCALE
    skull.shadow.y = skull.y + 12*TILE_SCALE

    skull.alerte.x = skull.x + (7*TILE_SCALE)
    skull.alerte.y = skull.y - (7*TILE_SCALE)

    skullManage.move(skull, dt)
    skullManage.animationDirection(skull)
    skullManage.isDead(skull)
}

function skullStateMachine(pSkull){
    switch (pSkull.state){

    case "NONE":
        pSkull.state = "IDLE"
        break

    case "ATTACK":
        if(skullManage.detectionArea(pSkull, player)){
            if(skull.firstAlerteSound){
                alertSound.play()
                siuuuSound.play()
                skull.firstAlerteSound = false
            }
        }

        // NO TARGET
        if(pSkull.target == null){
            pSkull.state = "IDLE"
            
        // TARGET OUT OF RANGE
        } else if(
                !skullManage.detectionArea(pSkull, player) &&
                pSkull.target.type == "player"
            ){
            
            pSkull.vx = 0
            pSkull.vy = 0
            pSkull.state = "IDLE"
            pSkull.target = null

        // TARGET DETECTED
        } else if(
                skullManage.detectionArea(pSkull, player) &&
                pSkull.target.type == "player"
            ){

            let angle = getAngle(pSkull.x, pSkull.y, pSkull.target.x, pSkull.target.y)
            pSkull.vx = pSkull.speed * Math.cos(angle)
            pSkull.vy = pSkull.speed * Math.sin(angle)

        // TARGET ON RANGE
        } else if(
                skullManage.inHitRange(pSkull, player) &&
                pSkull.target.type == "player"
            ){

            pSkull.state = "HIT"
            pSkull.vx = 0
            pSkull.vy = 0
            break
        }

    case "HIT":
        if(
            !skullManage.inHitRange(pSkull, player) &&
            pSkull.target.type == "player"
            ){
            
            pSkull.state = "ATTACK"

        } else if(
                skullManage.inHitRange(pSkull, player) &&
                pSkull.target.hitPoint != null
            ){

            skullManage.hit(pSkull, pSkull.target)

        } else if(pSkull.target.hitPoint <= 0){
            pSkull.state = "IDLE"
        }
        break

    case "IDLE":
        skull.firstAlerteSound = true

        if(skullManage.detectionArea(pSkull, player)){
            pSkull.state = "ATTACK"
            pSkull.target = player
        }
        break

    case "DEAD":
        skull.isAlive = false
        skull.vx = 0
        skull.vy = 0
        
        break
    }
}
