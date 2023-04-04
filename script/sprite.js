class Sprite{

    constructor(pSrc, pX = 0, pY = 0){
        this.img = pSrc
        this.x = pX
        this.y = pY
        this.scaleX = 1
        this.scaleY = 1
        this.currentFrame = 0
        this.tileSize = { x: 0, y: 0 }
        this.tileSheet = false
    }

    setTileSheet(pSizeX, pSizeY){
        this.tileSheet = true
        this.tileSize.x = pSizeX
        this.tileSize.y = pSizeY
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
