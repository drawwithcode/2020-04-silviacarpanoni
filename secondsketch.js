let myImage5;
let myImage7;

function preload() {
  myImage5 = loadImage("./assets/images/woman.png");
  myImage7 = loadImage("./assets/images/pizza.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  //  p1
  p1 = createP("Click on screen to play again");
  p1.position(windowWidth * 1 / 2.5, windowHeight * 9 / 10);

  // p2
  p2 = createDiv("YOU GOT SOME PIZZA!");
  p2.position(windowWidth * 1 / 2.2 - 10, windowHeight * 9 / 10 - 50);

}

function draw() {
  background("YellowGreen");
  imageMode(CENTER);
  image(myImage5, windowWidth / 2, windowHeight * 1 / 2 + 50, 500, 500);
  image(myImage7, windowWidth / 2, windowHeight * 1 / 3 + 20, 700, 700);
}


function mouseClicked() {
  window.open("index.html", "_self");
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
