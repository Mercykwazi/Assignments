import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { Redirect } from 'react-router';

class Welcome extends React.Component {
    constructor() {
        super()
        this.state = {
            redirectToBusiness: false,
            redirectToCustomer: false
        }
        this.registerStorage = this.registerStorage.bind(this);
        this.rentStorage = this.rentStorage.bind(this)
    }

    registerStorage() {
        this.setState({ redirectToBusiness: true })
    }
    rentStorage() {
        this.setState({ redirectToCustomer: true })

    }

    render() {
        if (this.state.redirectToBusiness) {
            return <Redirect to='/business' />
        }
        if (this.state.redirectToCustomer) {
            return <Redirect to='/sign-up' />
        }
        return (
            <div>
                <h1 className="storage">Welcome to storage facility </h1>
                <button className="getStarted" onClick={this.registerStorage}>Register Storage</button> <button className="rentStorage" onClick={this.rentStorage}>Rent Storage</button>

            </div>
        )
    }
}
export default (Welcome)