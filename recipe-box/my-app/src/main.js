import ReactDOM from 'react-dom';
import Form from './form';
import Language from './language'
import { Route, Router } from 'react-router-dom';

import './index.css';
import Home from './home'


ReactDOM.render(

  <Router>
    <div>
      <Route path="/" component={Home} />
      {/* <Route path="/Register" render={(props) => <Register auth={auth} {...props} />} />
      <Route path="/requests" render={() => <AllRequests auth={auth} />} />
      <Route path="/home" render={() => <Home />} />
      <Route path="/callback" render={(props) => {
          handleAuthentication(props);
          return <Callback {...props} /> */}
      }} />
  </div>
  </Router>,
  document.getElementById('root')
);
