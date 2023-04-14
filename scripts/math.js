// returns the distance between two points
function getDist(x1,y1, x2,y2){
    return ((x2-x1)**2 + (y2-y1)**2)**0.5
}

// returns the angle between two vectors assuming the same origin
function getAngle(x1,y1, x2,y2){
    return Math.atan2(y2-y1, x2-x1)
}

// return a random number is returned between a min value (included) and a max value (excluded)
function getRandInterval(min, max){
    return Math.random() * (max - min) + min
}
