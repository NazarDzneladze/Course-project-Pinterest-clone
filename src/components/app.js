import { Header } from "./header";

export function App() {
  this.rootElement = document.createElement("div");
  this.rootElement.classList.add("app");

  // создаём шапку
  this.header = new Header();

  this.rootElement.append(this.header.root);
}
