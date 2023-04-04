let character
let timer

let imageLoader = new ImageLoader()
let gameReady = false
let listSprite = []

function load(){
    // retrieves the activated and released keys
    document.addEventListener("keydown", keyDown, false);
    document.addEventListener("keyup", keyUp, false);

    character = new Character("/asset/asset_pack/graphics/Actor/Characters/BlueNinja/Faceset.png")
    timer = 0

    imageLoader.add("/asset/asset_pack/graphics/Backgrounds/Tilesets/Pipes.png")
    imageLoader.add("/asset/asset_pack/graphics/Backgrounds/Tilesets/TilesetDungeon.png")
    imageLoader.add("/asset/asset_pack/graphics/Backgrounds/Tilesets/TilesetElement.png")
    imageLoader.add("/asset/asset_pack/graphics/Backgrounds/Tilesets/TilesetField.png")
    imageLoader.add("/asset/asset_pack/graphics/Backgrounds/Tilesets/TilesetFloor.png")
    imageLoader.add("/asset/asset_pack/graphics/Backgrounds/Tilesets/TilesetFloorB.png")
    imageLoader.add("/asset/asset_pack/graphics/Backgrounds/Tilesets/TilesetFloorDetail.png")
    imageLoader.add("/asset/asset_pack/graphics/Backgrounds/Tilesets/TilesetHole.png")
    imageLoader.add("/asset/asset_pack/graphics/Backgrounds/Tilesets/TilesetHouse.png")
    imageLoader.add("/asset/asset_pack/graphics/Backgrounds/Tilesets/TilesetLogic.png")
    imageLoader.add("/asset/asset_pack/graphics/Backgrounds/Tilesets/TilesetNature.png")
    imageLoader.add("/asset/asset_pack/graphics/Backgrounds/Tilesets/TilesetRelief.png")
    imageLoader.add("/asset/asset_pack/graphics/Backgrounds/Tilesets/TilesetReliefDetail.png")
    imageLoader.add("/asset/asset_pack/graphics/Backgrounds/Tilesets/TilesetWater.png")

    imageLoader.start(startGame)
}

function startGame(){

    listSprite = []
    for(let image of Object.values(imageLoader.getListImages())){
        let sprite = new Sprite(image)
        sprite.x = rnd(1, 1000)
        sprite.y = rnd(1, 600)
        listSprite.push(sprite)
    }

    gameReady = true
}

function update(dt){
    if(!gameReady){
        return
    }

    timer += dt;
    character.move()
}

function draw(pCtx){
    if(!gameReady){
        return
    }

    listSprite.forEach(sprite => {
        sprite.draw(pCtx)
    })

    character.draw(pCtx)
}
