import React from 'react';
import { Provider } from 'react-redux';
import * as actions from '../../actions/business';
import { connect } from 'react-redux';
import axios from 'axios';
import { log } from 'util';
import { Field, reduxForm } from 'redux-form';
import { Redirect } from 'react-router'
class Business extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        console.log('str',this.props)
        const { handleSubmit } = this.props
        return (<div>
            <h1>Register Your Business Below</h1>
            <form >
                <div>
                    <label htmlFor="firstName">Business Name</label><br />
                    <Field name="firstName" component="input" type="text" />
                </div>
                <div>
                    <label htmlFor="lastName">Contact Name</label><br />
                    <Field name="lastName" component="input" type="text" />
                </div>
                <div>
                    <label htmlFor="email">Telephone</label><br />
                    <Field name="email" component="input" type="tel" />
                </div>
                <div>
                    <label htmlFor="email">Email</label><br />
                    <Field name="email" component="input" type="email" />
                </div>
                <button onClick={handleSubmit} type="submit">Submit</button>
            </form>

        </div>
        )
    }

}
Business = reduxForm({
    form: 'contact'
})(Business)

const mapStateToProps = state => {
    return {
        businessForm: state.form.contact,
        state: state
    };
}
export default connect(mapStateToProps, null)(Business);

