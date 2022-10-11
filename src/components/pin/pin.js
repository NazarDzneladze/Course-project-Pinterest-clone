import './pin.css';
import { Button } from '../common/button/button';

export function Pin({ id, img, avatar, nickname, remove, complain, modal }) {

	this.rootElement = document.createElement('div');
	this.rootElement.classList.add('pinterest-board__item');

	this.remove = () => {
		remove(id);
	}

	this.complain = () => {
		complain(nickname);
	}

	this.id = () => {
		modal(id);
	}


	// pin content-block start
	this.pinContentBlock = document.createElement('div');
	this.pinContentBlock.classList.add('pinterest-board__content', 'pinterest-board__content_hover');

	this.pinImg = document.createElement('img');
	this.pinImg.classList.add('img');

	this.pinHoverMenu = document.createElement('div');
	this.pinHoverMenu.classList.add('pinterest-board__hover-menu');
	this.pinImg.src = img;


	this.pinButton = document.createElement('div');
	this.pinButton.classList.add('position');
	this.pinDropdown = document.createElement('div');
	this.pinDropdown.classList.add('dropdown');
	this.pinDropBtn = new Button({ label: '...', className: 'dropbtn' });
	this.pinDropdownContent = document.createElement('div');
	this.pinDropdownContent.classList.add('dropdown-content');

	// Кнопка "Добавить пин на доску"
	this.addOnBoardBtn = new Button({ label: "Добавить на доску", onClick: this.id });
	this.addOnBoardBtn.rootElement.classList.add('btn', 'btn-info', 'menu-button');
	this.addOnBoardBtn.rootElement.setAttribute('data-bs-toggle', 'modal');
	this.addOnBoardBtn.rootElement.setAttribute('data-bs-target', '#exampleModal')
	// Кнопка "Добавить пин на доску"

	// Кнопка "Скрыть пин со страницы"
	this.hideFromBoardBtn = new Button({ label: "Скрить пин со страницы", onClick: this.remove });
	this.hideFromBoardBtn.rootElement.classList.add('btn', 'btn-info', 'menu-button');
	// Кнопка "Скрыть пин со страницы"

	// Кнопка "Пожаловаться на пин"
	this.complainBtn = new Button({ label: "Пожаловаться", className: 'menu-button', onClick: this.complain });
	this.complainBtn.rootElement.classList.add("btn", "btn-info", 'menu-button');
	this.complainBtn.rootElement.setAttribute("data-bs-toggle", "modal");
	this.complainBtn.rootElement.setAttribute("data-bs-target", "#exampleModal2");
	// Кнопка "Пожаловаться на пин"

	this.pinDropdownContent.append(this.addOnBoardBtn.rootElement, this.hideFromBoardBtn.rootElement, this.complainBtn.rootElement);
	this.pinDropdown.append(this.pinDropBtn.rootElement, this.pinDropdownContent);
	this.pinButton.append(this.pinDropdown);

	this.pinContentBlock.append(this.pinImg, this.pinHoverMenu, this.pinButton);
	// pin content-block end

	// pin info-block start
	this.pinInfoBlock = document.createElement('div');
	this.pinInfoBlock.classList.add('pinterest-board__info');

	this.pinAvatarBox = document.createElement('div');
	this.pinAvatarBox.classList.add('pinterest-board__author-avatar-box');

	this.pinAvatar = document.createElement('img');
	this.pinAvatar.classList.add('avatar');
	this.pinAvatar.src = avatar;
	this.pinAvatarBox.append(this.pinAvatar);

	this.pinNickname = document.createElement('div');
	this.pinNickname.classList.add('pinterest-board__nickname');
	this.pinNickname.innerText = nickname;

	this.pinInfoBlock.append(this.pinAvatarBox, this.pinNickname)
	// pin info-block end

	this.rootElement.append(this.pinContentBlock, this.pinInfoBlock);
}
