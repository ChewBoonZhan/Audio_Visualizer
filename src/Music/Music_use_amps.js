var big_dot;

var colour = 0;

var bezel_amps = [];

function create_first_second_amp() {
  var counter = 1;
  for (var j = 0; j < 2; j++) {
    var temp_amp = [];
    for (var i = 0; i < 25; i++) {
      temp_amp.push(final_amp[i + counter * 25]);
    }
    bezel_amps[j].setAmp(temp_amp);
    counter += 8;
  }
}

function update_bezel_array() {
  create_first_second_amp();
  for (var i = 0; i < 2; i++) {
    var total = bezel_amps[i].amp.reduce(function (a, b) {
      return a + b;
    });
    var first_bezel = total / 8;
    var second_bezel = total / 9;

    var temp_amp = [];
    for (var j = 0; j < 8; j++) {
      temp_amp.push(first_bezel * j);
    }
    temp_amp.push(total);
    for (var j = 9; j >= 0; j--) {
      temp_amp.push(second_bezel * j);
    }
    bezel_amps[i].setFinal_amp(temp_amp);
  }
  /*
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
  */
}
function initialize_bezel() {
  for (var i = 0; i < 2; i++) {
    bezel_amps.push(new Bezel_amp());
  }
}
function create_bezel_position() {
  bezel_amps[0].setPosition(floor(map(Math.random(), 0, 1, 0, 5)));
  var second_bezel_pos = bezel_amps[0].position;
  while (second_bezel_pos == bezel_amps[0].position) {
    second_bezel_pos = floor(map(Math.random(), 0, 1, 0, 5));
  }
  bezel_amps[1].setPosition(second_bezel_pos);
}

function use_amps() {
  update_bezel_array();

  var diameter = map(total_amp, 0, 65792, 300, 328);
  colour = map(total_amp, 0, 65792, 0, 33);
  big_dot.change_diameter(diameter);
}

function init_big_dot() {
  big_dot = new Big_dot(width / 4, height / 2);
}

function music_amps_ani() {
  get_amps();
  big_dot.show();
}
