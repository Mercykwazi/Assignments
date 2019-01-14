import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { Redirect } from 'react-router';

class RentedUnites extends React.Component {
    constructor() {
        super()
        this.state = {
            redirectToBusiness: false,
            redirectToCustomer: false
        }
        this.registerStorage = this.registerStorage.bind(this);
        this.rentStorage = this.rentStorage.bind(this)
    }

    render() {
        return (
            <div>
                <h1 className="storage">your ranted unites </h1>
            </div>
        )
    }
}
export default (RentedUnites)