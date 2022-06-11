import { width, cell, object_type, classes, arrow } from "./setup"
import Pacman from "./pacman"
import Ghost from "./ghost"

export default class Board {
    dots: number
    levelTable: HTMLElement[]
    elHtml: HTMLElement

    constructor(el: HTMLElement) {
        this.dots = 0
        this.levelTable = []
        this.elHtml = el
    }
    //sprawdzanie zwycięstwa
    showEnd(winLose: boolean) {
        let div: HTMLElement = document.createElement('div')
        div.classList.add('game-status')
        div.innerHTML = `${winLose ? 'WIN' : "GAMEOVER"}`
        this.elHtml.appendChild(div)
    }

    createGame(level: number[]) {
        this.dots = 0
        this.levelTable = []
        this.elHtml.innerHTML = ""
        this.elHtml.style.cssText = `grid-template-columns: repeat(${width}, ${cell}px)`

        level.forEach((el: number, i: number) => {
            let div: HTMLElement = document.createElement('div')
            div.classList.add('square', classes[el])
            div.style.cssText = `width: ${cell}px; height: ${cell}px;`
            this.elHtml.appendChild(div)
            this.levelTable.push(div)

            if (classes[el] === object_type.dot) {
                this.dots++
            }
        })
    }


    classGiving(position: number, clasicList: string[]) {
        this.levelTable[position].classList.add(...clasicList)
    }

    classUnGiving(position: number, clasicList: string[]) {
        this.levelTable[position].classList.remove(...clasicList)
    }

    areYouThere = (position: number, object: string) => {

        return this.levelTable[position].classList.contains(object)
    }

    entRotation(position: number, degAmount: number) {
        this.levelTable[position].style.transform = `rotate(${degAmount}deg)`
    }

    move(character: Pacman | Ghost) {
        if (character.movePosibility()) {
            let movement = character.canIMove(this.areYouThere)
            let nextMove = movement.nextMove
            let direction = movement.directions
            let { removePriev, addNew } = character.movePac()
            if (character.rotation && nextMove !== character.position) {
                this.entRotation(nextMove, character.direction.rotation)
                this.entRotation(character.position, 0)
            }
            this.classUnGiving(character.position, removePriev)
            this.classGiving(nextMove, addNew)

            character.setNewPosition(nextMove, direction)
        }

    }

}
