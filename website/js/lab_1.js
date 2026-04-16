function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  noStroke();         
  fill(100);         
  ellipse(100, 30, 30, 30);
  
  stroke(200);  
  noFill();
  strokeWeight(5);

  beginShape();
  vertex(200, 274);
  vertex(225, 225);
  vertex(250, 274);
  endShape();
  
      
  strokeWeight(2);
  point(20, 20);
  point(40, 30);
  point(90, 25);

  stroke(80);
  strokeJoin(BEVEL); 
  fill(60);          
  rect(120, 350, 30, 50);
  rect(160, 225, 25, 200);
  rect(200, 275, 50, 130);

  noFill();        
  stroke(200);
  rect(225, 385, 10, 20);
  
  strokeWeight(1);
  let xOff = 20;
  let yOff = 20;
  noFill();        
  stroke(200);

  for (let i = 0; i < 5; i++) {
    rect(215 + ((i % 2) * xOff), 270 + yOff, 6, 6);
    yOff += 20;
  }

}