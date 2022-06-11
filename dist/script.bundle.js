/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/sounds/death.wav":
/*!******************************!*\
  !*** ./src/sounds/death.wav ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"src/sounds/death.wav\");\n\n//# sourceURL=webpack://pacmen/./src/sounds/death.wav?");

/***/ }),

/***/ "./src/sounds/eat_ghost.wav":
/*!**********************************!*\
  !*** ./src/sounds/eat_ghost.wav ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"src/sounds/eat_ghost.wav\");\n\n//# sourceURL=webpack://pacmen/./src/sounds/eat_ghost.wav?");

/***/ }),

/***/ "./src/sounds/game_start.wav":
/*!***********************************!*\
  !*** ./src/sounds/game_start.wav ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"src/sounds/game_start.wav\");\n\n//# sourceURL=webpack://pacmen/./src/sounds/game_start.wav?");

/***/ }),

/***/ "./src/sounds/munch.wav":
/*!******************************!*\
  !*** ./src/sounds/munch.wav ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"src/sounds/munch.wav\");\n\n//# sourceURL=webpack://pacmen/./src/sounds/munch.wav?");

/***/ }),

/***/ "./src/sounds/pill.wav":
/*!*****************************!*\
  !*** ./src/sounds/pill.wav ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"src/sounds/pill.wav\");\n\n//# sourceURL=webpack://pacmen/./src/sounds/pill.wav?");

/***/ }),

/***/ "./src/components/PathFinder.ts":
/*!**************************************!*\
  !*** ./src/components/PathFinder.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _setup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setup */ \"./src/components/setup.ts\");\n\r\nvar PathFinder = /** @class */ (function () {\r\n    function PathFinder(board) {\r\n        this.board = board;\r\n        this.priority = [\"ArrowUp\", \"ArrowLeft\", \"ArrowDown\", \"ArrowRight\"];\r\n    }\r\n    PathFinder.prototype.find = function (ghost) {\r\n        var _this = this;\r\n        var dirTab = [];\r\n        var oppositeDir = this.deleteOppositeDir(ghost.direction);\r\n        var currDirName = \"ArrowUp\";\r\n        if (this.board.areYouThere(ghost.position, _setup__WEBPACK_IMPORTED_MODULE_0__.object_type.ghostliar)) {\r\n            dirTab.push(\"ArrowUp\");\r\n        }\r\n        else {\r\n            for (var arrowName in _setup__WEBPACK_IMPORTED_MODULE_0__.keyboard) {\r\n                var newPos = ghost.position + _setup__WEBPACK_IMPORTED_MODULE_0__.keyboard[arrowName].movement;\r\n                if (_setup__WEBPACK_IMPORTED_MODULE_0__.keyboard[arrowName].rotation == ghost.direction.rotation)\r\n                    currDirName = arrowName;\r\n                if (newPos < 0 || newPos > this.board.levelTable.length || this.board.areYouThere(newPos, _setup__WEBPACK_IMPORTED_MODULE_0__.object_type.wall) || this.board.areYouThere(newPos, _setup__WEBPACK_IMPORTED_MODULE_0__.object_type.ghostliar) || arrowName == oppositeDir) {\r\n                    continue;\r\n                }\r\n                else {\r\n                    dirTab.push(arrowName);\r\n                }\r\n            }\r\n        }\r\n        if (dirTab.length == 0) {\r\n            dirTab.push(oppositeDir);\r\n        }\r\n        var data = { newPos: ghost.position, distance: Infinity, direction: currDirName };\r\n        dirTab.forEach(function (e) {\r\n            var arrow = _setup__WEBPACK_IMPORTED_MODULE_0__.keyboard[e];\r\n            var newPos = ghost.position + arrow.movement;\r\n            var dist = _this.calcDistance(newPos, ghost.target);\r\n            if (dist < data.distance || (dist == data.distance && _this.priority.indexOf(e) < _this.priority.indexOf(data.direction))) {\r\n                data.distance = dist,\r\n                    data.newPos = newPos;\r\n                data.direction = e;\r\n            }\r\n        });\r\n        return { nextMove: data.newPos, directions: _setup__WEBPACK_IMPORTED_MODULE_0__.keyboard[data.direction] };\r\n    };\r\n    PathFinder.prototype.calcDistance = function (pos, target) {\r\n        var posX = pos % _setup__WEBPACK_IMPORTED_MODULE_0__.width;\r\n        var posY = Math.floor(pos / _setup__WEBPACK_IMPORTED_MODULE_0__.width);\r\n        var targetX = target % _setup__WEBPACK_IMPORTED_MODULE_0__.width;\r\n        var targetY = Math.floor(target / _setup__WEBPACK_IMPORTED_MODULE_0__.width);\r\n        var distX = Math.abs(targetX - posX);\r\n        var distY = Math.abs(targetY - posY);\r\n        var POWdist = Math.pow(distX, 2) + Math.pow(distY, 2);\r\n        return POWdist;\r\n    };\r\n    PathFinder.prototype.deleteOppositeDir = function (direction) {\r\n        if (direction.rotation == 180)\r\n            return \"ArrowRight\";\r\n        else if (direction.rotation == 0)\r\n            return \"ArrowLeft\";\r\n        else if (direction.rotation == 270)\r\n            return \"ArrowDown\";\r\n        else\r\n            return \"ArrowUp\";\r\n    };\r\n    return PathFinder;\r\n}());\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PathFinder);\r\n\n\n//# sourceURL=webpack://pacmen/./src/components/PathFinder.ts?");

