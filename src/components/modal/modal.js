import "./modal.css";
import { Button } from "../common/button/button";
import { addToBoard } from "../api/local-storage";
import { getPins } from "../api/pins";

export function Modal() {
  this.update = (id) => {
    this.id = id;
    console.log(this.id);
  };

  this.addToBoardOne = () => {
    getPins().then((data) =>
      addToBoard({ pins: data, id: this.id, board: "pinBoard1" })
    );
  };

  this.addToBoardTwo = () => {
    getPins().then((data) =>
      addToBoard({ pins: data, id: this.id, board: "pinBoard2" })
    );
  };

  this.addToBoardThree = () => {
    getPins().then((data) =>
      addToBoard({ pins: data, id: this.id, board: "pinBoard3" })
    );
  };

  this.rootElement = document.createElement("div");
  this.rootElement.classList.add("modal", "fade");
  this.rootElement.id = "exampleModal";
  this.rootElement.tabIndex = "-1";
  this.rootElement.ariaHidden = "true";
  this.rootElement.setAttribute("aria-labelledby", "exampleModalLabel");

  this.modalDialog = document.createElement("div");
  this.modalDialog.classList.add("modal-dialog");

  this.modalContent = document.createElement("div");
  this.modalContent.classList.add("modal-content");

  this.modalHeader = document.createElement("div");
  this.modalHeader.classList.add("modal-header");

  this.modalTitle = document.createElement("h1");
  this.modalTitle.classList.add("modal-title", "fs-5");
  this.modalTitle.id = "exampleModalLabel";
  this.modalTitle.innerText = "Выберите доску";

  this.modalBtn = new Button({ className: "btn-close" });
  this.modalBtn.rootElement.setAttribute("data-bs-dismiss", "modal");
  this.modalBtn.rootElement.setAttribute("aria-label", "Close");

  this.modalBody = document.createElement("div");
  this.modalBody.classList.add("modal-body");

  this.buttonsBox = document.createElement("div");
  this.buttonsBox.style.display = "flex";
  this.buttonsBox.style.flexDirection = "column";

  this.buttonBoardOne = new Button({
    label: "Доска 1",
    className: "board",
    onClick: this.addToBoardOne,
  });
  this.buttonBoardTwo = new Button({
    label: "Доска 2",
    className: "board",
    onClick: this.addToBoardTwo,
  });
  this.buttonBoardThree = new Button({
    label: "Доска 3",
    className: "board",
    onClick: this.addToBoardThree,
  });

  this.buttonsBox.append(
    this.buttonBoardOne.rootElement,
    this.buttonBoardTwo.rootElement,
    this.buttonBoardThree.rootElement
  );

  this.modalBody.append(this.buttonsBox);
  this.modalHeader.append(this.modalTitle, this.modalBtn.rootElement);
  this.modalContent.append(this.modalHeader, this.modalBody);
  this.modalDialog.append(this.modalContent);

  this.rootElement.append(this.modalDialog);
}
