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

    console.log("PRESS 'G': to display the grid.\nPRESS 'H': to display the hotspots collider.")
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
    hero.x = (tileSize*tileScale)*4
    hero.y = (tileSize*tileScale)*1
    setHero()
    listSprites.push(hero)

    gameReady = true
}



function update(dt){

    if(!gameReady){return}

    listSprites.forEach(sprite => {
        sprite.update(dt)
    })

    console.log(hero.y)

    hero.startAnimation(animation)
    hero.move()
}

function draw(pCtx){

    if(!gameReady){return}

    // display map
    listMap.forEach(sprite => {
        sprite.draw(pCtx)
    })

    // display grid
    if(displayGrid){
        let id = getTileAt(hero.x, hero.y)
        //console.log(id)
        grid.draw(pCtx)
        pCtx.strokeStyle = "yellow"
        pCtx.lineWidth = 1
        for (let index = 0; index < 3; index++) {pCtx.strokeRect(hero.x, hero.y, 16*tileScale, 16*tileScale)}
    }

    // display player
    listSprites.forEach(sprite => {
        sprite.draw(pCtx)
    })

    // display hotspots collider
    if(displayHotspots){

        pCtx.strokeStyle = "blue"
        // player position [x,y]
        for (let index = 0; index < 3; index++) {pCtx.strokeRect(hero.x, hero.y, 2, 2)}

        pCtx.strokeStyle = "red"
        // hotspots down
        for (let index = 0; index < 3; index++) {pCtx.strokeRect(hero.x + (1*tileScale), hero.y + (16*tileScale), 2, 2)}
        for (let index = 0; index < 3; index++) {pCtx.strokeRect(hero.x + (8*tileScale), hero.y + (16*tileScale), 2, 2)}
        for (let index = 0; index < 3; index++) {pCtx.strokeRect(hero.x + (14*tileScale), hero.y + (16*tileScale), 2, 2)}
        // hotspots up
        for (let index = 0; index < 3; index++) {pCtx.strokeRect(hero.x + (1*tileScale), hero.y + (8*tileScale), 2, 2)}
        for (let index = 0; index < 3; index++) {pCtx.strokeRect(hero.x + (8*tileScale), hero.y + (8*tileScale), 2, 2)}
        for (let index = 0; index < 3; index++) {pCtx.strokeRect(hero.x + (14*tileScale), hero.y + (8*tileScale), 2, 2)}
        // hotspots left
        for (let index = 0; index < 3; index++) {pCtx.strokeRect(hero.x, hero.y + (9*tileScale), 2, 2)}
        for (let index = 0; index < 3; index++) {pCtx.strokeRect(hero.x, hero.y + (12*tileScale), 2, 2)}
        for (let index = 0; index < 3; index++) {pCtx.strokeRect(hero.x, hero.y + (15*tileScale), 2, 2)}
        // hotspots right
        for (let index = 0; index < 3; index++) {pCtx.strokeRect(hero.x + (15*tileScale), hero.y + (9*tileScale), 2, 2)}
        for (let index = 0; index < 3; index++) {pCtx.strokeRect(hero.x + (15*tileScale), hero.y + (12*tileScale), 2, 2)}
        for (let index = 0; index < 3; index++) {pCtx.strokeRect(hero.x + (15*tileScale), hero.y + (15*tileScale), 2, 2)}
    }
}