/***/ }),

/***/ "./src/components/board.ts":
/*!*********************************!*\
  !*** ./src/components/board.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _setup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setup */ \"./src/components/setup.ts\");\n\r\nvar Board = /** @class */ (function () {\r\n    function Board(el) {\r\n        var _this = this;\r\n        this.areYouThere = function (position, object) {\r\n            return _this.levelTable[position].classList.contains(object);\r\n        };\r\n        this.dots = 0;\r\n        this.levelTable = [];\r\n        this.elHtml = el;\r\n    }\r\n    //sprawdzanie zwycięstwa\r\n    Board.prototype.showEnd = function (winLose) {\r\n        var div = document.createElement('div');\r\n        div.classList.add('game-status');\r\n        div.innerHTML = \"\".concat(winLose ? 'WIN' : \"GAMEOVER\");\r\n        this.elHtml.appendChild(div);\r\n    };\r\n    Board.prototype.createGame = function (level) {\r\n        var _this = this;\r\n        this.dots = 0;\r\n        this.levelTable = [];\r\n        this.elHtml.innerHTML = \"\";\r\n        this.elHtml.style.cssText = \"grid-template-columns: repeat(\".concat(_setup__WEBPACK_IMPORTED_MODULE_0__.width, \", \").concat(_setup__WEBPACK_IMPORTED_MODULE_0__.cell, \"px)\");\r\n        level.forEach(function (el, i) {\r\n            var div = document.createElement('div');\r\n            div.classList.add('square', _setup__WEBPACK_IMPORTED_MODULE_0__.classes[el]);\r\n            div.style.cssText = \"width: \".concat(_setup__WEBPACK_IMPORTED_MODULE_0__.cell, \"px; height: \").concat(_setup__WEBPACK_IMPORTED_MODULE_0__.cell, \"px;\");\r\n            _this.elHtml.appendChild(div);\r\n            _this.levelTable.push(div);\r\n            if (_setup__WEBPACK_IMPORTED_MODULE_0__.classes[el] === _setup__WEBPACK_IMPORTED_MODULE_0__.object_type.dot) {\r\n                _this.dots++;\r\n            }\r\n        });\r\n    };\r\n    Board.prototype.classGiving = function (position, clasicList) {\r\n        var _a;\r\n        (_a = this.levelTable[position].classList).add.apply(_a, clasicList);\r\n    };\r\n    Board.prototype.classUnGiving = function (position, clasicList) {\r\n        var _a;\r\n        (_a = this.levelTable[position].classList).remove.apply(_a, clasicList);\r\n    };\r\n    Board.prototype.entRotation = function (position, degAmount) {\r\n        this.levelTable[position].style.transform = \"rotate(\".concat(degAmount, \"deg)\");\r\n    };\r\n    Board.prototype.move = function (character) {\r\n        if (character.movePosibility()) {\r\n            var movement = character.canIMove(this.areYouThere);\r\n            var nextMove = movement.nextMove;\r\n            var direction = movement.directions;\r\n            // let { nextMove, directions } = character.canIMove(this.areYouThere)\r\n            var _a = character.movePac(), removePriev = _a.removePriev, addNew = _a.addNew;\r\n            if (character.rotation && nextMove !== character.position) {\r\n                this.entRotation(nextMove, character.direction.rotation);\r\n                this.entRotation(character.position, 0);\r\n            }\r\n            this.classUnGiving(character.position, removePriev);\r\n            this.classGiving(nextMove, addNew);\r\n            character.setNewPosition(nextMove, direction);\r\n        }\r\n    };\r\n    return Board;\r\n}());\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Board);\r\n\n\n//# sourceURL=webpack://pacmen/./src/components/board.ts?");

/***/ }),

