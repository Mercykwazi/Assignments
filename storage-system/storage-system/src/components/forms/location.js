import React from 'react';
import { Provider } from 'react-redux';
import * as actions from '../../actions/location';
import { connect } from 'react-redux';
import axios from 'axios';
import { log } from 'util';
import { Redirect } from 'react-router'

class Location extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            address1: this.props.address1,
            address2: this.props.address2,
            country: this.props.country,
            redirect: false,
            businessName: this.props.business,
        }
        this.address1 = this.address1.bind(this)
        this.address2 = this.address2.bind(this)
        this.country = this.country.bind(this)
        this.submitData = this.submitData.bind(this)
    }

    address1(e) {
        var change = {};
        change[e.target.name] = e.target.value;
        this.props.firstAddress(e.target.value)
        this.setState(change);
    }

    address2(e) {
        var change = {};
        change[e.target.name] = e.target.value;
        this.props.secondAddress(e.target.value)
        this.setState(change);
    }
    country(e) {
        var change = {};
        change[e.target.name] = e.target.value;
        this.props.countryName(e.target.value)
        this.setState(change);
    }

    async submitData(e) {
        e.preventDefault()
        console.log('am I called');
        var results = await axios.post("http://localhost:3003/location", { address1: this.props.address1, address2: this.props.address2, country: this.props.country, business: this.state.businessName })
        if (results.status === 201) {
            this.setState({
                redirect: true
            })
        } else if (results.status === 500) {

        }
    }

    render() {
        if(this.state.redirect){
            return <Redirect to='/blocks' />
        }
        return (<div>
            <h1>Your location details below</h1>
            <form>
                <div className="location">
                    <div >
                        <label htmlFor="address1">Address1:</label><br />
                        <input name="address1" type="text" placeholder="street name" onChange={this.address1} value={this.state.firstAddress} />
                    </div>
                    <br />
                    <div >
                        <label htmlFor="address2">Address2:</label><br />
                        <input name="address2s" type="text" placeholder="city" onChange={this.address2} value={this.state.secoundAddress} />
                    </div>
                    <br />
                    <div >
                        <label htmlFor="country">countryName:</label><br />
                        <input name="country" type="text" onChange={this.country} value={this.state.country} required />
                    </div>
                    <br />
                    <button onClick={this.submitData}>next</button><br />
                    <br />
                </div>
            </form>

        </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        address1: state.location.address1,
        address2: state.location.address2,
        country: state.location.countryName,
        business: state.viewBusiness.selectedBusiness,
        state: state
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        firstAddress: firstAddress => {
            dispatch(actions.firstAddress(firstAddress))
        },
        secondAddress: address => {
            dispatch(actions.secondAddress(address))
        },
        countryName: country => {
            dispatch(actions.countryName(country))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Location)

