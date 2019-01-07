import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Redirect } from 'react-router';
import store from './store/store';
import { Router, Route } from "react-router-dom";
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
import ViewUnitType from './components/customer/selectUnitType'
import './index.css'
import ViewUnits from './components/customer/available-units';
import LogIn from './components/customer/log-in'
import jwtDecode from 'jwt-decode'
import history from './history';
import SignIn from "./components/business/log-in"
const app = document.getElementById("root")


export function checkUserStatus() {
    var token = sessionStorage.getItem('jwtToken');
    if (token) {
        const decodedToken = jwtDecode(token)
        console.log("jwt", decodedToken)
        if (decodedToken.authority === "businessOwner") {
            store.dispatch({ type: "BUSINESS_AUTHENTICATED", value: true })
            console.log("logged in")
            return history.push("/business")
        }
        if (decodedToken.authority === "customer") {
            console.log("when am I called")
            store.dispatch({ type: "CUSTOMER_AUTHENTICATED", value: true })
            return history.push('/view-units')
        }
    }
}
export const PrivateRouteCustomer = ({
    component: Component,
    ...rest
}) => {
    let authenticated = store.getState().authenticate.authenticateCustomer;
    console.log("what is authenticated", store.getState())
    return (
        <Route
            {...rest}
            render={props =>
                authenticated ? <Component {...rest} /> : <Redirect to="/" />
            }
        />
    );
}


export const PrivateRouteBusinessOwner = ({
    component: Component,
    ...rest
}) => {
    let authenticated = store.getState().authenticate.authenticated;
 console.log("what is authenticated", authenticated)
    return (
        <Route
            {...rest}
            render={props =>
                authenticated ? <Component {...rest} /> : <Redirect to="/" />
            }
        />
    );
}

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <div>
                <Route exact path='/' component={Welcome} />
                {/* <Route exact path='/business ' component={props => <Business  {...props} />} /> */}
                <PrivateRouteBusinessOwner path='/business' component={Business} />
                <PrivateRouteBusinessOwner path='/view-business' component={ViewBusiness} />
                <PrivateRouteBusinessOwner path='/location' component={Location} />
                <PrivateRouteBusinessOwner path='/unit-type' component={UnitType} />
                <PrivateRouteBusinessOwner path='/blocks' component={Block} />
                <PrivateRouteBusinessOwner path='/view-blocks' component={ViewBlocks} />
                <PrivateRouteBusinessOwner path='/units' component={Units} />
                <Route path='/sign-up' component={SignUp} />
                <Route path='/signing-up' component={SigningUp} />
                <PrivateRouteCustomer path='/view-units' component={ViewUnits} />
                <Route path='/log-in' component={LogIn} />
                <Route path="/sign-in" component={SignIn} />
                <Route path="/select-unit-type" component={ViewUnitType} />
            </div>
        </Router>
    </Provider>, app);

