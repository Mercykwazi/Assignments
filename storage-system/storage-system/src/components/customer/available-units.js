import React from 'react';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import * as actions from '../../actions/selectUnits';
import axios from 'axios';
import { log } from 'util';
import { Field, reduxForm } from 'redux-form';
import { Redirect } from 'react-router'
import {protectRoutes} from '../protectedRoutes'

//var protectRoutes = require("../protectedRoutes")
//require("../../protectedRoutes")


class ViewUnits extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            unitTypeDetail: [],
            locationDetail: [],
            availableUnitType:[],
            redirect: false,
            selectedUnitType: this.props.unitType,
            unitsDetail: [],
            selectedLocations: this.props.loc,
            units: []
        }
        this.unitsDetails = this.unitsDetails.bind(this);
        this.unitTypeDetails = this.unitTypeDetails.bind(this);
        this.getUnites = this.getUnites.bind(this)
        this.selectedUnit = this.selectedUnit.bind(this);
        this.locationDetails = this.locationDetails.bind(this);
        this.getLocation = this.getLocation.bind(this)
        this.selectedLocationDetails = this.selectedLocationDetails.bind(this)

    }

    componentDidMount() {
        this.unitTypeDetails()
        this.unitsDetails()
        this.locationDetails()
    }

    async unitTypeDetails() {
        var business = await axios.get("http://localhost:3003/unitType/")
        var unitsD = business.data.rows;
        this.setState({ unitTypeDetail: unitsD })
    }
    async locationDetails() {
        var location = await axios.get("http://localhost:3003/location",protectRoutes()).then(results => {
            var locationD = results.data.rows;
            console.log('locationss',location);
            
            this.setState({ locationDetail: locationD })
        })
    }

    async unitsDetails() {
        var details = await axios.get("http://localhost:3003/units/")
        var unitDetail = details.data.rows;
        this.setState({ unitsDetail: unitDetail })
    }

    async selectedUnit() {
        var details = await axios.get("http://localhost:3003/selectUnit/" + this.props.unitType)
        var availableUnits = details.data
        this.setState({ units: availableUnits })
    }
    async selectedLocationDetails() {
        var results = await axios.get("http://localhost:3003/selectLocation/" + this.props.loc)
        var availableUnitTypes=results.data
        this.setState({availableUnitType:availableUnitTypes})
        console.log('res', availableUnitTypes)
    }

    getUnites(e) {
        e.preventDefault()
        this.props.selectedUnitType(e.target.value)
        console.log('value', e.target.value)
        setTimeout(() => {
            this.selectedUnit();
        }, 1000);
    }
    getLocation(e) {
        
        e.preventDefault()
        this.props.selectedLocations(e.target.value)
        console.log('yes am really called',e.target.value);
        setTimeout(() => {
            console.log('am I called')
            this.selectedLocationDetails();
        }, 1000);
    }
    render() {
        console.log('props',protectRoutes())
        return (<div>
            <h1>Available unit/(s)</h1>
            <form >
                <div className="blocks">
                    <h2 >location</h2>
                    <select onChange={this.getLocation}>
                        <option value="select your your location">select your preferred location:</option>
                        {this.state.locationDetail.length > 0 ? this.state.locationDetail.map(location => {
                            console.log('what is this locat', location)
                            return <option key={this.state.locationDetail.indexOf(location)} value={location.id}>{location.address2} {location.country}</option>
                        }) : null}
                    </select><br/>
                    <h2 >unit-type</h2>
                    
                    <select onChange={this.getUnites}>
                        <option value="Select unit type">Select Unit type:</option>
                        {this.state.availableUnitType.length > 0 ? this.state.availableUnitType.map(item => {
                            console.log('what is item',item)
                            return <option key={this.state.availableUnitType.indexOf(item)} value={item.business_name}> {item.name} {item.length} {item.width} {item.height} </option>
                        }) : null}
                    </select>
                    <br />
                    <h2>Units</h2>
                    <select>
                        <option value="select your your unit">select your unit:</option>
                        {this.state.units.length > 0 ? this.state.units.map(unit => {
                            console.log('what is this unit', unit)
                            return <option key={this.state.units.indexOf(unit)} value={unit}>{unit}</option>
                        }) : null}
                    </select><br />
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
        },
        selectedLocations: location => {
            dispatch(actions.selectLocation(location))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewUnits)