import "./index.css";
import { App } from "./components";

const root = document.getElementById("root");
const app = new App();

root.append(app.rootElement);
