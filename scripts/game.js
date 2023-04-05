let character
let timer

let imageLoader = new ImageLoader()
let gameReady = false
let listSprites = []

function load(){
    // retrieves the activated and released keys
    document.addEventListener("keydown", keyDown, false);
    document.addEventListener("keyup", keyUp, false);

    /*
    character = new Character("/asset/asset_pack/graphics/Actor/Characters/BlueNinja/Faceset.png")
    timer = 0
    */

    imageLoader.add("/asset/graphics/actor/characters/blue_ninja/sprite_sheet.png")
    
    imageLoader.start(startGame)
}

function startGame(){

    listSprites = []

    let blueSamurai = imageLoader.getImage("/asset/graphics/actor/characters/blue_ninja/sprite_sheet.png")
    spriteBlueSamurai = new Sprite(blueSamurai)
    spriteBlueSamurai.setTileSheet(16, 16)
    spriteBlueSamurai.setScale(4, 4)
    spriteBlueSamurai.addAnimation("WALK_RIGHT", [3, 7, 11, 15], 0.5, true)
    spriteBlueSamurai.addAnimation("WALK_UP", [1, 5, 9, 14], 0.5, true)
    spriteBlueSamurai.startAnimation("WALK_UP")
    
    listSprites.push(spriteBlueSamurai)

    gameReady = true
}

function update(dt){

    if(!gameReady){return}

    listSprites.forEach(sprite => {
        sprite.update(dt)
    })
    spriteBlueSamurai.startAnimation("WALK_RIGHT")

    /*
    timer += dt;
    character.move()
    */
}

function draw(pCtx){

    if(!gameReady){return}

    listSprites.forEach(sprite => {
        sprite.draw(pCtx)
    })

    //character.draw(pCtx)
}
