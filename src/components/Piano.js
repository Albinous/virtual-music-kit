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

  piano.addEventListener("mousedown", handleMouseDown);

  document.addEventListener("mouseup", handleMouseUp);

  return piano;
}

let activeMouseKey = null;
let activeKeyboardKey = null;

const getPianoKey = (letter) => {
  return document.querySelector(`.piano-key[data-code=${letter}]`);
};

const playKey = (key) => {
  if (!key) return;

  activeMouseKey = key;

  const note = key.dataset.note;
  if (note) {
    playSound(note);
  }
  addActiveKey(key);
};

const handleMouseDown = (event) => {
  playKey(event.target.closest(".piano-key"));
};

const handleMouseUp = (event) => {
  if (!activeMouseKey) return;

  removeActiveKey(activeMouseKey);
  activeMouseKey = null;
};

const handleKeyDown = (event) => {
  const pianoKey = getPianoKey(event.code);
  if (event.repeat) return;
  if (activeKeyboardKey) return;

  activeKeyboardKey = pianoKey;

  playKey(pianoKey);
};

const handleKeyUp = (event) => {
  if (!activeKeyboardKey) return;

  removeActiveKey(activeKeyboardKey);
  activeKeyboardKey = null;
};

const addActiveKey = (key) => {
  key.classList.add("piano-key-active");
};

const removeActiveKey = (key) => {
  key.classList.remove("piano-key-active");
};

document.addEventListener("keydown", handleKeyDown);

document.addEventListener("keyup", handleKeyUp);
