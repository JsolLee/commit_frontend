import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { CookiesProvider } from 'react-cookie';
import App from './App';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <CookiesProvider>
      <BrowserRouter>
        <App />
        <Footer />
      </BrowserRouter>
    </CookiesProvider>
);
