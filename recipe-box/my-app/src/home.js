import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BrowserRouter, Route,Router,Link } from 'react-router-dom'
export default class Home extends React.Component {

    constructor(props) {
        super(props)
    }
    render() {
        console.log("is this called"

        )
        return (
            < div >
                <h1>
                    <nav className="container-fluid"><i>
                        Welcome to Tec Finance</i>
                    </nav>
                    <p> <i class="fas fa-hands-usd"></i></p>
                </h1>
            </div >
        )
    }
}

