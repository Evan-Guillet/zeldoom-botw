function dtDisplayGrid(pCtx){
    // display grid
    if(displayGrid){
        grid.draw(pCtx)
        pCtx.strokeStyle = "yellow"
        pCtx.lineWidth = 1
        for(let index = 0; index < 3; index++){pCtx.strokeRect(player.x, player.y, 16*tileScale, 16*tileScale)}
    }
}
function dtGridHelp(){
    let gridHelp = imageLoader.getImage("/asset/graphics/map/grid.png")
    grid = new Sprite(gridHelp)
    grid.setTileSheet(224, 224)
    grid.setScale(4, 4)
    grid.name = "grid"
}
function dtDisplayRange(pCtx, pSprite){
    if(pSprite.type == "enemy"){
        if(displayState){

            pCtx.beginPath()
            pCtx.arc(enemy.x + 8*4, enemy.y + 8*4, 230, 0, Math.PI * 2, true)
            pCtx.strokeStyle = "yellow"
            pCtx.lineWidth = 3
            pCtx.stroke()

            pCtx.globalAlpha = 0.25
            pCtx.beginPath()
            pCtx.arc(enemy.x + 8*4, enemy.y + 8*4, 230, 0, Math.PI * 2, true)
            pCtx.fillStyle = "yellow"
            pCtx.lineWidth = 3
            pCtx.fill()
            pCtx.globalAlpha = 1

            pCtx.font = "bold 30px 'Press Start 2P', cursive"
            pCtx.textAlign = "center"
            pCtx.fillStyle = "white"
            pCtx.fillText(enemy.state, enemy.x + 8*4, enemy.y - 16)
        }
    }
}
function dtHotspots(pCtx){
    if(displayHotspots){

        pCtx.fillStyle = "blue"
        // player position [x,y]
        pCtx.fillRect(player.x, player.y, 2, 2)

        pCtx.fillStyle = "red"
        // hotspots down
        pCtx.fillRect(player.x + (1*tileScale), player.y + (16*tileScale), 2, 2)
        pCtx.fillRect(player.x + (8*tileScale), player.y + (16*tileScale), 2, 2)
        pCtx.fillRect(player.x + (14*tileScale), player.y + (16*tileScale), 2, 2)
        // hotspots up
        pCtx.fillRect(player.x + (1*tileScale), player.y + (8*tileScale), 2, 2)
        pCtx.fillRect(player.x + (8*tileScale), player.y + (8*tileScale), 2, 2)
        pCtx.fillRect(player.x + (14*tileScale), player.y + (8*tileScale), 2, 2)
        // hotspots left
        pCtx.fillRect(player.x, player.y + (9*tileScale), 2, 2)
        pCtx.fillRect(player.x, player.y + (12*tileScale), 2, 2)
        pCtx.fillRect(player.x, player.y + (15*tileScale), 2, 2)
        // hotspots right
        pCtx.fillRect(player.x + (15*tileScale), player.y + (9*tileScale), 2, 2)
        pCtx.fillRect(player.x + (15*tileScale), player.y + (12*tileScale), 2, 2)
        pCtx.fillRect(player.x + (15*tileScale), player.y + (15*tileScale), 2, 2)
    }
}
function dtKeyboard(k){
    if(k.code == "KeyG"){
        if(!displayGrid){
            displayGrid = true

        } else if(displayGrid){
            displayGrid = false
        }
    }
    if(k.code == "KeyH"){
        if(!displayHotspots){
            displayHotspots = true

        } else if(displayHotspots){
            displayHotspots = false
        }
    }
    if(k.code == "KeyJ"){
        if(!displayState){
            displayState = true

        } else if(displayState){
            displayState = false
        }
    }
}
