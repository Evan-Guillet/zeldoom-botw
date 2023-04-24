function dtDisplayGrid(pCtx){
    // display grid
    if(displayGrid){
        grid.draw(pCtx)
        pCtx.strokeStyle = "yellow"
        pCtx.lineWidth = 1
        for(let index = 0; index < 3; index++){pCtx.strokeRect(player.x, player.y, 16*TILE_SCALE, 16*TILE_SCALE)}
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

            pCtx.font = "bold 30px 'ninjaadventureregular', cursive"
            pCtx.textAlign = "center"
            pCtx.fillStyle = "white"
            pCtx.fillText(enemy.state, enemy.x + 8*4, enemy.y - 16)
            pCtx.fillStyle = "red"
            pCtx.fillText(enemy.hitPoint, enemy.x + 8*4, enemy.y + (16+8)*TILE_SCALE)
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
        pCtx.fillRect(player.x + (1*TILE_SCALE), player.y + (16*TILE_SCALE), 2, 2)
        pCtx.fillRect(player.x + (8*TILE_SCALE), player.y + (16*TILE_SCALE), 2, 2)
        pCtx.fillRect(player.x + (14*TILE_SCALE), player.y + (16*TILE_SCALE), 2, 2)
        // hotspots up
        pCtx.fillRect(player.x + (1*TILE_SCALE), player.y + (8*TILE_SCALE), 2, 2)
        pCtx.fillRect(player.x + (8*TILE_SCALE), player.y + (8*TILE_SCALE), 2, 2)
        pCtx.fillRect(player.x + (14*TILE_SCALE), player.y + (8*TILE_SCALE), 2, 2)
        // hotspots left
        pCtx.fillRect(player.x, player.y + (9*TILE_SCALE), 2, 2)
        pCtx.fillRect(player.x, player.y + (12*TILE_SCALE), 2, 2)
        pCtx.fillRect(player.x, player.y + (15*TILE_SCALE), 2, 2)
        // hotspots right
        pCtx.fillRect(player.x + (15*TILE_SCALE), player.y + (9*TILE_SCALE), 2, 2)
        pCtx.fillRect(player.x + (15*TILE_SCALE), player.y + (12*TILE_SCALE), 2, 2)
        pCtx.fillRect(player.x + (15*TILE_SCALE), player.y + (15*TILE_SCALE), 2, 2)
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
