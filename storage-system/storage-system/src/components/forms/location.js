import React from 'react';
import { Provider } from 'react-redux';
import * as actions from '../../actions/location';
import { connect } from 'react-redux';
class Location extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            firstAddress: this.props.address1,
            secoundAddress: this.props.address2
        }
        this.address1 = this.address1.bind(this)
        this.address2 = this.address2.bind(this)
    }

    address1(e) {
        var change = {};
        change[e.target.name] = e.target.value;
        console.log('change',change);
        
        this.props.firstAddress(e.target.value)
        this.setState(change);
    }

    address2(e) {
        var change = {};
        change[e.target.name] = e.target.value;
        this.props.secoundAddress(e.target.value)
        this.setState(change);
    }

    submit() {
        this.setState({ input: this.state.value })
    }

    render() {
        console.log("dd", this.props);
        return (<div>
            <h1>Your location details below</h1>
            <form>
                <div className="business">
                    <div >
                        <label htmlFor="address1">Address1:</label>
                        <input name="address1" placeholder="housenumber,street name" type="text" onChange={this.address1} value={this.state.firstAddress} />
                    </div>
                    <br />
                    <div >
                        <label htmlFor="address2">Address2:</label>
                        <input name="secoundAddress" type="tel" placeholder="Country,city" onChange={this.address2} value={this.state.secoundAddress} />
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
        address1: state.location.address1,
        address2: state.location.address2,
        state: state.location.address2
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        firstAddress: name => {
            dispatch(actions.firstAddress(name))
        },
        secoundAddress: address => {
            dispatch(actions.secoundAddress(address))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Location)

