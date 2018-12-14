import React from 'react';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import * as actions from '../../actions/selectUnits';
import axios from 'axios';
import { log } from 'util';
import { Field, reduxForm } from 'redux-form';
import { Redirect } from 'react-router'
import { protectRoutes } from '../protectedRoutes'

class ViewUnitType extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            unitTypeDetail: [],
            availableUnitType: [],
            redirect: false,
            selectedUnitType: this.props.unitType,
            selectedLocations: this.props.loc,
        }
        this.unitTypeDetails = this.unitTypeDetails.bind(this);
        this.selectedLocationDetails = this.selectedLocationDetails.bind(this)
    }

    componentDidMount() {
        this.unitTypeDetails()
    }

    async unitTypeDetails() {
        var business = await axios.get("http://localhost:3003/unitType/")
        var unitsD = business.data.rows;
        this.setState({ unitTypeDetail: unitsD })
    }
    async selectedLocationDetails() {
        var results = await axios.get("http://localhost:3003/selectLocation/" + this.props.loc)
        var availableUnitTypes = results.data
        this.setState({ availableUnitType: availableUnitTypes })
    }

    getUnites(e) {
        e.preventDefault()
        this.props.selectedUnitType(e.target.value)
    }
    render() {
        console.log("selectedLocation", this.state.selectedLocations)
        console.log("state",this.state)
        console.log("props",this.props)
        return (<div>
            <h1>Available unit/(s)</h1>
            <form >
                <div className="blocks">
                    <h2 >unit-type</h2>
                    <select onChange={this.getUnites}>
                        <option value="Select unit type">Select Unit type:</option>
                        {this.state.availableUnitType.length > 0 ? this.state.availableUnitType.map(item => {
                            return <option key={this.state.availableUnitType.indexOf(item)} value={item.business_name}> {item.name} {item.length} {item.width} {item.height} </option>
                        }) : null}
                    </select>

                </div>
            </form>
        </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        units: state.units.unitName,
        business: state.viewBusiness.selectedBusiness,
        unitType: state.selectUnitType.selectUnit,
        loc: state.selectUnitType.selectedLocation,
        state: state,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        selectedUnitType: unit => {
            dispatch(actions.selectedUnits(unit))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewUnitType)