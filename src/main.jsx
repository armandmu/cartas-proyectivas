import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.jsx';
import FamilyApp from './FamilyApp.jsx';
import './style.css';
const family = new URLSearchParams(window.location.search).get('tool') === 'escultura';
createRoot(document.getElementById('root')).render(family ? <FamilyApp /> : <App />);
