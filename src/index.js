import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route} from "react-router";
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import Layout from './components/Layout';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <BrowserRouter>
        <Route path="/" component={Layout}>

        </Route>
    </BrowserRouter>,
     document.getElementById('root')
);
registerServiceWorker();
