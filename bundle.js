/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/ball-factory.js":
/*!************************************!*\
  !*** ./src/assets/ball-factory.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ \"./src/constants.js\");\n\n\nlet ballFactory = {\n    getInstance(projectedX, projectedY) {\n        let x = projectedX + _constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].B_R;\n        let y = _constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].C_H - projectedY - _constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].B_R;\n        return kontra.sprite({\n            x,\n            y,\n            width: 2 * _constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].B_R,\n            height: 2 * _constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].B_R,\n            ttl: Infinity,\n            ddy: 1,\n            render() {\n                let context = this.context;\n                context.strokeStyle = 'blue';\n                context.fillStyle= 'blue';\n                context.beginPath(); // start drawing a shape\n                context.arc(this.x, this.y, _constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].B_R, 0, Math.PI * 2);\n                context.stroke(); // outline the circle\n                context.fill();\n                context.closePath();\n            },\n            update() {\n                if (!this.isYCollided) {\n                    this.advance();\n                } else {\n                    this.dy = 0;\n                }\n            }\n        });\n    }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ballFactory);\n\n//# sourceURL=webpack:///./src/assets/ball-factory.js?");

/***/ }),

/***/ "./src/assets/endpoint-factory.js":
/*!****************************************!*\
  !*** ./src/assets/endpoint-factory.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ \"./src/constants.js\");\n\n\nlet endPointFactory = {\n    getInstance(x, projectedY) {\n        let y = _constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].C_H - projectedY - _constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].E_P_H;\n        return kontra.sprite({\n            x,\n            y,\n            width: _constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].E_P_W,\n            height: _constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].E_P_H,\n            ttl: Infinity,\n            render() {\n                this.context.beginPath();\n                this.context.strokeStyle = 'gold';\n                this.context.fillStyle= 'gold';\n\n                this.context.moveTo(this.x, this.y + this.height/2);\n                this.context.lineTo(this.x + this.width/2, this.y);\n                this.context.lineTo(this.x + this.width, this.y + this.height/2);\n                this.context.lineTo(this.x + this.width/2, this.y + this.height);\n\n                this.context.closePath();\n                this.context.stroke();\n                this.context.fill();\n            }\n        });\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (endPointFactory);\n\n//# sourceURL=webpack:///./src/assets/endpoint-factory.js?");

/***/ }),

/***/ "./src/assets/floor-factory.js":
/*!*************************************!*\
  !*** ./src/assets/floor-factory.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ \"./src/constants.js\");\n\n\nlet floorFactory = {\n    getInstance(x, projectedY) {\n        let y = _constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].C_H - projectedY - _constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].F_H;\n        return kontra.sprite({\n            x,\n            y,\n            width: _constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].F_W,\n            height: _constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].F_H,\n            color: 'green',\n            ttl: Infinity\n        });\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (floorFactory);\n\n//# sourceURL=webpack:///./src/assets/floor-factory.js?");

/***/ }),

