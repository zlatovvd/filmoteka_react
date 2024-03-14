import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { App } from './components/App';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import { store } from './redux/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename='filmoteka_react'>
        <App />
      </BrowserRouter>
    </Provider>
  // </React.StrictMode>
);
