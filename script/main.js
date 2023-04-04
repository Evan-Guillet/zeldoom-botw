let canvas = document.getElementById("canvas")  // get the information of the game window by its id, here "canvas"
let ctx = canvas.getContext("2d")   // gives the graphical context for the display functions, here "2d"
let interval
let lastUpdate = Date.now()

function run(){
    // last time reference recorded
    let now = Date.now()
    // calculates the delta time by obtaining the difference between the last time reference and the current one
    let dt = (now - lastUpdate)/1000
    // updates the last moment
    lastUpdate = now

    update(dt)

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
