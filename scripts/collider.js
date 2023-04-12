let mapCollider = []

const mapData = [
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1],
    [1,0,0,0,0,1,1,1,1,1,0,1,1,0,0,1],
    [1,0,0,0,0,1,1,1,1,1,0,0,0,1,0,1],
    [1,0,0,0,0,1,0,1,1,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,1,1,0,0,0,0,0,0,0,0,1,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
]

function checkCollision(pX1,pY1,pW1,pH1, pX2,pY2,pW2,pH2){
    return (pX1 < pX2+pW2) && (pX2 < pX1+pW1) && (pY1 < pY2+pH2) && (pY2 < pY1+pH1)
}

function collideMap(){
    for (let l = 0; l < mapCollider.length; l++) {
        for (let c = 0; c < mapCollider[l].length; c++) {
            let cell = mapCollider[l][c]
            if(cell.id == 1){
                if(checkCollision(player.x,player.y,player.w,player.h, cell.x,cell.y,cell.w,cell.h)){
                    return true
                }
            }
        }
    }
    return false
}

// Retrieved data from the collision table
function mapManager(){
    mapCollider = []

    let fX = 0
    let fY = 0
    let fW = tileSize
    let fH = tileSize

    for (let l = 0; l < mapData.length; l++) {
        mapCollider[l] = []
        for (let c = 0; c < mapData[l].length; c++) {
            mapCollider[l][c] = { id: mapData[l][c], x: fX, y: fY, w: fW, h: fH }
            fX += fW
        }
        fX = 0
        fY += fH
    }
}






function getTileAt(pX, pY){

    let column = Math.floor(pX/(tileSize*tileScale)) + 1
    let line = Math.floor(pY/(tileSize*tileScale)) + 1

    if((column > 0) && (column < map[0].length) && (line > 0) && (line <= map.length)){
        let idCase = map[line][column]
        return idCase
    }
    
    return "ERROR : outside the map !"
}

function collideDown(){
    let id1 = getTileAt(player.x + (1*tileScale), player.y + (16*tileScale))
    let id2 = getTileAt(player.x + (8*tileScale), player.y + (16*tileScale))
    let id3 = getTileAt(player.x + (14*tileScale), player.y + (16*tileScale))
    return id1 || id2 || id3
}
function collideUp(){
    let id1 = getTileAt(player.x + (1*tileScale), player.y + (8*tileScale))
    let id2 = getTileAt(player.x + (8*tileScale), player.y + (8*tileScale))
    let id3 = getTileAt(player.x + (14*tileScale), player.y + (8*tileScale))
    return id1 || id2 || id3
}
function collideLeft(){
    let id1 = getTileAt(player.x, player.y + (10*tileScale))
    let id2 = getTileAt(player.x, player.y + (12*tileScale))
    let id3 = getTileAt(player.x, player.y + (15*tileScale))
    return id1 || id2 || id3
}
function collideRight(){
    let id1 = getTileAt(player.x + (15*tileScale), player.y + (10*tileScale))
    let id2 = getTileAt(player.x + (15*tileScale), player.y + (12*tileScale))
    let id3 = getTileAt(player.x + (15*tileScale), player.y + (15*tileScale))
    return id1 || id2 || id3
}
