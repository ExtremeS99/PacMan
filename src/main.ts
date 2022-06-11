import { level, object_type, keyboard } from './components/setup';
import { randomMoves } from "./components/ghostAi"

import Board from "./components/board"
import Pacman from "./components/pacman"
import Ghost from "./components/ghost"

//musics
//@ts-ignore
import soundDot from "./sounds/munch.wav"
//@ts-ignore
import soundPill from './sounds/pill.wav'
//@ts-ignore
import soundStart from './sounds/game_start.wav'
//@ts-ignore
import soundLose from './sounds/death.wav'
//@ts-ignore
import soundDiner from './sounds/eat_ghost.wav'
import PathFinder from './components/PathFinder';

//DOMElements
let game: HTMLElement = document.getElementById("game")
let scoreboard: HTMLElement = document.getElementById("score")
let startBut: HTMLElement = document.getElementById("startBut")
let lives: HTMLElement = document.getElementById("lives")
let lev: HTMLElement = document.getElementById("lev")

//important settings
let movementSpeed: number = 80
let eatingTime: number = 10000
let gameBoard: Board = new Board(game)
let pathFinder: PathFinder = new PathFinder(gameBoard);
gameBoard.createGame(level)

//starting set
let score: number = 0
let interwal: NodeJS.Timer = null
let levelNr: number = 1
let livesLeft: number = 3
let isThisWin: boolean = false
let hungerPac: boolean = false
let hungerTime: NodeJS.Timeout = null




function start() {
    playMusic(soundStart)
    isThisWin = false
    hungerPac = false


    startBut.classList.add('hide')
    gameBoard.createGame(level)
    let pac = new Pacman(2 + levelNr, 287)
    gameBoard.classGiving(287, [object_type.pacman])
    document.addEventListener('keydown', (e: KeyboardEvent) => pac.keyClicked(e, gameBoard.areYouThere))
    let ghosts: Ghost[] = [
        new Ghost(3 + (levelNr * 2), 188, object_type.blinky, 19, pathFinder, randomMoves),
        new Ghost(3 + (levelNr * 2), 209, object_type.pinky, 0, pathFinder, randomMoves),
        new Ghost(3 + (levelNr * 2), 230, object_type.inky, 459, pathFinder, randomMoves),
        new Ghost(3 + (levelNr * 2), 251, object_type.clyde, 440, pathFinder, randomMoves)
    ]



    if (interwal) {
        clearInterval(interwal)
    }
    interwal = setInterval(() => rope(pac, ghosts), movementSpeed)
}
function levelUpdate() {
    levelNr += 1
    gameBoard = undefined
    gameBoard = new Board(game)
    gameBoard.createGame(level)


    start()
}
function loseLive(pac: Pacman, ghosts: Ghost[]) {
    gameBoard.classUnGiving(pac.position, [object_type.pacman])
    pac.position = 287
    gameBoard.classGiving(287, [object_type.pacman])
    ghosts.forEach(ghost => {
        gameBoard.classUnGiving(ghost.position, [object_type.ghost, object_type.scared, ghost.name])
        ghost.position = ghost.startPosition
        gameBoard.classGiving(ghost.position, [object_type.ghost, ghost.name])
    });
    livesLeft -= 1
}
function rope(pac: Pacman, ghosts: Ghost[]) {
    gameBoard.move(pac)

    amIColiding(pac, ghosts)

    ghosts.forEach(ghost => {
        if (ghost.focusPlayer) { ghost.setSpecifyTarget(pac, ghosts) }
        else ghost.target = ghost.focusOn;
        gameBoard.move(ghost)

    })
    console.log(gameBoard.dots);

    amIColiding(pac, ghosts)
    if (gameBoard.dots > 150) {
        ghosts.forEach(e => e.focusPlayer = false)
        console.log("zmiana1");


    } else if (gameBoard.dots <= 150 && gameBoard.dots > 100) {
        ghosts.forEach(e => e.focusPlayer = true)
        console.log("zmiana2");

    } else if (gameBoard.dots <= 100 && gameBoard.dots > 50) {
        ghosts.forEach(e => e.focusPlayer = false)
        console.log("zmiana3");

    } else if (gameBoard.dots <= 50 && gameBoard.dots >= 0) {
        ghosts.forEach(e => e.focusPlayer = true)
        console.log("zmiana4");

    }
    if (gameBoard.areYouThere(pac.position, object_type.dot)) {
        playMusic(soundDot)
        gameBoard.classUnGiving(pac.position, [object_type.dot])
        gameBoard.dots--
        score += (10 * levelNr)
    }

    if (gameBoard.areYouThere(pac.position, object_type.pill)) {
        playMusic(soundPill)
        gameBoard.classUnGiving(pac.position, [object_type.pill])
        pac.diner = true
        score += (50 * levelNr)
        clearTimeout(eatingTime)
        hungerTime = setTimeout(() => (pac.diner = false), eatingTime)
    }

    if (pac.diner !== hungerPac) {
        hungerPac = pac.diner
        ghosts.forEach((ghost) => (ghost.coward = pac.diner, ghost.direction = keyboard[ghost.opositeDir(ghost.direction)]))
    }
    if (gameBoard.dots === 0) {
        levelUpdate()
    }
    scoreboard.innerHTML = `${score}`
    lives.innerHTML = `lives: ${livesLeft}`
    lev.innerHTML = `level: ${levelNr}`



}
function amIColiding(pac: Pacman, ghosts: Ghost[]) {
    let ghostLided = ghosts.find(ghost => pac.position === ghost.position)

    if (ghostLided) {
        if (pac.diner) {
            playMusic(soundDiner)
            gameBoard.classUnGiving(ghostLided.position, [object_type.ghost, object_type.scared, ghostLided.name])
            ghostLided.position = ghostLided.startPosition
            score += (200 * levelNr)
        } else {
            gameBoard.classUnGiving(pac.position, [object_type.pacman])
            gameBoard.entRotation(pac.position, 0)
            if (livesLeft > 0) {
                playMusic(soundLose)
                console.log(livesLeft);
                loseLive(pac, ghosts)
            } else {
                gameOver(pac, game)

            }
        }


    }
}

function playMusic(audio: string) {
    let voice = new Audio(audio)
    voice.play()
}

function gameOver(pac: Pacman, el: HTMLElement) {
    playMusic(soundLose)
    console.log(livesLeft);


    document.removeEventListener("keydown", e => pac.keyClicked(e, gameBoard.areYouThere))

    gameBoard.showEnd(isThisWin)

    clearInterval(interwal)

    startBut.classList.remove('hide')
}

function restart() {
    score = 0
    livesLeft = 3
    start()
}

startBut.addEventListener("click", restart)