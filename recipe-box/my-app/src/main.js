import ReactDOM from 'react-dom';
import Form from './form';
import Language from './language'
import { Route, Router } from 'react-router-dom';

import './index.css';
import Home from './home'


export default class Home extends React.Component {

  constructor(props) {
      super(props)
  }
  render() {
      return (
          < div > 
          <h1><i>
              Welcome to Tec Finance</i>
          </h1>
            </div >
      )
  }
}


