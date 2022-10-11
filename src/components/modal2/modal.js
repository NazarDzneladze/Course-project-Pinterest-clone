import { Button } from "../common/button";

export function Modal2({ sendComplainBtn }) {

	this.update = (nickname) => {
		this.nickname = nickname;
	}

	this.sendInfo = () => {
		alert(`Жалоба на пин от пользователя ${this.nickname} успешна отпраавлена`);
	}
	this.rootElement = document.createElement("div");
	this.rootElement.classList.add("modal", "fade");
	this.rootElement.id = "exampleModal2";
	this.rootElement.tabIndex = "-1";
	this.rootElement.ariaHidden = "true";
	this.rootElement.setAttribute("aria-labelledby", "exampleModalLabel2");

	this.modalDialog = document.createElement("div");
	this.modalDialog.classList.add("modal-dialog");

	this.modalContent = document.createElement("div");
	this.modalContent.classList.add("modal-content");

	this.modalHeader = document.createElement("div");
	this.modalHeader.classList.add("modal-header");

	this.modalTitle = document.createElement("h1");
	this.modalTitle.classList.add("modal-title", "fs-5");
	this.modalTitle.id = "exampleModalLabel2";
	this.modalTitle.innerText = "Пожаловаться на пин";

	this.modalBtn = new Button({ className: "btn-close" });
	this.modalBtn.rootElement.setAttribute("data-bs-dismiss", "modal");
	this.modalBtn.rootElement.setAttribute("aria-label", "Close");

	this.modalBody = document.createElement("div");
	this.modalBody.classList.add("modal-body");

	// Первый чекбокс
	this.firstCheckbox = document.createElement('div');
	this.firstLabel = document.createElement('label');
	this.modalCheck1 = document.createElement("input");
	this.modalCheck1.type = "checkbox";
	this.firstLabel.innerText = "Спам";
	this.firstCheckbox.append(this.modalCheck1, this.firstLabel);
	// Первый чекбокс


	// Второй чекбокс
	this.secondCheckbox = document.createElement('div');
	this.secondLabel = document.createElement('label');
	this.modalCheck2 = document.createElement("input");
	this.modalCheck2.type = "checkbox";
	this.secondLabel.innerText = "Изображения обнажённого тела или порнография";
	this.secondCheckbox.append(this.modalCheck2, this.secondLabel);
	// Второй чекбокс

	// Третий чекбокс
	this.thirdCheckbox = document.createElement('div');
	this.thirdLabel = document.createElement('label');
	this.modalCheck3 = document.createElement("input");
	this.modalCheck3.type = "checkbox";
	this.thirdLabel.innerText = "Членовредительство";
	this.thirdCheckbox.append(this.modalCheck3, this.thirdLabel);
	// Третий чекбокс

	// Четвертый чекбокс
	this.fourthCheckbox = document.createElement('div');
	this.fourthLabel = document.createElement('label');
	this.modalCheck4 = document.createElement("input");
	this.modalCheck4.type = "checkbox";
	this.fourthLabel.innerText = "Ложная информация";
	this.fourthCheckbox.append(this.modalCheck4, this.fourthLabel);
	// Четвертый чекбокс

	// Пятый чекбокс
	this.fifthCheckbox = document.createElement('div');
	this.fifthLabel = document.createElement('label');
	this.modalCheck5 = document.createElement("input");
	this.modalCheck5.type = "checkbox";
	this.fifthLabel.innerText = "Агрессивные действия";
	this.fifthCheckbox.append(this.modalCheck5, this.fifthLabel);
	// Пятый чекбокс

	// Шестой чекбокс
	this.sixthCheckbox = document.createElement('div');
	this.sixthLabel = document.createElement('label');
	this.modalCheck6 = document.createElement("input");
	this.modalCheck6.type = "checkbox";
	this.sixthLabel.innerText = "Опасные товары";
	this.sixthCheckbox.append(this.modalCheck6, this.sixthLabel);
	// Шестой чекбокс

	// Седьмой чекбокс
	this.seventhCheckbox = document.createElement('div');
	this.seventhLabel = document.createElement('label');
	this.modalCheck7 = document.createElement("input");
	this.modalCheck7.type = "checkbox";
	this.seventhLabel.innerText = "Сцены насилия";
	this.seventhCheckbox.append(this.modalCheck7, this.seventhLabel);
	// Седьмой чекбокс

	// Восьмой чекбокс
	this.eighthCheckbox = document.createElement('div');
	this.eighthLabel = document.createElement('label');
	this.modalCheck8 = document.createElement("input");
	this.modalCheck8.type = "checkbox";
	this.eighthLabel.innerText = "Это моя интеллектуальная собственность";
	this.eighthCheckbox.append(this.modalCheck8, this.eighthLabel);
	// Восьмой чекбокс


	this.modalBody.append(
		this.firstCheckbox,
		this.secondCheckbox,
		this.thirdCheckbox,
		this.fourthCheckbox,
		this.fifthCheckbox,
		this.sixthCheckbox,
		this.seventhCheckbox,
		this.eighthCheckbox,
	);


	this.modalFooter = document.createElement("div");
	this.modalFooter.classList.add("modal-footer");

	this.buttonCancel = new Button({
		label: "Отмена",
	});
	this.buttonCancel.rootElement.classList.add('btn', 'btn-secondary');
	this.buttonCancel.rootElement.setAttribute('data-bs-dismiss', 'modal');

	this.buttonOwnward = new Button({
		label: "Далее",
		onClick: this.sendInfo,
	});
	this.buttonOwnward.rootElement.classList.add('btn', 'btn-primary');

	this.buttonsBox = document.createElement('div');

	this.buttonsBox.append(
		this.buttonCancel.rootElement,
		this.buttonOwnward.rootElement,
	);

	this.modalBody.append(this.buttonsBox);
	this.modalHeader.append(this.modalTitle, this.modalBtn.rootElement);
	this.modalContent.append(this.modalHeader, this.modalBody);
	this.modalDialog.append(this.modalContent);

	this.rootElement.append(this.modalDialog);
}
