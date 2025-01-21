"use strict";

let xy_one = 200;
const wh_one = 16;
const r_one = 255;
const g_one = 0;
const b_one = 0;

let xy_two = 400;
const wh_two = 32;
const r_two = 0;
const g_two = 255;
const b_two = 0;

const x_three = 600;
let y_three = 600;
const wh_three = 64;
let r_three = 0;
let g_three = 0;
let b_three = 255;

function drawRect1() {
    if (mouseIsPressed) {
        xy_one = xy_one + 1;
    }
    push();
    noStroke();
    fill(r_one, g_one, b_one);
    rect(xy_one, xy_one, wh_one, wh_one);
    pop();
}

function drawRect2() {
    push();
    noStroke();
    fill(r_two, g_two, b_two);
    rect(xy_two, xy_two, wh_two, wh_two);
    pop();
}

function drawRect3() {
    y_three = y_three + 3;
    if (y_three > 800) {
        y_three = 600;
    }
    push();
    noStroke();
    fill(r_three, g_three, b_three);
    rect(x_three, y_three, wh_three, wh_three);
    pop();
}

function keyPressed() {
    if (key === " ") {
        xy_two = xy_two + 3;
    }

}

function mouseMoved() {
    r_three = random(0, 255);
    g_three = random(0, 255);
    b_three = random(0, 255);
}

function setup() {
    createCanvas(800, 800);
}

function draw() {
    background(0);
    drawRect1();
    drawRect2();
    drawRect3();
}