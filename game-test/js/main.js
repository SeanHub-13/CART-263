window.onload = setup;

let gameState = "game";
let canvas;
let ctx;
let canvRect;
let mouseX;
let mouseY;
let angle;
let randomX;
let randomY;
let objectsArray = [];

function setup() {
    canvas = document.querySelector("canvas");
    ctx = canvas.getContext("2d");
    canvRect = canvas.getBoundingClientRect();
    document.addEventListener("mousemove", mouseTrack);
    window.addEventListener("keydown", keyTrackDown);
    createEnvironment();
    draw();
};

function draw() {
    canvas.style.background = "black";
    stateCheck();
    requestAnimationFrame(draw);
};

function stateCheck() {
    if (gameState === "title") {

    }
    else if (gameState === "game") {
        // console.log("othertest")
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        playerRender();
        renderEnvironment();
    }
}

function playerRender() {
    ctx.fillStyle = "blue";
    playerChar(canvas.width / 2 - 12.5, canvas.height / 2 - 12.5, 25, 25, angle);
    // ctx.fillRect(canvas.width / 2 - 12.5, canvas.height / 2 - 12.5, 25, 25);
}

function mouseTrack(e) {
    angle = Math.atan2(mouseY - canvas.height / 2, mouseX - canvas.width / 2)
    // console.log(angle);
    mouseX = e.clientX - canvRect.left;
    mouseY = e.clientY - canvRect.top;
    // console.log(mouseX + " " + mouseY);
}

function keyTrackDown(e) {
    if (e.code === "ArrowUp") {
        console.log("up")
        for (let j = 0; j < objectsArray.length; j++) {
            objectsArray[j][1]++;
        }
    }
    if (e.code === "ArrowRight") {
        console.log("right")
        for (let j = 0; j < objectsArray.length; j++) {
            objectsArray[j][0]++;
        }
    }
    if (e.code === "ArrowDown") {
        console.log("down")
        for (let j = 0; j < objectsArray.length; j++) {
            objectsArray[j][1]--;
        }
    }
    if (e.code === "ArrowLeft") {
        console.log("left")
        for (let j = 0; j < objectsArray.length; j++) {
            objectsArray[j][0]--;
        }
    }
}

function playerChar(x, y, w, h, a) {
    ctx.save();
    ctx.translate(x + w / 2, y + h / 2);
    ctx.rotate(a);
    ctx.fillStyle = "blue";
    ctx.fillRect(-w / 2, -h / 2, w, h);
    ctx.restore();
}

function randomCubes(r1, r2) {
    ctx.fillStyle = "green";
    ctx.fillRect(r1, r2, 25, 25);
}

// function createEnvironment() {
//     randomX = Math.random() * canvas.width;
//     randomY = Math.random() * canvas.height;
//     for (let i = 0; i < 4; i++) {
//         objectsArray[i] = [randomX, randomY];
//         console.log(objectsArray[i]);
//         randomCubes(objectsArray[i]);
//         console.log("test")
//     }
// }

function createEnvironment() {
    for (let i = 0; i < 4; i++) {
        let randomX = Math.random() * (canvas.width - 25);
        let randomY = Math.random() * (canvas.height - 25);
        objectsArray.push([randomX, randomY]);
    }
}

function renderEnvironment() {
    for (let i = 0; i < objectsArray.length; i++) {
        randomCubes(objectsArray[i][0], objectsArray[i][1]);
    }
}