import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { I18nextProvider } from 'react-i18next';
import i18n from './lacales/i18next.js';
import { Provider } from 'react-redux';
import myStore from './redux/store.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <I18nextProvider i18n={i18n}/>
        <Provider store={myStore}>
        <App />
        < I18nextProvider/>
        </Provider>
  </StrictMode>,
)