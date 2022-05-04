import * as engine from "../engine/core.js";

class MyGame {
    constructor(htmlCanvasID) {
        // Step A: Initialize the game engine
        engine.init(htmlCanvasID);
        // Step B: Clear the canvas
        engine.clearCanvas([0.5, 0.5, 0.5, 1]);
        // Step C: Draw the square in red
        engine.drawSquare([0, 0, 0, 1]);
    }
}

window.onload = function () {
    new MyGame('GLCanvas');
}