
import React from 'react';
import ReactDOM from 'react-dom';
import Welcome from './welcome';
import react from 'react';
import './index.css';
import Home from './home';
import Form from './form';
import Language from './language'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";



class Main extends React.Component {
    render() {
        return (
            <Router>
                <div>
                <Route exact path="/" component={Home} />          
                <Route path="/language" component={Language} />
                <Route path="/welcome" component={Welcome} />
                <Route path="/form" component={Form} />
                      </div>
            </Router>

            // <Router>
            //     <div>
            //         <Route path="/" component= {Home} />
            //         {/* <Route path="/Register" render={(props) => <Register auth={auth} {...props} />} />
            //         <Route path="/requests" render={() => <AllRequests auth={auth} />} />
            //         <Route path="/home" render={() => <Home />} />
            //         <Route path="/callback" render={(props) => {
            //             handleAuthentication(props);
            //             return <Callback {...props} /> */}
            //         }} />
            //     </div>
            // </Router>
        );
    }
}
const app = document.getElementById("root")
ReactDOM.render(<Main />, app);

