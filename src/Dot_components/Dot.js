var length = 20;
var diameter = 10;
function Dot(x, y) {
  this.dot_x = x;
  this.dot_y = y;
  this.history = [];

  this.setLength = function (lengths) {
    length = lengths;
  };

  this.move = function (dx, dy) {
    if (this.history.length > length) {
      this.history.shift();
    }
    this.history.push([this.dot_x, this.dot_y]);

    this.dot_x += dx;
    this.dot_y += dy;
  };

  this.move_to = function (new_x, new_y) {
    if (this.history.length > length) {
      this.history.shift();
    }

    this.history.push([this.dot_x, this.dot_y]);
    this.dot_x = new_x;
    this.dot_y = new_y;
  };

  this.show = function () {
    fill("white");
    for (var i = 0; i < this.history.length; i++) {
      circle(this.history[i][0], this.history[i][1], diameter);
    }
    circle(this.dot_x, this.y, diameter);
  };
}
