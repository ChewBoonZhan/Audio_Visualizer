var fft = new p5.FFT(0.5, 512);
var total_amp;
var final_amp = [];

function get_amps() {
  final_amp = fft.analyze();
  final_amp = final_amp.slice(1, 257);

  total_amp = final_amp.reduce(function (a, b) {
    return a + b;
  });

  use_amps();
}
