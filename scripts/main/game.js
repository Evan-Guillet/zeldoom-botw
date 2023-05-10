let playerManage = new Character()
let owlManage = new Character()
let axolotManage = new Character()
let racoonManage = new Character()
let skullManage = new Character()

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
    imageLoader.add("/asset/graphics/Actor/Monsters/axolot_blue/sprite_sheet.png")
    imageLoader.add("/asset/graphics/Actor/Monsters/racoon/sprite_sheet.png")
    imageLoader.add("/asset/graphics/Actor/Monsters/skull/sprite_sheet.png")

    imageLoader.add("/asset/graphics/actor/characters/shadow.png")

    imageLoader.add("/asset/graphics/map/map.png")
    imageLoader.add("/asset/graphics/map/grid.png")

    imageLoader.add("/asset/graphics/hud/alerte.png")
    imageLoader.add("/asset/graphics/hud/heart.png")
    imageLoader.add("/asset/graphics/hud/control.png")
    imageLoader.add("/asset/graphics/hud/menu.png")
    imageLoader.add("/asset/graphics/hud/win.png")
    imageLoader.add("/asset/graphics/hud/lose.png")
    imageLoader.add("/asset/graphics/hud/lose.png")

    imageLoader.add("/asset/graphics/fx/blood.png")

    imageLoader.start(startGame)
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

    listCharacter = []
    
    startOwl()
    startAxolot()
    startRacoon()
    startSkull()
    startPlayer()

    hearts()
}

function update(dt){

    if(!gameReady){return}
    
    listCharacter.forEach(character => {
        character.update(dt)
    })

    playerManager()
    owlManager(dt)
    axolotManager(dt)
    racoonManager(dt)
    skullManager(dt)

    owlStateMachine(owl)
    axolotStateMachine(axolot)
    racoonStateMachine(racoon)
    skullStateMachine(skull)
    howManyHearts()

    if(player.isAlive && owl.isAlive && axolot.isAlive && racoon.isAlive && skull.isAlive){
        backgroundMusic.play()

    } else if(!player.isAlive || !owl.isAlive && !axolot.isAlive && !racoon.isAlive && !skull.isAlive){
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

    map.draw(pCtx)

    // display character
    listCharacter.forEach(character => {
        if(character.isAlive){character.shadow.draw(pCtx)}
        character.draw(pCtx)
    })

    if(owlManage.detectionArea(owl, player) && owl.isAlive){
        owl.alerte.draw(pCtx)

    } else if(axolotManage.detectionArea(axolot, player) && axolot.isAlive){
        axolot.alerte.draw(pCtx)

    } else if(racoonManage.detectionArea(racoon, player) && racoon.isAlive){
        racoon.alerte.draw(pCtx)

    } else if(skullManage.detectionArea(skull, player) && skull.isAlive){
        skull.alerte.draw(pCtx)
    }

    if(player.isAlive){
        hearts.draw(pCtx)
    }

    if(!owl.isAlive && !axolot.isAlive && !racoon.isAlive && !skull.isAlive){
        winScreen(pCtx)
    }

    if(!player.isAlive){
        gameOverScreen(pCtx)
    }
}
