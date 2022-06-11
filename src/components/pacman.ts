import { keyboard, object_type, arrow, obTyp, dir } from "./setup"

export default class Pacman {
    position: number
    speed: number
    direction: arrow
    timer: number
    diner: boolean
    rotation: boolean


    constructor(sp: number, startSpot: number) {
        this.position = startSpot
        this.speed = sp
        this.direction = null
        this.timer = 0
        this.diner = false
        this.rotation = true


    }

    movePosibility() {
        if (!this.direction) {
            return false
        }
        if (this.timer === this.speed) {
            this.timer = 0
            return true
        }
        this.timer++
    }

    canIMove(areYouThere: Function) {
        let nextMove: number = this.position + this.direction.movement
        if (areYouThere(nextMove, object_type.wall) || areYouThere(nextMove, object_type.ghostliar)) {
            nextMove = this.position
        }
        let directions: arrow = this.direction
        return { nextMove, directions }
    }

    movePac() {
        let removePriev: string[] = [object_type.pacman]
        let addNew: string[] = [object_type.pacman]
        return { removePriev, addNew }
    }
    setNewPosition(nextMovePosition: number) {
        this.position = nextMovePosition
    }

    keyClicked = (e: KeyboardEvent, areYouThere: Function) => {

        let site
        if (e.keyCode >= 37 && e.keyCode <= 40) {
            site = keyboard[`${e.key}`]

        } else {
            return
        }

        let nextMove: number = this.position + site.movement
        if (areYouThere(nextMove, object_type.wall) || areYouThere(nextMove, object_type.ghost)) {
            return
        }
        this.direction = site
    }
}