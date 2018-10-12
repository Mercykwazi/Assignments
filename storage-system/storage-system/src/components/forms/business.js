import React from 'react';
import { Provider } from 'react-redux';
import * as actions from '../../actions/business';
import { connect } from 'react-redux';
class Business extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            businessName: this.props.name,
            contactName: this.props.contactName,
            telephone: this.props.telephone,
            email:this.props.email
        }
        this.businessName = this.businessName.bind(this)
        this.contactName = this.contactName.bind(this)
        this.telephone = this.telephone.bind(this)
        this.email=this.email.bind(this)
        this.submit = this.submit.bind(this)
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


    submit() {
        this.setState({ input: this.state.value })
    }

    render() {
        console.log("dd", this.props);
        return (<div>
            <h1>Register Your Business Below</h1>
            <form>
                <div className="business">
                    <div >
                        <label htmlFor="firstName">Busines Name:</label>
                        <input name="businessName" type="text" onChange={this.businessName} value={this.state.businessName} />
                    </div>
                    <br />
                    <div >
                        <label htmlFor="lastName">Contact Name:</label>
                        <input name="contactName" type="text" onChange={this.contactName} value={this.state.contactName} />
                    </div>
                    <br />
                    <div >
                        <label htmlFor="telephone">Telephone:</label>
                        <input name="telephone" type="tel" onChange={this.telephone} value={this.state.telephone} />
                    </div>
                    <br />
                    <div >
                        <label htmlFor="email">Email:</label>
                        <input name="email" type="email" onChange={this.email} value={this.state.email} />
                    </div>
                    <br />
                    <button onClick={this.submit}>submit</button>
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
        email:state.business.contactEmail,
        state: state
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        updateName: name => {
            dispatch(actions.name(name))
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

