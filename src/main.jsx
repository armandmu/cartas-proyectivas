import React from 'react';
import {createRoot} from 'react-dom/client';
import './style.css';
const isFamily = new URLSearchParams(window.location.search).get('tool') === 'escultura';
const moduleLoader = isFamily ? import('./FamilyApp.jsx') : import('./App.jsx');
moduleLoader.then(({default: App}) => {
  createRoot(document.getElementById('root')).render(<App />);
});
