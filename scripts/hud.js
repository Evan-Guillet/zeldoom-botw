function heart(){
    let spriteHeart = imageLoader.getImage("/asset/graphics/hud/heart.png")
    heart = new Sprite(spriteHeart)
    heart.setTileSheet(80, 16)
    heart.setScale(4, 4)

    heart.x = (tileSize*tileScale)*0.25
    heart.y = (tileSize*tileScale)*0.25

    setHeart()
}

function setHeart(){
    
    heart.addAnimation("20/20", [0], 0.25)
    heart.addAnimation("19/20", [1], 0.25)
    heart.addAnimation("18/20", [2], 0.25)
    heart.addAnimation("17/20", [3], 0.25)
    heart.addAnimation("16/20", [4], 0.25)
    heart.addAnimation("15/20", [5], 0.25)
    heart.addAnimation("14/20", [6], 0.25)
    heart.addAnimation("13/20", [7], 0.25)
    heart.addAnimation("12/20", [8], 0.25)
    heart.addAnimation("11/20", [9], 0.25)
    heart.addAnimation("10/20", [10], 0.25)
    heart.addAnimation("9/20", [11], 0.25)
    heart.addAnimation("8/20", [12], 0.25)
    heart.addAnimation("7/20", [13], 0.25)
    heart.addAnimation("6/20", [14], 0.25)
    heart.addAnimation("5/20", [15], 0.25)
    heart.addAnimation("4/20", [16], 0.25)
    heart.addAnimation("3/20", [17], 0.25)
    heart.addAnimation("2/20", [18], 0.25)
    heart.addAnimation("1/20", [19], 0.25)
    heart.addAnimation("0/20", [20], 0.25)

    heart.startAnimation(heart.animationType)
}
