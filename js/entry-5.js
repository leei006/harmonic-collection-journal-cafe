function setup() {
  createCanvas(1600, 50);
}

function draw() {
let x = random(width);
let y = random(height);
frameRate(3)
  background(0);
  ellipse(x,y,20, 23);
  stroke(255)
  fill(0)
}
