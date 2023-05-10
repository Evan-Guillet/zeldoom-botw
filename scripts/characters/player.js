function startPlayer(){
    let spritesheetDarkNinja = imageLoader.getImage("/asset/graphics/actor/dark_ninja.png")
    player = new Sprite(spritesheetDarkNinja, 
        (TILE)*5,
        (TILE)*9,
        "player"
    )

    player.spawnX = (TILE)*5
    player.spawnY = (TILE)*9
    player.maxHitPoint = 100
    player.hitPoint = player.maxHitPoint
    player.damagePerSecond = 1
    player.rangeHit = TILE
    player.isAlive = true

    let spriteShadow = imageLoader.getImage("/asset/graphics/actor/shadow.png")
    player.shadow = new Sprite(spriteShadow)
    player.shadow.setTileSheet(32, 32)
    player.shadow.setScale(4, 4)
    player.shadow.x = player.x + 2*TILE_SCALE
    player.shadow.y = player.y + 12*TILE_SCALE

    player.setTileSheet(16, 16)
    player.setScale(4, 4)

    playerManage.setAnimation(player)
    listCharacter.push(player)
}

function playerManager(){

    player.shadow.x = player.x + 2*TILE_SCALE
    player.shadow.y = player.y + 12*TILE_SCALE

    if(playerManage.inHitRange(player, owl) && spaceKey){
        playerManage.hit(player, owl)
    }
    if(playerManage.inHitRange(player, axolot) && spaceKey){
        playerManage.hit(player, axolot)
    }
    if(playerManage.inHitRange(player, racoon) && spaceKey){
        playerManage.hit(player, racoon)
    }
    if(playerManage.inHitRange(player, skull) && spaceKey){
        playerManage.hit(player, skull)
    }

    playerManage.isDead(player, owl)
}
