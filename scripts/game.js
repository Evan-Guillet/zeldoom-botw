let imageLoader = new ImageLoader()
let gameReady = false
let listSprites = []

function load(){
    // retrieves the activated and released keys
    document.addEventListener("keydown", keyDown, false)
    document.addEventListener("keyup", keyUp, false)

    imageLoader.add("/asset/graphics/actor/characters/blue_samurai/sprite_sheet.png")
    imageLoader.add("/asset/graphics/map/grille_test.png")
    
    imageLoader.start(startGame)
}

function startGame(){

    listMap = []

    let mapTest = imageLoader.getImage("/asset/graphics/map/grille_test.png")
    level = new Sprite(mapTest)
    level.setTileSheet(224, 224)
    level.setScale(4, 4)
    listMap.push(level)


    listSprites = []

    let spriteSheetBlueSamurai = imageLoader.getImage("/asset/graphics/actor/characters/blue_samurai/sprite_sheet.png")
    hero = new Sprite(spriteSheetBlueSamurai)
    hero.x = 16*24
    hero.y = 16*24
    setHero()
    listSprites.push(hero)

    /*
    let sword2InHand = imageLoader.getImage("/asset/graphics/Items/weapons/sword_2/sprite_in_hand.png")
    sword2 = new Hero(sword2InHand)
    setSword()
    listSprites.push(sword2)
    */

    gameReady = true
}



function update(dt){

    if(!gameReady){return}
    
    listSprites.forEach(sprite => {
        sprite.update(dt)
    })

    hero.startAnimation(animation)
    hero.move()
}

function cooldowns(pCooldownsMax){
    // time in seconds 
    let lastTime = Date.now()/1000
    
    while(Date.now()/1000 < lastTime + pCooldownsMax){}

    return true
}

function draw(pCtx){

    if(!gameReady){return}

    listMap.forEach(sprite => {
        sprite.draw(pCtx)
    })

    listSprites.forEach(sprite => {
        sprite.draw(pCtx)
    })
}
