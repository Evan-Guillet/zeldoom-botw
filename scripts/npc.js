function enimies(){
    let spritesheetEnemy = imageLoader.getImage("/asset/graphics/Actor/Monsters/Owl.png")
    enemy = new Sprite(spritesheetEnemy)
    enemy.type = "enemy"

    enemy.setTileSheet(16, 16)
    enemy.setScale(4, 4)

    enemy.x = (tileSize*tileScale)*10
    enemy.y = (tileSize*tileScale)*9
    enemy.vx = 0
    enemy.vy = 0

    enemy.speed = 50
    enemy.range = 200
    enemy.target = null

    enemy.state = "NONE"

    setEnemy()
    listCharacter.push(enemy)
}

function setEnemy(l1, l2, l3, l4, l5, l6, l7, l8, l9, l10, l11, l12, l13, l14, l15, l16){
    
    enemy.addAnimation("IDLE_DOWN", [0], 0.25, l1)
    enemy.addAnimation("WALK_DOWN", [0, 4, 8, 12], 0.25, l2)

    enemy.addAnimation("IDLE_UP", [1], 0.25, l3)
    enemy.addAnimation("WALK_UP", [1, 5, 9, 13], 0.25, l4)

    enemy.addAnimation("IDLE_LEFT", [2], 0.25, l5)
    enemy.addAnimation("WALK_LEFT", [2, 6, 10, 14], 0.25, l6)

    enemy.addAnimation("IDLE_RIGHT", [3], 0.25, l7)
    enemy.addAnimation("WALK_RIGHT", [3, 7, 11, 15], 0.25, l8)

    
    enemy.addAnimation("ATTACK_DOWN", [16], 0.25, l9)
    enemy.addAnimation("ATTACK_UP", [17], 0.25, l10)
    enemy.addAnimation("ATTACK_LEFT", [18], 0.25, l11)
    enemy.addAnimation("ATTACK_RIGHT", [19], 0.25, l12)

    
    enemy.addAnimation("DEAD", [24], 0.25, l13)
    enemy.addAnimation("ITEM", [25], 0.25, l14)
    enemy.addAnimation("SPECIAL_1", [26], 0.25, l15)
    enemy.addAnimation("SPECIAL_2", [27], 0.25, l16)

    enemy.startAnimation(enemy.animationType)
}

function velocityEnemy(dt){
    enemy.x += enemy.vx*dt
    enemy.y += enemy.vy*dt
}

function updateEnemy(pEnemy, pEntities){

    switch (pEnemy.state){
    case "NONE":
        pEnemy.state = "IDLE"
        break

    case "ATTACK":

        if(pEnemy.target == null){
            pEnemy.state = "IDLE"

        } else if(getDist(pEnemy.x, pEnemy.y, pEnemy.target.x, pEnemy.target.y) > pEnemy.range && pEnemy.target.type == "player"){
            pEnemy.vx = 0
            pEnemy.vy = 0
            pEnemy.state = "IDLE"

        } else {
            let destX, destY
            destX = getRand(pEnemy.target.x-25, pEnemy.target.x+25)
            destY = getRand(pEnemy.target.y-25, pEnemy.target.y+25)

            let angle = getAngle(pEnemy.x, pEnemy.y, destX, destY)
            pEnemy.vx = pEnemy.speed * Math.cos(angle)
            pEnemy.vy = pEnemy.speed * Math.sin(angle)
        }
        break

    case "HIT":
    
        break

    case "IDLE":
        pEntities.forEach(entity => {
            if(entity.type == "player"){
                let dist = getDist(pEnemy.x, pEnemy.y, entity.x, entity.y)
                if(dist < pEnemy.range){
                    pEnemy.state = "ATTACK"
                    pEnemy.target = entity
                }
            }
        })
        break
    }
}
