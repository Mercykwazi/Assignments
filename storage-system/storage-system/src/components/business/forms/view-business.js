import React from 'react';
import * as actions from '../../../actions/view-business';
import { connect } from 'react-redux';
import axios from 'axios';
import { Redirect } from 'react-router'
import jwtDecode from 'jwt-decode';
import history from '../../../history'

class ViewBusiness extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            businessDetail: [],
            selectedBusiness: this.props.select,
            errorMessage: "",
            err: false,
        }
        this.businessDetails = this.businessDetails.bind(this);
        this.submitData = this.submitData.bind(this)
    }
    componentDidMount() {
        this.businessDetails()
    }

    async businessDetails() {
        var token = sessionStorage.getItem('jwtToken');
        const decodedToken = jwtDecode(token)
        var decodedEmail = decodedToken.email
        var business = await axios.get("http://localhost:3003/business/" + decodedEmail)
        console.log("business", business)
        var businessD = business.data.rows;
            this.setState({ businessDetail: businessD })
        
    }

    submitData() {
        history.push('/location')
    }


    render() {
       
        return (<div>
            <h2>Select your business</h2>
            <div className="view-business">
                <select onChange={(e) => this.props.setTheBusiness(e.target.value)}>
                    <option value="Select business">Select business:</option>
                    {this.state.businessDetail.length > 0 ? this.state.businessDetail.map(item => {
                        return <option key={this.state.businessDetail.indexOf(item)} value={item.business_name}>{item.business_name}</option>
                    }) : null}
                </select><br />
                <button className="next" onClick={this.submitData}>next</button><br />
            </div>
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
