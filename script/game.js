let character
let timer

function load(){
    // retrieves the activated and released keys
    document.addEventListener("keydown", keyDown, false);
    document.addEventListener("keyup", keyUp, false);

    character = new Character("/asset/asset_pack/graphics/Actor/Characters/BlueNinja/Faceset.png")
    timer = 0
}

function update(dt){
    timer += dt;
    character.move()
}

function draw(pCtx){
    character.draw(pCtx)
}
