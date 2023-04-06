let character
let timer

let imageLoader = new ImageLoader()
let gameReady = false
let listSprites = []

function load(){
    // retrieves the activated and released keys
    document.addEventListener("keydown", keyDown, false)
    document.addEventListener("keyup", keyUp, false)

    timer = 0

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

    timer += dt
    hero.move()
}

function draw(pCtx){

    if(!gameReady){return}

    listSprites.forEach(sprite => {
        sprite.draw(pCtx)
    })
}
