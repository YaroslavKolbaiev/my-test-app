import ReactDOM from 'react-dom/client';
import './App.css';
import { App } from './App';
import { HashRouter } from 'react-router-dom';
import 'bulma/css/bulma.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <HashRouter>
    <App />
  </HashRouter>
);
