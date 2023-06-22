import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import './styles/styles.scss'
import {Context} from "./utils/Context";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Context>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Context>
);