/***/ "./src/assets/thorn-factory.js":
/*!*************************************!*\
  !*** ./src/assets/thorn-factory.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ \"./src/constants.js\");\n\n\nlet thornFactory = {\n    getInstance(x, projectedY) {\n        let y = _constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].C_H - projectedY - _constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].T_H;\n        return kontra.sprite({\n            x,\n            y,\n            width: _constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].T_W,\n            height: _constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].T_H,\n\n            ttl: Infinity,\n            render() {\n                this.context.beginPath();\n                this.context.strokeStyle = 'red';\n                this.context.fillStyle= 'red';\n                this.context.moveTo(this.x, this.y + _constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].T_H/2);\n                this.context.lineTo(this.x + _constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].T_W/8, this.y);\n                this.context.lineTo(this.x + 2*_constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].T_W/8, this.y + _constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].T_H/2);\n                this.context.lineTo(this.x + 3*_constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].T_W/8, this.y);\n                this.context.lineTo(this.x + 4*_constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].T_W/8, this.y + _constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].T_H/2);\n                this.context.lineTo(this.x + 5*_constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].T_W/8, this.y);\n                this.context.lineTo(this.x + 6*_constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].T_W/8, this.y + _constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].T_H/2);\n                this.context.lineTo(this.x + 7*_constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].T_W/8, this.y);\n                this.context.lineTo(this.x + 8*_constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].T_W/8, this.y + _constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].T_H/2);\n\n                this.context.lineTo(this.x + 7*_constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].T_W/8, this.y + _constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].T_H);\n                this.context.lineTo(this.x + 6*_constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].T_W/8, this.y + _constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].T_H/2);\n                this.context.lineTo(this.x + 5*_constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].T_W/8, this.y + _constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].T_H);\n                this.context.lineTo(this.x + 4*_constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].T_W/8, this.y + _constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].T_H/2);\n                this.context.lineTo(this.x + 3*_constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].T_W/8, this.y + _constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].T_H);\n                this.context.lineTo(this.x + 2*_constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].T_W/8, this.y + _constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].T_H/2);\n                this.context.lineTo(this.x + 1*_constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].T_W/8, this.y + _constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].T_H);\n\n                this.context.closePath();\n                this.context.stroke();\n                this.context.fill();\n            }\n        });\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (thornFactory);\n\n//# sourceURL=webpack:///./src/assets/thorn-factory.js?");

/***/ }),

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst Constants = {\n    C_W: 1200,\n    C_H: 540,\n    G_T: 'Gravity is a myth',\n    BLACK: '#000',\n    FOREGROUND:'#000',\n    TEXT_COLOR: '#fff',\n    B_R: 30,\n    T_W: 120,\n    T_H: 30,\n    F_W: 120,\n    F_H: 30,\n    E_P_W: 10,\n    E_P_H: 10\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Constants);\n\n//# sourceURL=webpack:///./src/constants.js?");

/***/ }),

/***/ "./src/init-kontra.js":
/*!****************************!*\
  !*** ./src/init-kontra.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\n\nconst canvas = document.querySelector('canvas');\ncanvas.width = _constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].C_W;\ncanvas.height = _constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].C_H;\n\nkontra.init();\n\n//# sourceURL=webpack:///./src/init-kontra.js?");

/***/ }),

