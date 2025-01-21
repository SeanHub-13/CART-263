"use strict";

const canvasSize = 800;

let x_one = 0;
let y_one = 0;
const w_one = canvasSize / 3;
const h_one = canvasSize;
let r_one = 255;
let g_one = 0;
let b_one = 0;

let x_two = canvasSize / 3;
let y_two = 0;
const w_two = canvasSize / 3;
const h_two = canvasSize;
let r_two = 0;
let g_two = 255;
let b_two = 0;

let x_three = canvasSize - canvasSize / 3;
let y_three = 0;
const w_three = canvasSize / 3;
const h_three = canvasSize;
let r_three = 0;
let g_three = 0;
let b_three = 255;

function drawRect(x, y, w, h, r, g, b) {
    mouseOver();
    push();
    noStroke();
    fill(r, g, b);
    rect(x, y, w, h);
    pop();
}

function mouseOver() {
    if (mouseX > 0 && mouseX < canvasSize / 3 && mouseY < canvasSize && mouseY > 0) {
        r_one = 255;
        g_one = 255;
        b_one = 255;
    }

    else {
        r_one = 255;
        g_one = 0;
        b_one = 0;
    }

    if (mouseX > canvasSize / 3 && mouseX < canvasSize / 3 + canvasSize / 3 && mouseY < canvasSize && mouseY > 0) {
        r_two = 255;
        g_two = 255;
        b_two = 255;
    }

    else {
        r_two = 0;
        g_two = 255;
        b_two = 0;
    }

    if (mouseX > canvasSize / 3 + canvasSize / 3 && mouseX < canvasSize && mouseY < canvasSize && mouseY > 0) {
        r_three = 255;
        g_three = 255;
        b_three = 255;
    }

    else {
        r_three = 0;
        g_three = 0;
        b_three = 255;
    }
}

function setup() {
    createCanvas(canvasSize, canvasSize);
}

function draw() {
    background(0);
    drawRect(x_one, y_one, w_one, h_one, r_one, g_one, b_one);
    drawRect(x_two, y_two, w_two, h_two, r_two, g_two, b_two);
    drawRect(x_three, y_three, w_three, h_three, r_three, g_three, b_three);
}