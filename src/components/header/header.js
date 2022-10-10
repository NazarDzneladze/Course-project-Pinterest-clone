import "./header.css";
import { Logo } from "../logo";
import { Button } from "../common/button";
import { Input } from "../common/input";

export function Header() {
  this.rootElement = document.createElement("div");
  this.rootElement.classList.add("header");

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
    onclick: this.rootElement,
    id: "header-main-button",
  });
  this.div2.append(this.buttonMainPage.rootElement);
  this.buttonMainPage.rootElement.onclick = () => {
    window.location.reload();
  };

  // Создаём поиск
  this.input = new Input({ placeholder: "Поиск", id: "header-input" });
  this.div3.append(this.input.rootElement);

  // Создаём кнопку "Выбрать доску"
  this.buttonBoards = new Button({
    label: "Выбрать доску",
    onclick: this.rootElement,
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
    onclick: this.rootElement,
    id: "header-button-board1",
  });
  this.board1.rootElement.onclick = () => {};

  // доска 2
  this.board2 = new Button({
    label: "Доска 2",
    onclick: this.rootElement,
    id: "header-button-board2",
  });

  // доска 3
  this.board3 = new Button({
    label: "Доска 3",
    onclick: this.rootElement,
    id: "header-button-board3",
  });

  this.dropdownBoard.append(
    this.board1.root,
    this.board2.root,
    this.board3.root
  );

  this.buttonBoards.rootElement.onclick = () => {
    document.getElementById("header-dropdown-content").style.display = "flex";
    document.getElementById(
      this.buttonBoards.rootElement.id
    ).style.borderBottomLeftRadius = "0px";
    document.getElementById(
      this.buttonBoards.rootElement.id
    ).style.borderBottomRightRadius = "0px";
  };

  // this.window.root.onclick = (e) => {
  //   if (!e.target.matches(".header-button-board")) {
  //     let myDropdown = document.getElementById("header-dropdown-content");
  //     if (myDropdown.classList.contains("header-dropdown-content")) {
  //       myDropdown.classList.remove("header-dropdown-content");
  //     }
  //   }
  // };
}
