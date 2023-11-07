import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import {FontSizeProvider} from "./components/header/FontSizeContext";


ReactDOM.render(
    <React.StrictMode>
        <Router>
            <FontSizeProvider>
                <App />
            </FontSizeProvider>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);
