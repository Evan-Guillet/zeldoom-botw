class ImageLoader{
    constructor(){
        this.listPaths = []
        this.listImgages = []
        this.callBack = null
        this.loadedImageCount = 0
    }

    add(pImgPath){
        this.listPaths.push(pImgPath)
    }

    getTotalImages(){
        return this.listPaths.length
    }

    getTotalImagesLoaded(){
        return this.loadedImageCount
    }

    getListImages(){
        return this.listImgages
    }

    start(pCallBack){
        this.callBack = pCallBack

        this.listPaths.forEach(path => {
            let img = new Image();
            img.onLoad = this.imageLoaded.bind(this)
            img.src = path
            this.listImgages[path] = img
        });
    }

    imageLoaded(e){
        this.loadedImageCount++

        if(this.loadedImageCount == this.listPaths.length){
            this.callBack()
        }
    }
}
