import React from 'react';
import { Provider } from 'react-redux';
import * as actions from '../../actions/location';
import { connect } from 'react-redux';
import axios from 'axios';
import { log } from 'util';
import { Field, reduxForm } from 'redux-form';
import { Redirect } from 'react-router'
class Location extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        const { handleSubmit } = this.props
        return (<div>
            <h1>Your Location Details Below</h1>
            <form >
                <div>
                    <label htmlFor="firstName">Address1</label><br />
                    <Field name="firstName" component="input" type="text" />
                </div>
                <div>
                    <label htmlFor="lastName">Address2</label><br />
                    <Field name="lastName" component="input" type="text" />
                </div>
                <div>
                    <label htmlFor="email">Country</label><br />
                    <Field name="email" component="input" type="tel" />
                </div>
                <button onClick={handleSubmit} type="submit">Submit</button>
            </form>

        </div>
        )
    }

}
Location = reduxForm({
    form: 'contact'
})(Location)

export default Location

