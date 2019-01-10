import React from 'react';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import * as actions from '../../actions/selectUnits';
import axios from 'axios';
import { log } from 'util';
import { Field, reduxForm } from 'redux-form';
import { Redirect } from 'react-router'
import { protectRoutes } from '../protectedRoutes'

//var protectRoutes = require("../protectedRoutes")
//require("../../protectedRoutes")


class ViewUnits extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            unitTypeDetail: [],
            locationDetail: [],
            availableUnitType: [],
            redirect: false,
            selectedUnitType: this.props.unitType,
            unitsDetail: [],
            selectedLocations: this.props.loc,
            units: [],
        }
        this.unitsDetails = this.unitsDetails.bind(this);
        this.unitTypeDetails = this.unitTypeDetails.bind(this);
        this.getUnites = this.getUnites.bind(this)
        this.selectedUnit = this.selectedUnit.bind(this);
        this.locationDetails = this.locationDetails.bind(this);
        this.getLocation = this.getLocation.bind(this)
        this.selectedLocationDetails = this.selectedLocationDetails.bind(this)
        this.submitUnit = this.submitUnit.bind(this);
    }

    componentDidMount() {
        this.unitTypeDetails()
        this.unitsDetails()
        this.locationDetails()

    }

    handleChange(useSelection){

        console.log(useSelection)
    }


   async submitUnit() {
       // var reservedRoom ={reserved:this.refs.selectedUnit.value} 
        var reservedRoom =this.refs.selectedUnit.value
        console.log("res",reservedRoom);
        
        var reservedDetails=await axios.post("http://localhost:3003/reserved/",{id : reservedRoom})
        console.log("reeeee",reservedDetails)
    }

    async unitTypeDetails() {
        var business = await axios.get("http://localhost:3003/unitType/")
        var unitsD = business.data.rows;
        this.setState({ unitTypeDetail: unitsD })
    }
    async locationDetails() {
        try {
            const results = await axios.get("http://localhost:3003/location")
            var locationD = results.data.rows;

            this.setState({ locationDetail: locationD })
        } catch (e) {
        }
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

        var availableUnitTypes = results.data
        this.setState({ availableUnitType: availableUnitTypes })
    }

    getUnites(e) {
        e.preventDefault()
        this.props.selectedUnitType(e.target.value)
        setTimeout(() => {
            this.selectedUnit();
        }, 1000);
    }
    getLocation(e) {
        e.preventDefault()
        this.props.selectedLocations(e.target.value)
        setTimeout(() => {
            this.selectedLocationDetails();
        }, 1000);
    }
    render() {
        return (<div>
            <h1>Available unit/(s)</h1>
            <form >
                <div className="blocks">
                    <h2 >location</h2>
                    <select onChange={this.getLocation}>
                        <option value="select your your location">select your preferred location:</option>
                        {this.state.locationDetail.length > 0 ? this.state.locationDetail.map(location => {
                            return <option key={this.state.locationDetail.indexOf(location)} value={location.id}>{location.address2} {location.country}</option>
                        }) : null}
                    </select><br />
                    <h2 >unit-type</h2>

                    <select onChange={this.getUnites}>
                        <option value="Select unit type">Select Unit type:</option>
                        {this.state.availableUnitType.length > 0 ? this.state.availableUnitType.map(item => {
                            return <option key={this.state.availableUnitType.indexOf(item)} value={item.business_name}> {item.name} {item.length} {item.width} {item.height} </option>
                        }) : null}
                    </select>
                    <br />
                    <h2>Units</h2>
                    <select>
                        <option value="select your your unit">select your unit:</option>
                        {this.state.units.length > 0 ? this.state.units.map(unit => {
                            return <option key={this.state.units.indexOf(unit)} ref="selectedUnit"   value={`${unit.id}`}>{unit.name}</option>
                        }) : null}
                    </select><br />
                </div>
            </form>
            <button className="button" onClick={this.submitUnit} >submit</button>
        </div >
        )
    }

}

const mapStateToProps = (state) => {
    return {
        units: state.units.unitName,
        business: state.viewBusiness.selectedBusiness,
        unitType: state.selectUnitType.selectUnit,
        loc: state.selectUnitType.selectedLocation,
        selectedUni: state.selectUnitType.selectingUnit,
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
        },
        selectedUnit: (units) => {
            dispatch(actions.selectedUnit(units))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewUnits)