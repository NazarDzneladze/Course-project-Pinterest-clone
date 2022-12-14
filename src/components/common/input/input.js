import "./input.css";
export function Input({ type = 'text', value = '', placeholder, onInput, id }) {
	this.rootElement = document.createElement('input');
	this.rootElement.placeholder = placeholder;
	this.rootElement.id = id;
	this.update = () => {
		onInput(this.rootElement.value);
	}
  this.rootElement.addEventListener("input", this.update);
}
