import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { Redirect } from 'react-router';

class SignUp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            password: "",
            firstName: "",
            lastName: "",
            telephone: "",
            email: "",
            redirect: false,
            isPasswordVisible: false,

        }
        this.businessName = this.businessName.bind(this)
        this.contactName = this.contactName.bind(this)
        this.telephone = this.telephone.bind(this)
        this.email = this.email.bind(this)
        this.password = this.password.bind(this)
        this.lastName = this.lastName.bind(this)
        this.saveData = this.saveData.bind(this)

    }


    email(e) {
        var change = {};
        change[e.target.name] = e.target.value;
        this.setState(change);
    }

    businessName(e) {
        var change = {};
        change[e.target.name] = e.target.value;
        this.setState(change);
    }
    contactName(e) {
        var change = {};
        change[e.target.name] = e.target.value;
        this.setState(change);
    }
    lastName(e) {
        var change = {};
        change[e.target.name] = e.target.value;
        this.setState(change);
    }
    telephone(e) {
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
        var customerDetails = {
            name: this.state.firstName,
            surname: this.state.lastName,
            phoneNumber: this.state.telephone,
            email: this.state.email,
            password: this.state.password,
        }


        var results = await axios.post("http://localhost:3003/customer", customerDetails)
        this.setState({ redirect: true })
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to='/view-units' />
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
                    <div className="password"   >
                        Password:<br />
                        {this.state.isPasswordVisible ?
                            <input name="password" type="text" onChange={(e) => this.setState({ password: e.target.value })} value={this.state.password} required /> :
                            <input type='password' onChange={(e) => this.setState({ password: e.target.value })} value={this.state.password} />}
                        <p className='show' onClick={() => this.setState({ isPasswordVisible: !this.state.isPasswordVisible })}>{this.state.isPasswordVisible ? 'Hide' : 'Show'} Password</p>
                    </div>

                    <button className="button" onClick={this.saveData}>submit</button>
                </div>
            </form>

        </div>
        )
    }

}

export default (SignUp)