import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Appp.jsx';
import { BrowserRouter } from 'react-router-dom';
import './inex.css'

ReactDOM.createRoot(document.getElementById('root')).render(
 <BrowserRouter>
 <App/>
 </BrowserRouter>
);