
let canvas = document.getElementById('canvas');

let ctx = canvas.getContext('2d');

//loading images
let birdy = new Image();
let bg = new Image();
let fg = new Image();
let pipeT = new Image();
let pipeB = new Image();

birdy.src = "images/birdy.png";
fg.src = "images/fg.png";
bg.src = "images/bg.png";
pipeT.src = "images/pipeT.png";
pipeB.src = "images/pipeB.png";

let gap = 85;


function draw() {
  let gappy = pipeT.height + gap;
  ctx.drawImage(bg, 0, 0);
  ctx.drawImage(pipeT, 100, 0)
  ctx.drawImage(pipeB, 100, 0+gappy)
  requestAnimationFrame(draw);
}

draw();
