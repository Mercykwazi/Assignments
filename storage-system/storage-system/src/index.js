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
import './index.css';
import ViewBlocks from './components/forms/view-blocks';
import Units from './components/forms/units';
import Welcome from './components/welcome';
import SignUp from './components/customer/sign-up';
import ViewUnits from './components/customer/available-units';

const app = document.getElementById("root")
ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div>
                <Route exact path='/' component={Welcome} />
                <Route exact path='/business' component={props => <Business  {...props} />} />
                <Route path='/view-business' component={ViewBusiness} />
                <Route path='/location' component={Location} />
                <Route path='/unit-type' component={UnitType} />
                <Route path='/blocks' component={Block} />
                <Route path='/view-blocks' component={ViewBlocks} />
                <Route path='/units' component={Units} />
                <Route path='/sign-up' component={SignUp} />
                <Route path='/view-units' component={ViewUnits} />
            </div>
        </Router>
    </Provider>, app);

