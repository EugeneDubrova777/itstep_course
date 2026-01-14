import '../scss/index.scss';
import { createRoot } from "react-dom/client";
import App from './components/App';
import TaskList from './components/TaskList';

const appElement = document.getElementById('app');
const appElement2 = document.getElementById('app-2');

const root = createRoot(appElement);
const root2 = createRoot(appElement2);

root.render(<App />);
root2.render(<TaskList />);