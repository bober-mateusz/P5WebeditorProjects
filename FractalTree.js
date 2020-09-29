var angle = 0;
var slider;
function setup() {
  createCanvas(400, 400);
  slider = createSlider(0,TWO_PI,PI/4,0.01);
}

function draw() {
  background(50);
  stroke(200);
  translate(200,height);
  branch(100);
  angle = slider.value();
}



function branch(len){
 line(0,0,0,-len);
 translate(0,-len);
if (len > 2) {
  push();
  rotate(angle);
  branch(len * 0.7);
  pop();
  push();
  rotate(-angle);
  branch(len * 0.67);
  pop();
}
}