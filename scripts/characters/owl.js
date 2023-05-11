function startOwl(){
    let spritesheetOwl = imageLoader.getImage("/asset/graphics/actor/owl.png")
    owl = new Sprite(spritesheetOwl,
        (TILE)*2,
        (TILE)*6,
        "owl"
    )

    owl.spawnX = (TILE)*2
    owl.spawnY = (TILE)*6
    owl.maxHitPoint = 50
    owl.hitPoint = 50
    owl.isAlive = true
    owl.vx = 0
    owl.vy = 0

    owl.speed = 50
    owl.range = 200
    owl.rangeHit = TILE
    owl.target = null
    owl.damagePerSecond = 0.1

    owl.movement = "DOWN"
    owl.state = "NONE"
    owl.isVisible = true
    owl.firstAlerteSound = true

    let spriteWarning = imageLoader.getImage("/asset/graphics/hud/alerte.png")
    owl.alerte = new Sprite(spriteWarning)
    owl.alerte.setTileSheet(16, 16)
    owl.alerte.setScale(4, 4)

    let spriteShadow = imageLoader.getImage("/asset/graphics/actor/shadow.png")
    owl.shadow = new Sprite(spriteShadow)
    owl.shadow.setTileSheet(32, 32)
    owl.shadow.setScale(4, 4)
    owl.shadow.x = owl.x + 2*TILE_SCALE
    owl.shadow.y = owl.y + 12*TILE_SCALE

    owl.setTileSheet(16, 16)
    owl.setScale(4, 4)

    owlManage.setAnimation(owl)
    listCharacter.push(owl)
}

function owlManager(dt){
    owl.shadow.x = owl.x + 2*TILE_SCALE
    owl.shadow.y = owl.y + 12*TILE_SCALE

    owl.alerte.x = owl.x + (7*TILE_SCALE)
    owl.alerte.y = owl.y - (7*TILE_SCALE)

    owlManage.move(owl, dt)
    owlManage.animationDirection(owl)
    owlManage.isDead(owl)
}

function owlStateMachine(powl){
    switch (powl.state){

    case "NONE":
        powl.state = "IDLE"
        break

    case "ATTACK":
        if(owlManage.detectionArea(powl, player)){
            if(owl.firstAlerteSound){
                alertSound.play()
                siuuuSound.play()
                owl.firstAlerteSound = false
            }
        }

        // NO TARGET
        if(powl.target == null){
            powl.state = "IDLE"
            
        // TARGET OUT OF RANGE
        } else if(
                !owlManage.detectionArea(powl, player) &&
                powl.target.type == "player"
            ){
            
            powl.vx = 0
            powl.vy = 0
            powl.state = "IDLE"
            powl.target = null

        // TARGET DETECTED
        } else if(
                owlManage.detectionArea(powl, player) &&
                powl.target.type == "player"
            ){

            let angle = getAngle(powl.x, powl.y, powl.target.x, powl.target.y)
            powl.vx = powl.speed * Math.cos(angle)
            powl.vy = powl.speed * Math.sin(angle)

        // TARGET ON RANGE
        } else if(
                owlManage.inHitRange(powl, player) &&
                powl.target.type == "player"
            ){

            powl.state = "HIT"
            powl.vx = 0
            powl.vy = 0
            break
        }

    case "HIT":
        if(
            !owlManage.inHitRange(powl, player) &&
            powl.target.type == "player"
            ){
            
            powl.state = "ATTACK"

        } else if(
                owlManage.inHitRange(powl, player) &&
                powl.target.hitPoint != null
            ){

            owlManage.hit(powl, powl.target)

        } else if(powl.target.hitPoint <= 0){
            powl.state = "IDLE"
        }
        break

    case "IDLE":
        owl.firstAlerteSound = true

        if(owlManage.detectionArea(powl, player)){
            powl.state = "ATTACK"
            powl.target = player
        }
        break

    case "DEAD":
        owl.isAlive = false
        owl.vx = 0
        owl.vy = 0
        
        break
    }
}
