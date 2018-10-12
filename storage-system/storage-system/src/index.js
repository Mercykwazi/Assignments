import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Main from './components/main';
import store from './store/store';
import Business from './components/forms/business';
import Location from './components/forms/location';

import './index.css';

const app = document.getElementById("root")
ReactDOM.render(
    <Provider store={store}>
        <Location />
    </Provider>, app);

