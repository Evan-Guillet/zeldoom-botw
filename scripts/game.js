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
    hero.x = (tileSize*tileScale)*8
    hero.y = (tileSize*tileScale)*8
    setHero()
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

function draw(pCtx){

    if(!gameReady){return}

    // display map
    listMap.forEach(sprite => {
        sprite.draw(pCtx)
    })

    // display grid
    if(displayGrid){
        let id = getTileAt(hero.x, hero.y)
        console.log(id)
        grid.draw(pCtx)
        pCtx.strokeStyle = "yellow"
        pCtx.lineWidth = 1
        pCtx.strokeRect(hero.x, hero.y, 16*tileScale, 16*tileScale)
    }

    // display player
    listSprites.forEach(sprite => {
        sprite.draw(pCtx)
    })

    // display hotspots collider
    if(displayHotspots){

        pCtx.strokeStyle = "blue"
        // player position [x,y]
        pCtx.strokeRect(hero.x, hero.y, 2, 2)

        pCtx.strokeStyle = "green"
        // collision point, low centre [x,y]
        pCtx.strokeRect(hero.x + (8*tileScale), hero.y + (12*tileScale), 2, 2)

        pCtx.strokeStyle = "red"
        // hotspots down
        pCtx.strokeRect(hero.x + (1*tileScale), hero.y + (16*tileScale), 2, 2)
        pCtx.strokeRect(hero.x + (14*tileScale), hero.y + (16*tileScale), 2, 2)
        // hotspots up
        pCtx.strokeRect(hero.x + (1*tileScale), hero.y + (8*4), 2, 2)
        pCtx.strokeRect(hero.x + (14*tileScale), hero.y + (8*4), 2, 2)
        // hotspots left
        pCtx.strokeRect(hero.x, hero.y + (10*tileScale), 2, 2)
        pCtx.strokeRect(hero.x, hero.y + (14*tileScale), 2, 2)
        // hotspots right
        pCtx.strokeRect(hero.x + (15*tileScale), hero.y + (10*tileScale), 2, 2)
        pCtx.strokeRect(hero.x + (15*tileScale), hero.y + (14*tileScale), 2, 2)
    }
}
