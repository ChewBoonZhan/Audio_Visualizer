function setup() {
  //creating canvas
  width = window.innerWidth - 2;
  height = window.innerHeight - 5;
  createCanvas(width, height);

  create_play_button();
  init_big_dot();
  initialize_bezel();
  create_bezel_position();
}

function draw() {
  background(colour);

  noStroke();
  music_amps_ani();
  manage_dots();
}
