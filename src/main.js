import "./styles/style.scss";
import { createPiano } from "./components/Piano";

const initHeader = () => {
  const header = document.createElement("header");
  header.classList.add("header");
  const title = document.createElement("h1");
  title.textContent = "Virtual Music Kit";
  header.append(title);
  return header;
};

const header = initHeader();
const piano = createPiano();
document.body.append(header);
document.body.append(piano);
