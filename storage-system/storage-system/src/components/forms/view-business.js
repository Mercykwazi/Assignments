import React from 'react';
import { Provider } from 'react-redux';
import * as actions from '../../actions/view-business';
import { connect } from 'react-redux';
import axios from 'axios';
import { log } from 'util';
import { Redirect } from 'react-router'

class ViewBusiness extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            businessDetail: [],
            selectedBusiness: this.props.select,
            redirect: false,
        }
        this.businessDetails = this.businessDetails.bind(this);
        this.submitData = this.submitData.bind(this)
    }
    componentDidMount() {
        this.businessDetails()
    }

    async businessDetails() {
        var business = await axios.get("http://localhost:3003/business").then(results => {
            var businessD = results.data.rows;
            this.setState({ businessDetail: businessD })
        })
    }

    submitData() {
        this.setState({ redirect: true })
    }


    render() {
        console.log('yes',this.props.select);
        
        if (this.state.redirect) {
            return <Redirect to='/location' />
        }
        return (<div>
            <h2>Select the Business</h2>
            <div className="view-business">
                <select onChange={(e) => this.props.setTheBusiness(e.target.value)}>
                    <option value="Select business">Select business:</option>
                    {this.state.businessDetail.length > 0 ? this.state.businessDetail.map(item => {
                        return <option key={this.state.businessDetail.indexOf(item)} value={item.business_name}>{item.business_name}</option>
                    }) : null}
                </select>
            </div>
            <button className="next" onClick={this.submitData}>next</button><br />
        </div>)
    }
}
const mapStateToProps = (state) => {
    return {
        select: state.viewBusiness.selectedBusiness,
        state: state
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setTheBusiness: name => {
            dispatch(actions.businessName(name))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewBusiness)
