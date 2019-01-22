import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { Redirect } from 'react-router';
import * as actions from '../../actions/signIn'
import history from '../../history'
import { protectRoutes } from '../protectedRoutes';
import { checkUserStatus } from '../../index'
import * as businessLogIn from '../../actions/register'

class SignIn extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            signUpDetails: [],
            email: this.props.email,
            redirect: false,
            isPasswordVisible: false,
            error: false,
            errorMessage: ""

        }
        this.email = this.email.bind(this)
        this.password = this.password.bind(this)
        this.saveData = this.saveData.bind(this)
    }
    componentDidMount() {
        checkUserStatus()
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
        var customerDetails = {
            email: this.props.emailAddress,
            password: this.props.userPassword,
        }
        var results = await axios.post("http://localhost:3003/logIn/", customerDetails)
        console.log("statusCode", results.status)
        if (results.status != 200) {
            this.setState({ error: true, errorMessage: results.data.message })
            console.log('sorry you are not authorized')
        } else {
            var checking = sessionStorage.setItem('jwtToken', results.data)
            console.log('true')
            protectRoutes()
            this.props.authorizeBusiness()
            history.push('/business')
        }
    }

    render() {

        return (<div>
            <p className='validation'>{this.state.errorMessage}</p>

            <form  >
                <div className="login">
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
                    <button className="button" onClick={this.saveData}>Log in</button>
                </div>
            </form>


        </div>
        )
    }

}
const mapStateToProps = (state) => {
    return {
        state: state,
        emailAddress: state.signIn.email,
        userPassword: state.signIn.password
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        updatingEmail: email => {
            dispatch(actions.userEmailAddress(email))
        },
        updatingPassword: text => {
            dispatch(actions.userPassword(text))
        }, authorizeBusiness: () => {
            dispatch(businessLogIn.authorizeBusiness())
        },
    }
}




export default connect(mapStateToProps, mapDispatchToProps)(SignIn)