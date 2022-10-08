const PINS_URL = 'https://633c039674afaef164ffd5b9.mockapi.io/pins'

export async function getPins() {
	// return fetch(PINS_URL)
	// 	.then(response => response.json())
	// 	.catch(error => console.log(error))
	try {
		const response = await fetch(PINS_URL);
		const pins = await response.json();

		return pins;
	} catch (error) {
		console.log(error);
	}
}

export function getPin(id) {
	return fetch(`${PINS_URL}/${id}`)
		.then(response => response.json())
		.catch(error => console.log(error))
}

export async function deletePin(id) {
	// return fetch(`${PINS_URL}/${id}`, {
	// 	method: 'DELETE',
	// })
	// 	.then(response => response.json())
	// 	.catch(error => console.log(error));
	try {
		const response = await fetch(`${PINS_URL}/${id}`, {
			method: 'DELETE'
		});
		const deletedPin = await response.json();

		return deletedPin;
	} catch (error) {
		console.log(error)
	}
}