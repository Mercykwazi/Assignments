import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import Business from './components/forms/business';
import Location from './components/forms/location';
import UnitType from './components/forms/unit-type';
import BusinessDetails from './information/viewBusinessDetails';
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from 'axios';
import './index.css';

const app = document.getElementById("root")
ReactDOM.render(
    <Provider store={store}>
    <Router>
        <div>
        <Route exact path='/' component={Business}/>
        <Route path='/location' component={Location}/>
        <Route path='/unit-type' component={UnitType}/>
        <Route path='/business-details' component={BusinessDetails}/>
        </div>
        </Router>
    </Provider>, app);

