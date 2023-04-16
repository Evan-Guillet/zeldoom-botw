const map = [
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
    [1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,1],
    [1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,1],
    [1,1,0,0,0,1,1,1,1,1,0,1,1,0,0,1],
    [1,1,0,0,0,1,1,1,1,1,0,0,0,1,0,1],
    [1,1,0,0,0,1,0,1,1,0,0,0,0,0,0,1],
    [1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,1,1,1,0,0,0,0,0,0,0,1,0,0,0,1],
    [1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
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

// hotspots
function collideDown(pCharacter){
    let id1 = getTileAt(pCharacter.x + (1*tileScale), pCharacter.y + (16*tileScale))
    let id2 = getTileAt(pCharacter.x + (8*tileScale), pCharacter.y + (16*tileScale))
    let id3 = getTileAt(pCharacter.x + (14*tileScale), pCharacter.y + (16*tileScale))
    return id1 || id2 || id3
}
function collideUp(pCharacter){
    let id1 = getTileAt(pCharacter.x + (1*tileScale), pCharacter.y + (8*tileScale))
    let id2 = getTileAt(pCharacter.x + (8*tileScale), pCharacter.y + (8*tileScale))
    let id3 = getTileAt(pCharacter.x + (14*tileScale), pCharacter.y + (8*tileScale))
    return id1 || id2 || id3
}
function collideLeft(pCharacter){
    let id1 = getTileAt(pCharacter.x, pCharacter.y + (9*tileScale))
    let id2 = getTileAt(pCharacter.x, pCharacter.y + (12*tileScale))
    let id3 = getTileAt(pCharacter.x, pCharacter.y + (15*tileScale))
    return id1 || id2 || id3
}
function collideRight(pCharacter){
    let id1 = getTileAt(pCharacter.x + (15*tileScale), pCharacter.y + (9*tileScale))
    let id2 = getTileAt(pCharacter.x + (15*tileScale), pCharacter.y + (12*tileScale))
    let id3 = getTileAt(pCharacter.x + (15*tileScale), pCharacter.y + (15*tileScale))
    return id1 || id2 || id3
}
