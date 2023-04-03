let canvas = document.getElementById("canvas")  // get the information of the game window by its id, here "canvas"
let ctx = canvas.getContext("2d")   // gives the graphical context for the display functions, here "2d"
let interval

function run(){
    update()

    // clears the screen before redrawing the screen each time the image is refreshed
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    draw(ctx)
}

function init(){
    load()

    // defines the time interval between each execution of the run function, here 60/sec
    interval = setInterval(run, 1000/60)
}

init()
