import { sounds } from "../data/sounds";

const audioMap = {};

sounds.forEach((sound) => {
  audioMap[sound.note] = new Audio(`../src/assets/audio/${sound.file}.mp3`);
});

export function playSound(note) {
  const audio = audioMap[note];
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
}
