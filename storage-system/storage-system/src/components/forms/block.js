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
        var Results = await axios.post("http://localhost:3003/block", blockDetails)
        console.log('re', Results)
    }

    async locationDetails(e) {
        e.preventDefault();
        var business = await axios.get("http://localhost:3003/location").then(results => {
            // var locationD = results.data;
            console.log('dd', results.data.rows)
            console.log('res', results)

            // this.setState({ businessDetail: businessD })
        })
        console.log('what');
        console.log('result', business);


    }



    render() {
        console.log("state", this.state)
        return (<div>
            <h1>Block Details</h1>
            <form>
                <div className="location">
                    <div >
                        <label htmlFor="name">Block Name:</label><br />
                        <input name="name" type="text" onChange={this.storedBlocks} value={this.state.name} />
                    </div>
                    <br />
                    <button onClick={this.submitData}>next</button><br />
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