/***/ "./src/components/ghost.ts":
/*!*********************************!*\
  !*** ./src/components/ghost.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _setup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setup */ \"./src/components/setup.ts\");\nvar __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {\r\n    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {\r\n        if (ar || !(i in from)) {\r\n            if (!ar) ar = Array.prototype.slice.call(from, 0, i);\r\n            ar[i] = from[i];\r\n        }\r\n    }\r\n    return to.concat(ar || Array.prototype.slice.call(from));\r\n};\r\n\r\nvar Ghost = /** @class */ (function () {\r\n    function Ghost(speed, startPosition, name, focusOn, pathFinder, randomMoves) {\r\n        this.name = name;\r\n        this.randomMoves = randomMoves;\r\n        this.startPosition = startPosition;\r\n        this.position = startPosition;\r\n        this.direction = _setup__WEBPACK_IMPORTED_MODULE_0__.keyboard.ArrowUp;\r\n        this.speed = speed;\r\n        this.timer = 0;\r\n        this.coward = false;\r\n        this.rotation = false;\r\n        this.focusOn = focusOn;\r\n        this.target = focusOn;\r\n        this.focusPlayer = true;\r\n        this.pathFinder = pathFinder;\r\n    }\r\n    Ghost.prototype.movePosibility = function () {\r\n        if (this.timer === this.speed) {\r\n            this.timer = 0;\r\n            return true;\r\n        }\r\n        this.timer++;\r\n        return false;\r\n    };\r\n    Ghost.prototype.canIMove = function (areYouThere) {\r\n        var movement;\r\n        if (this.coward == false) {\r\n            movement = this.pathFinder.find(this);\r\n        }\r\n        else {\r\n            movement = this.randomMoves(this.position, this.direction, areYouThere);\r\n        }\r\n        return movement;\r\n    };\r\n    Ghost.prototype.movePac = function () {\r\n        var removePriev = [_setup__WEBPACK_IMPORTED_MODULE_0__.object_type.ghost, _setup__WEBPACK_IMPORTED_MODULE_0__.object_type.scared, this.name];\r\n        var addNew = [_setup__WEBPACK_IMPORTED_MODULE_0__.object_type.ghost, this.name];\r\n        if (this.coward) {\r\n            addNew = __spreadArray(__spreadArray([], addNew, true), [_setup__WEBPACK_IMPORTED_MODULE_0__.object_type.scared], false);\r\n        }\r\n        return { removePriev: removePriev, addNew: addNew };\r\n    };\r\n    Ghost.prototype.setNewPosition = function (nextMovePosition, direction) {\r\n        this.position = nextMovePosition;\r\n        this.direction = direction;\r\n    };\r\n    Ghost.prototype.setPlayerFocusStatus = function (status) {\r\n        this.focusPlayer = status;\r\n    };\r\n    Ghost.prototype.setSpecifyTarget = function (pac, ghosts) {\r\n        if (this.name == _setup__WEBPACK_IMPORTED_MODULE_0__.object_type.blinky) {\r\n            this.blinkyTarget(pac);\r\n        }\r\n        else if (this.name == _setup__WEBPACK_IMPORTED_MODULE_0__.object_type.pinky) {\r\n            this.pinkyTarget(pac);\r\n        }\r\n        else if (this.name == _setup__WEBPACK_IMPORTED_MODULE_0__.object_type.inky) {\r\n            this.inkyTarget(pac, ghosts);\r\n        }\r\n        else {\r\n            this.clydeTarget(pac);\r\n        }\r\n    };\r\n    Ghost.prototype.blinkyTarget = function (pac) {\r\n        this.target = pac.position;\r\n    };\r\n    Ghost.prototype.pinkyTarget = function (pac) {\r\n        if (pac.direction) {\r\n            if (Math.abs(pac.direction.movement) == 1) {\r\n                this.target = this.movePos(pac.position, { x: Math.sign(pac.direction.movement) * 4, y: 0 });\r\n            }\r\n            else {\r\n                this.target = this.movePos(pac.position, { x: 0, y: Math.sign(pac.direction.movement) * 4 });\r\n            }\r\n        }\r\n        else {\r\n            this.target = this.focusOn;\r\n        }\r\n    };\r\n    Ghost.prototype.inkyTarget = function (pac, ghosts) {\r\n        var blinky = ghosts.find(function (e) { return e.name == _setup__WEBPACK_IMPORTED_MODULE_0__.object_type.blinky; });\r\n        if (pac.direction && blinky) {\r\n            var pacPosPlus2 = 0;\r\n            if (Math.abs(pac.direction.movement) == 1) {\r\n                pacPosPlus2 = this.movePos(pac.position, { x: Math.sign(pac.direction.movement) * 2, y: 0 });\r\n            }\r\n            else {\r\n                pacPosPlus2 = this.movePos(pac.position, { x: 0, y: Math.sign(pac.direction.movement) * 2 });\r\n            }\r\n            var translatedPacPos = this.toPosXY(pacPosPlus2);\r\n            var blinkyPos = this.toPosXY(blinky.position);\r\n            var vecPacToBlinky = { x: blinkyPos.x - translatedPacPos.x, y: blinkyPos.y - translatedPacPos.y };\r\n            var oppositeVec = { x: translatedPacPos.x + (vecPacToBlinky.x * -1), y: translatedPacPos.y + (vecPacToBlinky.y * -1) };\r\n            this.target = oppositeVec.y * _setup__WEBPACK_IMPORTED_MODULE_0__.width + oppositeVec.x;\r\n        }\r\n        else {\r\n            this.target = this.focusOn;\r\n        }\r\n    };\r\n    Ghost.prototype.clydeTarget = function (pac) {\r\n        if (this.distance(this.position, pac.position) > 8) {\r\n            this.target = pac.position;\r\n        }\r\n        else {\r\n            this.target = this.focusOn;\r\n        }\r\n    };\r\n    Ghost.prototype.movePos = function (pos, translation) {\r\n        var posXY = this.toPosXY(pos);\r\n        var newPosX = Math.max(0, Math.min(_setup__WEBPACK_IMPORTED_MODULE_0__.width, posXY.x + translation.x));\r\n        var newPosY = Math.max(0, Math.min(_setup__WEBPACK_IMPORTED_MODULE_0__.level.length / _setup__WEBPACK_IMPORTED_MODULE_0__.width - 1, posXY.y + translation.y));\r\n        return Math.max(0, Math.min(newPosY * _setup__WEBPACK_IMPORTED_MODULE_0__.width + newPosX, _setup__WEBPACK_IMPORTED_MODULE_0__.level.length - 1));\r\n    };\r\n    Ghost.prototype.toPosXY = function (pos) {\r\n        var x = pos % _setup__WEBPACK_IMPORTED_MODULE_0__.width;\r\n        var y = Math.floor(pos / _setup__WEBPACK_IMPORTED_MODULE_0__.width);\r\n        return { x: x, y: y };\r\n    };\r\n    Ghost.prototype.distance = function (pos, target) {\r\n        var posXY = this.toPosXY(pos);\r\n        var targetXY = this.toPosXY(target);\r\n        return Math.sqrt(Math.pow(targetXY.x - posXY.x, 2) + Math.pow(targetXY.y - posXY.y, 2));\r\n    };\r\n    Ghost.prototype.opositeDir = function (direction) {\r\n        if (direction.rotation == 180)\r\n            return \"ArrowRight\";\r\n        else if (direction.rotation == 0)\r\n            return \"ArrowLeft\";\r\n        else if (direction.rotation == 270)\r\n            return \"ArrowDown\";\r\n        else\r\n            return \"ArrowUp\";\r\n    };\r\n    return Ghost;\r\n}());\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ghost);\r\n\n\n//# sourceURL=webpack://pacmen/./src/components/ghost.ts?");