/***/ "./src/level-configs.js":
/*!******************************!*\
  !*** ./src/level-configs.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst rows = [\n    [[0,0],[120,0],[240,0],[360,0],[480,0],[600,0],[720,0],[840,0],[960,0],[1080,0]],\n    [[0,120],[120,120],[240,120],[360,120],[480,120],[600,120],[720,120],[840,120],[960,120],[1080,120]],\n    [[0,240],[120,240],[240,240],[360,240],[480,240],[600,240],[720,240],[840,240],[960,240],[1080,240]],\n    [[0,360],[120,360],[240,360],[360,360],[480,360],[600,360],[720,360],[840,360],[960,360],[1080,360]],\n    [[0,480],[120,480],[240,480],[360,480],[480,480],[600,480],[720,480],[840,480],[960,480],[1080,480]],\n];\n\nconst LevelConfigs = [\n    {\n        ball: [0, 30],\n        endpoint: [1100, 510],\n        desc: ['Reach out for the star.',\n            'Hint: Press Space, Left and Right.',\n            'Press Enter to continue.'\n        ]\n    },\n    {\n        ball: [0, 30],\n        endpoint: [100, 300],\n        thorns: [...rows[2].slice(0,5),\n            ...rows[2].slice(7,10)\n        ],\n        floors: rows[0],\n        desc: ['Next Up: Watch out for the thorns!']\n    },\n    {\n        ball: [0, 30],\n        endpoint: [1100, 510],\n        thorns: [...rows[2].slice(0,5),\n            ...rows[2].slice(7,10)\n        ],\n        floors: [...rows[0],\n            ...rows[3].slice(5)\n        ],\n        desc: ['Nice! It only gets more fun.']\n    },\n    {\n        ball: [0, 30],\n        endpoint: [1100, 510],\n        thorns: [\n            ...rows[0].slice(7),\n            ...rows[2].slice(4,7),\n            ...rows[3].slice(2,4)\n        ],\n        floors: [\n            ...rows[0].slice(0,7),\n            ...rows[2].slice(0,4),\n            ...rows[2].slice(7,9),\n            ...rows[3].slice(4, 10)\n        ],\n        desc: ['And here we are. The last one!']\n    }\n];\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (LevelConfigs);\n\n//# sourceURL=webpack:///./src/level-configs.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _init_kontra__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./init-kontra */ \"./src/init-kontra.js\");\n/* harmony import */ var _managers_state_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./managers/state-manager */ \"./src/managers/state-manager.js\");\n/* harmony import */ var _scenes_game_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scenes/game-menu */ \"./src/scenes/game-menu.js\");\n/* harmony import */ var _scenes_game_over__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scenes/game-over */ \"./src/scenes/game-over.js\");\n/* harmony import */ var _scenes_level__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scenes/level */ \"./src/scenes/level.js\");\n/* harmony import */ var _scenes_level_intro__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scenes/level-intro */ \"./src/scenes/level-intro.js\");\n\n\n\n\n\n\n\nlet main = {\n    init () {\n        _managers_state_manager__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n            .addScene('game-menu', _scenes_game_menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"])\n            .addScene('game-over', _scenes_game_over__WEBPACK_IMPORTED_MODULE_3__[\"default\"])\n            .addScene('level-0', _scenes_level__WEBPACK_IMPORTED_MODULE_4__[\"default\"])\n            .addScene('intro-level-0', _scenes_level_intro__WEBPACK_IMPORTED_MODULE_5__[\"default\"])\n            .addScene('level-1', _scenes_level__WEBPACK_IMPORTED_MODULE_4__[\"default\"])\n            .addScene('intro-level-1', _scenes_level_intro__WEBPACK_IMPORTED_MODULE_5__[\"default\"])\n            .addScene('level-2', _scenes_level__WEBPACK_IMPORTED_MODULE_4__[\"default\"])\n            .addScene('intro-level-2', _scenes_level_intro__WEBPACK_IMPORTED_MODULE_5__[\"default\"])\n            .addScene('level-3', _scenes_level__WEBPACK_IMPORTED_MODULE_4__[\"default\"])\n            .addScene('intro-level-3', _scenes_level_intro__WEBPACK_IMPORTED_MODULE_5__[\"default\"])\n            .switchToScene('game-menu');\n    }\n}\n\nmain.init();\n\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ }),

/***/ "./src/managers/state-manager.js":
/*!***************************************!*\
  !*** ./src/managers/state-manager.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nlet StateManager = {\n    states: {},\n    currentStateName: '',\n    store: {\n        levelsCompleted: 0,\n        get totalLevels() {\n            return Object.keys(StateManager.states).filter(state => state.startsWith('level')).length;\n        }\n    },\n    clear() {\n        const {width, height} = kontra.canvas;\n        kontra.context.clearRect(0, 0, width, height);\n    },\n    addScene (sceneName, scene) {\n        this.states[sceneName] = scene;\n        return this;\n    },\n    switchToScene(sceneName) {\n        this.clear();\n        const states = this.states;\n        const currentScene = states[this.currentStateName];\n\n        if (currentScene) {\n            currentScene\n                .destroy()\n                .stop();\n        }\n\n        const newScene = states[sceneName];\n        newScene\n            .init(sceneName)\n            .start();\n        this.currentStateName = sceneName;\n        return this;\n    },\n    resetStore() {\n        this.store.levelsCompleted = 0;\n    }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (StateManager);\n\n//# sourceURL=webpack:///./src/managers/state-manager.js?");

/***/ }),

/***/ "./src/managers/text-manager.js":
/*!**************************************!*\
  !*** ./src/managers/text-manager.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ \"./src/constants.js\");\n\n\nlet TextManager = {\n    renderText(textArray, startHeight) {\n        const ctx = kontra.context;\n        const canvas = kontra.canvas;\n        canvas.style.background = _constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].FOREGROUND;\n        ctx.font=\"30px Verdana\";\n        ctx.fillStyle = _constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].TEXT_COLOR;\n        for(let i = 0; i<textArray.length; i++) {\n            ctx.fillText(textArray[i], 0, startHeight + 40*i);\n        }\n    }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (TextManager);\n\n//# sourceURL=webpack:///./src/managers/text-manager.js?");

/***/ }),

