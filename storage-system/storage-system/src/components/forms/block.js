import React from 'react';
import { Provider } from 'react-redux';
import * as actions from '../../actions/block';
import { connect } from 'react-redux';
import axios from 'axios';
import { log } from 'util';
import { Field, reduxForm } from 'redux-form';
import { Redirect } from 'react-router'


class Block extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: this.props.blocks,
            businessName: this.props.business,
            redirect: false,
        }
        this.storedBlocks = this.storedBlocks.bind(this);
        this.submitData = this.submitData.bind(this);
        this.next = this.next.bind(this)
    }

    storedBlocks(e) {
        var change = {};
        change[e.target.name] = e.target.value;
        this.props.availableBlocks(e.target.value)
        this.setState(change);
    }

    async  submitData(e) {
        e.preventDefault();
        var blockDetails = {
            blockName: this.props.blocks,
            businessName: this.state.businessName
        }
        console.log("is this called", blockDetails);
        var Results = await axios.post("http://localhost:3003/block", blockDetails);
        this.setState({ name: "" })
    }
    next() {
        this.setState({ redirect: true })
    }


    render() {
        if (this.state.redirect) {
            return <Redirect to='/view-blocks' />
        }
        return (<div>
            <h1>Enter your block/(s)</h1>
            <form >
                <div className="blocks">
                    <div >
                        <label htmlFor="name">Block Name:</label><br />
                        <input name="name" type="text" onChange={this.storedBlocks} value={this.state.name} />
                    </div>
                    <br />
                    <div><button onClick={this.submitData} disabled={!this.state.name}>add</button></div><br />
                    <button onClick={this.next}>next</button>

                </div>
            </form>

        </div>
        )
    }

}
const mapStateToProps = (state) => {
    return {
        blocks: state.block.blockName,
        business: state.viewBusiness.selectedBusiness,
        state: state
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        availableBlocks: name => {
            dispatch(actions.blockName(name))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Block)


