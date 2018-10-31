import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import Business from './components/forms/business';
import Location from './components/forms/location';
import UnitType from './components/forms/unit-type';
import Block from './components/forms/block';
import { BrowserRouter as Router, Route } from "react-router-dom";
import ViewBusiness from './components/forms/view-business'
import axios from 'axios';
import './index.css';
import ViewBlocks from './components/forms/view-blocks'

const app = document.getElementById("root")
ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div>
                <Route exact path='/' component={Business} />
                <Route path='/view-business' component={ViewBusiness} />
                <Route path='/location' component={Location} />
                <Route path='/unit-type' component={UnitType} />
                <Route path='/blocks' component={Block} />
                <Route path='/view-blocks' component={ViewBlocks} />
                
                
            </div>
        </Router>
    </Provider>, app);

