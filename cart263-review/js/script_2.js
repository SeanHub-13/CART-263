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

function drawEllipse(x, y, w, h, r, g, b) {
    push();
    noStroke();
    fill(r, g, b);
    ellipse(x, y, w, h);
    pop();
}

function setup() {
    createCanvas(800, 800);
    drawEllipse(xy_one, xy_one, wh_one, wh_one, r_one, g_one, b_one);
    drawEllipse(xy_two, xy_two, wh_two, wh_two, r_two, g_two, b_two);
    drawEllipse(xy_three, xy_three, wh_three, wh_three, r_three, g_three, b_three);

}

function draw() {

}