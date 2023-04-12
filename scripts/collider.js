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

    //console.log(column, line)

    if((column > 0) && (column < map[0].length) && (line > 0) && (line <= map.length)){
        let idCase = map[line][column]
        return idCase
    }
    
    return "ERROR : outside the map !"
}

function collideDown(){
    let id1 = getTileAt(hero.x + (1*tileScale), hero.y + (16*tileScale))
    let id2 = getTileAt(hero.x + (14*tileScale), hero.y + (16*tileScale))
    return id1 && id2
}
function collideUp(){
    let id1 = getTileAt(hero.x + (1*tileScale), hero.y + (8*tileScale))
    let id2 = getTileAt(hero.x + (14*tileScale), hero.y + (8*tileScale))
    return id1 && id2
}
function collideLeft(){
    let id1 = getTileAt(hero.x, hero.y + (10*tileScale))
    let id2 = getTileAt(hero.x, hero.y + (14*tileScale))
    return id1 && id2
}
function collideRight(){
    let id1 = getTileAt(hero.x + (15*tileScale), hero.y + (10*tileScale))
    let id2 = getTileAt(hero.x + (15*tileScale), hero.y + (14*tileScale))
    return id1 && id2
}
