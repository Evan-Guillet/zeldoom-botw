function hearts(){
    let spriteHeart = imageLoader.getImage("/asset/graphics/hud/heart.png")
    hearts = new Sprite(spriteHeart)
    hearts.setTileSheet(80, 16)
    hearts.setScale(4, 4)

    hearts.x = (TILE)*0.25
    hearts.y = (TILE)*0.25

    setHearts()
}

function setHearts(){
    
    hearts.addAnimation("20/20", [0], 0.25)
    hearts.addAnimation("19/20", [1], 0.25)
    hearts.addAnimation("18/20", [2], 0.25)
    hearts.addAnimation("17/20", [3], 0.25)
    hearts.addAnimation("16/20", [4], 0.25)
    hearts.addAnimation("15/20", [5], 0.25)
    hearts.addAnimation("14/20", [6], 0.25)
    hearts.addAnimation("13/20", [7], 0.25)
    hearts.addAnimation("12/20", [8], 0.25)
    hearts.addAnimation("11/20", [9], 0.25)
    hearts.addAnimation("10/20", [10], 0.25)
    hearts.addAnimation("9/20", [11], 0.25)
    hearts.addAnimation("8/20", [12], 0.25)
    hearts.addAnimation("7/20", [13], 0.25)
    hearts.addAnimation("6/20", [14], 0.25)
    hearts.addAnimation("5/20", [15], 0.25)
    hearts.addAnimation("4/20", [16], 0.25)
    hearts.addAnimation("3/20", [17], 0.25)
    hearts.addAnimation("2/20", [18], 0.25)
    hearts.addAnimation("1/20", [19], 0.25)
    hearts.addAnimation("0/20", [20], 0.25)

    hearts.startAnimation(hearts.animationType)
}

function howManyHearts() {
    if(player.hitPoint > 95){
        hearts.animationType = "20/20"
        setHearts()

    } else if(player.hitPoint <= 95 && player.hitPoint > 90){
        hearts.animationType = "19/20"
        setHearts()

    } else if(player.hitPoint <= 90 && player.hitPoint > 85){
        hearts.animationType = "18/20"
        setHearts()
        
    } else if(player.hitPoint <= 85 && player.hitPoint > 80){
        hearts.animationType = "17/20"
        setHearts()
        
    } else if(player.hitPoint <= 80 && player.hitPoint > 75){
        hearts.animationType = "16/20"
        setHearts()
        
    } else if(player.hitPoint <= 75 && player.hitPoint > 70){
        hearts.animationType = "15/20"
        setHearts()
        
    } else if(player.hitPoint <= 70 && player.hitPoint > 65){
        hearts.animationType = "14/20"
        setHearts()
        
    } else if(player.hitPoint <= 65 && player.hitPoint > 60){
        hearts.animationType = "13/20"
        setHearts()
        
    } else if(player.hitPoint <= 60 && player.hitPoint > 55){
        hearts.animationType = "12/20"
        setHearts()
        
    } else if(player.hitPoint <= 55 && player.hitPoint > 50){
        hearts.animationType = "11/20"
        setHearts()
        
    } else if(player.hitPoint <= 50 && player.hitPoint > 45){
        hearts.animationType = "10/20"
        setHearts()
        
    } else if(player.hitPoint <= 45 && player.hitPoint > 40){
        hearts.animationType = "9/20"
        setHearts()
        
    } else if(player.hitPoint <= 40 && player.hitPoint > 35){
        hearts.animationType = "8/20"
        setHearts()
        
    } else if(player.hitPoint <= 35 && player.hitPoint > 30){
        hearts.animationType = "7/20"
        setHearts()
        
    } else if(player.hitPoint <= 30 && player.hitPoint > 25){
        hearts.animationType = "6/20"
        setHearts()
        
    } else if(player.hitPoint <= 25 && player.hitPoint > 20){
        hearts.animationType = "5/20"
        setHearts()
        
    } else if(player.hitPoint <= 20 && player.hitPoint > 15){
        hearts.animationType = "4/20"
        setHearts()
        
    } else if(player.hitPoint <= 15 && player.hitPoint > 10){
        hearts.animationType = "3/20"
        setHearts()
        
    } else if(player.hitPoint <= 10 && player.hitPoint > 5){
        hearts.animationType = "2/20"
        setHearts()
        
    } else if(player.hitPoint <= 5 && player.hitPoint > 0){
        hearts.animationType = "1/20"
        setHearts()
        
    } else if(player.hitPoint <= 0){
        hearts.animationType = "0/20"
        setHearts()
    }
}

function startScreen(pCtx){
    menu.draw(pCtx)
    if(displayControl){
        control.draw(pCtx)
    }
}

function gameOverScreen(pCtx){
    if(playerManage.isDead(player)){

        // black background
        pCtx.globalAlpha = 1
        pCtx.fillStyle = "black"
        pCtx.fillRect(0, 0, canvas.width, canvas.height)
        pCtx.globalAlpha = 1

        // title
        pCtx.font = "bold 75px 'ninjaadventureregular', cursive"
        pCtx.textAlign = "center"
        pCtx.fillStyle = "red"
        pCtx.fillText("YOU    DIED", canvas.width/2, canvas.height/2)

        // subtitle
        pCtx.font = "bold 25px 'ninjaadventureregular', cursive"
        pCtx.fillStyle = "white"
        pCtx.fillText("Press      'SPACE'", canvas.width/2, canvas.height/2+50)
        
        // display blood
        player.blood.x = player.x - (TILE_SIZE/2)*TILE_SCALE
        player.blood.y = player.y - (TILE_SIZE/2)*TILE_SCALE
        player.blood.draw(pCtx)
    }
}

function winScreen(pCtx){
    win.draw(pCtx)
}
