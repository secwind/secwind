import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


import { BrowserRouter  as Router, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux';

import store from './store';
import ClientsPanel from "./Router/ClientsPanel";
import Test from './Test';


    const app = document.getElementById('root');


ReactDOM.render( 
    <Provider store={store}>
        <Router>
            <div>
            <App/>

            </div>
        </Router>
     </Provider>
    , app
);
registerServiceWorker();

