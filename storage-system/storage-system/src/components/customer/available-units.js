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
            redirect: false,
            selectedUnitType: this.props.unitType,
            unitsDetail: [],
            units: []
        }
        this.unitsDetails = this.unitsDetails.bind(this);
        this.unitTypeDetails = this.unitTypeDetails.bind(this);
        this.getUnites = this.getUnites.bind(this)
        this.selectedUnit = this.selectedUnit.bind(this)
    }

    componentDidMount() {
        this.unitTypeDetails()
        this.unitsDetails()
    }

    async unitTypeDetails() {
        var business = await axios.get("http://localhost:3003/unitType/")
        var unitsD = business.data.rows;
        this.setState({ unitTypeDetail: unitsD })
    }

    async unitsDetails() {
        var details = await axios.get("http://localhost:3003/units/")
        var unitDetail = details.data.rows;
        this.setState({ unitsDetail: unitDetail })
    }

    async selectedUnit() {
        var details = await axios.get("http://localhost:3003/selectUnit/" + this.props.unitType)
        var availableUnits = details.data
        console.log('av', availableUnits);

        this.setState({ units: availableUnits })
    }

    getUnites(e) {
        e.preventDefault()
        this.props.selectedUnitType(e.target.value)
        setTimeout(() => {
            this.selectedUnit();
        }, 1000);
    }
    render() {
        console.log('st', this.state.units);

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

export default connect(mapStateToProps, mapDispatchToProps)(ViewUnits)