/***/ }),

/***/ "./src/components/ghostAi.ts":
/*!***********************************!*\
  !*** ./src/components/ghostAi.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"randomMoves\": () => (/* binding */ randomMoves),\n/* harmony export */   \"pathfinding\": () => (/* binding */ pathfinding)\n/* harmony export */ });\n/* harmony import */ var _setup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setup */ \"./src/components/setup.ts\");\n\r\nfunction randomMoves(position, direction, areYouThere) {\r\n    var dir = direction;\r\n    // console.log(dir)\r\n    var nextMove = position + dir.movement;\r\n    var butts = Object.keys(_setup__WEBPACK_IMPORTED_MODULE_0__.keyboard);\r\n    // console.log(Object.keys(keyboard))\r\n    // while (areYouThere(nextMove, object_type.wall) || areYouThere(nextMove, object_type.ghost)) {\r\n    while (areYouThere(nextMove, _setup__WEBPACK_IMPORTED_MODULE_0__.object_type.wall)) {\r\n        var but = butts[Math.floor(Math.random() * butts.length)];\r\n        // console.log(but);\r\n        dir = _setup__WEBPACK_IMPORTED_MODULE_0__.keyboard[but];\r\n        nextMove = position + dir.movement;\r\n    }\r\n    direction = dir;\r\n    return { nextMove: nextMove, directions: direction };\r\n}\r\nfunction pathfinding(ghost, areYouRhere) {\r\n    var dirTab = [ghost.position - 1, ghost.position - 20, ghost.position + 1, ghost.position + 20];\r\n}\r\n\n\n//# sourceURL=webpack://pacmen/./src/components/ghostAi.ts?");

/***/ }),

