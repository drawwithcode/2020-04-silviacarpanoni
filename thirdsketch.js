let myImage6;
let myImage8;
// let p1;
// let p2;

function preload() {
  myImage6 = loadImage("./assets/images/man2.png");
  myImage8 = loadImage("./assets/images/hamburger.png");

}

function setup() {
  createCanvas(windowWidth, windowHeight);

  //  p1
  p1 = createP("Click on screen to play again");
  p1.position(windowWidth * 1 / 2.5 - 20, windowHeight * 9 / 10);

  // p2
  p2 = createDiv("YOU GOT SOME HAMBURGER!");
  p2.position(windowWidth * 1 / 2.2 - 60, windowHeight * 9 / 10 - 50);
}

function draw() {
  background("tomato");
  imageMode(CENTER);
  image(myImage6, windowWidth / 2, windowHeight * 1 / 2 + 50, 500, 500);
  image(myImage8, windowWidth / 2 - 30, windowHeight * 1 / 3 + 20, 700, 700);
}


function mouseClicked() {
  window.open("index.html", "_self");
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
