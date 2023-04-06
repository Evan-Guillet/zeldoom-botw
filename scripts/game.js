let imageLoader = new ImageLoader()
let gameReady = false
let listSprites = []

function load(){
    // retrieves the activated and released keys
    document.addEventListener("keydown", keyDown, false)
    document.addEventListener("keyup", keyUp, false)

    imageLoader.add("/asset/graphics/actor/characters/blue_ninja/sprite_sheet.png")
    
    imageLoader.start(startGame)
}

function startGame(){

    listSprites = []

    let spriteSheetBlueSamurai = imageLoader.getImage("/asset/graphics/actor/characters/blue_ninja/sprite_sheet.png")
    hero = new Character(spriteSheetBlueSamurai)
    hero.setTileSheet(16, 16)
    hero.setScale(4, 4)

    setHeroAnimation()
    
    listSprites.push(hero)

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

    listSprites.forEach(sprite => {
        sprite.draw(pCtx)
    })
}
