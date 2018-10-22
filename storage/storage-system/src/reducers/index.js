import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

const app = document.getElementById("root")
ReactDOM.render(<Provider store={store}><Main /></Provider>, app);

