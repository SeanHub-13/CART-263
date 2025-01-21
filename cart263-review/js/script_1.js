"use strict";

let xy_one = 200;
let wh_one = 16;
let r_one = 255;
let g_one = 0;
let b_one = 0;

let xy_two = 400;
let wh_two = 32;
let r_two = 0;
let g_two = 255;
let b_two = 0;

let xy_three = 600;
let wh_three = 64;
let r_three = 0;
let g_three = 0;
let b_three = 255;

function drawEllipse1() {
    push();
    noStroke();
    fill(r_one, g_one, b_one);
    ellipse(xy_one, xy_one, wh_one, wh_one);
    pop();
}

function drawEllipse2() {
    push();
    noStroke();
    fill(r_two, g_two, b_two);
    ellipse(xy_two, xy_two, wh_two, wh_two);
    pop();
}

function drawEllipse3() {
    push();
    noStroke();
    fill(r_three, g_three, b_three);
    ellipse(xy_three, xy_three, wh_three, wh_three);
    pop();
}

function setup() {
    createCanvas(800, 800);
    drawEllipse1();
    drawEllipse2();
    drawEllipse3();
}

function draw() {

}