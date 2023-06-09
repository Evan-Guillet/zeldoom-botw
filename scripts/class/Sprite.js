class Sprite{
    
    constructor(pSrc, pX = 0, pY = 0, pType = ""){
        this.img = pSrc
        this.name = ""
        this.type = pType

        this.x = pX
        this.y = pY

        this.scaleX = 1
        this.scaleY = 1

        this.currentFrame = 0
        this.currentFrameInAnimation = 0
        this.currentAnimation = null
        this.frameTimer = 0

        this.tileSize = { x: 0, y: 0 }
        this.tileSheet = false

        this.animationType = ""
        this.movement = ""
        this.animations = []

        this.firstAttack = "IDLE_DOWN"
        this.firstSpecial = "IDLE_DOWN"
    }

    setTileSheet(pSizeX, pSizeY){
        this.tileSheet = true
        this.tileSize.x = pSizeX
        this.tileSize.y = pSizeY
    }

    addAnimation(pName, pFrames, pSpeed, pLoop = true){

        let animation = {
            name: pName,
            frames: pFrames,
            speed: pSpeed,
            loop: pLoop,
            end: false
        }
        this.animations.push(animation)
    }

    startAnimation(pName){

        if(this.currentAnimation != null){
            if(this.currentAnimation.name == pName){
                return
            }
        }

        this.animations.forEach(animation => {
            if(animation.name == pName){
                this.currentAnimation = animation
                this.currentFrameInAnimation = 0
                this.currentFrame = this.currentAnimation.frames[this.currentFrameInAnimation]
                this.currentAnimation.end = false
            }
        })
    }

    update(dt) {
        if(this.currentAnimation != null){
            this.frameTimer += dt

            if(this.frameTimer >= this.currentAnimation.speed){
                this.frameTimer = 0
                this.currentFrameInAnimation++
                if(this.currentFrameInAnimation > this.currentAnimation.frames.length - 1){
                    if(this.currentAnimation.loop){
                        this.currentFrameInAnimation = 0
                    } else {
                        this.currentFrameInAnimation = this.currentAnimation.frames.length - 1
                        this.currentAnimation.end = true
                    }
                }
                this.currentFrame = this.currentAnimation.frames[this.currentFrameInAnimation]
            }
        }
    }

    setScale(pX, pY){
        this.scaleX = pX
        this.scaleY = pY
    }

    draw(pCtx){

        if(!this.tileSheet){
            pCtx.drawImage(this.img, this.x, this.y)

        } else {
            let nbColumn = this.img.width/this.tileSize.x

            let line = 0
            line = Math.floor(this.currentFrame/nbColumn)
            let column = 0
            column = this.currentFrame - (line * nbColumn)

            let x = column * this.tileSize.x
            let y = line * this.tileSize.y

            pCtx.drawImage(this.img, x, y, this.tileSize.x, this.tileSize.y, this.x, this.y, this.tileSize.x * this.scaleX, this.tileSize.y * this.scaleY)
        }
    }
}
