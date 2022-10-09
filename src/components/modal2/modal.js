export function Modal2() {
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
  this.modalTitle.innerText = "Пожаловаться на пин";

  this.modalBtn = new Button({ className: "btn-close" });
  this.modalBtn.rootElement.setAttribute("data-bs-dismiss", "modal");
  this.modalBtn.rootElement.setAttribute("aria-label", "Close");

  this.modalBody = document.createElement("div");
  this.modalBody.classList.add("modal-body");

  this.modalFooter = document.createElement("div");
  this.modalFooter.classList.add("modal-footer");

  this.buttonBoardOne = new Button({ label: "доска1" });
  this.buttonBoardTwo = new Button({ label: "доска2" });
  this.buttonBoardThree = new Button({ label: "доска3" });

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
