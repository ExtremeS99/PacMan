import { keyboard, object_type, arrow, obTyp, dir, width, level } from "./setup"
import PathFinder from "./PathFinder"
import Pacman from "./pacman"


export default class Ghost {
    name: string
    randomMoves: Function
    startPosition: number
    position: number
    direction: arrow
    speed: number
    timer: number
    coward: boolean
    rotation: boolean
    focusOn: number
    target: number
    focusPlayer: boolean
    pathFinder: PathFinder

    constructor(speed: number, startPosition: number, name: string, focusOn: number, pathFinder: PathFinder, randomMoves: Function) {
        this.name = name
        this.randomMoves = randomMoves
        this.startPosition = startPosition
        this.position = startPosition
        this.direction = keyboard.ArrowUp
        this.speed = speed
        this.timer = 0
        this.coward = false
        this.rotation = false
        this.focusOn = focusOn
        this.target = focusOn;
        this.focusPlayer = true;
        this.pathFinder = pathFinder;
    }
    movePosibility() {

        if (this.timer === this.speed) {
            this.timer = 0
            return true
        }
        this.timer++
        return false
    }

    canIMove(areYouThere: Function) {
        let movement
        if (this.coward == false) {
            movement = this.pathFinder.find(this);

        } else {
            movement = this.randomMoves(this.position, this.direction, areYouThere)
        }

        return movement;
    }

    movePac() {
        let removePriev: string[] = [object_type.ghost, object_type.scared, this.name]
        let addNew: string[] = [object_type.ghost, this.name]

        if (this.coward) {
            addNew = [...addNew, object_type.scared]
        }
        return { removePriev, addNew }
    }
    setNewPosition(nextMovePosition: number, direction: arrow) {
        this.position = nextMovePosition
        this.direction = direction

    }

    setPlayerFocusStatus(status: boolean) {
        this.focusPlayer = status;
    }

    setSpecifyTarget(pac: Pacman, ghosts: Ghost[]) {
        if (this.name == object_type.blinky) {
            this.blinkyTarget(pac);
        } else if (this.name == object_type.pinky) {
            this.pinkyTarget(pac);
        } else if (this.name == object_type.inky) {
            this.inkyTarget(pac, ghosts);
        } else {
            this.clydeTarget(pac);
        }
    }

    blinkyTarget(pac: Pacman) {
        this.target = pac.position;
    }

    pinkyTarget(pac: Pacman) {
        if (pac.direction) {
            if (Math.abs(pac.direction.movement) == 1) { this.target = this.movePos(pac.position, { x: Math.sign(pac.direction.movement) * 4, y: 0 }) }
            else { this.target = this.movePos(pac.position, { x: 0, y: Math.sign(pac.direction.movement) * 4 }) }
        } else {
            this.target = this.focusOn;
        }
    }

    inkyTarget(pac: Pacman, ghosts: Ghost[]) {
        let blinky = ghosts.find(e => e.name == object_type.blinky);
        if (pac.direction && blinky) {

            let pacPosPlus2 = 0;
            if (Math.abs(pac.direction.movement) == 1) { pacPosPlus2 = this.movePos(pac.position, { x: Math.sign(pac.direction.movement) * 2, y: 0 }) }
            else { pacPosPlus2 = this.movePos(pac.position, { x: 0, y: Math.sign(pac.direction.movement) * 2 }) }

            let translatedPacPos = this.toPosXY(pacPosPlus2);
            let blinkyPos = this.toPosXY(blinky.position);

            let vecPacToBlinky = { x: blinkyPos.x - translatedPacPos.x, y: blinkyPos.y - translatedPacPos.y };
            let oppositeVec = { x: translatedPacPos.x + (vecPacToBlinky.x * -1), y: translatedPacPos.y + (vecPacToBlinky.y * -1) };

            this.target = oppositeVec.y * width + oppositeVec.x;

        } else {
            this.target = this.focusOn;
        }
    }

    clydeTarget(pac: Pacman) {
        if (this.distance(this.position, pac.position) > 8) {
            this.target = pac.position;
        } else {
            this.target = this.focusOn;
        }
    }

    private movePos(pos: number, translation: { x: number, y: number }) {
        let posXY = this.toPosXY(pos);

        let newPosX = Math.max(0, Math.min(width, posXY.x + translation.x));
        let newPosY = Math.max(0, Math.min(level.length / width - 1, posXY.y + translation.y));

        return Math.max(0, Math.min(newPosY * width + newPosX, level.length - 1));
    }

    private toPosXY(pos: number) {
        let x = pos % width
        let y = Math.floor(pos / width)
        return { x: x, y: y }
    }

    private distance(pos: number, target: number) {
        let posXY = this.toPosXY(pos);
        let targetXY = this.toPosXY(target);

        return Math.sqrt(Math.pow(targetXY.x - posXY.x, 2) + Math.pow(targetXY.y - posXY.y, 2));
    }
    opositeDir(direction: arrow) {
        if (direction.rotation == 180) return "ArrowRight";
        else if (direction.rotation == 0) return "ArrowLeft";
        else if (direction.rotation == 270) return "ArrowDown";
        else return "ArrowUp"
    }

}
