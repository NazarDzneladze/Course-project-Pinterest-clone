export function Button({ label, onClick, className }) {

	this.rootElement = document.createElement('button');
	this.rootElement.type = 'button';
	this.rootElement.classList.add(className);
	this.rootElement.innerText = label || '';
	this.rootElement.addEventListener('click', onClick);
	
}
