function setup() {
  createCanvas(250, 250);
}

function draw() {
    background(0);

  
  
    let sunYellow = color(245, 217, 39, 255);
    let moonColor = color(243, 235, 188, 175);
    let planetColor = color(255, 86, 86, 100);
  
    fill(sunYellow);
    circle(120, 120, 75);

    // attempt at a sun
    /// it kinda worked??
    bezier(
        150, 105,   
        170, 140,    
        190, 140,   
        150, 135    
    );
    bezier(
        110, 155,
        180, 200,
        160, 200,
        140, 151
    );
    bezier(
        110, 100,
        180, 50,
        160, 50,
        140, 87
    );
    bezier(
        90, 105,    
        50, 140,      
        30, 140,
        90, 135    
    );
    triangle(
        92, 95, 
        95, 50, 
        120, 85
    );
    triangle(
        73, 183, 
        90, 140, 
        110, 153
    );
    triangle(
        140, 90, 
        155, 105, 
        180, 80
    );
  
    circle(120, 120, 75);
    fill(255);
    // Display cursor coordinates
    text("(" + mouseX + ", " + mouseY + ")", mouseX + 10, mouseY - 10);


    fill(moonColor);
    arc(200, 50, 40, 40, PI + QUARTER_PI, TWO_PI + QUARTER_PI, PIE);
  
    fill(planetColor);
    circle(50, 40, 25);

   
}