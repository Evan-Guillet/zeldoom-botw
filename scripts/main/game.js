let playerManage = new Character()
let enemyManage = new Character()

let imageLoader = new ImageLoader()
let gameReady = false
let listMap = []
let listCharacter = []

const TILE_SIZE = 16
const TILE_SCALE = 4

const TILE = TILE_SIZE*TILE_SCALE

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
    imageLoader.add("/asset/graphics/hud/heart.png")

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

    startPlayer()
    enemy()

    let spriteWarning = imageLoader.getImage("/asset/graphics/hud/warning.png")
    warning = new Sprite(spriteWarning)
    warning.setTileSheet(16, 16)
    warning.setScale(4, 4)

    hearts()

    gameReady = true
}

function update(dt){

    if(!gameReady){return}
    
    listCharacter.forEach(character => {
        character.update(dt)
    })

    playerManager()
    enemyManager(dt)

    soundBox()
    howManyHearts()

    move(dt)
    moveDown()
    moveUp()
    moveLeft()
    moveRight()

    enemyStateMachine(enemy)
    whatDirection()
}

function draw(pCtx){

    if(!gameReady){return}

    // display map
    listMap.forEach(sprite => {
        sprite.draw(pCtx)
    })

    // DEVTOOLS
    dtDisplayGrid(pCtx)
    dtDisplayRange(pCtx, enemy)
    dtHotspots(pCtx)

    // display blood player
    if(playerManage.isDead(player)){
        pCtx.globalAlpha = 1
        pCtx.fillStyle = "black"
        pCtx.fillRect(0, 0, canvas.width, canvas.height)
        pCtx.globalAlpha = 1

        pCtx.font = "bold 75px 'ninjaadventureregular', cursive"
        pCtx.textAlign = "center"
        pCtx.fillStyle = "red"
        pCtx.fillText("YOU    DIED", canvas.width/2, canvas.height/2)

        pCtx.font = "bold 25px 'ninjaadventureregular', cursive"
        pCtx.fillStyle = "white"
        pCtx.fillText("Press      'SPACE'", canvas.width/2, canvas.height/2+50)
        
        player.blood.x = player.x - (TILE_SIZE/2)*TILE_SCALE
        player.blood.y = player.y - (TILE_SIZE/2)*TILE_SCALE
        player.blood.draw(pCtx)
    }

    // display character
    listCharacter.forEach(character => {
        if(character.type == "enemy" && enemy.isVisible){
            character.draw(pCtx)

        } else if(character.type == "player"){
            character.draw(pCtx)
        }
    })

    if(displayWarning){
        warning.draw(pCtx)
    }

    hearts.draw(pCtx)
}
