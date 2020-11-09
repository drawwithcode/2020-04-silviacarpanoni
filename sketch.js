let x = 60; // x position
let y = 490; // y position
let myImage1;
let myImage2;
let myImage3;
let myImage4;
let myImage5;
let myImage6;
// let p1;
// let p2;
// let p3;
// let p4;
// let myButton1;
// let myButton2;

function preload() {
  // put preload code here
  myImage1 = loadImage("./assets/images/man.png");
  myImage2 = loadImage("./assets/images/strada.png");
  myImage3 = loadImage("./assets/images/house.png");
  myImage4 = loadImage("./assets/images/house.png");
  myImage5 = loadImage("./assets/images/woman.png");
  myImage6 = loadImage("./assets/images/man2.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight)
  // put setup code here
  // button1
  myButton1 = createButton("choose me!");
  myButton1.position(windowWidth / 3 * 2.2, windowHeight * 1 / 10);
  myButton1.mousePressed(changeSketch);

  // button2
  myButton2 = createButton("choose me!");
  myButton2.position(windowWidth / 3 * 2.2, windowHeight / 3 * 1.9);
  myButton2.mousePressed(changeAnotherSketch);

  //  p1
  p1 = createP("PLAY WITH ME!");
  p1.position(windowWidth * 1 / 8 - 200, windowHeight * 1 / 18);

  // p2
  p2 = createDiv("1. use the arrows to move the delivery boy");
  p2.position(windowWidth * 1 / 8 - 200, windowHeight * 1 / 8);

  // p3
  p3 = createDiv("2. choose which person you want to feed");
  p3.position(windowWidth * 1 / 8 - 200, windowHeight * 1 / 6.5);

  // p4
  p4 = createDiv("3. press the button 'choose me!'");
  p4.position(windowWidth * 1 / 8 - 200, windowHeight * 1 / 5.5);
}

function draw() {
  // put drawing code here
  background(220);
  imageMode(CENTER);
  image(myImage2, windowWidth / 2, windowHeight / 3 * 1.7, 3508 / 1.8, 1133 / 1.8);
  image(myImage3, windowWidth / 3 * 2.2, windowHeight * 1 / 5.56, 200, 200);
  image(myImage4, windowWidth / 3 * 2.2, windowHeight / 3 * 2.14, 200, 200);
  image(myImage5, windowWidth / 2 * 1.42, windowHeight * 1 / 4.4, 80, 80);
  image(myImage6, windowWidth / 2 * 1.42, windowHeight / 2 * 1.5 + 10, 80, 80);
  image(myImage1, x, y, 100, 100);
}

// arrows
function keyPressed() {
  if (keyCode === UP_ARROW) {
    y = y - 20;
  } else if (keyCode === DOWN_ARROW) {
    y = y + 20;
  }
  if (keyCode === LEFT_ARROW) {
    x = x - 20;
  } else if (keyCode === RIGHT_ARROW) {
    x = x + 20;
  }
}


function changeSketch() {
  window.open("second.html", "_self");
}

function changeAnotherSketch() {
  window.open("third.html", "_self");
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
