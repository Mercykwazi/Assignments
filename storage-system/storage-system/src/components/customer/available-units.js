import React from 'react';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import * as actions from '../../actions/selectUnits';
import axios from 'axios';
import { log } from 'util';
import { Field, reduxForm } from 'redux-form';
import { Redirect } from 'react-router'

class ViewUnits extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            unitTypeDetail: [],
            locationDetail: [],
            redirect: false,
            selectedUnitType: this.props.unitType,
            unitsDetail: [],
            selectedLocations:this.props.loc,
            units: []
        }
        this.unitsDetails = this.unitsDetails.bind(this);
        this.unitTypeDetails = this.unitTypeDetails.bind(this);
        this.getUnites = this.getUnites.bind(this)
        this.selectedUnit = this.selectedUnit.bind(this);
        this.locationDetails = this.locationDetails.bind(this);
        this.getLocation=this.getLocation.bind(this)

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
        var location = await axios.get("http://localhost:3003/location").then(results => {
            var locationD = results.data.rows;
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

    getUnites(e) {
        e.preventDefault()
        this.props.selectedUnitType(e.target.value)
        console.log('value',e.target.value)
        setTimeout(() => {
            this.selectedUnit();
        }, 1000);
    }
    getLocation(e) {
        e.preventDefault()
        this.props.selectedLocations(e.target.value)
        console.log('this',e.target.value)
        
        setTimeout(() => {
            this.locationDetails();
        }, 1000);
    }
    render() {
        console.log('st', this.props);

        console.log('locat', this.props.loc);

        return (<div>
            <h1>Available unit/(s)</h1>
            <form >
                <div className="blocks">
                    <select onChange={this.getUnites}>
                        <option value="Select unit type">Select Unit type:</option>
                        {this.state.unitTypeDetail.length > 0 ? this.state.unitTypeDetail.map(item => {
                            return <option key={this.state.unitTypeDetail.indexOf(item)} value={item.business_name}> {item.name} {item.length} {item.width} {item.height} </option>
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
                    <select onChange={this.getLocation}>
                        <h2>location</h2>
                        <option value="select your your location">select your preferred location:</option>
                        {this.state.locationDetail.length > 0 ? this.state.locationDetail.map(location => {
                            console.log('what is this unit', location)
                            return <option key={this.state.locationDetail.indexOf(location)} value={location}>{location.address1}{location.address2}{location.country}</option>
                        }) : null}
                    </select>
                </div>
            </form>
            {/* <button onClick={this.locationDetails}>loo</button> */}
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