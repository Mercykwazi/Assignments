import React from 'react';
import { Provider } from 'react-redux';
import * as actions from '../../actions/location';
import { connect } from 'react-redux';
import axios from 'axios';
import { log } from 'util';
class Location extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            address1: this.props.address1,
            address2: this.props.address2,
            country: this.props.country,
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
        this.props.secoundAddress(e.target.value)
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
        await axios.post("http://localhost:3003/location", { address1: this.props.address1, address2: this.props.address2, country: this.props.country })
    }

    render() {
        console.log('props', this.props);

        return (<div>

            <h1>Your location details below</h1>
            <form>
                <div className="location">
                    <div >
                        <label htmlFor="address1">Address1:</label>
                        <input name="address1" type="text" onChange={this.address1} value={this.state.firstAddress} />
                    </div>
                    <br />
                    <div >
                        <label htmlFor="address2">Address2:</label>
                        <input name="address2s" type="text" placeholder="Country,city" onChange={this.address2} value={this.state.secoundAddress} />
                    </div>
                    <br />
                    <div >
                        <label htmlFor="country">countryName:</label>
                        <input name="country" type="text" onChange={this.country} value={this.state.country} />
                    </div>
                    <br />
                    <button onClick={this.submitData}>next</button>
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
        state: state
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        firstAddress: firstAddress => {
            dispatch(actions.firstAddress(firstAddress))
        },
        secoundAddress: address => {
            dispatch(actions.secoundAddress(address))
        },
        countryName: country => {
            dispatch(actions.countryName(country))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Location)

