function Bezel_amp() {
  this.position;
  this.amp;
  this.final_amp;

  this.setPosition = function (position) {
    this.position = position;
  };

  this.setAmp = function (amp) {
    this.amp = amp;
  };
  this.setFinal_amp = function (final_amp) {
    this.final_amp = final_amp;
  };
}
