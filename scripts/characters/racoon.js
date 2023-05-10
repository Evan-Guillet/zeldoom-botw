function startRacoon(){
    let spritesheetRacoon = imageLoader.getImage("/asset/graphics/Actor/Monsters/racoon/sprite_sheet.png")
    racoon = new Sprite(spritesheetRacoon,
        (TILE)*1,
        (TILE)*13,
        "racoon"
    )

    racoon.spawnX = (TILE)*1
    racoon.spawnY = (TILE)*13
    racoon.maxHitPoint = 50
    racoon.hitPoint = 50
    racoon.isAlive = true
    racoon.vx = 0
    racoon.vy = 0

    racoon.speed = 50
    racoon.range = 200
    racoon.rangeHit = TILE
    racoon.target = null
    racoon.damagePerSecond = 0.1

    racoon.movement = "DOWN"
    racoon.state = "NONE"
    racoon.isVisible = true
    racoon.firstAlerteSound = true

    let spriteWarning = imageLoader.getImage("/asset/graphics/hud/alerte.png")
    racoon.alerte = new Sprite(spriteWarning)
    racoon.alerte.setTileSheet(16, 16)
    racoon.alerte.setScale(4, 4)

    let spriteShadow = imageLoader.getImage("/asset/graphics/actor/characters/shadow.png")
    racoon.shadow = new Sprite(spriteShadow)
    racoon.shadow.setTileSheet(32, 32)
    racoon.shadow.setScale(4, 4)
    racoon.shadow.x = racoon.x + 2*TILE_SCALE
    racoon.shadow.y = racoon.y + 12*TILE_SCALE

    racoon.setTileSheet(16, 16)
    racoon.setScale(4, 4)

    racoonManage.setAnimation(racoon)
    listCharacter.push(racoon)
}

function racoonManager(dt){
    racoon.shadow.x = racoon.x + 2*TILE_SCALE
    racoon.shadow.y = racoon.y + 12*TILE_SCALE

    racoon.alerte.x = racoon.x + (7*TILE_SCALE)
    racoon.alerte.y = racoon.y - (7*TILE_SCALE)

    racoonManage.move(racoon, dt)
    racoonManage.animationDirection(racoon)
    racoonManage.isDead(racoon)
}

function racoonStateMachine(pRacoon){
    switch (pRacoon.state){

    case "NONE":
        pRacoon.state = "IDLE"
        break

    case "ATTACK":
        if(racoonManage.detectionArea(pRacoon, player)){
            if(racoon.firstAlerteSound){
                alertSound.play()
                racoon.firstAlerteSound = false
            }
        }

        // NO TARGET
        if(pRacoon.target == null){
            pRacoon.state = "IDLE"
            
        // TARGET OUT OF RANGE
        } else if(
                !racoonManage.detectionArea(pRacoon, player) &&
                pRacoon.target.type == "player"
            ){
            
            pRacoon.vx = 0
            pRacoon.vy = 0
            pRacoon.state = "IDLE"
            pRacoon.target = null

        // TARGET DETECTED
        } else if(
                racoonManage.detectionArea(pRacoon, player) &&
                pRacoon.target.type == "player"
            ){

            let angle = getAngle(pRacoon.x, pRacoon.y, pRacoon.target.x, pRacoon.target.y)
            pRacoon.vx = pRacoon.speed * Math.cos(angle)
            pRacoon.vy = pRacoon.speed * Math.sin(angle)

        // TARGET ON RANGE
        } else if(
                racoonManage.inHitRange(pRacoon, player) &&
                pRacoon.target.type == "player"
            ){

            pRacoon.state = "HIT"
            pRacoon.vx = 0
            pRacoon.vy = 0
            break
        }

    case "HIT":
        if(
            !racoonManage.inHitRange(pRacoon, player) &&
            pRacoon.target.type == "player"
            ){
            
            pRacoon.state = "ATTACK"

        } else if(
                racoonManage.inHitRange(pRacoon, player) &&
                pRacoon.target.hitPoint != null
            ){

            racoonManage.hit(pRacoon, pRacoon.target)

        } else if(pRacoon.target.hitPoint <= 0){
            pRacoon.state = "IDLE"
        }
        break

    case "IDLE":
        racoon.firstAlerteSound = true

        if(racoonManage.detectionArea(pRacoon, player)){
            pRacoon.state = "ATTACK"
            pRacoon.target = player
        }
        break

    case "DEAD":
        racoon.isAlive = false
        racoon.vx = 0
        racoon.vy = 0
        
        break
    }
}
