var img;

function load_album() {
  img = loadImage("../src/Big_dot/resources/dance.png");
}

function Big_dot(x, y) {
  this.x = x;
  this.y = y;

  this.diameter = 300;

  this.show = function () {
    //circle(this.x, this.y, this.diameter);
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
    angleMode(DEGREES);

    push();
    translate(this.x + 1.7, this.y);
    rotate(90);
    beginShape();
    for (var i = 0; i < 180; i++) {
      var r = map(
        bezel_amp[i],
        0,
        6425,
        this.diameter / 2,
        this.diameter / 2 + 33
      );
      var x = r * cos(i);
      var y = r * sin(i);
      vertex(x, y);
    }
    endShape();
    pop();

    push();
    translate(this.x - 1.7, this.y);
    rotate(-90);
    beginShape();
    var counter = 0;
    for (var i = 179; i >= 0; i--) {
      var r = map(
        bezel_amp[i],
        0,
        6425,
        this.diameter / 2,
        this.diameter / 2 + 33
      );
      var x = r * cos(counter);
      var y = r * sin(counter);
      counter++;
      vertex(x, y);
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