/***/ "./src/components/pacman.ts":
/*!**********************************!*\
  !*** ./src/components/pacman.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _setup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setup */ \"./src/components/setup.ts\");\n\r\nvar Pacman = /** @class */ (function () {\r\n    function Pacman(sp, startSpot) {\r\n        var _this = this;\r\n        this.keyClicked = function (e, areYouThere) {\r\n            var site;\r\n            if (e.keyCode >= 37 && e.keyCode <= 40) {\r\n                //     let i:arrow\r\n                //     for ( i in keyboard) {\r\n                //       site= i[e.key]\r\n                //   }  \r\n                site = _setup__WEBPACK_IMPORTED_MODULE_0__.keyboard[\"\".concat(e.key)];\r\n            }\r\n            else {\r\n                return;\r\n            }\r\n            var nextMove = _this.position + site.movement;\r\n            if (areYouThere(nextMove, _setup__WEBPACK_IMPORTED_MODULE_0__.object_type.wall) || areYouThere(nextMove, _setup__WEBPACK_IMPORTED_MODULE_0__.object_type.ghost)) {\r\n                return;\r\n            }\r\n            _this.direction = site;\r\n        };\r\n        this.position = startSpot;\r\n        this.speed = sp;\r\n        this.direction = null;\r\n        this.timer = 0;\r\n        this.diner = false;\r\n        this.rotation = true;\r\n    }\r\n    Pacman.prototype.movePosibility = function () {\r\n        if (!this.direction) {\r\n            return false;\r\n        }\r\n        if (this.timer === this.speed) {\r\n            this.timer = 0;\r\n            return true;\r\n        }\r\n        this.timer++;\r\n    };\r\n    Pacman.prototype.canIMove = function (areYouThere) {\r\n        var nextMove = this.position + this.direction.movement;\r\n        if (areYouThere(nextMove, _setup__WEBPACK_IMPORTED_MODULE_0__.object_type.wall) || areYouThere(nextMove, _setup__WEBPACK_IMPORTED_MODULE_0__.object_type.ghostliar)) {\r\n            nextMove = this.position;\r\n        }\r\n        var directions = this.direction;\r\n        return { nextMove: nextMove, directions: directions };\r\n    };\r\n    Pacman.prototype.movePac = function () {\r\n        var removePriev = [_setup__WEBPACK_IMPORTED_MODULE_0__.object_type.pacman];\r\n        var addNew = [_setup__WEBPACK_IMPORTED_MODULE_0__.object_type.pacman];\r\n        return { removePriev: removePriev, addNew: addNew };\r\n    };\r\n    Pacman.prototype.setNewPosition = function (nextMovePosition) {\r\n        this.position = nextMovePosition;\r\n    };\r\n    return Pacman;\r\n}());\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Pacman);\r\n\n\n//# sourceURL=webpack://pacmen/./src/components/pacman.ts?");

/***/ }),

