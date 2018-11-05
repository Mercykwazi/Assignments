import React from 'react';
import { Provider } from 'react-redux';
import * as actions from '../../actions/units';
import { connect } from 'react-redux';
import axios from 'axios';
import { log } from 'util';
import { Field, reduxForm } from 'redux-form';
import { Redirect } from 'react-router'


class Units extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: this.props.units,
            selectedUnitType: this.props.unitType,
            unitTypeDetail: []

        }
        this.unitName = this.unitName.bind(this);
        this.unitTypeDetails = this.unitTypeDetails.bind(this);
        this.unitsDetails = this.unitsDetails.bind(this);
        this.next = this.next.bind(this)
    }

    componentDidMount() {
        this.unitTypeDetails()
    }

    unitName(e) {
        var change = {};
        change[e.target.name] = e.target.value;
        this.props.availableUnits(e.target.value)
        this.setState(change);
    }
    async unitTypeDetails() {
        var results = await axios.get("http://localhost:3003/unitType/")
        var unitType = results.data.rows

        this.setState({ unitTypeDetail: unitType })

    }

    async unitsDetails(e) {
        console.log('what is this');

        e.preventDefault();
        var units = {
            name: this.props.units,
            id: this.state.unitTypeDetail,
            selectedUnit: this.props.unitType,
            selectedBusiness: this.props.business,
        }

        console.log('yes am called', units);
        // var results = await axios.post("http://localhost:3003/units/", units)

    }
    next(e) {
        e.preventDefault()
        console.log("findTheItem1", this.props.unitType);
        
        var findTheItem = this.props.unitType.split(" ")
        console.log("findTheItem", findTheItem);
        var unitType = this.state.unitTypeDetail
        var results = unitType.filter(item => {
            var returningObjects = item.name === findTheItem[0]
            console.log('what the hell11', returningObjects);

            return returningObjects
        }).map(item=>{
            console.log('wat is this',item);
            
        })

        console.log('what the hell', results);

    }

    // next() {
    //     this.setState({ redirect: true })
    // }

    render() {
        console.log('props', this.props.unitType, this.state.unitTypeDetail);

        return (<div>
            <div className="selectedUnit">
                <select onChange={(e) => this.props.selectedUnitType(e.target.value)}>
                    <option value="Select unit type">Select Unit type:</option>
                    {this.state.unitTypeDetail.length > 0 ? this.state.unitTypeDetail.map(item => {
                        return <option key={this.state.unitTypeDetail.indexOf(item)} value={item.business_name}> {item.name} {item.length} {item.width} {item.height} </option>
                    }) : null}
                </select>
            </div>
            <h1>units available</h1>
            <form >
                <div className="location">
                    <div >
                        <label htmlFor="name">Unit Name:</label><br />
                        <input name="name" type="text" onChange={this.unitName} value={this.state.name} />
                    </div>
                    <br />
                    <div><button onClick={this.unitsDetails}>add</button></div><br />
                    <button onClick={this.next}>next</button>

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
        unitType: state.units.selectedUnit,
        state: state
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        availableUnits: name => {
            dispatch(actions.unitName(name))
        },
        selectedUnitType: unit => {
            dispatch(actions.selectedUnit(unit))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Units)


