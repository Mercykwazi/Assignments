import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Redirect } from 'react-router';
import store from './store/store';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Business from './components/business/forms/business';
import Location from './components/business/forms/location';
import UnitType from './components/business/forms/unit-type';
import Block from './components/business/forms/block';
import ViewBusiness from './components/business/forms/view-business'
import ViewBlocks from './components/business/forms/view-blocks';
import Units from './components/business/forms/units';
import Welcome from './components/welcome';
import SignUp from './components/customer/sign-up';
import SigningUp from './components/business/sign-up';
import './index.css'
import ViewUnits from './components/customer/available-units';
import LogIn from './components/customer/log-in'
const app = document.getElementById("root")
function checkUserStatus() {
    var data = sessionStorage.getItem('jwtToken');
    console.log("jwt",data)
    if(!data||data === ""){
      return   <Redirect to='/' />
    }
}

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div>
            {checkUserStatus()}
                <Route exact path='/' component={Welcome} />
                {/* <Route exact path='/business ' component={props => <Business  {...props} />} /> */}
                <Route path='/business' component={Business} />
                <Route path='/view-business' component={ViewBusiness} />
                <Route path='/location' component={Location} />
                <Route path='/unit-type' component={UnitType} />
                <Route path='/blocks' component={Block} />
                <Route path='/view-blocks' component={ViewBlocks} />
                <Route path='/units' component={Units} />
                <Route path='/sign-up' component={SignUp} />
                <Route path='/signing-up' component={SigningUp} />
                <Route path='/view-units' component={ViewUnits} />
                <Route path='/log-in' component={LogIn} />
            </div>
        </Router>
    </Provider>, app);

