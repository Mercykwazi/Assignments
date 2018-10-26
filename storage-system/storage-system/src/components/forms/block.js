import React from 'react';
import { Provider } from 'react-redux';
import * as actions from '../../actions/block';
import { connect } from 'react-redux';
import axios from 'axios';
import { log } from 'util';
import { Field, reduxForm } from 'redux-form';
import { Redirect } from 'react-router'


class Block extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        const { handleSubmit } = this.props
        return (<div>
            <h1>Enter your block/(s)</h1>
            <form >
                <div>
                    <label htmlFor="firstName">Block Name</label><br />
                    <Field name="firstName" component="input" type="text" />
                </div>
                <button onClick={handleSubmit} type="submit">Submit</button>
            </form>

        </div>
        )
    }

}
Block = reduxForm({
    form: 'contact'
})(Block)

export default Block
