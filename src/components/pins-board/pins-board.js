import './pins-board.css';
import { Pin } from '../pin/pin';

export function PinsBoard({ pins, removePin, complainPin, hashTag, openModal }) {
	this.rootElement = document.createElement('div');
	this.rootElement.classList.add('pinterest-board');

	this.update = ({ pins }) => {
		this.rootElement.innerHTML = '';

		if (Array.isArray(pins)) {
			pins.forEach(pin => {
				const pinItem = new Pin({
					id: pin.id,
					img: pin.img,
					avatar: pin.authorAvatar,
					nickname: pin.authorName,
					remove: removePin,
					complain: complainPin,
					modal: openModal,
				})
				this.rootElement.append(pinItem.rootElement);
			})
		}
	}


	this.searchByHashTag = ({ hashTag, pins }) => {
		this.rootElement.innerHTML = '';
		const search = pins.filter(item => item.hashTag === hashTag);
		this.update({ pins: search })
	}

	this.renderBoardOne = () => {
		const board = JSON.parse(localStorage.getItem('pinBoard1'));
		this.update({ pins: board });
	}

	this.renderBoardTwo = () => {
		const board = JSON.parse(localStorage.getItem('pinBoard2'));
		this.update({ pins: board });
	}

	this.renderBoardThree = () => {
		const board = JSON.parse(localStorage.getItem('pinBoard3'));
		this.update({ pins: board });
	}

}