/***/ "./src/scenes/game-menu.js":
/*!*********************************!*\
  !*** ./src/scenes/game-menu.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _managers_state_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../managers/state-manager */ \"./src/managers/state-manager.js\");\n/* harmony import */ var _managers_text_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../managers/text-manager */ \"./src/managers/text-manager.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ \"./src/constants.js\");\n\n\n\n\nconst GameMenu = kontra.gameLoop({\n    render() {\n        const messages = ['Up & Down',\n            'Inspired from the classic game VVVVVV',\n            '',\n            `Gameplay: The gravity of ball changes when you press space.`,\n            `Get to the yellow star without touching the thorns`,\n            '',\n            'Press Enter to start game',\n            '',\n            `Total levels: ${_managers_state_manager__WEBPACK_IMPORTED_MODULE_0__[\"default\"].store.totalLevels}`\n        ];\n        _managers_text_manager__WEBPACK_IMPORTED_MODULE_1__[\"default\"].renderText(messages, _constants__WEBPACK_IMPORTED_MODULE_2__[\"default\"].C_H/4);\n    },\n    update() {}\n});\n\nGameMenu.init = function () {\n    _managers_state_manager__WEBPACK_IMPORTED_MODULE_0__[\"default\"].resetStore();\n    kontra.keys.bind('enter', function () {\n        const jumpToLevel = window.jumpToLevel;\n        if(jumpToLevel) {\n            _managers_state_manager__WEBPACK_IMPORTED_MODULE_0__[\"default\"].switchToScene(`intro-level-${jumpToLevel - 1}`);\n        } else {\n            _managers_state_manager__WEBPACK_IMPORTED_MODULE_0__[\"default\"].switchToScene('intro-level-0');\n        }\n    });\n    return this;\n};\n\nGameMenu.destroy = function () {\n    kontra.keys.unbind('enter');\n    return this;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (GameMenu);\n\n//# sourceURL=webpack:///./src/scenes/game-menu.js?");

/***/ }),

/***/ "./src/scenes/game-over.js":
/*!*********************************!*\
  !*** ./src/scenes/game-over.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _managers_state_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../managers/state-manager */ \"./src/managers/state-manager.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ \"./src/constants.js\");\n\n\n\nconst GameOver = kontra.gameLoop({\n    render() {\n        const ctx = kontra.context;\n        const canvas = kontra.canvas;\n        canvas.style.background = _constants__WEBPACK_IMPORTED_MODULE_1__[\"default\"].FOREGROUND;\n        ctx.font=\"30px Verdana\";\n        ctx.fillStyle = _constants__WEBPACK_IMPORTED_MODULE_1__[\"default\"].TEXT_COLOR;\n        let endText = '';\n        if (_managers_state_manager__WEBPACK_IMPORTED_MODULE_0__[\"default\"].store.levelsCompleted === _managers_state_manager__WEBPACK_IMPORTED_MODULE_0__[\"default\"].store.totalLevels) {\n            endText = `Yay! Congrats you've completed all the ${_managers_state_manager__WEBPACK_IMPORTED_MODULE_0__[\"default\"].store.totalLevels} levels`;\n        } else {\n            endText = `Whoops! You could finish ${_managers_state_manager__WEBPACK_IMPORTED_MODULE_0__[\"default\"].store.levelsCompleted} levels. Better luck new time.`\n        }\n        ctx.fillText(endText, 0, canvas.height/2);\n        ctx.fillText('Hit Enter to restart', 0, canvas.height/2 + 40);\n    },\n    update() {\n\n    }\n});\n\nGameOver.init = function() {\n    kontra.keys.bind('enter', function () {\n        _managers_state_manager__WEBPACK_IMPORTED_MODULE_0__[\"default\"].switchToScene('game-menu');\n    });\n    return this;\n};\n\nGameOver.destroy = function () {\n    kontra.keys.unbind('enter');\n    return this;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (GameOver);\n\n//# sourceURL=webpack:///./src/scenes/game-over.js?");

