function startPlayer(){
    let spritesheetDarkNinja = imageLoader.getImage("/asset/graphics/actor/characters/dark_ninja/sprite_sheet.png")
    player = new Sprite(spritesheetDarkNinja, 
        (TILE)*5,
        (TILE)*9,
        "player"
    )

    player.spawnX = (TILE)*5
    player.spawnY = (TILE)*9
    player.maxHitPoint = 100
    player.hitPoint = player.maxHitPoint
    player.damagePerSecond = 10
    player.rangeHit = TILE
    player.isAlive = true
    
    let spriteBlood = imageLoader.getImage("/asset/graphics/fx/blood.png")
    player.blood = new Sprite(spriteBlood)
    player.blood.setTileSheet(32, 32)
    player.blood.setScale(4, 4)

    player.setTileSheet(16, 16)
    player.setScale(4, 4)

    playerManage.setAnimation(player)
    listCharacter.push(player)
}

function playerManager(){

    if(playerManage.inHitRange(player, enemy)){
        playerManage.hit(player, enemy)
    }

    playerManage.isDead(player)
}





/*
function setPlayer(){
    
    player.addAnimation("IDLE_DOWN", [0], 0.25)
    player.addAnimation("WALK_DOWN", [0, 4, 8, 12], 0.25)

    player.addAnimation("IDLE_UP", [1], 0.25)
    player.addAnimation("WALK_UP", [1, 5, 9, 13], 0.25)

    player.addAnimation("IDLE_LEFT", [2], 0.25)
    player.addAnimation("WALK_LEFT", [2, 6, 10, 14], 0.25)

    player.addAnimation("IDLE_RIGHT", [3], 0.25)
    player.addAnimation("WALK_RIGHT", [3, 7, 11, 15], 0.25)

    
    player.addAnimation("ATTACK_DOWN", [16], 0.25)
    player.addAnimation("ATTACK_UP", [17], 0.25)
    player.addAnimation("ATTACK_LEFT", [18], 0.25)
    player.addAnimation("ATTACK_RIGHT", [19], 0.25)

    
    player.addAnimation("DEAD", [24], 0.25)
    player.addAnimation("ITEM", [25], 0.25)
    player.addAnimation("SPECIAL_1", [26], 0.25)
    player.addAnimation("SPECIAL_2", [27], 0.25)

    player.startAnimation(player.animationType)
}

function canHit(){
    if(getDist(player.x, player.y, enemy.x, enemy.y) < TILE && spaceKey){
        enemy.hitPoint -= 10
        spaceKey = false
    }
}

function playerIsDead(){
    if(player.hitPoint <= 0){
        player.hitPoint = 0
        player.isAlive = false
        player.vx = 0
        player.vy = 0
        player.animationType = "DEAD"
        setPlayer()

        enemy.isVisible = false
        displayWarning = false

        if(!player.soundKillIsActive){
            killSound.play()
            player.soundKillIsActive = true
        }
    }
}


function restartPlayer(){
    player.isAlive = true
    player.hitPoint = player.maxHitPoint
    player.soundKillIsActive = false
    player.x = (TILE)*5
    player.y = (TILE)*9
    player.vx = 0
    player.vy = 0
    player.animationType = "IDLE_DOWN"
    setPlayer()
    player.movement = "MOVEMENT_DOWN"
    player.firstAttack = "IDLE_DOWN"
}
*/