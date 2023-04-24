function setRespawn(l1, l2){
    
    respawn.addAnimation("SPAWN", [0, 1, 2, 3], 0.25, l1)
    respawn.addAnimation("", [], 0.25, l2)

    respawn.startAnimation(respawn.animationType)
}
