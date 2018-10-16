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
            block: this.props.block,
        }
        this.address1 = this.address1.bind(this)
        this.address2 = this.address2.bind(this)
        this.block = this.block.bind(this)
        this.submitData=this.submitData.bind(this)
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
    block(e) {
        var change = {};
        change[e.target.name] = e.target.value;
        this.props.blockName(e.target.value)
        this.setState(change);
    }

    async submitData(e) {
        e.preventDefault()
        await axios.post("http://localhost:3003/location",{ address1: this.props.address1,address2:this.props.address2,block:this.props.block})
    }

    render() {
        console.log('what is this',this.props.address1);
        
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
                        <label htmlFor="block">BlockName:</label>
                        <input name="block" type="text" onChange={this.block} value={this.state.block} />
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
        block: state.location.blockName,
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
        blockName: block => {
            dispatch(actions.blockName(block))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Location)

