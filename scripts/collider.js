const tileSize = 16
const tileScale = 4

const map = [
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,0,0,0,0,0,0,0,0,0,0],
    [1,1,1,1,1,0,0,0,0,0,0,0,0,0,0],
    [1,1,1,1,1,1,0,0,0,0,0,0,0,0,0],
    [1,1,1,1,0,0,0,0,0,0,0,0,0,0,0],
    [1,1,1,1,0,0,0,0,0,0,0,0,0,0,0],
    [1,1,1,1,0,0,0,0,0,0,0,0,0,0,0],
    [1,1,1,1,1,1,0,0,0,0,0,0,0,0,0],
    [1,1,1,1,1,1,1,1,1,0,0,0,0,0,0],
    [1,1,1,1,1,1,1,1,1,1,0,0,0,0,0],
    [1,1,1,1,1,1,1,1,1,1,1,0,0,0,0],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
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
    let id1 = getTileAt(hero.x + 1, hero.y + 16*4)
    let id2 = getTileAt(hero.x + 14, hero.y + 16*4)
    return id1 || id2
}
function collideUp(){
    let id1 = getTileAt(hero.x + 1, hero.y - 1)
    let id2 = getTileAt(hero.x + 14, hero.y - 1)
    return id1 || id2
}
function collideLeft(){
    let id1 = getTileAt(hero.x -1, hero.y + 3)
    let id2 = getTileAt(hero.x -1, hero.y + 14)
    return id1 || id2
}
function collideRight(){
    let id1 = getTileAt(hero.x + 16*4, hero.y + 3)
    let id2 = getTileAt(hero.x + 16*4, hero.y + 14)
    return id1 || id2
}
