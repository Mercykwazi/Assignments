import React from 'react';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import * as actions from '../../actions/selectUnits';
import available from '../../actions/availableUnitType';
import axios from 'axios';
import { log } from 'util';
import { Field, reduxForm } from 'redux-form';
import { Redirect } from 'react-router'
import { protectRoutes } from '../protectedRoutes'
import jwtDecode from 'jwt-decode';
import history from '../../history'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";



class ViewLocation extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            locationDetail: [],
            selectedLocations: this.props.loc,
        }

        this.getLocation = this.getLocation.bind(this)
        this.selectedLocationDetails = this.selectedLocationDetails.bind(this)
        this.viewReservedUnit = this.viewReservedUnit.bind(this)
        this.next = this.next.bind(this)
    }

    componentDidMount() {
        this.locationDetails()

    }

    async viewReservedUnit() {
        history.push('/rented-Unites')

    }

    async locationDetails() {
        try {
            const results = await axios.get("http://localhost:3003/location", protectRoutes())
            var locationD = results.data.rows;
            this.setState({ locationDetail: locationD })
        } catch (e) {
        }
    }

    async selectedLocationDetails() {
        var results = await axios.get("http://localhost:3003/selectLocation/" + this.props.loc)
        var availableUnitTypes = results.data
        this.props.availableUnitType(availableUnitTypes)
        this.setState({ availableUnitType: availableUnitTypes })
    }
    async next() {
        history.push("/select-unit-type")
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
            <div className="topnav">
                <button> < Link to={'/rented-Unites'}>ViewUnits</Link></button>
                <button>   <Link to={'/log-out'}>Log-out</Link></button>

            </div>
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
                    <button onClick={this.next}>Next</button>

                </div>
            </form>
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
        available: state.availableUnitType.unitTypeAvailable,
        unitAvailable: state.availableUnitType.unitAvailable,
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
        },
        availableUnitType: (types) => {
            dispatch(available.unitTypeAvailable(types))
        },
        availableUnit: (units) => {
            dispatch(available.unitAvailable(units))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewLocation)