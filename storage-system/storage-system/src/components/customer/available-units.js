import React from 'react';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import axios from 'axios';
import { log } from 'util';
import { Field, reduxForm } from 'redux-form';
import { Redirect } from 'react-router'


class ViewUnits extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            unitTypeDetail: [],
            redirect: false,
        }
        this.unitsDetails = this.unitsDetails.bind(this)
    }


    componentDidMount() {
        this.unitsDetails()
    }

    async unitsDetails() {
        var business = await axios.get("http://localhost:3003/unitType")
            console.log('what', business);
            var unitsD = business.data.rows;
            this.setState({ unitTypeDetail: unitsD })
    }

    render() {
        return (<div>
            <h1>Available unit/(s)</h1>
            <form >
                <div className="blocks">
                <select onChange={(e) => this.props.selectedUnitType(e.target.value)}>
                    <option value="Select unit type">Select Unit type:</option>
                    {this.state.unitTypeDetail.length > 0 ? this.state.unitTypeDetail.map(item => {
                        return <option key={this.state.unitTypeDetail.indexOf(item)} value={item.business_name}> {item.name} {item.length} {item.width} {item.height} </option>
                    }) : null}
                </select>
                    <br />
                    <div> </div><br />
                    <button className="next" onClick={this.next}>next</button>

                </div>
            </form>

        </div>
        )
    }

}

export default (ViewUnits)