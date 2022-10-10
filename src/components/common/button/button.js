import "./button.css";
export function Button({ label, onClick, id = "", className }) {
	this.rootElement = document.createElement("button");
	this.rootElement.id = id;
	this.rootElement.classList.add(className);
	this.rootElement.type = "button";
	this.rootElement.innerText = label || "";
	this.rootElement.addEventListener("click", onClick);
}
