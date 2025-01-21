"use strict";

const canvasSize = 800;

function setup() {
    createCanvas(canvasSize, canvasSize);
    textSize(28);
    fill(255);
    stroke(0);
    strokeWeight(4);
}

function draw() {
    background(0);
    text('test', canvasSize / 2 - 28, canvasSize / 2 - 28);
    forLoop1();
    forLoop2();
}


function forLoop1() {
    for (let i = 0; i < 10; i++) {
        text(i, 20 + i * 20, 40);
    }
}

function forLoop2() {
    for (let j = 15; j > 0; j--) {
        text(j, 20, 70 + (15 - j) * 25);
    }
}