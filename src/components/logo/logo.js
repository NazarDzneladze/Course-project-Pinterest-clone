import "./logo.css";

export function Logo() {
  this.rootElement = document.createElement("button");
  this.rootElement.classList.add("header-logo");

  this.a = document.createElement("a");
  this.a.href = "#";
  this.rootElement.append(this.a);

  this.img = document.createElement("img");
  this.img.src =
    "https://cdn.icon-icons.com/icons2/808/PNG/512/pinterest_icon-icons.com_66097.png";
  this.img.classList.add("header-logo-img");
  this.a.append(this.img);
}
