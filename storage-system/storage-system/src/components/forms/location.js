import React from 'react';
import { Provider } from 'react-redux';
import * as actions from '../../actions/location';
import { connect } from 'react-redux';
class Location extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            address1: this.props.address1,
            address2: this.props.address2,
            block:"",
        }
        this.address1 = this.address1.bind(this)
        this.address2 = this.address2.bind(this)
        this.block=this.block.bind(this)
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
    block(e) {
        var change = {};
        change[e.target.name] = e.target.value;
        this.setState(change);
    }

    submit() {
        this.setState({ input: this.state.value })
    }

    render() {  console.log("dd", this.state.block);
        return (<div>
            <h1>Your location details below</h1>
            <form>
                <div className="business">
                    <div >
                        <label htmlFor="address1">Address1:</label>
                        <input name="address1"  type="text" onChange={this.address1} value={this.state.firstAddress} />
                    </div>
                    <br />
                    <div >
                        <label htmlFor="address2">Address2:</label>
                        <input name="secoundAddress" type="tel" placeholder="Country,city" onChange={this.address2} value={this.state.secoundAddress} />
                    </div>
                    <br />
                    <div >
                        <label htmlFor="block">BlockName:</label>
                        <input name="block"  type="text" onChange={this.block} value={this.state.block} />
                    </div>
                    <br />
                    <button onClick={this.submit}>next</button>
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
        firstAddress: firstAddress => {
            dispatch(actions.firstAddress(firstAddress))
        },
        secoundAddress: secoundAddress => {
            dispatch(actions.secoundAddress(secoundAddress))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Location)

