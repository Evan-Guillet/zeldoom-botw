let canvas = document.getElementById("canvas")  // get the information of the game window by its id, here "canvas"
let ctx = canvas.getContext("2d")   // gives the graphical context for the display functions, here "2d"
let lastUpdate = 0

function run(time){
    // recall the "run" function recursively
    requestAnimationFrame(run)

    // calculates the delta time by obtaining the difference between the last time reference and the current one
    let dt = (time - lastUpdate)/1000

    // if I want to limit fps
    //if(dt < (1/60) - 0.001){return}

    // updates the last moment
    lastUpdate = time

    update(dt)

    // clears the screen before redrawing the screen each time the image is refreshed
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    draw(ctx)
}

function init(){
    ctx.imageSmoothingEnabled = false
    ctx.msImageSmoothingEnabled = false
    ctx.webkitImageSmoothingEnabled = false
    ctx.mozImageSmoothingEnabled = false

    load()

    // starts the "run" function
    requestAnimationFrame(run)
}

init()
