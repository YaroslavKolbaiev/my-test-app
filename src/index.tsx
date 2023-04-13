import ReactDOM from 'react-dom/client';
import { App } from './App';
import { HashRouter } from 'react-router-dom';
import 'bulma/css/bulma.css';
import store from './store/store';
import { Provider } from 'react-redux';
import './App.scss';
import '@fortawesome/fontawesome-free/css/all.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
);
