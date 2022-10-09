import { PinsBoard } from "./pins-board/pins-board";
import { getPins, deletePin } from "./api/pins";
import { Input } from "./common/input/input";
import { Modal } from "./modal";
import { addOnBoardOne } from "./api/local-storage";


export function App() {
	this.rootElement = document.createElement('div');
	this.rootElement.classList.add('app');

	//Отрисока пинов на странице
	this.showPins = () => {
		getPins().then(data => this.pinsBoard.update({ pins: data }))
	}

	// Удалить пин(скрыть)
	this.removePin = (id) => {
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
		alert(`Ваша жалоба на пит от пользователя ${authorName} успешна отправлена!`);
	}

	
	// Открытие модального окна по добавлению пина на какую-либо из досок
	this.openModal = (id) => {
		this.modal.update(id);
	}

	this.search = new Input({ placeholder: 'Поиск...', onInput: this.search });//Добавление строки поиска
	this.pinsBoard = new PinsBoard({
		pins: [],
		removePin: this.removePin,
		complainPin: this.complainAboutPin,
		openModal: this.openModal,
	});//Добавление доски, в которой будут отрисовываться пины
	this.modal = new Modal();


	this.rootElement.append(this.search.rootElement, this.pinsBoard.rootElement, this.modal.rootElement);
}