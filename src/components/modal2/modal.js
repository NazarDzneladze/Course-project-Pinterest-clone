import { Button } from "../common/button";

export function Modal2() {
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

  this.modalCheck1 = document.createElement("input");
  this.modalCheck1.type = "checkbox";
  this.modalCheck1.innerText = "Спам";

  this.modalCheck2 = document.createElement("input");
  this.modalCheck2.type = "checkbox";
  this.modalCheck2.innerText = "Изображения обнажённого тела или порнография";

  this.modalCheck3 = document.createElement("input");
  this.modalCheck3.type = "checkbox";
  this.modalCheck3.innerText = "Членовредительство";

  this.modalCheck4 = document.createElement("input");
  this.modalCheck4.type = "checkbox";
  this.modalCheck4.innerText = "Ложная информация";

  this.modalCheck5 = document.createElement("input");
  this.modalCheck5.type = "checkbox";
  this.modalCheck5.innerText = "Агрессивные действия";

  this.modalCheck6 = document.createElement("input");
  this.modalCheck6.type = "checkbox";
  this.modalCheck6.innerText = "Опасные товары";

  this.modalCheck7 = document.createElement("input");
  this.modalCheck7.type = "checkbox";
  this.modalCheck7.innerText = "Сцены насилия";

  this.modalCheck8 = document.createElement("input");
  this.modalCheck8.type = "checkbox";
  this.modalCheck8.innerText = "Это моя интеллектуальная собственность";

  this.modalBody.append(
    this.modalCheck1,
    this.modalCheck2,
    this.modalCheck3,
    this.modalCheck4,
    this.modalCheck5,
    this.modalCheck6,
    this.modalCheck7,
    this.modalCheck8
  );

  this.modalFooter = document.createElement("div");
  this.modalFooter.classList.add("modal-footer");

  this.buttonCancel = new Button({
    label: "Отмена",
    className: "button-modal-cancel",
  });
  this.buttonOwnward = new Button({
    label: "Далее",
    className: "button-modal-ownward",
  });

  this.buttonsBox.append(
    this.buttonCancel.rootElement,
    this.buttonOwnward.rootElement
  );

  this.modalBody.append(this.buttonsBox);
  this.modalHeader.append(this.modalTitle, this.modalBtn.rootElement);
  this.modalContent.append(this.modalHeader, this.modalBody);
  this.modalDialog.append(this.modalContent);

  this.rootElement.append(this.modalDialog);
}
