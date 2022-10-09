export function Input({ type = 'text', value = '', placeholder, onInput,id }) {
	this.rootElement = document.createElement('input');
	this.rootElement.placeholder = placeholder;
  this.rootElement.id = id;
	this.update = () => {
		onInput(this.rootElement.value);
	}

	// this.rootElement.oninput = this.update;
	this.rootElement.addEventListener('input', this.update)
}

