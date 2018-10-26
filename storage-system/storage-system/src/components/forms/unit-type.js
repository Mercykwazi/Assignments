import React from 'react';
import { Provider } from 'react-redux';
import * as actions from '../../actions/location';
import { connect } from 'react-redux';
import axios from 'axios';
import { log } from 'util';
import { Field, reduxForm } from 'redux-form';
import { Redirect } from 'react-router'
class UnitType extends React.Component {
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
                    <label htmlFor="firstName">Storage type:</label><br />
                    <Field name="firstName" component="input" type="text" />
                </div>
                <div>
                    <label htmlFor="lastName">Length</label><br />
                    <Field name="lastName" component="input" type="number" />
                </div>
                <div>
                    <label htmlFor="email">width</label><br />
                    <Field name="email" component="input" type="number" />
                </div>
                <div>
                    <label htmlFor="email">Hight</label><br />
                    <Field name="email" component="input" type="number" />
                </div>
                <div>
                    <label htmlFor="email">Storage name</label><br />
                    <Field name="email" component="input" type="number" />
                </div>
                <button onClick={handleSubmit} type="submit">Submit</button>
            </form>

        </div>
        )
    }

}
UnitType = reduxForm({
    form: 'contact'
})(UnitType)

export default UnitType