/***/ }),

/***/ "./src/scenes/level-intro.js":
/*!***********************************!*\
  !*** ./src/scenes/level-intro.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ \"./src/constants.js\");\n/* harmony import */ var _managers_state_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../managers/state-manager */ \"./src/managers/state-manager.js\");\n/* harmony import */ var _managers_text_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../managers/text-manager */ \"./src/managers/text-manager.js\");\n/* harmony import */ var _level_configs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../level-configs */ \"./src/level-configs.js\");\n\n\n\n\n\nconst LevelIntro = kontra.gameLoop({\n    render() {\n        _managers_text_manager__WEBPACK_IMPORTED_MODULE_2__[\"default\"].renderText(this.levelDescriptions, _constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].C_H/2);\n    },\n    update() {\n\n    }\n});\n\nLevelIntro.init = function (levelName) {\n    const C_H = _constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].C_H;\n    const levelNumber = parseInt(levelName.split('-')[2]);\n    this.levelDescriptions = _level_configs__WEBPACK_IMPORTED_MODULE_3__[\"default\"][levelNumber].desc;\n    kontra.keys.bind('enter', function () {\n        _managers_state_manager__WEBPACK_IMPORTED_MODULE_1__[\"default\"].switchToScene(`level-${levelNumber}`);\n    });\n    return this;\n};\n\nLevelIntro.destroy = function () {\n    this.levelDescriptions = [];\n    kontra.keys.unbind('enter');\n    return this;\n};\n\nLevelIntro.levelDescriptions = [];\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (LevelIntro);\n\n//# sourceURL=webpack:///./src/scenes/level-intro.js?");

/***/ }),

