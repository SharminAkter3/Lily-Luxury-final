import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { StateProvider } from './state/stateProvider';
import reducer, { initialState } from './state/reducer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StateProvider reducer={reducer} initialState={initialState}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </StateProvider>
);

