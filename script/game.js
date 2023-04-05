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
    
    imageLoader.start(startGame)
}

function startGame(){

    listSprites = []

    let blueSamurai = imageLoader.getImage("/asset/asset_pack/graphics/Actor/Characters/BlueSamurai/SeparateAnim/Walk.png")
    spriteBlueSamurai = new Sprite(blueSamurai)
    spriteBlueSamurai.setTileSheet(16, 16)
    spriteBlueSamurai.setScale(4, 4)
    spriteBlueSamurai.addAnimation("WALK_RIGHT", [0, 1, 2, 3], 0.1, false)
    spriteBlueSamurai.addAnimation("WALK_UP", [0, 1, 2, 3], 0.1, true)
    spriteBlueSamurai.startAnimation("WALK_RIGHT")
    
    listSprites.push(spriteBlueSamurai)

    gameReady = true
}

function update(dt){

    if(!gameReady){return}

    listSprites.forEach(sprite => {
        sprite.update(dt)
    })
    if (spriteBlueSamurai.currentAnimation.name == "WALK_RIGHT" && spriteBlueSamurai.currentAnimation.end){
        spriteBlueSamurai.startAnimation("WALK_UP")
    }

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