/***/ "./src/scenes/level.js":
/*!*****************************!*\
  !*** ./src/scenes/level.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_ball_factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/ball-factory */ \"./src/assets/ball-factory.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ \"./src/constants.js\");\n/* harmony import */ var _managers_state_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../managers/state-manager */ \"./src/managers/state-manager.js\");\n/* harmony import */ var _assets_floor_factory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/floor-factory */ \"./src/assets/floor-factory.js\");\n/* harmony import */ var _assets_thorn_factory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/thorn-factory */ \"./src/assets/thorn-factory.js\");\n/* harmony import */ var _assets_endpoint_factory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/endpoint-factory */ \"./src/assets/endpoint-factory.js\");\n/* harmony import */ var _level_configs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../level-configs */ \"./src/level-configs.js\");\n\n\n\n\n\n\n\n\nlet gravityInvertDampner = 0;\n\nconst Level = kontra.gameLoop({\n    update() {\n        let ball = this.ball;\n        ball.isYCollided = false;\n        const ctx = kontra.context;\n        const canvas = kontra.canvas;\n        const originalBallX = ball.x;\n        const RADIUS = _constants__WEBPACK_IMPORTED_MODULE_1__[\"default\"].B_R;\n        canvas.style.background = _constants__WEBPACK_IMPORTED_MODULE_1__[\"default\"].FOREGROUND;\n\n        if (gravityInvertDampner) {\n            gravityInvertDampner--;\n        }\n\n        if (kontra.keys.pressed('right')) {\n            ball.x += 10;\n        }\n\n        if (kontra.keys.pressed('left')) {\n            ball.x -= 10;\n        }\n\n        const ballBox = {x: ball.x - RADIUS, y: ball.y - RADIUS -1 , width: 2*RADIUS, height: 2*RADIUS +2 };\n\n        if (ball.x + RADIUS > canvas.width) {\n            ball.x = canvas.width - RADIUS;\n        }\n\n        if (ball.x - RADIUS < 0) {\n            ball.x = RADIUS;\n        }\n\n        if (ball.y + RADIUS >= canvas.height) {\n            ball.y = canvas.height - RADIUS;\n            ball.isYCollided = true;\n        }\n\n        if (ball.y - RADIUS <= 0) {\n            ball.y = RADIUS;\n            ball.isYCollided = true;\n        }\n\n        this.floorTiles.forEach(floor => {\n            if(floor.collidesWith(ballBox)) {\n                ball.isYCollided = true;\n                // ball.x = originalBallX;\n                if (ball.ddy === 1) {\n                    ball.y = floor.y - RADIUS;\n                } else {\n                    ball.y = floor.y + _constants__WEBPACK_IMPORTED_MODULE_1__[\"default\"].F_H + RADIUS;\n                }\n            }\n        });\n\n        this.thornTiles.forEach(thorn => {\n            if (thorn.collidesWith(ballBox)) {\n                _managers_state_manager__WEBPACK_IMPORTED_MODULE_2__[\"default\"].switchToScene('game-over');\n            }\n        });\n\n        if (this.endpoint.collidesWith(ballBox)) {\n            _managers_state_manager__WEBPACK_IMPORTED_MODULE_2__[\"default\"].store.levelsCompleted++;\n            if (this.levelNumber === _managers_state_manager__WEBPACK_IMPORTED_MODULE_2__[\"default\"].store.totalLevels - 1) {\n                _managers_state_manager__WEBPACK_IMPORTED_MODULE_2__[\"default\"].switchToScene('game-over');\n            } else {\n                _managers_state_manager__WEBPACK_IMPORTED_MODULE_2__[\"default\"].switchToScene(`intro-level-${this.levelNumber + 1}`);\n            }\n        }\n\n        if (kontra.keys.pressed('space') ) {\n            if (gravityInvertDampner === 0) {\n                gravityInvertDampner = 20;\n                ball.ddy *= -1;\n                ball.isYCollided = false;\n            }\n        }\n\n        this.assets.forEach(asset => asset.update());\n    },\n    render() {\n        this.assets.forEach(asset => asset.render());\n\n    }\n});\n\nLevel.init = function (levelName) {\n    const C_H = _constants__WEBPACK_IMPORTED_MODULE_1__[\"default\"].C_H;\n    const levelNumber = parseInt(levelName.split('-')[1]);\n    const levelConfig = _level_configs__WEBPACK_IMPORTED_MODULE_6__[\"default\"][levelNumber];\n    const floorMaps = levelConfig.floors;\n    const thornMaps = levelConfig.thorns;\n    this.levelNumber = levelNumber;\n    this.floorTiles = [];\n    this.thornTiles = [];\n    this.assets = [];\n\n    if (floorMaps) {\n        floorMaps.forEach(coords => {\n            const floor = _assets_floor_factory__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getInstance(coords[0], coords[1]);\n            this.floorTiles.push(floor);\n            this.assets.push(floor);\n        });\n    }\n    if (thornMaps) {\n        thornMaps.forEach(coords => {\n            const thorn = _assets_thorn_factory__WEBPACK_IMPORTED_MODULE_4__[\"default\"].getInstance(coords[0], coords[1]);\n            this.thornTiles.push(thorn);\n            this.assets.push(thorn);\n        });\n    }\n    this.ball = _assets_ball_factory__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getInstance(levelConfig.ball[0], levelConfig.ball[1]);\n    this.assets.push(this.ball);\n    this.endpoint = _assets_endpoint_factory__WEBPACK_IMPORTED_MODULE_5__[\"default\"].getInstance(levelConfig.endpoint[0], levelConfig.endpoint[1]);\n    this.assets.push(this.endpoint);\n    return this;\n};\n\nLevel.destroy = function () {\n    this.assets.forEach(asset => {\n        asset.ttl = 0;\n    });\n    return this;\n};\n\nLevel.ball = undefined;\nLevel.endpoint = undefined;\nLevel.floorTiles = [];\nLevel.thornTiles = [];\nLevel.assets = [];\nLevel.levelNumber = -1;\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Level);\n\n//# sourceURL=webpack:///./src/scenes/level.js?");

/***/ })

/******/ });