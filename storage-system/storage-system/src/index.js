import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Main from './components/main';
import store from './store/store';
import Business from './components/forms/business';
const app = document.getElementById("root")

ReactDOM.render(
<Provider store={store}>
<Business/>
</Provider>, app);

