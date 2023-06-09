const mapCollider = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1],
    [1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1],
    [1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1],
    [1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1],
    [1, 1, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
]

function getTileAt(pX, pY){

    let column = Math.floor(pX/(TILE)) + 1
    let line = Math.floor(pY/(TILE)) + 1

    if((column > 0) && (column < mapCollider[0].length) && (line > 0) && (line <= mapCollider.length)){
        let idCase = mapCollider[line][column]
        return idCase
    }
    
    return "ERROR : outside the mapCollider !"
}

// hotspots
function collideDown(pCharacter){
    let id1 = getTileAt(pCharacter.x + (1*TILE_SCALE), pCharacter.y + (16*TILE_SCALE))
    let id2 = getTileAt(pCharacter.x + (8*TILE_SCALE), pCharacter.y + (16*TILE_SCALE))
    let id3 = getTileAt(pCharacter.x + (14*TILE_SCALE), pCharacter.y + (16*TILE_SCALE))
    return id1 || id2 || id3
}
function collideUp(pCharacter){
    let id1 = getTileAt(pCharacter.x + (1*TILE_SCALE), pCharacter.y + (8*TILE_SCALE))
    let id2 = getTileAt(pCharacter.x + (8*TILE_SCALE), pCharacter.y + (8*TILE_SCALE))
    let id3 = getTileAt(pCharacter.x + (14*TILE_SCALE), pCharacter.y + (8*TILE_SCALE))
    return id1 || id2 || id3
}
function collideLeft(pCharacter){
    let id1 = getTileAt(pCharacter.x, pCharacter.y + (9*TILE_SCALE))
    let id2 = getTileAt(pCharacter.x, pCharacter.y + (12*TILE_SCALE))
    let id3 = getTileAt(pCharacter.x, pCharacter.y + (15*TILE_SCALE))
    return id1 || id2 || id3
}
function collideRight(pCharacter){
    let id1 = getTileAt(pCharacter.x + (15*TILE_SCALE), pCharacter.y + (9*TILE_SCALE))
    let id2 = getTileAt(pCharacter.x + (15*TILE_SCALE), pCharacter.y + (12*TILE_SCALE))
    let id3 = getTileAt(pCharacter.x + (15*TILE_SCALE), pCharacter.y + (15*TILE_SCALE))
    return id1 || id2 || id3
}
