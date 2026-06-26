import { createKey } from "./Key";
import { sounds } from "../data/sounds";
import { playSound } from "../utils/playSound";

export function createPiano() {
  const piano = document.createElement("div");
  piano.classList.add("piano");
  const whiteKeys = document.createElement("div");
  whiteKeys.classList.add("white-keys");
  const keysSharp = document.createElement("div");
  keysSharp.classList.add("keys-sharp");

  sounds.forEach((sound) => {
    const key = createKey(sound);
    if (sound.sharp) {
      keysSharp.append(key);

      if (sound.note === "D#") {
        const emptyKeySharp = document.createElement("div");
        emptyKeySharp.className = "piano-key sharp none";
        keysSharp.append(emptyKeySharp);
      }
    } else {
      whiteKeys.append(key);
    }
  });

  piano.append(whiteKeys);
  piano.append(keysSharp);

  piano.addEventListener("click", (event) => {
    handleKeyClick(event);
  });

  return piano;
}

const handleKeyClick = (event) => {
  const key = event.target.closest(".piano-key");
  if (!key) return;

  const note = key.dataset.note;
  if (note) {
    playSound(note);
  }
};

const handleKeyDown = (event) => {
  const key = event.key.toUpperCase();
  const pianoKey = document.querySelector(`.piano-key[data-key=${key}]`);
  if (!pianoKey) return;
  playSound(pianoKey.dataset.note);
};

document.addEventListener("keydown", handleKeyDown);
