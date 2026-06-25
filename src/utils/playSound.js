export function playSound(note) {
  const audio = new Audio();
  const filename = note.replace("#", "s");
  audio.src = `../src/assets/audio/${filename.toLowerCase()}.mp3`;
  audio.currentTime = 0;
  audio.play();
}
