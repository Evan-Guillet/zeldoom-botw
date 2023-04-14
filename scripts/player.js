function player(){
    let spritesheetDarkNinja = imageLoader.getImage("/asset/graphics/actor/characters/dark_ninja/sprite_sheet.png")
    player = new Sprite(spritesheetDarkNinja)
    player.x = (tileSize*tileScale)*5
    player.y = (tileSize*tileScale)*9
    setplayer()
    listCharacter.push(player)
}

function setplayer(l1, l2, l3, l4, l5, l6, l7, l8, l9, l10, l11, l12, l13, l14, l15, l16){
    
    player.setTileSheet(16, 16)
    player.setScale(4, 4)
    player.name = "player"
    

    player.addAnimation("IDLE_DOWN", [0], 0.25, l1)
    player.addAnimation("WALK_DOWN", [0, 4, 8, 12], 0.25, l2)

    player.addAnimation("IDLE_UP", [1], 0.25, l3)
    player.addAnimation("WALK_UP", [1, 5, 9, 13], 0.25, l4)

    player.addAnimation("IDLE_LEFT", [2], 0.25, l5)
    player.addAnimation("WALK_LEFT", [2, 6, 10, 14], 0.25, l6)

    player.addAnimation("IDLE_RIGHT", [3], 0.25, l7)
    player.addAnimation("WALK_RIGHT", [3, 7, 11, 15], 0.25, l8)

    
    player.addAnimation("ATTACK_DOWN", [16], 0.25, l9)
    player.addAnimation("ATTACK_UP", [17], 0.25, l10)
    player.addAnimation("ATTACK_LEFT", [18], 0.25, l11)
    player.addAnimation("ATTACK_RIGHT", [19], 0.25, l12)

    
    player.addAnimation("DEAD", [24], 0.25, l13)
    player.addAnimation("ITEM", [25], 0.25, l14)
    player.addAnimation("SPECIAL_1", [26], 0.25, l15)
    player.addAnimation("SPECIAL_2", [27], 0.25, l16)

    player.startAnimation(player.animationType)
}


