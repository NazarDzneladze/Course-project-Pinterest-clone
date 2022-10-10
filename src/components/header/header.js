import "./header.css";
import { Logo } from "../logo";
import { Button } from "../common/button";
import { Input } from "../common/input";

export function Header({ search, showBoardOne, showBoardTwo, showBoardThree }) {
	this.rootElement = document.createElement("div");
	this.rootElement.classList.add("header");

	this.searcInput = (hashTag) => {
		search(hashTag)
	}

	this.mainButtonReload = () => {
		window.location.reload();
	}

	this.openBoardsMenu = () => {
		document.getElementById("header-dropdown-content").style.display = "flex";
		document.getElementById(
			this.buttonBoards.rootElement.id
		).style.borderBottomLeftRadius = "0px";
		document.getElementById(
			this.buttonBoards.rootElement.id
		).style.borderBottomRightRadius = "0px";
	}


	this.div1 = document.createElement("div");
	this.div2 = document.createElement("div");
	this.div3 = document.createElement("div");
	this.div4 = document.createElement("div");
	this.rootElement.append(this.div1, this.div2, this.div3, this.div4);

	//  Создаём лого
	this.logo = new Logo();
	this.div1.append(this.logo.rootElement);

	//  Cоздаём кнопку "главная"
	this.buttonMainPage = new Button({
		label: "Главная",
		onClick: this.mainButtonReload,
		id: "header-main-button",
	});
	this.div2.append(this.buttonMainPage.rootElement);

	// Создаём поиск
	this.input = new Input({ placeholder: "Поиск", id: "header-input", onInput: this.searcInput });
	this.div3.append(this.input.rootElement);

	// Создаём кнопку "Выбрать доску"
	this.buttonBoards = new Button({
		label: "Выбрать доску",
		onClick: this.openBoardsMenu,
		id: "header-button-board",
	});
	this.div4.append(this.buttonBoards.rootElement);

	// Список досок
	this.dropdownBoard = document.createElement("div");
	this.dropdownBoard.id = "header-dropdown-content";
	this.dropdownBoard.classList.add("MyDrop");
	this.div4.append(this.dropdownBoard);

	// доска 1
	this.board1 = new Button({
		label: "Доска 1",
		onClick: showBoardOne,
		id: "header-button-board1",
	});
	this.board1.rootElement.onclick = () => { };

	// доска 2
	this.board2 = new Button({
		label: "Доска 2",
		onClick: showBoardTwo,
		id: "header-button-board2",
	});

	// доска 3
	this.board3 = new Button({
		label: "Доска 3",
		onClick: showBoardThree,
		id: "header-button-board3",
	});

	this.dropdownBoard.append(
		this.board1.rootElement,
		this.board2.rootElement,
		this.board3.rootElement,
	);

	// this.buttonBoards.rootElement.onclick = () => {
	// 	document.getElementById("header-dropdown-content").style.display = "flex";
	// 	document.getElementById(
	// 		this.buttonBoards.rootElement.id
	// 	).style.borderBottomLeftRadius = "0px";
	// 	document.getElementById(
	// 		this.buttonBoards.rootElement.id
	// 	).style.borderBottomRightRadius = "0px";
	// };

	// this.window.root.onclick = (e) => {
	//   if (!e.target.matches(".header-button-board")) {
	//     let myDropdown = document.getElementById("header-dropdown-content");
	//     if (myDropdown.classList.contains("header-dropdown-content")) {
	//       myDropdown.classList.remove("header-dropdown-content");
	//     }
	//   }
	// };
}
