let imageLoader = new ImageLoader()
let gameReady = false
let listSprites = []

let mouseX
let mouseY

function load(){
    // retrieves the activated and released keys
    document.addEventListener("keydown", keyDown, false)
    document.addEventListener("keyup", keyUp, false)

    imageLoader.add("/asset/graphics/actor/characters/blue_samurai/sprite_sheet.png")
    imageLoader.add("/asset/graphics/map/map.png")
    imageLoader.add("/asset/graphics/map/grid.png")
    
    imageLoader.start(startGame)

    console.log("PRESS 'G': to display the grid.")
}

function startGame(){

    listMap = []

    let mapTest = imageLoader.getImage("/asset/graphics/map/map.png")
    level = new Sprite(mapTest)
    level.setTileSheet(224, 224)
    level.setScale(4, 4)
    listMap.push(level)

    let gridHelp = imageLoader.getImage("/asset/graphics/map/grid.png")
    grid = new Sprite(gridHelp)
    grid.setTileSheet(224, 224)
    grid.setScale(4, 4)
    grid.name = "grid"

    listSprites = []

    let spriteSheetBlueSamurai = imageLoader.getImage("/asset/graphics/actor/characters/blue_samurai/sprite_sheet.png")
    hero = new Sprite(spriteSheetBlueSamurai)
    hero.x = (16*4)*6
    hero.y = (16*4)*4
    setHero()
    listSprites.push(hero)

    gameReady = true
}



function update(dt){

    if(!gameReady){return}

    let id = getTileAt(hero.x, hero.y)
    console.log(id)

    listSprites.forEach(sprite => {
        sprite.update(dt)
    })

    hero.startAnimation(animation)
    hero.move()
}

function draw(pCtx){

    if(!gameReady){return}

    listMap.forEach(sprite => {
        sprite.draw(pCtx)
    })

    // display grid
    if(gridActive){
        grid.draw(pCtx)
        pCtx.strokeStyle = "yellow"
        pCtx.lineWidth = 5
        pCtx.strokeRect(hero.x, hero.y, 16*4, 16*4)
    }

    listSprites.forEach(sprite => {
        sprite.draw(pCtx)
    })
}
