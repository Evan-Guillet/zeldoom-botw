let playerManage = new Character()
let enemyManage = new Character()

let imageLoader = new ImageLoader()
let gameReady = false
let lismap = []
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
    imageLoader.add("/asset/graphics/hud/alerte.png")
    imageLoader.add("/asset/graphics/fx/blood.png")
    imageLoader.add("/asset/graphics/hud/heart.png")
    imageLoader.add("/asset/graphics/actor/characters/shadow.png")

    imageLoader.start(startGame)

    console.log("PRESS 'G': to display the grid.\nPRESS 'H': to display the hotspots collider.\nPRESS 'J': to display the detecion area.")
}

function startGame(){

    let mapSpirte = imageLoader.getImage("/asset/graphics/map/map.png")
    map = new Sprite(mapSpirte)
    map.setTileSheet(224, 224)
    map.setScale(4, 4)

    dtGridHelp()

    listCharacter = []

    startPlayer()
    startEnemy()

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

    enemyStateMachine(enemy)
    howManyHearts()

    move(dt)
    moveDown()
    moveUp()
    moveLeft()
    moveRight()
}

function draw(pCtx){

    if(!gameReady){return}

    // display map
    map.draw(pCtx)

    // DEVTOOLS
    dtDisplayGrid(pCtx)
    dtDisplayRange(pCtx, enemy)
    dtHotspots(pCtx)

    gameOverScreen(pCtx)

    // display blood
    if(!enemy.isAlive){
        enemy.blood.draw(pCtx)
    }

    // display character
    listCharacter.forEach(character => {
        if(character.type == "enemy" && player.isAlive){
            enemy.shadow.draw(pCtx)
            character.draw(pCtx)

        } else if(character.type == "player"){
            character.draw(pCtx)
        }
    })

    if(enemyManage.detectionArea(enemy, player)){
        enemy.alerte.draw(pCtx)
    }

    hearts.draw(pCtx)
}
