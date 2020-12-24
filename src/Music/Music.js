var song;
var button;
function preload() {
  load_album();
  song = loadSound("../src/Music/resources/dance.mp3");
  init_dots();
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
  }
}
