import { keyboard, object_type, arrow, obTyp, dir } from "./setup"
import Ghost from "./ghost"

export function randomMoves(position: number, direction: arrow, areYouThere: Function) {
    let dir: arrow = direction

    let nextMove: number = position + dir.movement

    let butts: string[] = Object.keys(keyboard)
    while (areYouThere(nextMove, object_type.wall)) {
        let but = butts[Math.floor(Math.random() * butts.length)]

        dir = keyboard[but]
        nextMove = position + dir.movement
    }

    direction = dir


    return { nextMove: nextMove, directions: direction }

}

export function pathfinding(ghost: Ghost, areYouRhere: Function) {
    let dirTab = [ghost.position - 1, ghost.position - 20, ghost.position + 1, ghost.position + 20];
}