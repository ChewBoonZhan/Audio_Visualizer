//var small_dot = new Dot(1, 2);

var song;
var fft = new p5.FFT(0.5, 512);
var button;
var final_amp = [];
var big_dot;
var total;
var colour = 0;
var bezel_amp = [];
var time;
var first_amp;
var second_amp;
var first_bezel_pos;
var second_bezel_pos;
var dots = [];
var x_off = [0, 10, 20];
var y_off = [11, 21, 31];
var dots_speed = 0.001;

function setDate() {
  time = new Date();
}

function preload() {
  load_album();
  song = loadSound("../src/Music/resources/dance.mp3");
  init_dots();
}

function create_first_second_amp() {
  first_amp = [];
  second_amp = [];
  for (var j = 0; j < 2; j++) {
    for (var i = 0; i < 25; i++) {
      if (j == 0) {
        first_amp.push(final_amp[i]);
      } else {
        second_amp.push(final_amp[i + 9 * 25]);
      }
    }
  }
}

function update_bezel_array() {
  create_first_second_amp();

  bezel_amp = [];
  for (var i = 0; i < 10; i++) {
    var total = 0;
    if (i == first_bezel_pos || i == second_bezel_pos) {
      if (i == first_bezel_pos) {
        total = first_amp.reduce(function (a, b) {
          return a + b;
        });
      } else {
        total = second_amp.reduce(function (a, b) {
          return a + b;
        });
      }

      var first_bezel = total / 8;
      var second_bezel = total / 9;

      for (var j = 0; j < 8; j++) {
        bezel_amp.push(first_bezel * j);
      }
      bezel_amp.push(total);
      for (var j = 9; j >= 0; j--) {
        bezel_amp.push(second_bezel * j);
      }
    } else {
      for (var h = 0; h < 25; h++) {
        bezel_amp.push(0);
      }
    }
  }
}

function create_bezel_position() {
  first_bezel_pos = floor(map(Math.random(), 0, 1, 0, 7));
  second_bezel_pos = first_bezel_pos;
  while (second_bezel_pos == first_bezel_pos) {
    second_bezel_pos = floor(map(Math.random(), 0, 1, 0, 7));
  }
}

function get_amps() {
  final_amp = fft.analyze();
  final_amp = final_amp.slice(1, 257);

  update_bezel_array();

  total = final_amp.reduce(function (a, b) {
    return a + b;
  });

  var diameter = map(total, 0, 65792, 300, 400);
  colour = map(total, 0, 65792, 0, 33);
  big_dot.change_diameter(diameter);
}

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

function update_noise() {
  get_amps();
  big_dot.show();
}
function init_big_dot() {
  big_dot = new Big_dot(width / 4, height / 2);
}
function create_play_button() {
  //pause and play
  button = createButton("Play");
  button.mousePressed(play_pause);
}

function play_pause() {
  if (song.isPlaying()) {
    song.pause();
    button.html("Play");
  } else {
    song.play();
    button.html("Pause");
    setDate();
  }
}
