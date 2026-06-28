import { sounds } from "../data/sounds";

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
  key.dataset.code = sound.code;

  if (sound.sharp) {
    key.classList.add("sharp");
  }

  const inputKey = document.createElement("input");
  inputKey.classList.add("key-input");
  inputKey.value = sound.key;
  inputKey.hidden = true;

  const editBtn = document.createElement("button");
  editBtn.classList.add("edit-key__btn");

  key.append(note, keyLabel, inputKey, editBtn);

  editBtn.addEventListener("click", () => {
    startEdit(keyLabel, inputKey);
  });

  inputKey.addEventListener("keydown", (event) => {
    if (event.key !== "Enter") return;
    finishEdit(keyLabel, inputKey, sound);
  });

  return key;
}

const startEdit = (span, input) => {
  span.hidden = true;
  input.hidden = false;
  input.focus();
  input.select();
};

const finishEdit = (span, input, sound) => {
  const value = input.value.toUpperCase();

  // проверяем, чтобы пользователь не мог ввести две одинаковых клавиши, не используются ли
  // они где то еще
  const isUsed = sounds.some((item) => item !== sound && item.key === value);

  if (isUsed) return;
  if (!/^[A-Z]$/.test(value)) return;

  const pianoKey = span.closest(".piano-key");

  sound.key = value;
  sound.code = `Key${value}`;
  pianoKey.dataset.code = sound.code;
  span.textContent = `(${value})`;
  span.hidden = false;
  input.hidden = true;
};
