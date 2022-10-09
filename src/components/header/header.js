import "./header.css";
import { Logo } from "../logo";
import { Button } from "../common/button";
import { Input } from "../common/input";

export function Header() {
  this.root = document.createElement("div");
  this.root.classList.add("header");

  this.div1 = document.createElement("div");
  this.div2 = document.createElement("div");
  this.div3 = document.createElement("div");
  this.div4 = document.createElement("div");
  this.root.append(this.div1, this.div2, this.div3, this.div4);

  //  Создаём лого
  this.logo = new Logo();
  this.div1.append(this.logo.root);

  //  Cоздаём кнопку "главная"
  this.buttonMainPage = new Button({
    label: "Главная",
    id: "header-main-button",
    onclick: this.root,
  });
  this.div2.append(this.buttonMainPage.root);
  this.buttonMainPage.root.onclick = () => {
    window.location.reload();
  };

  // Создаём поиск
  this.input = new Input({ placeholder: "Поиск", id: "header-input" });
  this.div3.append(this.input.root);

  // Создаём кнопку "Выбрать доску"
  this.buttonBoards = new Button({
    label: "Выбрать доску",
    id: "header-button-board",
    onclick: this.root,
  });
  this.div4.append(this.buttonBoards.root);

  // Список досок
  this.dropdownBoard = document.createElement("div");
  this.dropdownBoard.id = "header-dropdown-content";
  this.dropdownBoard.classList.add("MyDrop");
  this.div4.append(this.dropdownBoard);

  // доска 1
  this.board1 = new Button({
    label: "Доска 1",
    id: "header-button-board1",
    onclick: this.root,
  });
  this.board1.root.onclick = () => {};

  // доска 2
  this.board2 = new Button({
    label: "Доска 2",
    id: "header-button-board2",
    onclick: this.root,
  });

  // доска 3
  this.board3 = new Button({
    label: "Доска 3",
    id: "header-button-board3",
    onclick: this.root,
  });

  this.dropdownBoard.append(
    this.board1.root,
    this.board2.root,
    this.board3.root
  );

  this.buttonBoards.root.onclick = () => {
    document.getElementById("header-dropdown-content").style.display = "flex";
    document.getElementById(
      this.buttonBoards.root.id
    ).style.borderBottomLeftRadius = "0px";
    document.getElementById(
      this.buttonBoards.root.id
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
