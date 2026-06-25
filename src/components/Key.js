export function createKey(sound) {
  const key = document.createElement("div");
  key.classList.add("piano-key");

  const note = document.createElement("span");
  note.classList.add("note");
  note.textContent = sound.note;

  const keyLabel = document.createElement("span");
  keyLabel.classList.add("key-label");
  keyLabel.textContent = `(${sound.key})`;

  key.dataset.note = sound.note;
  key.dataset.key = sound.key;

  if (sound.sharp) {
    key.classList.add("sharp");
  }

  key.append(note);
  key.append(keyLabel);

  return key;
}
