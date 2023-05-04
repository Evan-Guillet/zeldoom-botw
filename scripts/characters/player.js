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
    player.damagePerSecond = 1
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

    if(playerManage.inHitRange(player, enemy) && spaceKey){
        playerManage.hit(player, enemy)
    }

    playerManage.isDead(player)
}
