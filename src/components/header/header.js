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
    document.getElementById("drop").classList.toggle("show");
    document.getElementById("button-show").classList.toggle("border");
        if (!e.target.matches(".header-button-board")) {
      let myDropdown = document.getElementById("header-dropdown-content");
      if (myDropdown.classList.contains("drop")) {
        myDropdown.classList.remove("drop");
      }
    }
	}


	this.div1 = document.createElement("div");
	this.div2 = document.createElement("div");
	this.div3 = document.createElement("div");
	this.div3.classList.add('header-item');
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
		className: "header-button-board",
		id:'button-show',
	});
	this.div4.append(this.buttonBoards.rootElement);

  // Список досок
  this.dropdownBoard = document.createElement("div");
  this.dropdownBoard.id = "drop";

  this.dropdownBoard.classList.add("header-dropdown-content");
  this.div4.append(this.dropdownBoard);

	// доска 1
	this.board1 = new Button({
		label: "Доска 1",
		onClick: showBoardOne,
		id: "header-button-board1",
	});

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
  
 // window.onclick = (e) => {
 //   if (!e.target.matches(".header-button-board")) {
 //    let myDropdown = document.getElementById("header-dropdown-content");
 //     if (myDropdown.classList.contains("drop")) {
 //       myDropdown.classList.remove("drop");
 //     }
 //   }
 // };
}
