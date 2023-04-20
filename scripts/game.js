let imageLoader = new ImageLoader()
let gameReady = false
let listMap = []
let listCharacter = []

const tileSize = 16
const tileScale = 4

function load(){
    // retrieves the activated and released keys
    document.addEventListener("keydown", keyDown, false)
    document.addEventListener("keyup", keyUp, false)

    imageLoader.add("/asset/graphics/actor/characters/dark_ninja/sprite_sheet.png")
    imageLoader.add("/asset/graphics/Actor/Monsters/Owl.png")
    imageLoader.add("/asset/graphics/map/map.png")
    imageLoader.add("/asset/graphics/map/grid.png")
    imageLoader.add("/asset/graphics/hud/warning.png")
    imageLoader.add("/asset/graphics/fx/blood.png")

    imageLoader.start(startGame)

    console.log("PRESS 'G': to display the grid.\nPRESS 'H': to display the hotspots collider.\nPRESS 'J': to display the detecion area.")
}

function startGame(){

    listMap = []

    let map = imageLoader.getImage("/asset/graphics/map/map.png")
    level = new Sprite(map)
    level.setTileSheet(224, 224)
    level.setScale(4, 4)
    listMap.push(level)

    dtGridHelp()

    listCharacter = []

    player()
    enimies()

    let spriteWarning = imageLoader.getImage("/asset/graphics/hud/warning.png")
    warning = new Sprite(spriteWarning)
    warning.setTileSheet(16, 16)
    warning.setScale(4, 4)

    gameReady = true
}

function update(dt){

    if(!gameReady){return}
    
    listCharacter.forEach(sprite => {
        sprite.update(dt)
    })
    
    move(dt)
    moveDown()
    moveUp()
    moveLeft()
    moveRight()

    updateEnemy(enemy)
    velocityEnemy(dt)
    whatDirection()
    
    isDead()
}

function draw(pCtx){

    if(!gameReady){return}

    // display map
    listMap.forEach(sprite => {
        sprite.draw(pCtx)
    })

    // display grid
    dtDisplayGrid(pCtx)

    // display hotspots collider
    dtHotspots(pCtx)

    // display blood player
    if(!player.isAlive){
        player.blood.x = player.x - (tileSize/2)*tileScale
        player.blood.y = player.y - (tileSize/2)*tileScale
        player.blood.draw(pCtx)
    }

    // display character
    listCharacter.forEach(sprite => {
        sprite.draw(pCtx)
        dtDisplayRange(pCtx, sprite)
    })

    if(displayWarning){
        warning.draw(pCtx)
    }
}

function Hurt(pTarget){
    pTarget.hitPoint -= 0.1
}

function isDead(){
    if(player.hitPoint <= 0){
        player.hitPoint = 0
        player.isAlive = false
        player.animationType = "DEAD"
        setplayer()

        if(!player.soundKillIsActive){
            killSound.play()
            player.soundKillIsActive = true
        }
    }
}
