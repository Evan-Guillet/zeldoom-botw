function startAxolot(){
    let spritesheetAxolot = imageLoader.getImage("/asset/graphics/actor/axolot.png")
    axolot = new Sprite(spritesheetAxolot,
        (TILE)*16,
        (TILE)*12,
        "axolot"
    )

    axolot.spawnX = (TILE)*16
    axolot.spawnY = (TILE)*12
    axolot.maxHitPoint = 50
    axolot.hitPoint = 50
    axolot.isAlive = true
    axolot.vx = 0
    axolot.vy = 0

    axolot.speed = 50
    axolot.range = 200
    axolot.rangeHit = TILE
    axolot.target = null
    axolot.damagePerSecond = 0.1

    axolot.movement = "DOWN"
    axolot.state = "NONE"
    axolot.isVisible = true
    axolot.firstAlerteSound = true

    let spriteWarning = imageLoader.getImage("/asset/graphics/hud/alerte.png")
    axolot.alerte = new Sprite(spriteWarning)
    axolot.alerte.setTileSheet(16, 16)
    axolot.alerte.setScale(4, 4)

    let spriteShadow = imageLoader.getImage("/asset/graphics/actor/shadow.png")
    axolot.shadow = new Sprite(spriteShadow)
    axolot.shadow.setTileSheet(32, 32)
    axolot.shadow.setScale(4, 4)
    axolot.shadow.x = axolot.x + 2*TILE_SCALE
    axolot.shadow.y = axolot.y + 12*TILE_SCALE

    axolot.setTileSheet(16, 16)
    axolot.setScale(4, 4)

    axolotManage.setAnimation(axolot)
    listCharacter.push(axolot)
}

function axolotManager(dt){
    axolot.shadow.x = axolot.x + 2*TILE_SCALE
    axolot.shadow.y = axolot.y + 12*TILE_SCALE

    axolot.alerte.x = axolot.x + (7*TILE_SCALE)
    axolot.alerte.y = axolot.y - (7*TILE_SCALE)

    axolotManage.move(axolot, dt)
    axolotManage.animationDirection(axolot)
    axolotManage.isDead(axolot)
}

function axolotStateMachine(pAxolot){
    switch (pAxolot.state){

    case "NONE":
        pAxolot.state = "IDLE"
        break

    case "ATTACK":
        if(axolotManage.detectionArea(pAxolot, player)){
            if(axolot.firstAlerteSound){
                alertSound.play()
                siuuuSound.play()
                axolot.firstAlerteSound = false
            }
        }

        // NO TARGET
        if(pAxolot.target == null){
            pAxolot.state = "IDLE"
            
        // TARGET OUT OF RANGE
        } else if(
                !axolotManage.detectionArea(pAxolot, player) &&
                pAxolot.target.type == "player"
            ){
            
            pAxolot.vx = 0
            pAxolot.vy = 0
            pAxolot.state = "IDLE"
            pAxolot.target = null

        // TARGET DETECTED
        } else if(
                axolotManage.detectionArea(pAxolot, player) &&
                pAxolot.target.type == "player"
            ){

            let angle = getAngle(pAxolot.x, pAxolot.y, pAxolot.target.x, pAxolot.target.y)
            pAxolot.vx = pAxolot.speed * Math.cos(angle)
            pAxolot.vy = pAxolot.speed * Math.sin(angle)

        // TARGET ON RANGE
        } else if(
                axolotManage.inHitRange(pAxolot, player) &&
                pAxolot.target.type == "player"
            ){

            pAxolot.state = "HIT"
            pAxolot.vx = 0
            pAxolot.vy = 0
            break
        }

    case "HIT":
        if(
            !axolotManage.inHitRange(pAxolot, player) &&
            pAxolot.target.type == "player"
            ){
            
            pAxolot.state = "ATTACK"

        } else if(
                axolotManage.inHitRange(pAxolot, player) &&
                pAxolot.target.hitPoint != null
            ){

            axolotManage.hit(pAxolot, pAxolot.target)

        } else if(pAxolot.target.hitPoint <= 0){
            pAxolot.state = "IDLE"
        }
        break

    case "IDLE":
        axolot.firstAlerteSound = true

        if(axolotManage.detectionArea(pAxolot, player)){
            pAxolot.state = "ATTACK"
            pAxolot.target = player
        }
        break

    case "DEAD":
        axolot.isAlive = false
        axolot.vx = 0
        axolot.vy = 0
        
        break
    }
}
