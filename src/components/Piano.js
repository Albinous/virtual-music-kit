import { createKey } from "./Key";
import { sounds } from "../data/sounds";

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

  return piano;
}
