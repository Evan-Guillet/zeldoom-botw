let imageLoader = new ImageLoader()
let gameReady = false
let listMap = []
let listSprites = []

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
    player = new Sprite(spriteSheetBlueSamurai)
    player.x = (tileSize*tileScale)*2
    player.y = (tileSize*tileScale)*6
    setplayer()
    listSprites.push(player)

    gameReady = true
}

function update(dt){

    if(!gameReady){return}

    getdt(dt)

    listSprites.forEach(sprite => {
        sprite.update(dt)
    })

    player.startAnimation(animation)
    move(dt)
}

function draw(pCtx){

    if(!gameReady){return}

    // display map
    listMap.forEach(sprite => {
        sprite.draw(pCtx)
    })

    // display grid
    if(displayGrid){
        let id = getTileAt(player.x, player.y)
        //console.log(id)
        grid.draw(pCtx)
        pCtx.strokeStyle = "yellow"
        pCtx.lineWidth = 1
        for (let index = 0; index < 3; index++) {pCtx.strokeRect(player.x, player.y, 16*tileScale, 16*tileScale)}
    }

    // display player
    listSprites.forEach(sprite => {
        sprite.draw(pCtx)
    })

    // display hotspots collider
    if(displayHotspots){

        pCtx.strokeStyle = "blue"
        // player position [x,y]
        for (let index = 0; index < 3; index++) {pCtx.strokeRect(player.x, player.y, 2, 2)}

        /*
        pCtx.strokeStyle = "white"
        for (let index = 0; index < 3; index++) {pCtx.strokeRect(player.x + (1*tileScale), player.y + (16*tileScale), 50, 2)}
        for (let index = 0; index < 3; index++) {pCtx.strokeRect(player.x + (1*tileScale), player.y + (8*tileScale), 50, 2)}
        for (let index = 0; index < 3; index++) {pCtx.strokeRect(player.x, player.y + (9*tileScale), 2, 25)}
        for (let index = 0; index < 3; index++) {pCtx.strokeRect(player.x + (15*tileScale), player.y + (9*tileScale), 2, 25)}
        */

        pCtx.strokeStyle = "red"
        // hotspots down
        for (let index = 0; index < 3; index++) {pCtx.strokeRect(player.x + (1*tileScale), player.y + (16*tileScale), 2, 2)}
        for (let index = 0; index < 3; index++) {pCtx.strokeRect(player.x + (8*tileScale), player.y + (16*tileScale), 2, 2)}
        for (let index = 0; index < 3; index++) {pCtx.strokeRect(player.x + (14*tileScale), player.y + (16*tileScale), 2, 2)}
        // hotspots up
        for (let index = 0; index < 3; index++) {pCtx.strokeRect(player.x + (1*tileScale), player.y + (8*tileScale), 2, 2)}
        for (let index = 0; index < 3; index++) {pCtx.strokeRect(player.x + (8*tileScale), player.y + (8*tileScale), 2, 2)}
        for (let index = 0; index < 3; index++) {pCtx.strokeRect(player.x + (14*tileScale), player.y + (8*tileScale), 2, 2)}
        // hotspots left
        for (let index = 0; index < 3; index++) {pCtx.strokeRect(player.x, player.y + (9*tileScale), 2, 2)}
        for (let index = 0; index < 3; index++) {pCtx.strokeRect(player.x, player.y + (12*tileScale), 2, 2)}
        for (let index = 0; index < 3; index++) {pCtx.strokeRect(player.x, player.y + (15*tileScale), 2, 2)}
        // hotspots right
        for (let index = 0; index < 3; index++) {pCtx.strokeRect(player.x + (15*tileScale), player.y + (9*tileScale), 2, 2)}
        for (let index = 0; index < 3; index++) {pCtx.strokeRect(player.x + (15*tileScale), player.y + (12*tileScale), 2, 2)}
        for (let index = 0; index < 3; index++) {pCtx.strokeRect(player.x + (15*tileScale), player.y + (15*tileScale), 2, 2)}
    }
}

function getdt(dt){
    return dt
}