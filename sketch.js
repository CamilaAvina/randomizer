let value = 0;
let mic;
let flower1;


function setup() {
  createCanvas(400, 400);
  
  angleMode(DEGREES);
  mic = new p5.AudioIn()
  mic.start();
  flower1 = new Flower(0,25);
  flower2 = new Flower(130,75);
  flower3 = new Flower(220,150);
  flower4 = new Flower(300,0);
  
}

function draw() {

background(0, 200, 85);
  drawAntenas();
  drawBody();
  drawSpots();
  //drawFlower();
  flower1.display();
  flower2.display();
  flower3.display(); 
  flower4.display();
  flower1.move();
  flower2.move();
  flower3.move();
  flower4.move();

}

function drawAntenas() {
  push();
  rotate(30);
  strokeWeight(5);
  point(120, 70);
  point(110, 50);
  point(90, 40);
  point(70, 50);
  point(60, 70);
  point(70, 90);
  point(95, 115);

  noFill();
  strokeWeight(1);
  beginShape();
  curveVertex(120, 70);
  curveVertex(120, 70);
  curveVertex(110, 50);
  curveVertex(110, 50);
  curveVertex(90, 40);
  curveVertex(90, 40);
  curveVertex(70, 50);
  curveVertex(70, 50);
  curveVertex(60, 70);
  curveVertex(70, 90);
  curveVertex(70, 90);
  curveVertex(95, 115);
  curveVertex(95, 115);
  endShape();

  strokeWeight(5);
  point(230, 70);
  point(240, 50);
  point(260, 40);
  point(280, 50);
  point(290, 70);
  point(280, 90);
  point(230, 115);

  noFill();
  strokeWeight(1);
  beginShape();
  curveVertex(230, 70);
  curveVertex(230, 70);
  curveVertex(240, 50);
  curveVertex(240, 50);
  curveVertex(260, 40);
  curveVertex(260, 40);
  curveVertex(280, 50);
  curveVertex(280, 50);
  curveVertex(290, 70);
  curveVertex(290, 70);
  curveVertex(280, 90);
  curveVertex(280, 90);
  curveVertex(230, 115);
  curveVertex(230, 115);

  endShape();
}



function drawBody() {
  strokeWeight(1);
  micLevel = mic.getLevel();
  fill(0);
  arc(180, 150, 180, 160, 180, 0, OPEN);
  fill(220, 105, 100);
  ellipse(180, 220, 240, 220);


  fill(255);
  circle(150, 100, 20);
  circle(200, 100, 20);

  fill(random(255), random(255), random(255));
  circle(150, constrain(height - micLevel * height * 8, 0, 97), 10, 10);
  circle(200, constrain(height - micLevel * height * 8, 0, 97), 10, 10);
  fill(0)
  circle(150, 97, 10);
  circle(200, 97, 10);

  line(175, 100, 175, 330);

}


function drawSpots() {

  beginShape();
  fill(value);
  curveVertex(120, 150);
  curveVertex(120, 150);
  curveVertex(150, 170);
  curveVertex(150, 170);
  curveVertex(120, 200);
  curveVertex(120, 200);
  curveVertex(90, 170);
  curveVertex(90, 170);
  curveVertex(120, 150);
  curveVertex(120, 150);
  endShape();

  beginShape();
  curveVertex(230, 150);
  curveVertex(230, 150);
  curveVertex(260, 170);
  curveVertex(260, 170);
  curveVertex(230, 200);
  curveVertex(230, 200);
  curveVertex(200, 170);
  curveVertex(200, 170);
  curveVertex(230, 150);
  curveVertex(230, 150);
  endShape();

  beginShape();
  curveVertex(120, 250);
  curveVertex(120, 250);
  curveVertex(150, 270);
  curveVertex(150, 270);
  curveVertex(120, 300);
  curveVertex(120, 300);
  curveVertex(90, 270);
  curveVertex(90, 270);
  curveVertex(120, 250);
  curveVertex(120, 250);
  endShape();



  beginShape();
  curveVertex(245, 250);
  curveVertex(245, 250);
  curveVertex(265, 270);
  curveVertex(265, 270);
  curveVertex(245, 300);
  curveVertex(245, 300);
  curveVertex(215, 270);
  curveVertex(215, 270);
  curveVertex(245, 250);
  curveVertex(245, 250);
  endShape();

  pop();

}
//function drawFlower() {
  //fill(255);
  //circle(35, 50, 15);
  //circle(42, 40, 15);
  //circle(55, 37, 15);
  //circle(42, 62, 15);
  //circle(55, 62, 15);
  //circle(62, 50, 15);
  ////circle(62, 40, 15);

  //fill(255, 255, 51);
  //circle(50, 50, 20);


//}


function mousePressed() {
  if (mouseX >= 50 && mouseX <= 350 && mouseY <= 250 && mouseY >= 100) {
    value = (random(255));
  } else {
    value = 0;
  }

}