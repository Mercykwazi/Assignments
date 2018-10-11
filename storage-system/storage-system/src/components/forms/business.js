import React from 'react';
import { Provider } from 'react-redux';
//import { Field, reduxForm } from 'redux-form';
import actions from 'redux-form/lib/actions';
import { connect } from 'react-redux';
class Business extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            input:"",
            name: this.props.name,
            contact_name: this.props.contact_name
        }
        this.inputName = this.inputName.bind(this)
        this.submit=this.submit.bind(this)
    }
    inputName(e) {
        this.setState({ input: e.tagert.value })
    }
    submit() {
        this.setState({input: this.state.value })
    }

    render() {
        console.log(this.state);

        return (

            <div>
                <h1>Register Your Business Below</h1>
                <form>
                    <div className="business">
                        <div >
                            <label htmlFor="firstName">Busines Name</label>
                            <input name="businessName"  type="text" onChange={this.inputName} />
                        </div>
                        <br />
                        <div >
                            <label htmlFor="lastName">Contact Name</label>
                            <input name="contactName"  type="text" />
                        </div>
                        <br />
                        <div >
                            <label htmlFor="telephone">Telephone</label>
                            <input name="telephone"  type="tel" />
                        </div>
                        <br />
                        <div >
                            <label htmlFor="email">Email</label>
                            <input name="email"  type="email" />
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
        name: state.name,
        contact_name: state.contact_name
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        updateName: (name) => {
            dispatch(actions.name(name))
        },
        updateContactName: (contact) => {
            dispatch(actions.contactName(contact))
        }
    }
}
//const reduxForm= export default reduxForm({
//           form: 'simple'
//    })(Business)
export default connect(mapStateToProps, mapDispatchToProps)(Business)
// export default reduxForm({
//        form: 'simple'
//      })(Business)


// export default reduxForm({
//     form: 'simple'
// })(Business)

