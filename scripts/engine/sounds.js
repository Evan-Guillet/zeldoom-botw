const killSound = new Audio("/asset/sounds/game/kill.wav")
const alertSound = new Audio("/asset/sounds/game/alert.wav")
const siuuuSound = new Audio("/asset/sounds/game/SIUUU.wav")

const gameoverSound = new Audio("/asset/sounds/game/game_over.wav")
let firstGameoverSound = true
const winSound = new Audio("/asset/sounds/game/success.wav")
let firstWinSound = true

const hitSound = new Audio("/asset/sounds/game/hit.wav")
const bonkSound = new Audio("/asset/sounds/game/bonk.wav")

const acceptSound = new Audio("/asset/sounds/menu/accept.wav")
const cancelSound = new Audio("/asset/sounds/menu/accept_2.wav")

const backgroundMusic = new Audio("/asset/musics/background_music.wav")

function musicInBackground(){
    if(player.isAlive && owl.isAlive && axolot.isAlive && racoon.isAlive && skull.isAlive){
        backgroundMusic.play()

    } else if(!player.isAlive || !owl.isAlive && !axolot.isAlive && !racoon.isAlive && !skull.isAlive){
        backgroundMusic.pause()
        backgroundMusic.currentTime = 0
    }
}
