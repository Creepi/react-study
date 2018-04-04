import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route} from "react-router";
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import Layout from './components/Layout';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={Layout}>

        </Route>
    </Router>,
     document.getElementById('root')
);
registerServiceWorker();
