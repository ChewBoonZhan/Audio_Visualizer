//var small_dot = new Dot(1, 2);

var dots = [];
var x_off = [0, 10, 20];
var y_off = [11, 21, 31];
var dots_speed = 0.001;

function init_dots() {
  for (var i = 0; i < 3; i++) {
    var small_dot = new Dot(10, 10);

    dots.push(small_dot);
  }
}

function setSpeed_dots(speed) {
  dots_speed = speed;
}

function manage_dots() {
  for (var i = 0; i < 3; i++) {
    var temp_x = map(noise(x_off[i]), 0, 1, width / 4 + 160, width - 10);
    var temp_y = map(noise(y_off[i]), 0, 1, 0, height - 10);
    dots[i].move_to(temp_x, temp_y);
    x_off[i] += dots_speed;
    y_off[i] += dots_speed;
    dots[i].show();
  }
}
