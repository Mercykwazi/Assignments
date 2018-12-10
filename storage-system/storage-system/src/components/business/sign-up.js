import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { Redirect } from 'react-router';
import { protectRoutes } from '../protectedRoutes'
class SigningUp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            password: "",
            firstName: "",
            email: "",
            redirect: false,
            isPasswordVisible: false,

        }
        this.contactName = this.contactName.bind(this)
        this.email = this.email.bind(this)
        this.password = this.password.bind(this)
        this.saveData = this.saveData.bind(this)
    }


    email(e) {
        var change = {};
        change[e.target.name] = e.target.value;
        this.setState(change);
    }

    contactName(e) {
        var change = {};
        change[e.target.name] = e.target.value;
        this.setState(change);
    }
    password(e) {
        var change = {};
        change[e.target.name] = e.target.value;
        this.setState(change);
    }
    async saveData(e) {
        e.preventDefault()
        var businessDetails = {
            name: this.state.firstName,
            email: this.state.email,
            password: this.state.password,
        }
        var results = await axios.post("http://localhost:3003/registerBusiness", businessDetails)
        if (results.status != 200) {
            console.log('sorry you are not authorized')
        } else {
            var checking = sessionStorage.setItem('jwtToken', results.data)
            this.setState({ redirect: true })
        }
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to='/business'/>
        }
        return (<div>
            <p className=''>Sign Up</p>
            <h1 >Fill in your personal details</h1>
            <form  >
                <div className="business">
                    <div >
                        <label htmlFor="firstName">First Name:</label><br />
                        <input name="firstName" type="text" onChange={this.contactName} value={this.state.firstName} required />
                    </div>
                    <br />
                    <div >
                        <label htmlFor="email">Email:</label><br />
                        <input name="email" type="email" onChange={this.email} value={this.state.email} required />
                    </div>
                    <div className="password">
                        Password:<br />
                        {this.state.isPasswordVisible ?
                            <input name="password" type="text" onChange={(e) => this.setState({ password: e.target.value })} value={this.state.password} required /> :
                            <input type='password' onChange={(e) => this.setState({ password: e.target.value })} value={this.state.password} />}<br />
                        <p className='show' onClick={() => this.setState({ isPasswordVisible: !this.state.isPasswordVisible })}>{this.state.isPasswordVisible ? 'Hide' : 'Show'} Password</p>
                    </div>
                    <button className="button" onClick={this.saveData}>submit</button>
                </div>
            </form>

        </div>
        )
    }

}

export default (SigningUp)