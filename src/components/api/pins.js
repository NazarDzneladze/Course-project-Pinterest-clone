const PINS_URL = 'https://633c039674afaef164ffd5b9.mockapi.io/pins'

export async function getPins() {
	try {
		const response = await fetch(PINS_URL);
		const pins = await response.json();

		return pins;
	} catch (error) {
		console.log(error);
	}
}

export async function deletePin(id) {
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