var img;

function load_album() {
  img = loadImage("../src/Big_dot/resources/dance.png");
}

function Big_dot(x, y) {
  this.x = x;
  this.y = y;

  this.diameter = 300;

  this.show = function () {
    //fill("rgb(122, 174, 255)");
    fill("white");
    circle(this.x, this.y, this.diameter);
    this.show_side_bezel();
    image(
      img,
      this.x - (this.diameter - 10) / 2,
      this.y - (this.diameter - 10) / 2,
      this.diameter - 10,
      this.diameter - 10
    );
  };

  this.show_side_bezel = function () {
    //fill("rgb(122, 174, 255)");
    angleMode(DEGREES);

    push();
    translate(this.x + 1.7, this.y);
    rotate(90);
    beginShape();
    for (var j = 0; j < 2; j++) {
      for (var i = 0; i < 18; i++) {
        var r = map(
          bezel_amps[j].final_amp[i],
          0,
          6425,
          (this.diameter - 3.1) / 2,
          (this.diameter - 3.1) / 2 + 35
        );
        var x = r * cos(i + 18 * bezel_amps[j].position);
        var y = r * sin(i + 18 * bezel_amps[j].position);
        vertex(x, y);
      }
    }

    endShape();
    pop();

    push();
    translate(this.x - 1.7, this.y);
    rotate(-90);
    beginShape();
    for (var j = 0; j < 2; j++) {
      for (var i = 0; i < 18; i++) {
        var r = map(
          bezel_amps[j].final_amp[i],
          0,
          6425,
          (this.diameter - 3.1) / 2,
          (this.diameter - 3.1) / 2 + 35
        );
        var temp_pos = map(bezel_amps[j].position, 0, 8, 8, 0) + 0.8;

        var x = r * cos(i + 18 * temp_pos);
        var y = r * sin(i + 18 * temp_pos);
        vertex(x, y);
      }
    }

    endShape();
    pop();
  };

  this.change_diameter = function (diameter) {
    this.diameter = diameter;
  };

  this.change_x = function (x) {
    this.x = x;
  };
  this.change_y = function (y) {
    this.y = y;
  };
}
