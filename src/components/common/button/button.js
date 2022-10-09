export function Button({ label, id, onclick }) {
  this.root = document.createElement("button");
  this.root.id = id;
  this.root.innerText = label || "";
  this.root.addEventListener("click", onclick);
}
