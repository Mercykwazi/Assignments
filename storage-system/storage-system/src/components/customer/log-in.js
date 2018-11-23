import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { Redirect } from 'react-router';
import * as actions from '../../actions/log-in'

class LogIn extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            signUpDetails: [],
            email: this.props.email,
            redirect: false,
            isPasswordVisible: false,

        }
        this.email = this.email.bind(this)
        this.password = this.password.bind(this)
        this.saveData = this.saveData.bind(this)
    }


    email(e) {
        var change = {};
        change[e.target.name] = e.target.value;
        this.props.updatingEmail(e.target.value)
        this.setState(change);
    }
    password(e) {
        this.props.updatingPassword(e.target.value)
    }
    async saveData(e) {
        e.preventDefault()
        var customerDetails = "http://localhost:3003/customer/" + this.props.emailAddress + "/" + this.props.userPassword;
        var results = await axios.get(customerDetails)
        var signUpDetail = results.data
        this.setState({ redirect: true, signUpDetails: signUpDetail })
    }

    render() {
        return (<div>

            <form  >
                <div className="business">
                    <h1>Log in</h1>
                    <div >
                        <label htmlFor="email">Email:</label><br />
                        <input name="email" type="email" onChange={this.email} value={this.state.email} required />
                    </div>
                    <div className="password"   >
                        Password:<br />
                        {this.state.isPasswordVisible ?
                            <input name="password" type="text" onChange={(e) => this.setState({ password: e.target.value })} value={this.state.password} required /> :
                            <input type='password' onChange={this.password} value={this.props.userPassword} />}<br />
                        <p className='show' onClick={() => this.setState({ isPasswordVisible: !this.state.isPasswordVisible })}>{this.state.isPasswordVisible ? 'Hide' : 'Show'} Password</p>
                    </div>
                    <button className="button" onClick={this.saveData}>submit</button>
                </div>
            </form>

        </div>
        )
    }

}
const mapStateToProps = (state) => {
    return {
        state: state,
        emailAddress: state.logIn.email,
        userPassword: state.logIn.password
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        updatingEmail: email => {
            dispatch(actions.emailAddress(email))
        },
        updatingPassword: text => {
            dispatch(actions.password(text))
        }
    }
}




export default connect(mapStateToProps, mapDispatchToProps)(LogIn)