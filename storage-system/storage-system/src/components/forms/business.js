import React from 'react';
import { Provider } from 'react-redux';
import * as actions from '../../actions/business';
import { connect } from 'react-redux';
import axios from 'axios';
import { log } from 'util';
class Business extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            input: '',
            businessName: this.props.name,
            contactName: this.props.contactName,
            telephone: this.props.telephone,
            email: this.props.email
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
        var what = await axios.post("http://localhost:3003/business",
            { businessName: this.props.name, contactName: this.props.contactName, phoneNumber: this.props.telephone, email: this.props.email }

        );
    }

    render() {
        return (<div>
            <h1>Register Your Business Below</h1>
            <form>
                <div className="business">
                    <div >
                        <label htmlFor="firstName">Business Name:</label><br />
                        <input name="businessName" type="text" onChange={this.businessName} value={this.state.businessName} />
                    </div>
                    <br />
                    <div >
                        <label htmlFor="lastName">Contact Name:</label><br />
                        <input name="contactName" type="text" onChange={this.contactName} value={this.state.contactName} />
                    </div>
                    <br />
                    <div >
                        <label htmlFor="telephone">Telephone:</label><br />
                        <input name="telephone" type="tel" onChange={this.telephone} value={this.state.telephone} />
                    </div>
                    <br />
                    <div >
                        <label htmlFor="email">Email:</label><br />
                        <input name="email" type="email" onChange={this.email} value={this.state.email} />
                    </div>
                    <br />
                    <button onClick={this.saveData}>submit</button>
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