/***/ "./src/components/setup.ts":
/*!*********************************!*\
  !*** ./src/components/setup.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"width\": () => (/* binding */ width),\n/* harmony export */   \"cell\": () => (/* binding */ cell),\n/* harmony export */   \"keyboard\": () => (/* binding */ keyboard),\n/* harmony export */   \"object_type\": () => (/* binding */ object_type),\n/* harmony export */   \"classes\": () => (/* binding */ classes),\n/* harmony export */   \"level\": () => (/* binding */ level)\n/* harmony export */ });\n;\r\n;\r\nvar width = 20;\r\nvar cell = 20;\r\nvar keyboard = {\r\n    ArrowLeft: {\r\n        key: 37,\r\n        movement: -1,\r\n        rotation: 180\r\n    },\r\n    ArrowUp: {\r\n        key: 38,\r\n        movement: -width,\r\n        rotation: 270\r\n    },\r\n    ArrowRight: {\r\n        key: 39,\r\n        movement: 1,\r\n        rotation: 0\r\n    },\r\n    ArrowDown: {\r\n        key: 40,\r\n        movement: width,\r\n        rotation: 90\r\n    }\r\n};\r\nvar object_type = {\r\n    blank: 'blank',\r\n    wall: 'wall',\r\n    dot: 'dot',\r\n    blinky: 'blinky',\r\n    pinky: 'pinky',\r\n    inky: 'inky',\r\n    clyde: 'clyde',\r\n    pill: 'pill',\r\n    pacman: 'pacman',\r\n    ghost: 'ghost',\r\n    scared: 'scared',\r\n    ghostliar: 'lair'\r\n};\r\n// Lookup array for classes\r\nvar classes = [\r\n    object_type.blank,\r\n    object_type.wall,\r\n    object_type.dot,\r\n    object_type.blinky,\r\n    object_type.pinky,\r\n    object_type.inky,\r\n    object_type.clyde,\r\n    object_type.pill,\r\n    object_type.pacman,\r\n    object_type.ghostliar\r\n];\r\n// prettier-ignore\r\nvar level = [\r\n    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,\r\n    1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1,\r\n    1, 2, 1, 1, 2, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 2, 1, 1, 2, 1,\r\n    1, 7, 1, 1, 2, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 2, 1, 1, 7, 1,\r\n    1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1,\r\n    1, 2, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 2, 1,\r\n    1, 2, 2, 2, 2, 1, 2, 2, 2, 1, 1, 2, 2, 2, 1, 2, 2, 2, 2, 1,\r\n    1, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 1,\r\n    0, 0, 0, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 0, 0, 0,\r\n    0, 0, 0, 1, 2, 1, 2, 1, 9, 9, 9, 9, 1, 2, 1, 2, 1, 0, 0, 0,\r\n    1, 1, 1, 1, 2, 1, 2, 1, 9, 9, 9, 9, 1, 2, 1, 2, 1, 1, 1, 1,\r\n    1, 0, 0, 0, 2, 2, 2, 1, 9, 9, 9, 9, 1, 2, 2, 2, 0, 0, 0, 1,\r\n    1, 1, 1, 1, 2, 1, 2, 1, 9, 9, 9, 9, 1, 2, 1, 2, 1, 1, 1, 1,\r\n    0, 0, 0, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 0, 0, 0,\r\n    0, 0, 0, 1, 2, 1, 2, 0, 0, 0, 0, 0, 0, 2, 1, 2, 1, 0, 0, 0,\r\n    1, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 1,\r\n    1, 2, 2, 2, 2, 1, 2, 2, 2, 1, 1, 2, 2, 2, 1, 2, 2, 2, 2, 1,\r\n    1, 2, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 2, 1,\r\n    1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1,\r\n    1, 7, 1, 1, 2, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 2, 1, 1, 7, 1,\r\n    1, 2, 1, 1, 2, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 2, 1, 1, 2, 1,\r\n    1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1,\r\n    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,\r\n];\r\n\n\n//# sourceURL=webpack://pacmen/./src/components/setup.ts?");

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_setup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/setup */ \"./src/components/setup.ts\");\n/* harmony import */ var _components_ghostAi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/ghostAi */ \"./src/components/ghostAi.ts\");\n/* harmony import */ var _components_board__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/board */ \"./src/components/board.ts\");\n/* harmony import */ var _components_pacman__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/pacman */ \"./src/components/pacman.ts\");\n/* harmony import */ var _components_ghost__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/ghost */ \"./src/components/ghost.ts\");\n/* harmony import */ var _sounds_munch_wav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sounds/munch.wav */ \"./src/sounds/munch.wav\");\n/* harmony import */ var _sounds_pill_wav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sounds/pill.wav */ \"./src/sounds/pill.wav\");\n/* harmony import */ var _sounds_game_start_wav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sounds/game_start.wav */ \"./src/sounds/game_start.wav\");\n/* harmony import */ var _sounds_death_wav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sounds/death.wav */ \"./src/sounds/death.wav\");\n/* harmony import */ var _sounds_eat_ghost_wav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sounds/eat_ghost.wav */ \"./src/sounds/eat_ghost.wav\");\n/* harmony import */ var _components_PathFinder__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/PathFinder */ \"./src/components/PathFinder.ts\");\n\r\n\r\n\r\n\r\n\r\n//musics\r\n//@ts-ignore\r\n\r\n//@ts-ignore\r\n\r\n//@ts-ignore\r\n\r\n//@ts-ignore\r\n\r\n//@ts-ignore\r\n\r\n\r\n//DOMElements\r\nvar game = document.getElementById(\"game\");\r\nvar scoreboard = document.getElementById(\"score\");\r\nvar startBut = document.getElementById(\"startBut\");\r\nvar lives = document.getElementById(\"lives\");\r\nvar lev = document.getElementById(\"lev\");\r\n//important settings\r\nvar movementSpeed = 80;\r\nvar eatingTime = 10000;\r\nvar gameBoard = new _components_board__WEBPACK_IMPORTED_MODULE_2__[\"default\"](game);\r\nvar pathFinder = new _components_PathFinder__WEBPACK_IMPORTED_MODULE_10__[\"default\"](gameBoard);\r\ngameBoard.createGame(_components_setup__WEBPACK_IMPORTED_MODULE_0__.level);\r\n//starting set\r\nvar score = 0;\r\nvar interwal = null;\r\nvar levelNr = 1;\r\nvar livesLeft = 3;\r\nvar isThisWin = false;\r\nvar hungerPac = false;\r\nvar hungerTime = null;\r\nfunction start() {\r\n    playMusic(_sounds_game_start_wav__WEBPACK_IMPORTED_MODULE_7__[\"default\"]);\r\n    isThisWin = false;\r\n    hungerPac = false;\r\n    startBut.classList.add('hide');\r\n    gameBoard.createGame(_components_setup__WEBPACK_IMPORTED_MODULE_0__.level);\r\n    var pac = new _components_pacman__WEBPACK_IMPORTED_MODULE_3__[\"default\"](2 + levelNr, 287);\r\n    gameBoard.classGiving(287, [_components_setup__WEBPACK_IMPORTED_MODULE_0__.object_type.pacman]);\r\n    document.addEventListener('keydown', function (e) { return pac.keyClicked(e, gameBoard.areYouThere); });\r\n    var ghosts = [\r\n        new _components_ghost__WEBPACK_IMPORTED_MODULE_4__[\"default\"](3 + (levelNr * 2), 188, _components_setup__WEBPACK_IMPORTED_MODULE_0__.object_type.blinky, 19, pathFinder, _components_ghostAi__WEBPACK_IMPORTED_MODULE_1__.randomMoves),\r\n        new _components_ghost__WEBPACK_IMPORTED_MODULE_4__[\"default\"](3 + (levelNr * 2), 209, _components_setup__WEBPACK_IMPORTED_MODULE_0__.object_type.pinky, 0, pathFinder, _components_ghostAi__WEBPACK_IMPORTED_MODULE_1__.randomMoves),\r\n        new _components_ghost__WEBPACK_IMPORTED_MODULE_4__[\"default\"](3 + (levelNr * 2), 230, _components_setup__WEBPACK_IMPORTED_MODULE_0__.object_type.inky, 459, pathFinder, _components_ghostAi__WEBPACK_IMPORTED_MODULE_1__.randomMoves),\r\n        new _components_ghost__WEBPACK_IMPORTED_MODULE_4__[\"default\"](3 + (levelNr * 2), 251, _components_setup__WEBPACK_IMPORTED_MODULE_0__.object_type.clyde, 440, pathFinder, _components_ghostAi__WEBPACK_IMPORTED_MODULE_1__.randomMoves)\r\n    ];\r\n    if (interwal) {\r\n        clearInterval(interwal);\r\n    }\r\n    interwal = setInterval(function () { return rope(pac, ghosts); }, movementSpeed);\r\n    // Rope(pac, ghosts)\r\n    // gameLoop = requestAnimationFrame(() => { Rope(pac, ghosts) })\r\n}\r\nfunction levelUpdate() {\r\n    levelNr += 1;\r\n    gameBoard = undefined;\r\n    gameBoard = new _components_board__WEBPACK_IMPORTED_MODULE_2__[\"default\"](game);\r\n    gameBoard.createGame(_components_setup__WEBPACK_IMPORTED_MODULE_0__.level);\r\n    start();\r\n}\r\nfunction loseLive(pac, ghosts) {\r\n    gameBoard.classUnGiving(pac.position, [_components_setup__WEBPACK_IMPORTED_MODULE_0__.object_type.pacman]);\r\n    pac.position = 287;\r\n    gameBoard.classGiving(287, [_components_setup__WEBPACK_IMPORTED_MODULE_0__.object_type.pacman]);\r\n    ghosts.forEach(function (ghost) {\r\n        gameBoard.classUnGiving(ghost.position, [_components_setup__WEBPACK_IMPORTED_MODULE_0__.object_type.ghost, _components_setup__WEBPACK_IMPORTED_MODULE_0__.object_type.scared, ghost.name]);\r\n        ghost.position = ghost.startPosition;\r\n        gameBoard.classGiving(ghost.position, [_components_setup__WEBPACK_IMPORTED_MODULE_0__.object_type.ghost, ghost.name]);\r\n    });\r\n    livesLeft -= 1;\r\n    // lives.innerHTML = \"\"\r\n    // for (let i = 0; i < livesLeft; i++) {\r\n    //     let life = document.createElement('div')\r\n    //     life.classList.add(\"life\")\r\n    //     lives.appendChild(life)\r\n    // }\r\n}\r\nfunction rope(pac, ghosts) {\r\n    gameBoard.move(pac);\r\n    amIColiding(pac, ghosts);\r\n    ghosts.forEach(function (ghost) {\r\n        if (ghost.focusPlayer) {\r\n            ghost.setSpecifyTarget(pac, ghosts);\r\n        }\r\n        else\r\n            ghost.target = ghost.focusOn;\r\n        gameBoard.move(ghost);\r\n    });\r\n    console.log(gameBoard.dots);\r\n    amIColiding(pac, ghosts);\r\n    if (gameBoard.dots > 150) {\r\n        ghosts.forEach(function (e) { return e.focusPlayer = false; });\r\n        console.log(\"zmiana1\");\r\n    }\r\n    else if (gameBoard.dots <= 150 && gameBoard.dots > 100) {\r\n        ghosts.forEach(function (e) { return e.focusPlayer = true; });\r\n        console.log(\"zmiana2\");\r\n    }\r\n    else if (gameBoard.dots <= 100 && gameBoard.dots > 50) {\r\n        ghosts.forEach(function (e) { return e.focusPlayer = false; });\r\n        console.log(\"zmiana3\");\r\n    }\r\n    else if (gameBoard.dots <= 50 && gameBoard.dots >= 0) {\r\n        ghosts.forEach(function (e) { return e.focusPlayer = true; });\r\n        console.log(\"zmiana4\");\r\n    }\r\n    if (gameBoard.areYouThere(pac.position, _components_setup__WEBPACK_IMPORTED_MODULE_0__.object_type.dot)) {\r\n        playMusic(_sounds_munch_wav__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\r\n        gameBoard.classUnGiving(pac.position, [_components_setup__WEBPACK_IMPORTED_MODULE_0__.object_type.dot]);\r\n        gameBoard.dots--;\r\n        score += (10 * levelNr);\r\n    }\r\n    if (gameBoard.areYouThere(pac.position, _components_setup__WEBPACK_IMPORTED_MODULE_0__.object_type.pill)) {\r\n        playMusic(_sounds_pill_wav__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\r\n        gameBoard.classUnGiving(pac.position, [_components_setup__WEBPACK_IMPORTED_MODULE_0__.object_type.pill]);\r\n        pac.diner = true;\r\n        score += (50 * levelNr);\r\n        clearTimeout(eatingTime);\r\n        hungerTime = setTimeout(function () { return (pac.diner = false); }, eatingTime);\r\n    }\r\n    if (pac.diner !== hungerPac) {\r\n        hungerPac = pac.diner;\r\n        ghosts.forEach(function (ghost) { return (ghost.coward = pac.diner, ghost.direction = _components_setup__WEBPACK_IMPORTED_MODULE_0__.keyboard[ghost.opositeDir(ghost.direction)]); });\r\n    }\r\n    if (gameBoard.dots === 0) {\r\n        levelUpdate();\r\n    }\r\n    scoreboard.innerHTML = \"\".concat(score);\r\n    lives.innerHTML = \"lives: \".concat(livesLeft);\r\n    lev.innerHTML = \"level: \".concat(levelNr);\r\n    // gameLoop = requestAnimationFrame(() => { Rope(pac, ghosts) })\r\n}\r\nfunction amIColiding(pac, ghosts) {\r\n    var ghostLided = ghosts.find(function (ghost) { return pac.position === ghost.position; });\r\n    if (ghostLided) {\r\n        // if (ghostLided.name == 'blinky') {\r\n        // console.log(\"nie ten duch\")\r\n        // } else {\r\n        if (pac.diner) {\r\n            playMusic(_sounds_eat_ghost_wav__WEBPACK_IMPORTED_MODULE_9__[\"default\"]);\r\n            gameBoard.classUnGiving(ghostLided.position, [_components_setup__WEBPACK_IMPORTED_MODULE_0__.object_type.ghost, _components_setup__WEBPACK_IMPORTED_MODULE_0__.object_type.scared, ghostLided.name]);\r\n            ghostLided.position = ghostLided.startPosition;\r\n            score += (200 * levelNr);\r\n        }\r\n        else {\r\n            gameBoard.classUnGiving(pac.position, [_components_setup__WEBPACK_IMPORTED_MODULE_0__.object_type.pacman]);\r\n            gameBoard.entRotation(pac.position, 0);\r\n            if (livesLeft > 0) {\r\n                playMusic(_sounds_death_wav__WEBPACK_IMPORTED_MODULE_8__[\"default\"]);\r\n                console.log(livesLeft);\r\n                loseLive(pac, ghosts);\r\n            }\r\n            else {\r\n                gameOver(pac, game);\r\n            }\r\n        }\r\n        // }\r\n    }\r\n}\r\nfunction playMusic(audio) {\r\n    var voice = new Audio(audio);\r\n    voice.play();\r\n}\r\nfunction gameOver(pac, el) {\r\n    playMusic(_sounds_death_wav__WEBPACK_IMPORTED_MODULE_8__[\"default\"]);\r\n    console.log(livesLeft);\r\n    document.removeEventListener(\"keydown\", function (e) { return pac.keyClicked(e, gameBoard.areYouThere); });\r\n    gameBoard.showEnd(isThisWin);\r\n    clearInterval(interwal);\r\n    startBut.classList.remove('hide');\r\n}\r\nfunction restart() {\r\n    score = 0;\r\n    livesLeft = 3;\r\n    start();\r\n}\r\nstartBut.addEventListener(\"click\", restart);\r\n\n\n//# sourceURL=webpack://pacmen/./src/main.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.ts");
/******/ 	
/******/ })()
;