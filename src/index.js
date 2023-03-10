import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import NoteProvider from './context/Notes-Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <NoteProvider>

        <App />

      </NoteProvider>

    </BrowserRouter>
  </React.StrictMode>
);

