import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import Business from './components/forms/business';
import Location from './components/forms/location';
import UnitType from './components/forms/unit-type';


import './index.css';

const app = document.getElementById("root")
ReactDOM.render(
    <Provider store={store}>
        <UnitType />
    </Provider>, app);

