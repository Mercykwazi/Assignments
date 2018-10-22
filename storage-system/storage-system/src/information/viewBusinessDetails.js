import React from 'react';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import axios from 'axios';
import { log } from 'util';
class BusinessDetails extends React.Component {
    constructor(props) {
        super(props)
    }
    componentWillMount() {
        this.viewBusiness()
    }
    async viewBusiness() {
        await axios.get("http://localhost:3003/business").then(business => {
            var businessDetails = business.data.rows;
        console.log('bu',businessDetails);
        
        })
    }
    render() {
        return (
            <div>
                <button onClick={this.viewBusiness.bind(this)}>View</button>
            </div>
        )
    }
}
export default(BusinessDetails)