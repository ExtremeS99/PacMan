import Board from "./board";
import Ghost from "./ghost";
import { object_type, width, arrow, keyboard } from "./setup";

export default class PathFinder {
    board: Board
    priority: string[]

    constructor(board: Board) {
        this.board = board;
        this.priority = ["ArrowUp", "ArrowLeft", "ArrowDown", "ArrowRight"];
    }


    find(ghost: Ghost) {
        let dirTab: string[] = [];
        let oppositeDir = this.deleteOppositeDir(ghost.direction);
        let currDirName = "ArrowUp";

        if (this.board.areYouThere(ghost.position, object_type.ghostliar)) {
            dirTab.push("ArrowUp")
        } else {
            for (let arrowName in keyboard) {
                let newPos = ghost.position + keyboard[arrowName].movement;

                if (keyboard[arrowName].rotation == ghost.direction.rotation) currDirName = arrowName;

                if (newPos < 0 || newPos > this.board.levelTable.length || this.board.areYouThere(newPos, object_type.wall) || this.board.areYouThere(newPos, object_type.ghostliar) || arrowName == oppositeDir) {
                    continue;
                } else {
                    dirTab.push(arrowName);
                }
            }
        }

        if (dirTab.length == 0) { dirTab.push(oppositeDir) }


        let data = { newPos: ghost.position, distance: Infinity, direction: currDirName };

        dirTab.forEach(e => {
            let arrow = keyboard[e];
            let newPos = ghost.position + arrow.movement;
            let dist = this.calcDistance(newPos, ghost.target);

            if (dist < data.distance || (dist == data.distance && this.priority.indexOf(e) < this.priority.indexOf(data.direction))) {
                data.distance = dist,
                    data.newPos = newPos;
                data.direction = e;
            }
        })

        return { nextMove: data.newPos, directions: keyboard[data.direction] };
    }

    private calcDistance(pos: number, target: number) {
        let posX = pos % width;
        let posY = Math.floor(pos / width);

        let targetX = target % width;
        let targetY = Math.floor(target / width);

        let distX = Math.abs(targetX - posX);
        let distY = Math.abs(targetY - posY);

        let POWdist = Math.pow(distX, 2) + Math.pow(distY, 2);
        return POWdist
    }

    private deleteOppositeDir(direction: arrow) {
        if (direction.rotation == 180) return "ArrowRight";
        else if (direction.rotation == 0) return "ArrowLeft";
        else if (direction.rotation == 270) return "ArrowDown";
        else return "ArrowUp"
    }
}