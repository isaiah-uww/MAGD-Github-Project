let red;
let blue;
let green;

let mx;
let my;
let pmx;
let pmy;

let base;
let d;
let p;

function setup() {
    createCanvas(400, 400);    
    frameRate(20);            
    colorMode(RGB);             
}

function draw() {

  
    red = color(255, 0, 0);
    blue = color(0, 0, 255);
    green = color(0, 255, 0);

    mx = mouseX;
    my = mouseY;

    pmx = pmouseX;
    pmy = pmouseY;

    base = 3;
    d = dist(mx, my, pmx, pmy)/2;
    p = pow(base, 3);

    if(d > p) {
    d = p;
    }

    background(200);  

    fill(blue);  
    ellipse(pmx, pmy, p, p);


    fill(red);   
    noStroke();
    ellipse(mx, my, d, d);

    stroke(green);
    strokeWeight(2);
    line(mx, my, pmx, pmy);
}