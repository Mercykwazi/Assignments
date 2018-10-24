import React from 'react';
import { Provider } from 'react-redux';
import * as actions from '../../actions/block';
import { connect } from 'react-redux';
import axios from 'axios';
import { log } from 'util';
import { Redirect } from 'react-router'

class Block extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: this.props.blocks,
            redirect: false,
        }
        this.storedBlocks = this.storedBlocks.bind(this)
    }

    storedBlocks(e) {
        var change = {};
        change[e.target.name] = e.target.value;
        this.props.availableBlocks(e.target.value)
        this.setState(change);
    }

    render() {
        return (<div>
            <h1>Block Details</h1>
            <form>
                <div className="location">
                    <div >
                        <label htmlFor="name">Block Name:</label>
                        <input name="name" type="text" onChange={this.storedBlocks} value={this.state.name} />
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
        blocks: state.block.blockName,
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

