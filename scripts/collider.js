const map = [
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
