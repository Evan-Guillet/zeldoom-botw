class Sprite{
    constructor(pSrc, pX = 0, pY = 0){
        this.img = pSrc
        this.x = pX
        this.y = pY
    }

    draw(pCtx){
        pCtx.drawImage(this.img, this.x, this.y)
    }
}
