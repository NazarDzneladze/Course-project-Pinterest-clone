export function Button({ label, onclick, id, className }) {
  this.rootElement = document.createElement("button");
  this.rootElement.id = id;
  this.rootElement.classList.add(className);
  this.rootElement.type = "button";
  this.rootElement.innerText = label || "";
  this.rootElement.addEventListener("click", onclick);

