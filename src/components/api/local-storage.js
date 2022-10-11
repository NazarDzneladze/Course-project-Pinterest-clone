
// Все функции по работе с localStorage

export function initializePinsBase() { //Создание 3-ёх досок с сохранёнными пинами,если их нет.
	if (!localStorage.getItem('pinBoard1')) {
		localStorage.setItem('pinBoard1', JSON.stringify([]));
	}

	if (!localStorage.getItem('pinBoard2')) {
		localStorage.setItem('pinBoard2', JSON.stringify([]));
	}

	if (!localStorage.getItem('pinBoard3')) {
		localStorage.setItem('pinBoard3', JSON.stringify([]));
	}
}


export function addToBoard({ pins, id, board }) {
	const addPin = pins.find(item => item.id === id);
	const currentBoard = JSON.parse(localStorage.getItem(board));

	if (currentBoard.find(item => item.id === id)) {
		alert('Такой пин уже добавлен на данную доску')
		return;
	}
	currentBoard.push(addPin);
	localStorage.setItem(board, JSON.stringify(currentBoard));
}

export function deletePinFromLocalStorage({ id }) {
	const boardOne = JSON.parse(localStorage.getItem('pinBoard1'));
	const boardTwo = JSON.parse(localStorage.getItem('pinBoard2'));
	const boardThree = JSON.parse(localStorage.getItem('pinBoard3'));

	const updatedBoardOne = boardOne.filter(item => item.id !== id);
	const updatedBoardTwo = boardTwo.filter(item => item.id !== id);
	const updatedBoardThree = boardThree.filter(item => item.id !== id);

	localStorage.setItem('pinBoard1', JSON.stringify(updatedBoardOne));
	localStorage.setItem('pinBoard2', JSON.stringify(updatedBoardTwo));
	localStorage.setItem('pinBoard3', JSON.stringify(updatedBoardThree));
}
