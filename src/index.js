import './index.css';
import { App } from "./components";
import { initializePinsBase } from "./components/api/local-storage";

const root = document.getElementById('root');
const app = new App();
root.append(app.rootElement);

app.showPins();
initializePinsBase();

