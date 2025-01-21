"use strict";

const canvasSize = 800;

let square1 = {
    x: canvasSize / 4,
    y: canvasSize / 1.25,
    w: 75,
    h: 75,
    r: 255,
    g: 120,
    b: 0,
    squareCollide: false
}

let square2 = {
    x: canvasSize / 1.5,
    y: canvasSize / 1.25,
    w: 75,
    h: 75,
    r: 215,
    g: 25,
    b: 0,
    squareCollide: false
}

let ellipse1 = {
    x: canvasSize / 2,
    y: canvasSize / 2,
    w: 50,
    h: 50,
    r: 255,
    g: 255,
    b: 255,
    ellipseAlpha: 25
}

let ellipses = [];

let counter = 0;

let ellipseCount = 0;

function displaySquare(x, y, w, h, r, g, b) {
    push();
    noStroke();
    fill(r, g, b);
    rect(x, y, w, h);
    pop();
}

function displayEllipse(x, y, w, h, r, g, b, a) {
    push();
    noStroke();
    fill(r, g, b, a);
    ellipse(x, y, w, h);
    pop();
}

function checkCollisionWithSquare() {
    if (mouseX > square1.x && mouseX < square1.x + square1.w && mouseY < square1.y + square1.h && mouseY > square1.y) {
        square1.g = 135;
        square1.squareCollide = true;
    }
    else if (mouseX > square2.x && mouseX < square2.x + square2.w && mouseY < square2.y + square2.h && mouseY > square2.y) {
        square2.r = 255;
        square2.squareCollide = true;
    }
    else {
        square1.g = 120;
        square1.squareCollide = false;
        square2.r = 215;
        square2.squareCollide = false;
    }
}

function mousePressed() {
    if (square1.squareCollide) {
        if (counter < 10) {
            counter++;
            console.log(counter)
        }
    }
    else if (square2.squareCollide) {
        if (counter > 1) {
            background(0);
            counter--;
            ellipseCount--;
            console.log(counter)
        }
    }
}

function setup() {
    createCanvas(canvasSize, canvasSize);
    background(0);
}

function draw() {
    displaySquare(square1.x, square1.y, square1.w, square1.h, square1.r, square1.g, square1.b);
    displaySquare(square2.x, square2.y, square2.w, square2.h, square2.r, square2.g, square2.b);
    // displayEllipse(ellipse1.x, ellipse1.y, ellipse1.w, ellipse1.h, ellipse1.r, ellipse1.g, ellipse1.b, ellipse1.ellipseAlpha);
    checkCollisionWithSquare();
    while (ellipseCount < counter && counter <= 10 && counter >= 1) {
        ellipseCount++;
        console.log("test")
        displayEllipse(ellipse1.x, ellipse1.y, ellipse1.w + counter * 25, ellipse1.h + counter * 25, ellipse1.r, ellipse1.g, ellipse1.b, ellipse1.ellipseAlpha + counter * 5);
    }
}