import { Header } from "./header";
import { PinsBoard } from "./pins-board/pins-board";
import { getPins, deletePin } from "./api/pins";
import { Modal } from "./modal";
import { deletePinFromLocalStorage } from "./api/local-storage";
import { Modal2 } from "./modal2/modal";

export function App() {
	this.rootElement = document.createElement('div');
	this.rootElement.classList.add('app');

	//Отрисока пинов на странице
	this.showPins = () => {
		getPins().then(data => this.pinsBoard.update({ pins: data }))
	}

	// Удалить пин(скрыть)
	this.removePin = (id) => {
		deletePinFromLocalStorage({ id: id })
		deletePin(id).then(this.showPins);
	}


	// Поиск по хэштегу
	this.search = (hashTag) => {
		if (hashTag === '') {
			this.showPins();
		} else {
			getPins().then(data => this.pinsBoard.searchByHashTag({ hashTag: hashTag, pins: data }))
		}
	}

	// Пожаловаться на пин
	this.complainAboutPin = (authorName) => {
		this.modal2.update(authorName);
	}

	// Открытие модального окна по добавлению пина на какую-либо из досок
	this.openModal = (id) => {
		this.modal.update(id);
	}

	this.boardOne = () => {
		this.pinsBoard.renderBoardOne();
	}

	this.boardTwo = () => {
		this.pinsBoard.renderBoardTwo();
	}

	this.boardThree = () => {
		this.pinsBoard.renderBoardThree();
	}



	this.pinsBoard = new PinsBoard({
		pins: [],
		removePin: this.removePin,
		complainPin: this.complainAboutPin,
		openModal: this.openModal,
	});//Добавление доски, в которой будут отрисовываться пины

	this.modal = new Modal();//Добавили код модального окна
	this.modal2 = new Modal2({ sendComplainBtn: this.complainAboutPin });

	// создаём шапку
	this.header = new Header({
		search: this.search,
		showBoardOne: this.boardOne,
		showBoardTwo: this.boardTwo,
		showBoardThree: this.boardThree,
	});


	this.rootElement.append(this.header.rootElement, this.pinsBoard.rootElement, this.modal.rootElement, this.modal2.rootElement);
}
