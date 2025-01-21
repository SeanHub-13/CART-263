"use strict";

let squarcle = false;

const canvasSize = 800;

const grid = {
    spaces: 15,
    w: null,
    h: null
}

let ellipse1 = {
    r: null,
    g: null,
    b: null
}

function ellipseColors() {
    ellipse1.r = random(0, 255);
    ellipse1.g = random(0, 255);
    ellipse1.b = random(0, 255);
}

function displayEllipse(x, y, w, h, r, g, b) {
    push();
    noStroke();
    fill(r, g, b);
    ellipse(x, y, w, h);
    pop();
}

function displaySquare(x, y, w, h, r, g, b) {
    push();
    noStroke();
    fill(r, g, b);
    rect(x, y, w, h);
    pop();
}

function keyPressed() {
    if (key === " ") {
        ellipseColors();
    }

}

function mouseClicked() {
    squarcle = !squarcle;
}

function drawGrid() {
    grid.w = canvasSize / grid.spaces;
    grid.h = canvasSize / grid.spaces;
    // More fun spam mode, but potential epilepsy danger :(
    // if (keyIsPressed && keyCode === 32) {
    //     ellipseColors();
    // }
    for (let i = 0; i < grid.spaces; i++) {
        for (let j = 0; j < grid.spaces; j++) {
            let x = i * grid.w + grid.w / 2;
            let y = j * grid.h + grid.h / 2;
            if (squarcle) {
                displaySquare(x - grid.w / 2, y - grid.h / 2, grid.w, grid.h, ellipse1.r, ellipse1.g, ellipse1.b)
            }
            else {
                displayEllipse(x, y, grid.w, grid.h, ellipse1.r, ellipse1.g, ellipse1.b)
            }
        }
    }
}

function setup() {
    createCanvas(canvasSize, canvasSize);
    ellipseColors();
}

function draw() {
    background(0);
    drawGrid();
}