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
            businessName: this.props.business
        }
        this.storedBlocks = this.storedBlocks.bind(this);
        this.submitData = this.submitData.bind(this);
        this.locationDetails = this.locationDetails.bind(this)
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
    }
    render() {
        const { handleSubmit } = this.props
        return (<div>
            <h1>Enter your block/(s)</h1>
            <form >
                <div>
                    <label htmlFor="firstName">Block Name</label><br />
                    <Field name="firstName" component="input" type="text" />
                </div>
                <button onClick={handleSubmit} type="submit">Submit</button>
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


