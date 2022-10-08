
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


// export  function addOnBoardOne({ pins, id }) {
// 	const addPin = pins.find(item => item.id === id);
// 	console.log(addPin)
// 	const pinsOfBoardOne = JSON.parse(localStorage.getItem('pinBoard1'));
// 	if (pinsOfBoardOne.find(item => item.id === id)) {
// 		return;
// 	}
// 	pinsOfBoardOne.push(addPin);
// 	localStorage.setItem('pinBoard1', JSON.stringify(pinsOfBoardOne));
// }