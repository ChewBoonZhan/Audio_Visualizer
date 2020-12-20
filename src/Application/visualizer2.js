function setup() {
  //creating canvas
  width = window.innerWidth - 2;
  height = window.innerHeight - 5;
  createCanvas(width, height);

  create_play_button();
  init_big_dot();
  create_bezel_position();
}

function draw() {
  background(colour);
  fill("white");
  noStroke();
  update_noise();
  manage_dots();
}
