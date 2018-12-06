
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

let birdy1 = new Image();
let birdy2 = new Image();
let bg = new Image();
let fg = new Image();
let topPipe = new Image();
let bottomPipe = new Image();

birdy1.src = "images/birdy1.png";
birdy2.src = "images/birdy2.png";
fg.src = "images/fg.png";
bg.src = "images/bg.png";
topPipe.src = "images/topPipe.png";
bottomPipe.src = "images/bottomPipe.png";

let gap = 75;
let bX = 15;
let bY = 200;
let gravity = 1.5;
let score = 0;


let gameOver = new Audio();
let gameMusic = new Audio();
gameMusic.src = "sounds/awesomeness.wav"

gameOver.src = "sounds/gameOver.mp3"

document.addEventListener("keydown", moveUp = () => {
  bY -= 30;
});


let pipe = [];
pipe[0] = {
  x: canvas.width,
  y: 0
}


function draw() {
  ctx.drawImage(bg, 0, 0);

  for (let i = 0; i < pipe.length; i++){
    ctx.drawImage(topPipe, pipe[i].x, pipe[i].y);
    ctx.drawImage(bottomPipe, pipe[i].x, pipe[i].y+ topPipe.height + gap);

       pipe[i].x--;

    if (pipe[i].x === 110) {
      pipe.push({
        x: canvas.width,
        y: Math.floor(Math.random() * topPipe.height) - topPipe.height
      });
    }

    //Contact or death
    if ( bX + (birdy1.width+2) >= (pipe[i].x + 5) && bX <= pipe[i].x + topPipe.width
        && (bY <= pipe[i].y + topPipe.height || bY + birdy1.height >=
        pipe[i].y + (topPipe.height + gap)) || bY + birdy1.height >= canvas.height - (fg.height-5) ){
          location.reload();
          score = 0
        }
        if (pipe[i].x === 10) {
          score++
        }
      }
  ctx.drawImage(fg, 0, canvas.height - fg.height);
  ctx.drawImage(birdy1, bX, bY);

  ctx.fillStyle = "white";
  ctx.font = "18px Verdana";
  ctx.fillText("Score: "+score, 10, canvas.height-30);

  bY += gravity;

  requestAnimationFrame(draw);
  
}

draw();
