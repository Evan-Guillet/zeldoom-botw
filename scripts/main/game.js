let playerManage = new Character()
let enemyManage = new Character()

let imageLoader = new ImageLoader()
let gameReady = false
let listCharacter = []

const TILE_SIZE = 16
const TILE_SCALE = 4

const TILE = TILE_SIZE*TILE_SCALE

function load(){
    // retrieves the activated and released keys
    document.addEventListener("keydown", keyDown, false)
    document.addEventListener("keyup", keyUp, false)

    // detects the click of the mouse
    document.addEventListener("click", click, false)

    imageLoader.add("/asset/graphics/actor/characters/dark_ninja/sprite_sheet.png")
    imageLoader.add("/asset/graphics/Actor/Monsters/Owl.png")
    imageLoader.add("/asset/graphics/map/map.png")
    imageLoader.add("/asset/graphics/map/grid.png")
    imageLoader.add("/asset/graphics/hud/alerte.png")
    imageLoader.add("/asset/graphics/fx/blood.png")
    imageLoader.add("/asset/graphics/hud/heart.png")
    imageLoader.add("/asset/graphics/actor/characters/shadow.png")
    imageLoader.add("/asset/graphics/hud/control.png")
    imageLoader.add("/asset/graphics/hud/menu.png")
    imageLoader.add("/asset/graphics/hud/win.png")
    imageLoader.add("/asset/graphics/hud/lose.png")

    imageLoader.start(startGame)

    console.log("PRESS 'G': to display the grid.\nPRESS 'H': to display the hotspots collider.\nPRESS 'J': to display the detecion area.")
}

function startGame(){

    let menuSprite = imageLoader.getImage("/asset/graphics/hud/menu.png")
    menu = new Sprite(menuSprite)
    menu.setTileSheet(224, 224)
    menu.setScale(4, 4)

    let controlSprite = imageLoader.getImage("/asset/graphics/hud/control.png")
    control = new Sprite(controlSprite)
    control.setTileSheet(224, 224)
    control.setScale(4, 4)

    let winSprite = imageLoader.getImage("/asset/graphics/hud/win.png")
    win = new Sprite(winSprite)
    win.setTileSheet(224, 224)
    win.setScale(4, 4)

    let loseSprite = imageLoader.getImage("/asset/graphics/hud/lose.png")
    lose = new Sprite(loseSprite)
    lose.setTileSheet(224, 224)
    lose.setScale(4, 4)

    let mapSpirte = imageLoader.getImage("/asset/graphics/map/map.png")
    map = new Sprite(mapSpirte)
    map.setTileSheet(224, 224)
    map.setScale(4, 4)

    dtGridHelp()

    listCharacter = []

    startPlayer()
    startEnemy()

    hearts()
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

    if(!playerManage.win(enemy) && !playerManage.lose(player)){
        backgroundMusic.play()

    } else {
        backgroundMusic.pause()
        backgroundMusic.currentTime = 0
    }

    move(dt)
    moveDown()
    moveUp()
    moveLeft()
    moveRight()
}

function draw(pCtx){

    if(!gameReady){
        startScreen(pCtx)
        return
    }

    // display map
    map.draw(pCtx)

    // DEVTOOLS
    dtDisplayGrid(pCtx)
    dtDisplayRange(pCtx, enemy)
    dtHotspots(pCtx)

    // display blood
    if(!enemy.isAlive){
        enemy.blood.draw(pCtx)
    }

    // display character
    listCharacter.forEach(character => {
        if(character.type == "enemy" && player.isAlive){
            enemy.shadow.draw(pCtx)
            character.draw(pCtx)

        } else if(character.type == "player" && character.isAlive){
            character.draw(pCtx)
        }
    })

    if(enemyManage.detectionArea(enemy, player) && enemy.isAlive){
        enemy.alerte.draw(pCtx)
    }

    if(player.isAlive){
        hearts.draw(pCtx)
    }

    if(playerManage.win(enemy)){
        winScreen(pCtx)
    }

    if(playerManage.lose(player)){
        gameOverScreen(pCtx)
    }
}
