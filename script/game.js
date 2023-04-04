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

    imageLoader.add("/asset/asset_pack/graphics/Actor/Characters/BlueSamurai/SeparateAnim/Walk.png")
    imageLoader.add("/asset/asset_pack/graphics/Actor/Characters/BlueNinja/SeparateAnim/Walk_right.png")
    
    imageLoader.start(startGame)
}

function startGame(){

    listSprites = []

    let BlueSamurai = imageLoader.getImage("/asset/asset_pack/graphics/Actor/Characters/BlueSamurai/SeparateAnim/Walk.png")
    let spriteBlueSamurai = new Sprite(BlueSamurai)
    spriteBlueSamurai.setTileSheet(16, 16)
    spriteBlueSamurai.setScale(8, 8)
    listSprites.push(spriteBlueSamurai)

    let blueNinja = imageLoader.getImage("/asset/asset_pack/graphics/Actor/Characters/BlueNinja/SeparateAnim/Walk_right.png")
    let spriteBlueNinja = new Sprite(blueNinja)
    spriteBlueNinja.setTileSheet(16, 16)
    spriteBlueNinja.x = 16*8
    spriteBlueNinja.setScale(8, 8)
    listSprites.push(spriteBlueNinja)

    gameReady = true
}

function update(dt){
    if(!gameReady){
        return
    }

    /*
    timer += dt;
    character.move()
    */
}

function draw(pCtx){
    if(!gameReady){
        return
    }

    listSprites.forEach(sprite => {
        sprite.draw(pCtx)
    })

    //character.draw(pCtx)
}
