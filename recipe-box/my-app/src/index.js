
import React from 'react';
import ReactDOM from 'react-dom';
import Welcome from './welcome';
import './index.css';
import Home from './home';
import Form from './form';
import Language from './language'
import { Route, Router } from 'react-router-dom';
import { BrowserRouter,  Link } from 'react-router-dom'



export const makeMainRoutes = () => {
    return (
        <Router>
            <div>
                <Route path="/" component= {Home} />
                {/* <Route path="/Register" render={(props) => <Register auth={auth} {...props} />} />
                <Route path="/requests" render={() => <AllRequests auth={auth} />} />
                <Route path="/home" render={() => <Home />} />
                <Route path="/callback" render={(props) => {
                    handleAuthentication(props);
                    return <Callback {...props} /> */}
                }} />
            </div>
        </Router>
    );
}

