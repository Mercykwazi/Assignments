import React from 'react';

import * as actions from '../../../actions/business'

import { connect } from 'react-redux';
import axios from 'axios';
import { log } from 'util';
import { Redirect } from 'react-router';
var protectRoutes = require("../../protectedRoutes")
class Business extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            input: '',
            businessName: this.props.name,
            contactName: this.props.contactName,
            telephone: this.props.telephone,
            email: this.props.email,
            redirect: false,
        }
        this.businessName = this.businessName.bind(this)
        this.contactName = this.contactName.bind(this)
        this.telephone = this.telephone.bind(this)
        this.email = this.email.bind(this)
        this.saveData = this.saveData.bind(this)
    }

    email(e) {
        var change = {};
        change[e.target.name] = e.target.value;
        this.props.updateEmail(e.target.value)
        this.setState(change);
    }

    businessName(e) {
        var change = {};
        change[e.target.name] = e.target.value;
        this.props.updateName(e.target.value)
        this.setState(change);
    }
    contactName(e) {
        var change = {};
        change[e.target.name] = e.target.value;
        this.props.updateContactName(e.target.value)
        this.setState(change);
    }
    telephone(e) {
        var change = {};
        change[e.target.name] = e.target.value;
        this.props.updateTelephone(e.target.value)
        this.setState(change);
    }
    async saveData(e) {
        e.preventDefault()
        var businessDetails = {
            businessName: this.props.name,
            contactName: this.props.contactName,
            phoneNumber: this.props.telephone,
            email: this.props.email
        }
        var api = await axios.post("http://localhost:3003/business", businessDetails, protectRoutes())
        console.log('api', api)
        if (api.status === 201) {
            this.setState({
                redirect: true
            })
        } else if (api.status === 500) {

        }
    }

    render() {
        if (this.state.redirect) {
            this.props.history.push('/view-business')
        }
        return (<div>
            <div class="topnav">
                <a class="active" href="/business">Register</a>
                <a href="/view-business">view-business</a>
                <a href="/location">Location</a>
                <a href="/blocks">blocks</a>
                <a href="/view-blocks">View-blocks</a>
                <a href="/unit-type">unit-types</a>
                <a href="/units">units</a>


            </div>
            <h1 >Register Your Business Below</h1>
            <form  >
                <div className="business">
                    <div >
                        <label htmlFor="firstName" >Business Name:</label><br />
                        <input name="businessName" type="text" onChange={this.businessName} value={this.state.businessName} required />
                    </div>
                    <br />
                    <div >
                        <label htmlFor="lastName">Contact Name:</label><br />
                        <input name="contactName" type="text" onChange={this.contactName} value={this.state.contactName} required />
                    </div>
                    <br />
                    <div >
                        <label htmlFor="telephone">Telephone:</label><br />
                        <input name="telephone" type="number" onChange={this.telephone} value={this.state.telephone} required />
                    </div>
                    <br />
                    <div >
                        <label htmlFor="email">Email:</label><br />
                        <input name="email" type="email" onChange={this.email} value={this.state.email} required />
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
        name: state.business.name,
        contactName: state.business.contact_name,
        telephone: state.business.contactTelephone,
        email: state.business.contactEmail,
        state: state
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        updateName: name => {
            dispatch(actions.businessName(name))
        },
        updateContactName: contactName => {
            dispatch(actions.contactName(contactName))
        },
        updateTelephone: tel => {
            dispatch(actions.telephone(tel))
        }, updateEmail: email => {
            dispatch(actions.email(email))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Business)

