import React from 'react';
import { Provider } from 'react-redux';
import * as actions from '../../actions/view-blocks';
import { connect } from 'react-redux';
import axios from 'axios';
import { log } from 'util';
import { Redirect } from 'react-router'

class ViewBlocks extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            blocksDetail: [],
            selectedBlock: this.props.select,
            redirect: false,
        }
        this.blocksDetails = this.blocksDetails.bind(this);
        this.submitData = this.submitData.bind(this)
    }
    componentDidMount() {
        this.blocksDetails()
    }

    async blocksDetails() {
        var blocks = await axios.get("http://localhost:3003/block").then(results => {
            console.log('res', results);

            var blocksD = results.data.rows;
            this.setState({ blocksDetail: blocksD })
        })
    }

    submitData() {
        this.setState({ redirect: true })
    }


    render() {
        if (this.state.redirect) {
            return <Redirect to='/unit-type' />
        }
        return (<div>
            <h2>select your blocks</h2>
            <div className="view-business">
                <select onChange={(e) => this.props.setTheBlock(e.target.value)}>
                    <option value="Select business">Select block:</option>
                    {this.state.blocksDetail.length > 0 ? this.state.blocksDetail.map(item => {
                        return <option key={this.state.blocksDetail.indexOf(item)} value={item.name}>{item.name}</option>
                    }) : null}
                </select>
            </div>
            <button className="next" onClick={this.submitData}>next</button><br />
        </div>)
    }
}
const mapStateToProps = (state) => {
    return {
        select: state.viewBlock.selectedBlock,
        state: state
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setTheBlock: name => {
            dispatch(actions.blockName(name))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewBlocks)
