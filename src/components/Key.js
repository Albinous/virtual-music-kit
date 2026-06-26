export function createKey(sound) {
  const key = document.createElement("div");
  key.classList.add("piano-key");

  const note = document.createElement("span");
  note.classList.add("note");
  note.textContent = sound.note;

  const keyLabel = document.createElement("span");
  keyLabel.classList.add("key-label");
  keyLabel.textContent = `(${sound.code.slice(3)})`;

  key.dataset.note = sound.note;
  key.dataset.code = sound.code;

  if (sound.sharp) {
    key.classList.add("sharp");
  }

  const editBtn = document.createElement("button");
  editBtn.classList.add("edit-key__btn");

  key.append(note);
  key.append(keyLabel);
  key.append(editBtn);

  return key;
}
